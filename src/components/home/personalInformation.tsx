"use client";

import LinkedInIcon from "../icons/linkedInIcon";
import PaperClipIcon from "../icons/paperClipIcon";

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
        <div className="grid grid-cols-2 w-fit gap-2">
          <div>
            <a
              href="https://linkedin.com/in/nilabjo"
              target="_blank"
              rel="noreferrer"
              className="flex gap-x-1 items-center pt-2 text-blue-600 underline underline-offset-2 w-fit"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="/files/Nilabjo_Sanyal.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex gap-x-1 items-center pt-2 text-blue-600 underline underline-offset-2 w-fit"
            >
              <PaperClipIcon className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
