import Link from "next/link";
import { Card } from "~/components/common/card";
import {
  NextAuthIcon,
  NextJSIcon,
  PlanetScaleIcon,
  React18Icon,
  StripeIcon,
  TailwindIcon,
} from "~/components/common/icons";
import { Navbar } from "~/components/common/navbar";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
export const siteConfig = {
  name: "Taxonomy",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "https://tx.shadcn.com",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
  },
};

const CARD_CONFIG = [
  {
    title: "Next.js 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    icon: <NextJSIcon />,
  },
  {
    title: "React 18",
    description: "Server and Client Components. Use hook.",
    icon: <React18Icon />,
  },
  {
    title: "Database",
    description: "ORM using Prisma and deployed on PlanetScale.",
    icon: <PlanetScaleIcon />,
  },
  {
    title: "Components",
    description:
      "UI components built using Radix UI and styled with Tailwind CSS.",
    icon: <TailwindIcon />,
  },
  {
    title: "Authentication",
    description: "Authentication using NextAuth.js and middlewares.",
    icon: <NextAuthIcon />,
  },
  {
    title: "Subscriptions",
    description: "Free and paid subscriptions using Stripe.",
    icon: <StripeIcon />,
  },
];
/**
 * Ripped of this repo
 * @see {@link https://github.com/shadcn-ui/taxonomy/blob/main/app/(marketing)/page.tsx}
 */
export default function Example() {
  return (
    <main className="p-4">
      <Navbar />
      <section className="pt-6 pb-8 space-y-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
            An example app built using Next.js 13 server components.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m building a web app with Next.js 13 and open sourcing
            everything. Follow along as we figure this out together.
          </p>
          <div className="space-x-4">
            <Link href="/login" passHref>
              <Button size="lg">Get Started</Button>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Button size={"lg"} variant={"outline"}>
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container py-8 space-y-6 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {CARD_CONFIG.map((config, index) => (
            <Card
              key={index}
              title={config.title}
              description={config.description}
              icon={config.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
