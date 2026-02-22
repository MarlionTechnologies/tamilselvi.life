import Link from "next/link";

const exploreLinks = [
  { label: "Impact Stories", href: "/impact" },
  { label: "VR Therapy", href: "/work#vr-therapy" },
  { label: "The Vision", href: "/ecosystem" },
  { label: "Publications", href: "/work#publications" },
  { label: "Photo Gallery", href: "/gallery" },
];

const connectLinks = [
  { label: "Support This Work", href: "/connect/partner" },
  { label: "Become a Sponsor", href: "/connect/sponsor" },
  { label: "Collaborate", href: "/connect/collaborate" },
  { label: "Join the Team", href: "/connect/join" },
  { label: "Find Help for a Child", href: "/connect/support" },
];

export function Footer() {
  return (
    <footer className="footer-warm">
      {/* Coral signature line */}
      <div className="footer-accent-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1: Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="footer-monogram">DT</div>
              <div>
                <p className="font-display font-semibold text-lg leading-tight footer-text-bright">
                  Dr. D. Tamilselvi
                </p>
                <p className="text-sm leading-tight footer-text-mid">
                  Professor of IT, TCE Madurai
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mt-4 max-w-xs footer-text-soft">
              Building bridges between technology and therapy.
              Every child deserves a way in.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/in/tamilselvi-dhamotharan-7884323b/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-1.5 text-xs hover:text-[#F5F0EB] transition-colors"
                aria-label="LinkedIn profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="footer-heading">
              <span className="footer-heading-dash" />
              Explore
            </h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="footer-heading">
              <span className="footer-heading-dash" />
              Connect
            </h4>
            <ul className="space-y-2.5">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="footer-heading">
              <span className="footer-heading-dash" />
              Get in Touch
            </h4>
            <div className="space-y-3.5">
              <p className="text-sm">
                <a
                  href="mailto:dtamilselvi@tce.edu"
                  className="footer-link underline decoration-1 underline-offset-2"
                >
                  dtamilselvi@tce.edu
                </a>
              </p>
              <p className="text-sm leading-relaxed footer-text-mid">
                Thiagarajar College of Engineering
                <br />
                Madurai, Tamil Nadu, India
              </p>
              <p className="text-xs pt-1 footer-text-muted">
                Member: IET, ISVR, CSI
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 footer-bottom-border">
          <p className="text-xs font-medium footer-text-muted">
            tamilselvi.life
          </p>
        </div>
      </div>
    </footer>
  );
}
