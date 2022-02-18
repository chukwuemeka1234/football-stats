import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from '../../components/heroSection';

describe('HeroSection', () => {
  it('should render Ligue 1 text', () => {
    render(<HeroSection />);
    const h1Element = screen.getByRole('heading', {
      name: 'Ligue 1 Teams',
    });
    expect(h1Element).toBeInTheDocument();
  });
});
