"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Avatar } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg items-center justify-center">
          <Avatar className="w-60 h-60" color="primary" isBordered src="avatar.webp" />
        </div>
      <div className="inline-block max-w-xl text-center justify-center">
        
        <span className={title()}>&nbsp;</span>
        <span className={title({ color: "blue" })}>Timur Uzakov&nbsp;</span>
        <br />
        <span className={title()}>
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          iOS C++ Rust ROS Flutter React
        </div>
      </div>

      {/* <div className="flex gap-3"> */}
        {/* <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link> */}
        {/* <Link */}
          {/* // isExternal */}
          {/* // className={buttonStyles({ variant: "bordered", radius: "full" })} */}
          {/* // href={siteConfig.links.github} */}
        {/* // > */}
          {/* <GithubIcon size={20} /> */}
          {/* GitHub */}
        {/* </Link> */}
      {/* </div> */}

      {/* <div className="mt-8"> */}
        {/* <Snippet hideCopyButton hideSymbol variant="bordered"> */}
          {/* <span> */}
            {/* Get started by editing <Code color="primary">app/page.tsx</Code> */}
          {/* </span> */}
        {/* </Snippet> */}
      {/* </div> */}
    </section>
  );
}
