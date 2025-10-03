import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component', () => {
  it('renders contact section', () => {
    render(<Contact />);

    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('displays email contact', () => {
    render(<Contact />);

    expect(screen.getByText('tianyuan.liu@csic.es')).toBeInTheDocument();
  });

  it('displays phone number', () => {
    render(<Contact />);

    expect(screen.getByText('+34 601569170')).toBeInTheDocument();
  });

  it('has GitHub profile link', () => {
    render(<Contact />);

    expect(screen.getByText('View GitHub Profile')).toBeInTheDocument();
  });

  it('has section id for navigation', () => {
    const { container } = render(<Contact />);
    const section = container.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });
});
