import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiter
const rateLimitMap = new Map();
const LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour window
const MAX_REQUESTS = 3; // Max 3 requests per window per IP

// Blocked keywords for spam prevention
const BLOCKED_WORDS = [
  'crypto', 'bitcoin', 'solana', 'ethereum', 'btc', 'eth', 'casino', 'slot', 
  'viagra', 'cialis', 'seo service', 'dating', 'sex', 'porn', 'gambling', 
  'lottery', 'forex', 'free money', 'poker', 'betting', 'earn money', 
  'work from home', 'pharmacy', 'pill', 'unsecured loan', 'cash prize'
];

function isSpam(text) {
  if (!text) return false;
  const lowerText = text.toLowerCase();
  return BLOCKED_WORDS.some(word => lowerText.includes(word));
}

export async function POST(request) {
  try {
    // 1. IP Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown-ip';
    const now = Date.now();
    
    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }
    
    const requestTimes = rateLimitMap.get(ip).filter(time => now - time < LIMIT_WINDOW);
    if (requestTimes.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again after some time.' },
        { status: 429 }
      );
    }
    requestTimes.push(now);
    rateLimitMap.set(ip, requestTimes);

    // 2. Parse request body
    const body = await request.json();
    const { fullName, email, company, questions, skippedQuestions } = body;

    // Validate essential fields
    if (!fullName || !email || !company) {
      return NextResponse.json(
        { error: 'Name, Email, and Company are required fields.' },
        { status: 400 }
      );
    }

    // 3. Spam Check
    // Scan all text inputs for blocked words
    const fieldsToScan = [fullName, company, email];
    if (questions && typeof questions === 'object') {
      Object.values(questions).forEach(val => {
        if (typeof val === 'string') {
          fieldsToScan.push(val);
        }
      });
    }

    const hasSpam = fieldsToScan.some(field => isSpam(field));
    if (hasSpam) {
      return NextResponse.json(
        { error: 'Your submission contains prohibited keywords (spam detected). Please revise your message.' },
        { status: 400 }
      );
    }

    // 4. Initialize Resend
    // Read from env. If not configured, we'll log it and simulate success in dev, or try to send if key is present
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('WARNING: RESEND_API_KEY is not defined. Simulating email send.');
      return NextResponse.json({
        success: true,
        message: 'Application received (Simulation Mode: Resend API Key is missing).'
      });
    }

    const resend = new Resend(apiKey);

    // 5. Construct Email Content
    const submissionDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    
    let htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111; line-height: 1.6;">
        <h2 style="color: #ff5d2a; border-bottom: 2px solid #ff5d2a; padding-bottom: 8px;">New AI CEO Circle Application</h2>
        <p>A new application has been submitted from the landing page.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 140px;">Full Name:</td>
            <td style="padding: 6px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Email:</td>
            <td style="padding: 6px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Company:</td>
            <td style="padding: 6px 0;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Submitted At:</td>
            <td style="padding: 6px 0;">${submissionDate} (Jakarta Time)</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">IP Address:</td>
            <td style="padding: 6px 0;">${ip}</td>
          </tr>
        </table>
        
        <h3 style="margin-top: 25px; border-bottom: 1px solid #ccc; padding-bottom: 5px; color: #333;">Detailed Questionnaire Status</h3>
    `;

    if (skippedQuestions) {
      htmlContent += `<p style="color: #666; font-style: italic;">Applicant chose to SKIP the detailed questionnaire.</p>`;
    } else if (questions) {
      htmlContent += `
        <ol style="padding-left: 20px;">
          <li style="margin-bottom: 12px;">
            <strong>What's your current role and company?</strong><br/>
            <span style="color: #333;">${questions.q1 || 'N/A'}</span>
          </li>
          <li style="margin-bottom: 12px;">
            <strong>How long have you been in your current leadership role, and what's your company's approximate annual revenue?</strong><br/>
            <span style="color: #333;">${questions.q2 || 'N/A'}</span>
          </li>
          <li style="margin-bottom: 12px;">
            <strong>What's the biggest operational bottleneck in your business right now that you wish AI could solve?</strong><br/>
            <span style="color: #333;">${questions.q3 || 'N/A'}</span>
          </li>
          <li style="margin-bottom: 12px;">
            <strong>Have you or your team attempted any AI initiatives before (tools, workshops, pilots)? What happened?</strong><br/>
            <span style="color: #333;">${questions.q4 || 'N/A'}</span>
          </li>
          <li style="margin-bottom: 12px;">
            <strong>Are you able to commit to a 2-day intensive session in person, as part of this program?</strong><br/>
            <span style="color: #333;">${questions.q5 || 'N/A'}</span>
          </li>
          <li style="margin-bottom: 12px;">
            <strong>Do you have the authority to implement AI systems and decisions inside your company without needing sign-off from someone else?</strong><br/>
            <span style="color: #333;">${questions.q6 || 'N/A'}</span>
          </li>
          <li style="margin-bottom: 12px;">
            <strong>Why now? What's driving you to prioritize this in the next 6 months rather than later?</strong><br/>
            <span style="color: #333;">${questions.q7 || 'N/A'}</span>
          </li>
        </ol>
      `;
    } else {
      htmlContent += `<p style="color: #666; font-style: italic;">No detailed questionnaire data provided.</p>`;
    }

    htmlContent += `
        <div style="margin-top: 30px; padding: 10px; background-color: #f7f7f7; font-size: 11px; color: #888; border-radius: 4px;">
          This is an automated message sent from the AI CEO Circle landing page.
        </div>
      </div>
    `;

    // 6. Send Email
    // If domain is not verified on Resend, Resend restricts sending to the verified email only.
    // So we send FROM onboarding@resend.dev (or similar if using sandbox) and TO isaac.imcapital@gmail.com.
    const { data, error } = await resend.emails.send({
      from: 'AI CEO Circle <onboarding@resend.dev>',
      to: 'isaac.imcapital@gmail.com',
      subject: `[AI CEO Circle] New Application - ${fullName} (${company})`,
      html: htmlContent,
      replyTo: email
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact support.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully.',
      resendId: data?.id
    });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
