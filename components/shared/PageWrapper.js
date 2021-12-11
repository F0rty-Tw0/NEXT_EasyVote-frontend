const SectionWrapper = ({ className = '', children, role = '', id = '' }) => {
  return (
    <section
      role={role}
      className={`container section section__height ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
