"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

interface ContactLink {
  label: string
  href: string
  value: string
}

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const links: ContactLink[] = [
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shahisujit9@gmail.com', value: 'shahisujit9@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/sujitshahi', value: 'github.com/sujitshahi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sujithshahi/', value: 'linkedin.com/in/sujithshahi' },
  ]

  return (
    <LazyMotion features={domAnimation}>
    <section id="contact" className="border-t border-[#1e1e30] bg-[#0a0a12] px-4 py-20 text-center sm:px-8 md:px-12 md:py-30">
      <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[#7fffb2]">
        Let&apos;s Build Something
      </div>
      <m.h2
        initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="m-0 mb-12 font-serif text-[clamp(36px,6vw,80px)] font-light leading-[1.05] tracking-[-0.02em] text-[#e8e8f0]"
      >
        Open to new
        <br />
        <em className="italic text-[#7fffb2]">opportunities</em>
      </m.h2>
      <div className="flex flex-wrap justify-center gap-6">
        {links.map(({ label, href, value }, index) => (
          <m.a
            key={label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 80, scale: 0.96 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 + 0.2, type: 'spring', stiffness: 70 }}
            href={href}
            className="flex w-full min-w-0 flex-col gap-1 border border-[#1e1e30] p-5 no-underline sm:w-auto sm:min-w-70 sm:px-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#7fffb2]">{label}</span>
            <span className="wrap-break-word text-[13px] text-[#6b6b80]">{value}</span>
          </m.a>
        ))}
      </div>
    </section>
    </LazyMotion>
  )
}
