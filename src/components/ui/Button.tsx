import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-heart text-white hover:bg-heart-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-depth text-white hover:bg-depth-dark shadow-sm hover:shadow-md",
  outline:
    "bg-transparent text-depth border-2 border-depth hover:bg-depth hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
