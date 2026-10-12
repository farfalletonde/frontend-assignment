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

export type PhoneLayer = {
  src: string;
  className?: string;
};

const backPage = {
  src: page,
  className: 'origin-top scale-85 -translate-y-1',
};

const middlePage = {
  src: page,
  className: 'origin-top scale-94 -translate-y-2',
};

const frontPage = { src: page };

export const phoneLayers: Record<FeatureId, PhoneLayer[]> = {
  documentScanner: [{ src: scannerPhone }],
  signAndStamp: [
    { src: signPhone },
    { src: signatureCard },
    { src: stampCard },
  ],
  batchScanning: [{ src: batchPhone }, backPage, middlePage, frontPage],
  advancedFilters: [{ src: filtersPhone }, { src: barLeft }, { src: barRight }],
  exportAndShare: [
    { src: exportPhone },
    { src: pdf },
    { src: jpg },
    { src: txt },
    { src: arrow },
  ],
};
