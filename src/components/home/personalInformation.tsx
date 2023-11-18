"use client";

import LinkedInIcon from "../icons/linkedInIcon";

type Props = {
  title: string;
  subtitle: string;
};

export default function PersonalInformation(props: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center panel fixed top-0 left-0">
      <div className="container p-8">
        <h1 className="text-4xl font-semibold">{props.title}</h1>
        <h3 className="text-lg font-medium">{props.subtitle}</h3>
        <a
          href="https://linkedin.com/in/nilabjo"
          target="_blank"
          rel="noreferrer"
          className="flex gap-x-1 items-center pt-2 text-blue-600 underline underline-offset-2"
        >
          <LinkedInIcon className="w-4 h-4 min-w-fit" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
