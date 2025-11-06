'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    title: "Celestial Craftsmanship",
    description:
      "Hand-tailored digital artefacts sculpted with luminous gradients, shimmering glass, and immaculate balance.",
    icon: "💎"
  },
  {
    title: "Ethereal Fluidity",
    description:
      "Hyper-smooth micro-interactions that respond with velvet precision across every gesture and device.",
    icon: "🌌"
  },
  {
    title: "Immersive Resonance",
    description:
      "Harmonic soundscapes and synesthetic motion weaving an unforgettable aura of prestige around your brand.",
    icon: "🎼"
  }
];

const experiences = [
  {
    label: "Ultra Private Lounges",
    summary: "Invite-only experiences with concierge-level personalization for elevated clientele.",
    image: "/gallery/lounge.svg"
  },
  {
    label: "Mayfair Atelier",
    summary: "Limited-edition couture meets spatial computing for a transcendent retail theatre.",
    image: "/gallery/atelier.svg"
  },
  {
    label: "Aurora Summit",
    summary: "Immersive summits infused with cinematic atmospheres and orchestrated sensory cues.",
    image: "/gallery/summit.svg"
  }
];

const testimonials = [
  {
    name: "Valeria Noire",
    role: "Creative Director, Maison Noire",
    quote:
      "“K conjured an ethereal universe for our clientele. Every motion whispers exclusivity — it is digital haute couture.”"
  },
  {
    name: "Lysander Cruz",
    role: "Founder, The Sovereign Circle",
    quote:
      "“Their mastery of sensation and silence is unrivaled. The experience feels alive, powerful, and profoundly rare.”"
  }
];

const marquees = [
  "Bespoke Interactions",
  "Spectral Lighting",
  "Ultra Responsive",
  "Iconic Typography",
  "Sensorial Depth"
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  return (
    <main className="relative overflow-hidden">
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24"
      >
        <div className="absolute inset-0 bg-luxury-gradient opacity-80" />
        <div className="luxury-grid" />
        <div className="absolute inset-0 luxury-mask bg-luxury-radial opacity-90" />
        <div className="absolute top-[-20%] left-[-10%] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-aurora-500/60 via-transparent to-gilded-500/50 blur-[120px] animate-pulseGlow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-gilded-600/50 via-transparent to-aurora-700/50 blur-[140px] animate-pulseGlow delay-2000" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full glassy px-5 py-2 text-sm uppercase tracking-[0.6em] text-platinum/80 gradient-border"
              >
                ✨ God Level Super Premium
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl lg:text-7xl xl:text-8xl font-display leading-[0.95] text-platinum drop-shadow-[0_15px_45px_rgba(93,173,226,0.25)]"
              >
                K —
                <br />
                An Ultra-Luxurious Digital Realm for the Rare Few
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 1, ease: "easeOut" }}
                className="max-w-2xl text-lg md:text-xl text-platinum/70 leading-relaxed"
              >
                We orchestrate transcendent experiences where light, motion, and emotion converge. Expect divine precision, interstellar depth, and couture-level polish across every pixel and device.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4"
              >
                <button className="group relative overflow-hidden rounded-full px-8 py-3 font-semibold uppercase tracking-widest text-sm text-black">
                  <span className="absolute inset-0 bg-gradient-to-r from-gilded-500 via-aurora-500 to-[#a142f4] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <span className="relative flex items-center gap-3">
                    Ignite the Encounter <span className="text-xl">🚀</span>
                  </span>
                </button>
                <button className="group relative overflow-hidden rounded-full border border-white/10 px-8 py-3 font-semibold uppercase tracking-widest text-sm text-platinum/90 backdrop-blur">
                  <span className="absolute inset-0 luxury-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="relative flex items-center gap-3">
                    Explore The Aura <span className="text-xl">🌠</span>
                  </span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[360px] gradient-border rounded-[28px] glassy p-10 space-y-8"
            >
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.4em] text-platinum/70">Signature Curations</p>
                <p className="text-3xl font-display leading-tight text-platinum">
                  A triad of celestial experiences, architected for iconic presences.
                </p>
              </div>
              <div className="grid gap-6">
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="rounded-3xl border border-white/10 px-6 py-5 backdrop-blur-md bg-white/3"
                  >
                    <div className="text-3xl">{feature.icon}</div>
                    <p className="mt-4 text-xl font-semibold text-platinum">{feature.title}</p>
                    <p className="mt-2 text-sm text-platinum/70 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 opacity-[0.45] mix-blend-screen pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
            className="absolute top-[-5%] left-[10%] w-[220px] h-[220px] rounded-full bg-gradient-to-br from-aurora-500/35 to-gilded-500/40 blur-[80px]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
            className="absolute bottom-[-10%] right-[15%] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#a142f4]/30 to-aurora-600/30 blur-[120px]"
          />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-sm uppercase tracking-[0.5em] text-platinum/70">The Experience</span>
              <h2 className="text-4xl md:text-5xl font-display text-platinum">
                Sculpting Immersive Universes that Radiate Power
              </h2>
              <p className="text-lg text-platinum/70 leading-relaxed">
                K weaves sensorial storytelling with avant-garde craft. Expect fluid layers, digitized architecture, and
                spellbinding motion orchestrations engineered for awe.
              </p>
            </div>
            <div className="relative flex gap-4 glassy rounded-3xl px-6 py-6 gradient-border">
              <div className="flex flex-col text-right">
                <span className="text-4xl font-display text-gilded-500">99.97%</span>
                <span className="text-xs uppercase tracking-[0.36em] text-platinum/60">Retention</span>
              </div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-platinum/20 to-transparent" />
              <div className="flex flex-col">
                <span className="text-4xl font-display text-aurora-500">0.3s</span>
                <span className="text-xs uppercase tracking-[0.36em] text-platinum/60">First Interaction</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.label}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Image
                  src={experience.image}
                  alt={experience.label}
                  width={620}
                  height={880}
                  className="h-[380px] w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 glassy backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.45em] text-platinum/70">{experience.label}</p>
                  <p className="mt-4 text-lg text-platinum/80">{experience.summary}</p>
                  <div className="mt-6 inline-flex items-center gap-3 text-platinum/80">
                    <span className="text-2xl">↗</span>
                    <span className="text-xs uppercase tracking-[0.45em]">
                      Enter The Realm
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-28 px-6 md:px-16 lg:px-24 bg-[#04050a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="luxury-grid opacity-40" />
        </div>
        <div className="relative mx-auto max-w-6xl space-y-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 space-y-6"
            >
              <span className="text-sm uppercase tracking-[0.5em] text-platinum/70">Testimonials</span>
              <h3 className="text-4xl md:text-5xl font-display text-platinum leading-tight">
                Revered whispers from our ultra-private constellation of clientele.
              </h3>
              <p className="text-lg text-platinum/70 leading-relaxed">
                Each narrative is a testament to the meticulous alchemy of light, sound, and movement that defines K.
              </p>

              <div className="relative">
                <div className="absolute -inset-12 rounded-full blur-3xl bg-gradient-to-r from-aurora-500/20 via-[#a142f4]/20 to-gilded-500/20" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative glassy gradient-border rounded-[28px] p-8 space-y-6"
                >
                  <p className="text-lg text-platinum/80">
                    “Every facet glistens with choreographed energy. They captured our brand&apos;s soul and forged it into a
                    living, breathing masterpiece.”
                  </p>
                  <div>
                    <p className="text-platinum font-semibold">The Luminous Guild</p>
                    <p className="text-sm text-platinum/70 tracking-[0.3em] uppercase">Confidential Partner</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full space-y-6"
            >
              {testimonials.map((testimonial) => (
                <motion.blockquote
                  key={testimonial.name}
                  whileHover={{ y: -10 }}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 px-8 py-10 backdrop-blur-xl bg-white/4"
                >
                  <span className="text-5xl text-gilded-500/80">“</span>
                  <p className="text-lg text-platinum/80 leading-relaxed">{testimonial.quote}</p>
                  <footer className="mt-8">
                    <p className="text-platinum font-semibold uppercase tracking-[0.3em]">{testimonial.name}</p>
                    <p className="text-sm text-platinum/60">{testimonial.role}</p>
                  </footer>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden rounded-full border border-white/10 glassy py-8">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex min-w-[200%] gap-14 text-sm uppercase tracking-[1.2em] text-platinum/50"
            >
              {[...marquees, ...marquees].map((item, idx) => (
                <span key={`${item}-${idx}`} className="flex items-center gap-4">
                  <span className="text-lg">✧</span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent opacity-40" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <span className="text-sm uppercase tracking-[0.5em] text-platinum/70">Signature Methodology</span>
              <h3 className="text-4xl md:text-5xl font-display text-platinum leading-tight">
                We choreograph every frame with obsessive devotion.
              </h3>
              <p className="text-lg text-platinum/70">
                From sonic mood-boards to micro-interaction orchestration, our craft manifests in meticulously curated
                rituals that champion velocity, clarity, and seduction.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    heading: "01. Resonance Mapping",
                    body: "Decode your aura, clients, and sensorial triggers. Design the emotional crescendo."
                  },
                  {
                    heading: "02. Spectral Fabrication",
                    body: "Weave luminous palettes, rare typography, and ethereal materials into digital couture."
                  },
                  {
                    heading: "03. Motion Harmonics",
                    body: "Conduct cinematic choreographies with featherlight physics across every device."
                  },
                  {
                    heading: "04. Performance Alchemy",
                    body: "Ship god-tier fast experiences optimized for precision, accessibility, and longevity."
                  }
                ].map((item) => (
                  <motion.div
                    key={item.heading}
                    whileHover={{ scale: 1.01, y: -4 }}
                    className="rounded-3xl border border-white/10 p-6 glassy"
                  >
                    <h4 className="font-display text-xl text-platinum">{item.heading}</h4>
                    <p className="mt-3 text-sm text-platinum/70 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-aurora-500/25 via-transparent to-gilded-500/25 blur-3xl" />
              <div className="relative rounded-[40px] overflow-hidden gradient-border glassy">
                <Image
                  src="/gallery/chamber.svg"
                  alt="Celestial Chamber"
                  width={960}
                  height={1240}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                className="absolute right-[-40px] top-[20%] glassy gradient-border rounded-3xl px-6 py-4 text-sm uppercase tracking-[0.4em] text-platinum/80"
              >
                ⚡ Ultra Smooth
              </motion.div>
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                className="absolute left-[-38px] bottom-[18%] glassy gradient-border rounded-3xl px-6 py-4 text-sm uppercase tracking-[0.4em] text-platinum/80"
              >
                🚀 Blazing Fast
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#030409]">
        <div className="relative mx-auto max-w-6xl text-center space-y-10">
          <span className="text-sm uppercase tracking-[0.6em] text-platinum/70">Summon K</span>
          <h3 className="text-4xl md:text-5xl font-display leading-tight text-platinum">
            Ready to unlock an omniscient, god-tier digital dominion?
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-platinum/70">
            Join the constellation of icons who command captivation. We tailor every molecule to radiate power,
            exclusivity, and clarity at light speed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative overflow-hidden rounded-full px-9 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black">
              <span className="absolute inset-0 bg-gradient-to-r from-gilded-500 via-aurora-500 to-[#a142f4] transition duration-700 group-hover:scale-110 group-hover:rotate-2" />
              <span className="relative flex items-center gap-3">
                Elevate With K <span className="text-xl">👑</span>
              </span>
            </button>
            <button className="group relative overflow-hidden rounded-full border border-white/10 px-9 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-platinum/80">
              <span className="absolute inset-0 luxury-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative flex items-center gap-3">
                Private Showcase <span className="text-xl">🌟</span>
              </span>
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-12 max-w-4xl rounded-[36px] border border-white/10 glassy p-12 gradient-border space-y-6"
          >
            <p className="text-2xl font-display text-platinum leading-tight">
              “K is the zenith of digital opulence. Their reverence for detail, performance, and aesthetic alchemy is a
              revelation. The experience transcends luxury — it is divine.”
            </p>
            <div className="text-sm uppercase tracking-[0.4em] text-platinum/60">
              The Ascendant Oracle <span className="mx-2 text-platinum/30">✷</span> Global Avant-Garde Council
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative px-6 md:px-16 lg:px-24 py-12 bg-black/60 border-t border-white/5">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-aurora-500 via-gilded-500 to-[#a142f4] text-black text-2xl font-display">
              K
            </div>
            <div>
              <p className="text-lg font-display text-platinum">K — The God Level Standard</p>
              <p className="text-xs uppercase tracking-[0.4em] text-platinum/50">Couture Digital Experiences</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm uppercase tracking-[0.3em] text-platinum/50">
            <a href="#">Experiences</a>
            <a href="#">Manifesto</a>
            <a href="#">Atelier</a>
            <a href="#">Private Access</a>
          </div>
          <p className="text-xs text-platinum/40 uppercase tracking-[0.3em]">© {new Date().getFullYear()} K Luxury Studio</p>
        </div>
      </footer>
    </main>
  );
}
