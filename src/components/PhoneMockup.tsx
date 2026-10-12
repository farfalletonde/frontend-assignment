import { motion } from 'framer-motion';

import type { Entrance, PhoneLayer } from '../content/phoneLayers';

const layerClassName =
  'absolute inset-0 size-full object-contain object-bottom';

const cssEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const entranceStart: Record<
  Entrance,
  { scale?: number; x?: string; y?: string }
> = {
  pop: { scale: 0.3 },
  rise: { y: '30%' },
  slideLeft: { x: '10%' },
  slideRight: { x: '-10%' },
};

type PhoneMockupProps = {
  layers: PhoneLayer[];
};

export const PhoneMockup = ({ layers }: PhoneMockupProps) => {
  const [phone, ...overlays] = layers;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.27 }}
      className="relative mt-5 aspect-phone min-h-24 w-full max-w-column overflow-hidden lg:mt-32"
    >
      <motion.img
        src={phone.src}
        alt=""
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: cssEase }}
        className={layerClassName}
      />

      {overlays.map((layer, index) => (
        <motion.img
          key={index}
          src={layer.src}
          alt=""
          initial={{ opacity: 0, ...entranceStart[layer.entrance ?? 'rise'] }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 1 + index * 0.15,
            ease: 'easeOut',
          }}
          className={`${layerClassName} ${layer.className ?? ''}`}
        />
      ))}
    </motion.div>
  );
};
