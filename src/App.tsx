import { LazyMotion, domAnimation } from 'framer-motion';

import { FeatureSlider } from './components/FeatureSlider';

export const App = () => (
  <main className="min-h-svh bg-white tracking-tight lg:flex lg:flex-col lg:justify-center lg:bg-page">
    <LazyMotion features={domAnimation}>
      <FeatureSlider />
    </LazyMotion>
  </main>
);
