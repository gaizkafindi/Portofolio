import Image from "next/image";
import Section from "./components/Section";
import Button from "./components/Button";
import { Download, MessageCircle } from "lucide-react";
// import { WhatsappIcon } from "@/components/icons"
import { profile } from "./data/profile";
import Card from "./components/Card";
import { skills } from "./data/profile";
import { Badge } from "lucide-react";

export default function Home() {
  return (
    <>
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

      {/* Skills Section */}
      <Section background="slate" id="skills">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-4xl mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category) => (
              <Card key={category.category} hover={false}>
                <h3 className="text-xl font-semibold mb-4 text-center text-cyan-600">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((skill) => (
                    <li key={skill.name} className="flex justify-between items-center">
                      <span className="text-slate-700">{skill.name}</span>
                      <Badge>{skill.level}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

    </ >
  );
}