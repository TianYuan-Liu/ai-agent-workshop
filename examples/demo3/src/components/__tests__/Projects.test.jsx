import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects Component', () => {
  it('renders projects section', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { level: 2, name: 'Major Projects' })).toBeInTheDocument();
  });

  it('displays SQANTI3 project', () => {
    render(<Projects />);

    expect(screen.getByText('SQANTI3')).toBeInTheDocument();
    expect(screen.getByText(/quality control and curation pipeline/i)).toBeInTheDocument();
  });

  it('displays PaintOmics 4 project', () => {
    render(<Projects />);

    expect(screen.getByText('PaintOmics 4')).toBeInTheDocument();
  });

  it('shows technology tags', () => {
    render(<Projects />);

    expect(screen.getAllByText('Python')).toHaveLength(2);
    expect(screen.getAllByText('JavaScript').length).toBeGreaterThanOrEqual(1);
  });

  it('has section id for navigation', () => {
    const { container } = render(<Projects />);
    const section = container.querySelector('#projects');
    expect(section).toBeInTheDocument();
  });
});
