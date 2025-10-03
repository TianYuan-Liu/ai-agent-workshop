import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animation}` : 'opacity-0 translate-y-8'
      }`}
      style={isVisible ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
}