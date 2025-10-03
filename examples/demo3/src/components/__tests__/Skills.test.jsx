import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills Component', () => {
  it('renders skills section', () => {
    render(<Skills />);

    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
  });

  it('displays skill categories', () => {
    render(<Skills />);

    expect(screen.getByText('Programming Languages')).toBeInTheDocument();
    expect(screen.getByText('Technologies & Tools')).toBeInTheDocument();
    expect(screen.getByText('Data Analysis & Methods')).toBeInTheDocument();
    expect(screen.getByText('High-Performance Computing')).toBeInTheDocument();
  });

  it('displays programming skills', () => {
    render(<Skills />);

    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('has section id for navigation', () => {
    const { container } = render(<Skills />);
    const section = container.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });
});
