import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon} from "./Icons";
import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GithubIcon, href: profile.social.github , label: "GitHub" },
    { icon: LinkedinIcon, href: profile.social.linkedin, label: "LinkedIn" },
    { icon: InstagramIcon, href: profile.social.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Editor<span className="text-cyan-600">.</span>Portfolio
            </h3>
            <p className="text-slate-600 text-sm">
              Editor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-cyan-600 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-600 text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}