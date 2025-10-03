import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Tianyuan Liu/i })).toBeInTheDocument();
  });

  it('renders all major sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Publications' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Major Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Technical Skills' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Get in Touch' })).toBeInTheDocument();
  });

  it('renders header and footer', () => {
    render(<App />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Tianyuan Liu. All rights reserved.`)).toBeInTheDocument();
  });
});
