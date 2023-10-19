import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('region', { name: 'Grid size' })).toBeTruthy();
    expect(getByRole('region', { name: 'Grid' })).toBeTruthy();
    expect(getByRole('region', { name: 'Grid information' })).toBeTruthy();
  });
});
