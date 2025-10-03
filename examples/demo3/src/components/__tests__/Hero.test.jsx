import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders personal information correctly', () => {
    render(<Hero />);

    expect(screen.getByText('Tianyuan Liu')).toBeInTheDocument();
    expect(screen.getByText('Computational Genomics Researcher')).toBeInTheDocument();
    expect(screen.getByText('Paterna, Valencia – Spain')).toBeInTheDocument();
  });

  it('renders contact links with correct href', () => {
    render(<Hero />);

    const emailLink = screen.getByText('tianyuan.liu@csic.es');
    expect(emailLink).toHaveAttribute('href', 'mailto:tianyuan.liu@csic.es');

    const githubLink = screen.getByText('tianyuan-liu');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/tianyuan-liu');
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);

    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText('View Publications')).toBeInTheDocument();
  });
});
