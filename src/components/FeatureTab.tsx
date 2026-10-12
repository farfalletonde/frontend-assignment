import type { ComponentProps, ComponentType, MouseEvent } from 'react';

import type { Feature, FeatureId } from '../content/texts';
import { AdvancedFiltersIcon } from './icons/AdvancedFiltersIcon';
import { BatchScanningIcon } from './icons/BatchScanningIcon';
import { DocumentScannerIcon } from './icons/DocumentScannerIcon';
import { ExportAndShareIcon } from './icons/ExportAndShareIcon';
import { SignAndStampIcon } from './icons/SignAndStampIcon';

const tabIcons: Record<FeatureId, ComponentType<ComponentProps<'svg'>>> = {
  documentScanner: DocumentScannerIcon,
  signAndStamp: SignAndStampIcon,
  batchScanning: BatchScanningIcon,
  advancedFilters: AdvancedFiltersIcon,
  exportAndShare: ExportAndShareIcon,
};

type FeatureTabProps = {
  feature: Feature;
  isActive: boolean;
  onSelect: (id: FeatureId) => void;
};

export const FeatureTab = ({
  feature,
  isActive,
  onSelect,
}: FeatureTabProps) => {
  const TabIcon = tabIcons[feature.id];

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onSelect(feature.id);
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex h-31 w-4/5 max-w-75 shrink-0 snap-center
        items-center justify-center gap-4 border-b border-black/8 px-4
        transition-colors not-last:border-r lg:shrink lg:last:w-60 ${
          isActive
            ? 'border-b-brand bg-brand/3 text-copy'
            : 'text-black hover:bg-black/4'
        }`}
    >
      <span className="grid size-14 place-items-center rounded-full border border-black/8 bg-white">
        <TabIcon className={isActive ? 'text-brand' : 'text-icon'} />
      </span>

      <span className="text-xl font-medium whitespace-nowrap">
        {feature.tab}
      </span>
    </button>
  );
};
