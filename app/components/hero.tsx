import Link from "next/link";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./social-icons";
import { siteMeta } from "../sitemeta";
import { ComponentProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SocialLinkProps {
  icon: any;
  href: string;
}

function SocialLink({
  icon: Icon,
  href,
  ...props
}: ComponentProps<"a"> & SocialLinkProps) {
  return (
    <Link href={href} className="group -m-1 p-1" {...props}>
      <Icon className="h-7 w-7 fill-zinc-500 transition-colors duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-200" />
    </Link>
  );
}

const Hero = () => {
  return (
    <div className="mt-0 lg:mt-20">
      <div className="text-lg w-full max-w-[95%]">
        <Avatar className="w-36 h-36">
          <AvatarImage src="/dhanushka.png" alt="dhanushka" />
          <AvatarFallback>DC</AvatarFallback>
        </Avatar>

        <h1 className="text-3xl lg:text-4xl mt-10 font-bold tracking-normal leading-tight text-zinc-600 dark:text-zinc-100">
          Software Engineer, Tech Speaker and YouTuber
        </h1>
        <p className="mt-8 text-lg text-zinc-500 dark:text-zinc-100">
          I’m Dhanushka, a software engineer based in Berlin. I love to share
          tech knowledge & teach what I learn. I create tech content at{" "}
          <Link
            target="_blank"
            className="text-zinc-700 hover:text-sky-500 dark:text-zinc-400 dark:hover:text-zinc-500 transition duration-200 font-semibold"
            href="https://www.youtube.com/@dev.outpost"
          >
            Outpost Dev
          </Link>{" "}
          &{" "}
          <Link
            target="_blank"
            className="text-zinc-700 hover:text-sky-500 dark:text-zinc-400 dark:hover:text-zinc-500 transition duration-200 font-semibold"
            href="https://www.youtube.com/@DEVDIARYbydhanushka"
          >
            Dev Diary by Dhanushka
          </Link>
          .
        </p>
        <div className="mt-8 flex gap-6">
          <SocialLink
            href={siteMeta.author.linkedin}
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
          <SocialLink
            href={siteMeta.author.twitter}
            aria-label="Follow on Twitter"
            icon={TwitterIcon}
          />

          <SocialLink
            href="https://github.com"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />

          <SocialLink
            href={siteMeta.author.facebook}
            aria-label="Follow on Facebook"
            icon={FacebookIcon}
          />

          <SocialLink
            href={siteMeta.author.instagram}
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
