import Image from "next/image";
import Section from "./components/Section";
import Button from "./components/Button";
import { Download, MessageCircle } from "lucide-react";
// import { WhatsappIcon } from "@/components/icons"
import { profile } from "./data/profile";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-600 shadow-xl">
                <Image
                  src="/headshot-profile.png"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4 text-balance text-4xl">
              <span className="text-Blue 500"> Gaizka</span> Findi Satria
              </h1>
              <p className="text-4xl sm:text-3xl text-cyan-600 font-semibold mb-4">
            
                {profile.role}
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button href={profile.cv} variant="primary" download="Gaizkafindi-CV.pdf">
                  <Download size={20} className="mr-2" />
                  Download CV
                </Button>
                <Button href={profile.whatsapp} variant="outline" external>
                  <MessageCircle size={20} className="mr-2" />
                  Contact Me
                </Button>
            </div>
          </div>
        </div>
    </div>
      </Section >
    </div >
  );
}