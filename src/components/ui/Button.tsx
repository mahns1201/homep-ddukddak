import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-primary text-white hover:bg-secondary",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  white: "bg-white text-primary hover:bg-light-gray",
};

const sizes = {
  sm: "px-4 py-2 p4",
  md: "px-6 py-3 p4",
  lg: "px-8 py-4 p2",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `inline-block rounded-lg font-semibold transition-colors duration-200 cursor-pointer ${variants[variant]} ${sizes[size]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type === "submit" ? "submit" : "button"} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
