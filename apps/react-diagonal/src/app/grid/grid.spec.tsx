import { render } from '@testing-library/react';

import Grid from './grid';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid matrix={[[1]]} />);
    expect(baseElement).toBeTruthy();
  });
});
