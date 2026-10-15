import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Yasabe Technologies home">
              <Image
                src="/logo.webp"
                alt="Yasabe Technologies"
                width={180}
                height={54}
                className="brand-image"
              />
            </Link>
            <p>
              Bringing enterprise networks, private AI and IT operations
              together.
            </p>
            <span>Connect. Secure. Empower.</span>
          </div>
          <div>
            <h2>Expertise</h2>
            <Link href="/solutions#networking">Enterprise networking</Link>
            <Link href="/solutions#ai">Private AI & compute</Link>
            <Link href="/solutions#managed-it">Managed IT & security</Link>
            <Link href="/solutions#calculator">Project planning</Link>
          </div>
          <div>
            <h2>Discover</h2>
            <Link href="/about">About Yasabe</Link>
            <Link href="/about#approach">How we work</Link>
            <Link href="/solutions">All solutions</Link>
            <Link href="/#contact">Start a conversation</Link>
          </div>
          <div className="footer-contact">
            <h2>Let’s connect</h2>
            <a href="mailto:sales@yasabetech.com">
              <Mail className="h-4 w-4" />
              sales@yasabetech.com
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="tel:+966118294400">
              <Phone className="h-4 w-4" />
              +966 11 829 4400
            </a>
            <p>Muscat, Oman</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Yasabe Technologies. All rights
            reserved.
          </span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
