import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "slate";
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  const bgClass = background === "slate" ? "bg-slate-50" : "bg-white";

  return (
    // SEBELUMNYA: className={py-16 sm:py-20 lg:py-24 ${bgClass} ${className}}
    // SEKARANG: Dibungkus dengan ` ` dan diawali $ pada kurung kurawal pertama
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${bgClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}