"use client";

import CompanyDetail, {
  CompanyDetailProps,
} from "@/components/home/companyDetail";
import PersonalInformation from "@/components/home/personalInformation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import auctree from "@/app/data/auctree.json";
import siply from '@/app/data/siply.json';
import hashout from '@/app/data/hashout.json';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const companyDetails = [auctree, siply, hashout];

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray<HTMLDivElement>(".panel");
    let currentPanel = panels[0];

    gsap.defaults({ overwrite: "auto", duration: 0.3 });
    gsap.set(mainRef.current, { height: panels.length * 100 + "vh" });

    function setPanel(newSection: HTMLDivElement) {
      if (newSection !== currentPanel) {
        gsap.to(currentPanel, { autoAlpha: 0 });
        gsap.to(newSection, { autoAlpha: 1 });
        currentPanel = newSection;
      }
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        onToggle: (self) => self.isActive && setPanel(panel),
      });
    });
  }, []);

  return (
    <main className="flex flex-col" ref={mainRef}>
      <PersonalInformation
        title="Nilabjo Sanyal"
        subtitle="Fullstack Developer"
      />
      {companyDetails.map((companyDetail) => (
        <CompanyDetail key={companyDetail.companyName} {...companyDetail} />
      ))}
    </main>
  );
}
