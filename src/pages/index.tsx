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
import DashboardPage from "~/examples/dashboard/page";
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
      {/* <Navbar /> */}
      <DashboardPage />
    </main>
  );
}
