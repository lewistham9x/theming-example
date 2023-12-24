import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import { useEnsureMount } from "~/hooks/ensure-mount-hook";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <main className="p-4">
      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>{theme}</p>
      </div>
      <section className="flex flex-wrap gap-4 mt-4">
        <DisplayElement
          variableName="--border"
          variableValue={{
            light: "214.3 31.8% 91.4%",
            dark: "217.2 32.6% 17.5%",
          }}
          className="bg-border"
        />
        <DisplayElement
          variableName="--input"
          variableValue={{
            light: "214.3 31.8% 91.4%",
            dark: "217.2 32.6% 17.5%",
          }}
          className="bg-input"
        />
        <DisplayElement
          variableName="--ring"
          variableValue={{
            light: "222.2 84% 4.9%",
            dark: "212.7 26.8% 83.9%",
          }}
          className="bg-ring"
        />
        <DisplayElement
          variableName="--background"
          variableValue={{
            light: "0 0% 100%",
            dark: "222.2 84% 4.9%",
          }}
          className="bg-background"
        />
        <DisplayElement
          variableName="--foreground"
          variableValue={{
            light: "222.2 84% 4.9%",
            dark: "210 40% 98%",
          }}
          className="bg-foreground"
        />
      </section>
      <hr className="my-4" />
      <section className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <DisplayElement
            variableName="--primary"
            variableValue={{
              light: "222.2 47.4% 11.2%",
              dark: "210 40% 98%",
            }}
            className="bg-primary"
          />
          <DisplayElement
            variableName="--primary-foreground"
            variableValue={{
              light: "210 40% 98%",
              dark: "222.2 47.4% 11.2%",
            }}
            className="bg-primary-foreground"
          />
        </div>
        <div className="flex flex-col gap-2">
          <DisplayElement
            variableName="--secondary"
            variableValue={{
              light: "210 40% 96.1%",
              dark: "217.2 32.6% 17.5%",
            }}
            className="bg-secondary"
          />
          <DisplayElement
            variableName="--secondary-foreground"
            variableValue={{
              light: "222.2 47.4% 11.2%",
              dark: "210 40% 98%",
            }}
            className="bg-secondary-foreground"
          />
        </div>
        <div className="flex flex-col gap-2">
          <DisplayElement
            variableName="--card"
            variableValue={{
              light: "0 0% 100%",
              dark: "222.2 84% 4.9%",
            }}
            className="bg-card"
          />
          <DisplayElement
            variableName="--card-foreground"
            variableValue={{
              light: "222.2 84% 4.9%",
              dark: "210 40% 98%",
            }}
            className="bg-card-foreground"
          />
        </div>
        <div className="flex flex-col gap-2">
          <DisplayElement
            variableName="--popover"
            variableValue={{
              light: "0 0% 100%",
              dark: "222.2 84% 4.9%",
            }}
            className="bg-popover"
          />
          <DisplayElement
            variableName="--popover-foreground"
            variableValue={{
              light: "222.2 84% 4.9%",
              dark: "210 40% 98%",
            }}
            className="bg-popover-foreground"
          />
        </div>

        <div className="flex flex-col gap-2">
          <DisplayElement
            variableName="--muted"
            variableValue={{
              light: "210 40% 96.1%",
              dark: "217.2 32.6% 17.5%",
            }}
            className="bg-muted"
          />
          <DisplayElement
            variableName="--muted-foreground"
            variableValue={{
              light: "215.4 16.3% 46.9%",
              dark: "215 20.2% 65.1%",
            }}
            className="bg-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-2">
          <DisplayElement
            variableName="--accent"
            variableValue={{
              light: "210 40% 96.1%",
              dark: "217.2 32.6% 17.5%",
            }}
            className="bg-accent"
          />
          <DisplayElement
            variableName="--accent-foreground"
            variableValue={{
              light: "222.2 47.4% 11.2%",
              dark: "210 40% 98%",
            }}
            className="bg-accent-foreground"
          />
        </div>

        <div className="flex flex-col gap-2">
          <DisplayElement
            variableName="--destructive"
            variableValue={{
              light: "0 84.2% 60.2%",
              dark: "0 62.8% 30.6%;",
            }}
            className="bg-destructive"
          />
          <DisplayElement
            variableName="--destructive-foreground"
            variableValue={{
              light: "210 40% 98%",
              dark: "210 40% 98%",
            }}
            className="bg-destructive-foreground"
          />
        </div>
      </section>
    </main>
  );
}

interface DisplayElementProps {
  variableName: string;
  className?: string;
  variableValue: {
    light: string;
    dark: string;
  };
}
const DisplayElement = (props: DisplayElementProps) => {
  const { variableName, className, variableValue } = props;
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const resolvedTheme = theme as "light" | "dark";
  return (
    <div className="relative flex">
      <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
        <div className={`w-10 h-10 rounded sm:w-full ${className}`} />
        <div className="px-0.5 font-mono">
          <p className="text-xs font-medium">{variableName}</p>
          <p
            className={`text-xs lowercase text-slate-500 ${
              resolvedTheme === "light" && "underline"
            }`}
          >
            Light: {variableValue.light}
          </p>
          <p
            className={`text-xs lowercase text-slate-500 ${
              resolvedTheme === "dark" && "underline"
            }`}
          >
            Dark: {variableValue.dark}
          </p>
        </div>
      </div>
    </div>
  );
};
