import { texts, type FeatureId } from '../content/texts';
import { FeatureTab } from './FeatureTab';

type FeatureTabsProps = {
  activeId: FeatureId;
  onSelect: (id: FeatureId) => void;
};

export const FeatureTabs = ({ activeId, onSelect }: FeatureTabsProps) => (
  <div className="bg-white">
    <div className="mx-auto flex max-w-page snap-x snap-mandatory overflow-x-auto scrollbar-none">
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
