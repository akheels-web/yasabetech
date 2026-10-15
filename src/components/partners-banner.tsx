import Image from "next/image";

const technologies = [
  { name: "Microsoft", file: "microsoft", label: "Microsoft" },
  { name: "Cisco", file: "cisco" },
  { name: "Intel", file: "intel" },
  { name: "AMD", file: "amd" },
  { name: "NVIDIA", file: "nvidia" },
  { name: "Dell", file: "dell" },
  { name: "Fortinet", file: "fortinet", label: "Fortinet" },
  { name: "Lenovo", file: "lenovo" },
  { name: "Veeam", file: "veeam" },
  { name: "NetApp", file: "netapp", label: "NetApp" },
  { name: "Nutanix", file: "nutanix", label: "Nutanix" },
  { name: "VMware", file: "vmware" },
  { name: "HP", file: "hp" },
  { name: "Palo Alto Networks", file: "paloaltonetworks", label: "Palo Alto Networks" },
  { name: "Juniper Networks", file: "junipernetworks" },
  { name: "Red Hat", file: "redhat", label: "Red Hat" },
  { name: "Ubiquiti", file: "ubiquiti", label: "Ubiquiti" },
  { name: "TP-Link", file: "tplink", label: "TP-Link" },
  { name: "Supermicro", file: "supermicro", label: "Supermicro" },
  { name: "QNAP", file: "qnap" },
  { name: "Seagate", file: "seagate", label: "Seagate" },
  { name: "Schneider Electric", file: "schneiderelectric", label: "Schneider Electric", wide: true },
  { name: "Citrix", file: "citrix", label: "Citrix" },
  { name: "Poly", file: "poly", label: "Poly" },
  { name: "Zoom", file: "zoom", label: "Zoom" },
];

export function PartnersBanner() {
  return (
    <section className="technology-strip" id="technology-ecosystem" aria-label="Technology ecosystem">
      <div className="site-container technology-strip-layout">
        <div className="technology-strip-intro">
          <p>Built around the technologies<br />your business relies on.</p>
        </div>
        <div className="technology-marquee">
          <div className="technology-marquee-track">
            {[0, 1].map((copy) => (
              <ul className="technology-logo-list" key={copy} aria-label={copy === 0 ? "Technology brands" : undefined} aria-hidden={copy === 1 ? true : undefined}>
                {technologies.map((brand) => (
                  <li className={[brand.label ? "technology-logo-with-label" : "", brand.wide ? "technology-logo-wide" : ""].filter(Boolean).join(" ")} key={brand.file}>
                    <Image src={`/brands/${brand.file}.svg`} alt={brand.label ? "" : brand.name} width={130} height={44} loading="eager" />
                    {brand.label && <span>{brand.label}</span>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
