import React, { useEffect } from "react";
import Lenis from "lenis";
import Dock from "./ui/Dock";
import BlobCursor from "./ui/BlobCursor";
import LetterGlitch from "./ui/LetterGlitch";
import { Home, User, Code, Mail, Github, Linkedin } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenisConfig: any = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    };
    const lenis = new Lenis(lenisConfig);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const dockItems = [
    {
      icon: <Home size={20} />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: <User size={20} />,
      label: "About",
      onClick: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Code size={20} />,
      label: "Projects",
      onClick: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Mail size={20} />,
      label: "Contact",
      onClick: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/ArilDani", "_blank"),
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      onClick: () => window.open("https://linkedin.com", "_blank"),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <BlobCursor
        blobType="circle"
        fillColor="#8b5cf6"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        zIndex={1000}
      />

      <main className="relative z-10 pb-32">{children}</main>

      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <Dock
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
