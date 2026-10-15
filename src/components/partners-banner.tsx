const technologies = [
  "CISCO",
  "NVIDIA",
  "Dell Technologies",
  "HPE Aruba",
  "FORTINET",
  "Microsoft",
];
export function PartnersBanner() {
  return (
    <section className="technology-strip" aria-label="Technology ecosystem">
      <div className="site-container">
        <p>
          Built around the technologies
          <br className="hidden lg:block" /> your business relies on.
        </p>
        <ul>
          {technologies.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
