import type { PhoneLayer } from '../content/phoneLayers';

type PhoneMockupProps = {
  layers: PhoneLayer[];
};

export const PhoneMockup = ({ layers }: PhoneMockupProps) => (
  <div className="relative mt-5 aspect-phone min-h-24 w-full max-w-column lg:mt-32">
    {layers.map((layer, index) => (
      <img
        key={index}
        src={layer.src}
        alt=""
        className={`absolute inset-0 size-full object-contain object-bottom ${layer.className ?? ''}`}
      />
    ))}
  </div>
);
