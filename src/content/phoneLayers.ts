import barLeft from '../assets/advanced-filters/bar-left.webp';
import barRight from '../assets/advanced-filters/bar-right.webp';
import filtersPhone from '../assets/advanced-filters/phone.webp';
import page from '../assets/batch-scanning/page.webp';
import batchPhone from '../assets/batch-scanning/phone.webp';
import scannerPhone from '../assets/document-scanner/phone.webp';
import arrow from '../assets/export-and-share/arrow.svg';
import jpg from '../assets/export-and-share/jpg.webp';
import pdf from '../assets/export-and-share/pdf.webp';
import exportPhone from '../assets/export-and-share/phone.webp';
import txt from '../assets/export-and-share/txt.webp';
import signPhone from '../assets/sign-and-stamp/phone.webp';
import signatureCard from '../assets/sign-and-stamp/signature-card.webp';
import stampCard from '../assets/sign-and-stamp/stamp-card.webp';
import type { FeatureId } from './texts';

export type Entrance = 'pop' | 'rise' | 'slideLeft' | 'slideRight';

export type PhoneLayer = {
  src: string;
  entrance?: Entrance;
  className?: string;
};

const backPage: PhoneLayer = {
  src: page,
  entrance: 'rise',
  className: 'origin-top scale-85 -translate-y-1',
};

const middlePage: PhoneLayer = {
  src: page,
  entrance: 'rise',
  className: 'origin-top scale-94 -translate-y-2',
};

const frontPage: PhoneLayer = { src: page, entrance: 'rise' };

export const phoneLayers: Record<FeatureId, PhoneLayer[]> = {
  documentScanner: [{ src: scannerPhone }],
  signAndStamp: [
    { src: signPhone },
    { src: signatureCard, entrance: 'pop', className: 'origin-[20%_66%]' },
    { src: stampCard, entrance: 'pop', className: 'origin-[80%_48%]' },
  ],
  batchScanning: [{ src: batchPhone }, backPage, middlePage, frontPage],
  advancedFilters: [
    { src: filtersPhone },
    { src: barLeft, entrance: 'slideLeft' },
    { src: barRight, entrance: 'slideRight' },
  ],
  exportAndShare: [
    { src: exportPhone },
    { src: arrow, entrance: 'rise' },
    { src: pdf, entrance: 'rise' },
    { src: jpg, entrance: 'rise' },
    { src: txt, entrance: 'rise' },
  ],
};
