import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import MainContent from './MainContent';
import userEvent from '@testing-library/user-event';

// My tests!
// Add yet another comment

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    // broken test
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByTestId('help-areaa')).toBeInTheDocument();
  });
});
