import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const hoverClass = hover
    ? "hover:shadow-lg hover:border-cyan-200 transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-white border border-slate-200 rounded-lg p-6 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}