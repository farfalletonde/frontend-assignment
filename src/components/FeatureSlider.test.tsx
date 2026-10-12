import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';

import { FeatureSlider } from './FeatureSlider';

const visibleTitle = () => screen.getByRole('heading').textContent;

beforeAll(() => {
  Element.prototype.scrollIntoView = () => undefined;
});

afterEach(cleanup);

describe('FeatureSlider', () => {
  it('shows the first feature by default', () => {
    render(<FeatureSlider />);

    expect(visibleTitle()).toBe('Scan with Ease');
  });

  it('shows the clicked feature', async () => {
    render(<FeatureSlider />);

    await userEvent.click(
      screen.getByRole('button', { name: 'Batch Scanning' }),
    );

    expect(visibleTitle()).toBe('Multiple Page Scan');
  });

  it('keeps the slide when the active tab is clicked again', async () => {
    render(<FeatureSlider />);

    await userEvent.click(
      screen.getByRole('button', { name: 'Document Scanner' }),
    );

    expect(visibleTitle()).toBe('Scan with Ease');
  });

  it('moves between tabs with the arrow keys and wraps around', async () => {
    render(<FeatureSlider />);

    await userEvent.keyboard('{ArrowRight}');
    expect(visibleTitle()).toBe('One-Tap Focus');

    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    expect(visibleTitle()).toBe('All-Round Conversion');
  });
});
