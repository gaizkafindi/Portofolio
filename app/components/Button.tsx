import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  download?: boolean | string;
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  download,
  external,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-cyan-600 text-white hover:bg-cyan-700 border-cyan-600",
    secondary: "bg-slate-600 text-white hover:bg-slate-700 border-slate-600",
    outline: "bg-transparent text-slate-700 hover:bg-slate-50 border-slate-300",
  };

  const baseClass = `inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${variants[variant]} ${className}`;

  // If it's a download link, use native <a> tag
  if (href && download) {
    return (
      <a
        href={href}
        download={download}
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  // If it's an external link (like WhatsApp), open in new tab
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  // If it's a regular link, use Next.js Link
  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  // If it's a button
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}