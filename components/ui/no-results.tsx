import { cn } from "@/libs/utils";
import React from "react";

interface NoResultsProps {
  message?: string;
  className?: string;
}

const NoResults: React.FC<NoResultsProps> = ({
  message = "No Results Found",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center h-full w-full text-neutral-500",
        className
      )}
    >
      {message}
    </div>
  );
};

export default NoResults;
