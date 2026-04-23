function Section({ title, children }) {
  return (
    <section className="section-card">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default Section;
