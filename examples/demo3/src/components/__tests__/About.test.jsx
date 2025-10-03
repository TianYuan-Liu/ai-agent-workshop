import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component', () => {
  it('renders the About section', () => {
    render(<About />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Research Focus')).toBeInTheDocument();
  });

  it('displays research areas', () => {
    render(<About />);

    expect(screen.getByText('Quality control methods')).toBeInTheDocument();
    expect(screen.getByText('Isoform detection')).toBeInTheDocument();
    expect(screen.getByText('Epigenome profiling')).toBeInTheDocument();
  });

  it('has section id for navigation', () => {
    const { container } = render(<About />);
    const section = container.querySelector('#about');
    expect(section).toBeInTheDocument();
  });
});
