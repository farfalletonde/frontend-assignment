export type FeatureId =
  | 'documentScanner'
  | 'signAndStamp'
  | 'batchScanning'
  | 'advancedFilters'
  | 'exportAndShare';

export type Feature = {
  id: FeatureId;
  tab: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 'documentScanner',
    tab: 'Document Scanner',
    title: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  },
  {
    id: 'signAndStamp',
    tab: 'Sign & Stamp',
    title: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  },
  {
    id: 'batchScanning',
    tab: 'Batch Scanning',
    title: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  },
  {
    id: 'advancedFilters',
    tab: 'Advanced Filters',
    title: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  },
  {
    id: 'exportAndShare',
    tab: 'Export & Share',
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
  },
];

export const texts = {
  features,
  cta: 'Learn More',
};
