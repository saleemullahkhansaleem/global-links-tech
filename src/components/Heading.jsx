export default function Heading({ children, className }) {
  return (
    <span className={`bg-clip-text text-primary ${className}`}>{children}</span>
  );
}
