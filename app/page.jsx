import LandingPage from '@/components/landing/LandingPage';
import { landingPageJsonLd } from '@/components/landing/seo';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingPageJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <LandingPage />
    </>
  );
}
