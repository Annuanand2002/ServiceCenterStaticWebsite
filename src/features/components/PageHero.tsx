import type { ReactNode } from 'react';

export default function PageHero({ eyebrow, title, accent, intro, number, children }: { eyebrow: string; title: string; accent: string; intro: string; number: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow eyebrow-light"><span /> {eyebrow}</p><h1>{title}<br /><em>{accent}</em></h1><p className="page-hero-intro">{intro}</p><div className="page-hero-actions"><a className="button button-lime" href="/contact">Let’s talk <span aria-hidden="true">↗</span></a>{children}</div></div><div className="page-hero-index"><span>{number}</span><i /> WETECH / HOME APPLIANCE CARE</div><span className="page-hero-glow" aria-hidden="true" /></section>;
}
