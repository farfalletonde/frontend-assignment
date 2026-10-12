import { phoneLayers } from '../content/phoneLayers';
import { texts, type FeatureId } from '../content/texts';
import { FeatureText } from './FeatureText';
import { PhoneMockup } from './PhoneMockup';

type FeatureSlideProps = {
  activeId: FeatureId;
};

export const FeatureSlide = ({ activeId }: FeatureSlideProps) => (
  <div
    className="mx-auto flex min-h-0 w-full max-w-page
  flex-col items-center px-2 pt-14 lg:h-153 lg:flex-row-reverse
  lg:justify-between lg:gap-12 lg:pt-0 lg:pr-32 lg:pl-25"
  >
    <div className="grid w-full max-w-column px-2 lg:mt-53 lg:self-start lg:px-0">
      {texts.features.map((feature) => (
        <FeatureText
          key={feature.id}
          feature={feature}
          isActive={feature.id === activeId}
        />
      ))}
    </div>

    <PhoneMockup layers={phoneLayers[activeId]} />
  </div>
);
