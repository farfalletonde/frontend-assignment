import { useEffect, useRef, type UIEvent } from 'react';

import { texts, type FeatureId } from '../content/texts';
import { FeatureTab } from './FeatureTab';

const arrowSteps: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1 };

type FeatureTabsProps = {
  activeId: FeatureId;
  onSelect: (id: FeatureId) => void;
};

export const FeatureTabs = ({ activeId, onSelect }: FeatureTabsProps) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const scrollEndTimer = useRef<number>();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const step = arrowSteps[event.key];
      if (!step || !stripRef.current) return;

      const tabs = [...stripRef.current.querySelectorAll('button')];
      const current = texts.features.findIndex(({ id }) => id === activeId);
      const next = tabs[(current + step + tabs.length) % tabs.length];

      event.preventDefault();
      next.focus();
      next.click();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeId]);

  const selectCenteredTab = (strip: HTMLElement) => {
    const center = strip.scrollLeft + strip.clientWidth / 2;
    const tabs = [...strip.querySelectorAll('button')];
    const distances = tabs.map((tab) =>
      Math.abs(tab.offsetLeft + tab.offsetWidth / 2 - center),
    );
    const closest = distances.indexOf(Math.min(...distances));

    onSelect(texts.features[closest].id);
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const strip = event.currentTarget;
    const isPager = getComputedStyle(strip).scrollSnapType !== 'none';
    if (!isPager) return;

    window.clearTimeout(scrollEndTimer.current);
    scrollEndTimer.current = window.setTimeout(
      () => selectCenteredTab(strip),
      100,
    );
  };

  return (
    <div className="bg-white">
      <div
        ref={stripRef}
        onScroll={handleScroll}
        className="relative mx-auto max-w-page snap-x snap-mandatory overflow-x-auto scrollbar-none lg:snap-none"
      >
        <div className="flex lg:grid lg:w-max lg:min-w-full lg:auto-cols-fr lg:grid-flow-col">
          {texts.features.map((feature) => (
            <FeatureTab
              key={feature.id}
              feature={feature}
              isActive={feature.id === activeId}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
