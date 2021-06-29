import { render } from '@testing-library/react';

import DashSideBar from './dash-side-bar';

describe('DashSideBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashSideBar />);
    expect(baseElement).toBeTruthy();
  });
});
