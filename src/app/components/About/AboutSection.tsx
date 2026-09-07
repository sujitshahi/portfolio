"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial={shouldReduceMotion ? false : { opacity: 0, y: 80, scale: 0.96 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.2, type: 'spring', stiffness: 70 }}
        className="grid items-center gap-12 border-t border-[#1e1e30] px-4 py-20 sm:px-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-20 md:px-12 md:py-30"
      >
      <m.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#7fffb2]">
          Background
        </div>
        <h2 className="m-0 mb-6 font-serif text-[clamp(28px,3.5vw,44px)] font-light leading-[1.15] tracking-[-0.02em] text-[#e8e8f0]">
          I care about the{' '}
          <em className="italic text-[#7fffb2]">whole system</em>, not just the UI
          layer.
        </h2>
        <p className="m-0 text-[15px] leading-[1.8] text-[#6b6b80]">
          I recently completed my software development internship, where I contributed to practical
          projects and strengthened my frontend skills. The experience taught me how to turn ideas
          into clean, responsive interfaces that are easy to use and maintain. I also learned the
          importance of collaboration, clear communication, and thoughtful problem-solving when
          building software as part of a team.
        </p>
      </m.div>
      </m.section>
    </LazyMotion>
  )
}