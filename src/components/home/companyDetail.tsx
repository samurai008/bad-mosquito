"use client";

import ArrowTopRightOnSquareIcon from "../icons/arrowTopRightOnSquareIcon";
import CheckIcon from "../icons/checkIcon";
import CalendarDays from "./calendarDays";

export type CompanyDetailProps = {
  companyName: string;
  position: string;
  duration: string;
  keyResponsibilities: string[];
  links?: string[];
};

export default function CompanyDetail(props: CompanyDetailProps) {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center panel fixed top-0 left-0">
      <div className="container p-8">
        <h1 className="text-2xl font-semibold">{props.companyName}</h1>
        <h3 className="text-lg font-medium">{props.position}</h3>
        <h6 className="text-sm font-medium flex items-center gap-1 pt-1">
          <CalendarDays className="w-4 h-4 min-w-fit" />{props.duration}
        </h6>
        <ul className="list-none pt-4 md:pt-6">
          {props.keyResponsibilities.map((responsibilities, i) => (
            <li
              className={`pt-${i === 0 ? 0 : 2} flex gap-x-2 items-baseline`}
              key={responsibilities.replace(/\s/, "_")}
            >
              <CheckIcon className="text-blue-300 w-4 h-4 min-w-fit" strokeWidth={2.5} />
              {responsibilities}
            </li>
          ))}
        </ul>

        {props.links && (
          <>
            <h3 className="text-lg font-medium pt-4">Links</h3>
            <ul className="list-none pt-2">
              {props.links.map((link) => (
                <li key={link}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-x-1 items-baseline text-blue-600 underline underline-offset-2"
                  >
                    <ArrowTopRightOnSquareIcon
                      className="w-4 h-4 min-w-fit"
                      strokeWidth={2.5}
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
