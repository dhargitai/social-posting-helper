import React from 'react';
import { render } from '@testing-library/react';

import Tool from './tool';

describe('Tool', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tool />);
    expect(baseElement).toBeTruthy();
  });
});
