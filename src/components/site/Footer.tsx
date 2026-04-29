import { Link } from "@tanstack/react-router";
import { Mail, Globe, Share2 } from "lucide-react";
import logo from "@/assets/nans-logo.png";

export function Footer() {
  return (
    <footer className="bg-[color:var(--nans-ink)] text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={36} height={36} className="h-9 w-9 rounded-full bg-white/95 object-contain p-0.5" loading="lazy" />
            <span className="font-display text-2xl text-white">NANS</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            National Association of Nzema Students. Empowering the youth, preserving culture, and driving progress through academic excellence.
          </p>
          <p className="mt-4 text-sm italic text-[color:var(--nans-lime)]">"Nwoma Ma Anyunluhole."</p>
          <div className="mt-5 flex items-center gap-2">
            {[Mail, Share2, Globe].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--nans-lime)]">Navigation</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-white/75 hover:text-white">About Us</Link></li>
            <li><Link to="/chapters" className="text-white/75 hover:text-white">Chapters</Link></li>
            <li><Link to="/membership" className="text-white/75 hover:text-white">Membership</Link></li>
            <li><Link to="/news" className="text-white/75 hover:text-white">News & Events</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--nans-lime)]">Resources</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/resources" className="text-white/75 hover:text-white">Resource Hub</Link></li>
            <li><Link to="/resources" className="text-white/75 hover:text-white">Constitution</Link></li>
            <li><Link to="/resources" className="text-white/75 hover:text-white">Scholarships</Link></li>
            <li><a href="#" className="text-white/75 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--nans-lime)]">Newsletter</h4>
          <p className="mt-4 text-sm text-white/70">Get monthly updates on events and opportunities.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Email address"
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[color:var(--nans-lime)] focus:outline-none"
            />
            <button className="rounded-full bg-[color:var(--nans-lime)] px-5 text-sm font-semibold text-[color:var(--nans-ink)] hover:brightness-105">
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-xs text-white/50">
            HQ: National Secretariat, Nsein-Esiama Road, Western Region, GH<br />
            info@nansghana.org · +233 (0) 532 388 934
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/55 md:flex-row md:px-8">
          <p>© 2026 National Association of Nzema Students (NANS). All rights reserved.</p>
          <p className="uppercase tracking-[0.2em] text-[color:var(--nans-lime)]/80">Nwoma Ma Anyunluhole — Education for Progress</p>
        </div>
      </div>
    </footer>
  );
}
