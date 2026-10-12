import { m } from 'framer-motion';

import { texts, type Feature } from '../content/texts';

type FeatureTextProps = {
  feature: Feature;
  isActive: boolean;
};

export const FeatureText = ({ feature, isActive }: FeatureTextProps) => (
  <m.div
    aria-hidden={!isActive}
    initial={false}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={isActive ? { duration: 0.2, delay: 0.2 } : { duration: 0.2 }}
    className={`col-start-1 row-start-1 flex flex-col items-center text-center lg:items-end lg:text-right ${
      isActive ? '' : 'pointer-events-none'
    }`}
  >
    <p className="text-base leading-tight font-extrabold tracking-widest text-brand uppercase">
      {feature.tab}
    </p>

    <h2 className="mt-4 text-title font-bold text-heading">{feature.title}</h2>

    <p className="mt-3 text-body-sm text-copy lg:mt-5 lg:text-body lg:tracking-wide">
      {feature.description}
    </p>

    <button
      type="button"
      className="mt-5 rounded-xs border border-black/8 px-4 py-2
      text-sm/6 text-heading outline-none transition-colors hover:bg-black/4
      lg:px-5 lg:py-3 lg:text-xl"
    >
      {texts.cta}
    </button>
  </m.div>
);
