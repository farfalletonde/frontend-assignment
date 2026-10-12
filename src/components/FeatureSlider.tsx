import { useEffect, useState } from 'react';

import { phoneLayers } from '../content/phoneLayers';
import { texts, type FeatureId } from '../content/texts';
import { FeatureSlide } from './FeatureSlide';
import { FeatureTabs } from './FeatureTabs';

export const FeatureSlider = () => {
  const [activeId, setActiveId] = useState<FeatureId>(texts.features[0].id);

  useEffect(() => {
    Object.values(phoneLayers)
      .flat()
      .forEach(({ src }) => {
        new Image().src = src;
      });
  }, []);

  return (
    <section className="flex max-h-svh flex-col bg-white lg:bg-surface">
      <FeatureSlide activeId={activeId} />

      <FeatureTabs activeId={activeId} onSelect={setActiveId} />
    </section>
  );
};
