export default function Section({ className, children }) {
  return (
    <section className={`lyt-section ${className}`}>
        {children}
    </section>
  );
}
