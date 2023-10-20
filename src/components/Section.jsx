export const Section = ({ children, className = '' }) => {
  return (
    <section className={`bg-bg-2 ${className} w-full overflow-hidden`}>
      <div className="container mx-auto h-full max-w-6xl">{children}</div>
    </section>
  );
};