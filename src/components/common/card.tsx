import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export const Card = (props: CardProps) => {
  const { icon, title, description } = props;
  return (
    <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        {icon}
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};
