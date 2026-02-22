import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-depth text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-lg font-display font-bold">
                DT
              </div>
              <div>
                <p className="font-display font-semibold text-lg">Dr. D. Tamilselvi</p>
                <p className="text-sm text-white/60">Professor of IT, TCE Madurai</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mt-4">
              Building bridges between technology and therapy.
              Every child deserves a way in.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Impact Stories", href: "/impact" },
                { label: "VR Therapy", href: "/work/vr-therapy" },
                { label: "The Vision", href: "/ecosystem" },
                { label: "Publications", href: "/work/publications" },
                { label: "Photo Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Support This Work", href: "/connect/partner" },
                { label: "Collaborate", href: "/connect/collaborate" },
                { label: "Join the Team", href: "/connect/join" },
                { label: "Find Help for a Child", href: "/connect/support" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                <a href="mailto:dtamilselvi@tce.edu" className="hover:text-white transition-colors">
                  dtamilselvi@tce.edu
                </a>
              </p>
              <p>
                Thiagarajar College of Engineering<br />
                Madurai, Tamil Nadu, India
              </p>
              <p className="text-white/40 text-xs mt-4">
                Member: IET, ISVR, CSI
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            tamilselvi.life
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs">
              <button className="px-2 py-1 rounded-full bg-white/10 text-white/80 font-medium">EN</button>
              <button className="px-2 py-1 rounded-full text-white/50 hover:bg-white/10 transition-colors">TA</button>
              <button className="px-2 py-1 rounded-full text-white/50 hover:bg-white/10 transition-colors">HI</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
