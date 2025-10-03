import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Publications from '../Publications';

describe('Publications Component', () => {
  it('renders publications section', () => {
    render(<Publications />);

    expect(screen.getByText('Publications')).toBeInTheDocument();
    expect(screen.getByText('Peer-Reviewed Articles')).toBeInTheDocument();
  });

  it('displays Nature Genetics publication', () => {
    render(<Publications />);

    expect(screen.getByText(/Profiling the epigenome using long-read sequencing/i)).toBeInTheDocument();
    expect(screen.getByText(/Nature Genetics/i)).toBeInTheDocument();
  });

  it('displays preprints section', () => {
    render(<Publications />);

    expect(screen.getByText('Preprints & Under Review')).toBeInTheDocument();
  });

  it('renders DOI links correctly', () => {
    render(<Publications />);

    const doiLinks = screen.getAllByText(/DOI:/i);
    expect(doiLinks.length).toBeGreaterThan(0);
  });

  it('has section id for navigation', () => {
    const { container } = render(<Publications />);
    const section = container.querySelector('#publications');
    expect(section).toBeInTheDocument();
  });
});
