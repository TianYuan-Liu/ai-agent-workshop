import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders the header with navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Tianyuan Liu')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('Publications')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    render(<Header />);

    const aboutLink = screen.getAllByText('About')[0];
    expect(aboutLink).toHaveAttribute('href', '#about');
  });
});
