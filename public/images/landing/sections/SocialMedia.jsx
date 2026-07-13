"use client";
import React from "react";
import { m } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import Reveal from "@/components/landing/ui/Reveal";
import Spotlight from "@/components/landing/ui/Spotlight";
import Tilt from "@/components/landing/ui/Tilt";
import { SOCIAL_MEDIA } from "@/components/landing/data";

const SocialMedia = () => {
  return (
    <section id="social" className="relative z-10 py-16 md:py-24 border-t border-t-[0.5px] border-cream-10">
      <Container>
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mt-7">
              <h2
                className="font-serif text-balance text-[10vw] leading-[0.92] text-cream sm:text-[8vw] md:text-[6.2vw] lg:text-[5.2vw]"
                style={{ letterSpacing: "-0.04em" }}
              >
                Inside the <span className="font-serif-italic text-gradient-lava" style={{ paddingBottom: "0.18em" }}>CEO Circle</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">
              {SOCIAL_MEDIA.description}
            </p>
            <div className="mt-5">
              <a
                href={SOCIAL_MEDIA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.25em] text-[#C9920A] hover:text-[#ff7a3d] transition-colors group/link"
              >
                <Instagram className="h-4 w-4 text-[#C9920A] group-hover/link:text-[#ff7a3d] transition-colors" />
                <span>Follow @aiceocircle</span>
                <span className="text-[12px] transform transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* 4-Column Grid of Instagram Posts */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOCIAL_MEDIA.items.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 0.08}>
              <Tilt className="h-full rounded-2xl" max={4} scale={1.015}>
                <Spotlight
                  className="h-full border border-hair border-white/[0.06] bg-[rgba(8,14,28,0.55)] backdrop-blur-md"
                  lift={0}
                  radius={380}
                  color="#ff7a3d"
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full aspect-[4/5] overflow-hidden rounded-2xl group/card"
                  >
                    {/* Post Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay (Always visible at bottom, expands on hover) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-[#060b18]/45 to-transparent transition-opacity duration-300 group-hover/card:opacity-0" />
                    
                    {/* Hover Overlay with Post Details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-[#070e1c]/95 to-[#070e1c]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C9920A] mb-2 flex items-center gap-1.5">
                        <Instagram className="h-3 w-3" /> Instagram Post
                      </span>
                      <h3 className="font-serif text-[20px] md:text-[22px] leading-tight text-cream mb-3">
                        {post.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-cream-soft line-clamp-4 mb-6">
                        {post.summary}
                      </p>
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-lava hover:text-lava-soft transition-colors mt-auto">
                        <span>Read Post</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    {/* Static Title/Badge (Hidden on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between group-hover/card:opacity-0 transition-opacity duration-300">
                      <span className="font-serif text-[16px] text-cream drop-shadow-md">
                        {post.title}
                      </span>
                      <div className="h-7 w-7 rounded-full bg-[rgba(8,14,28,0.7)] border border-white/10 flex items-center justify-center shrink-0">
                        <Instagram className="h-3.5 w-3.5 text-cream-soft" />
                      </div>
                    </div>
                  </a>
                </Spotlight>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialMedia;
