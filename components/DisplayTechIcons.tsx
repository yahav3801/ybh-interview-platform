import { cn, getTechLogos } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);
  return (
    <div className="flex flex-row gap-1.5">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex-center border-1",
            index >= 1 && "-ml-3 "
          )}
        >
          <span className="tech-tooltip">{tech}</span>
          <Image
            className="size-5 "
            src={url}
            alt={tech}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
