import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Education from '../Education';

describe('Education Component', () => {
  it('renders education section with title', () => {
    render(<Education />);

    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('displays PhD information', () => {
    render(<Education />);

    expect(screen.getByText('PhD Student & Early Stage Researcher')).toBeInTheDocument();
    expect(screen.getByText('Institute for Integrative Systems Biology')).toBeInTheDocument();
  });

  it('displays undergraduate degree', () => {
    render(<Education />);

    expect(screen.getByText('Bachelor of Engineering in Bioengineering')).toBeInTheDocument();
    expect(screen.getByText('Huazhong Agricultural University (HZAU)')).toBeInTheDocument();
  });

  it('has section id for navigation', () => {
    const { container } = render(<Education />);
    const section = container.querySelector('#education');
    expect(section).toBeInTheDocument();
  });
});
