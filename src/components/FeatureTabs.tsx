import { useRef, type KeyboardEvent, type UIEvent } from 'react';

import { texts, type FeatureId } from '../content/texts';
import { FeatureTab } from './FeatureTab';

const arrowSteps: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1 };

type FeatureTabsProps = {
  activeId: FeatureId;
  onSelect: (id: FeatureId) => void;
};

export const FeatureTabs = ({ activeId, onSelect }: FeatureTabsProps) => {
  const scrollEndTimer = useRef<number>();

  const selectCenteredTab = (strip: HTMLElement) => {
    const center = strip.scrollLeft + strip.clientWidth / 2;
    const tabs = [...strip.children] as HTMLElement[];
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
      150,
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = arrowSteps[event.key];
    if (!step) return;

    const tabs = [...event.currentTarget.children] as HTMLButtonElement[];
    const current = texts.features.findIndex(({ id }) => id === activeId);
    const next = tabs[(current + step + tabs.length) % tabs.length];

    event.preventDefault();
    next.focus();
    next.click();
  };

  return (
    <div className="bg-white">
      <div
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        className="relative mx-auto flex max-w-page snap-x snap-mandatory overflow-x-auto scrollbar-none lg:snap-none"
      >
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
  );
};
