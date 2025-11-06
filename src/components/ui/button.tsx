import React from "react";
import styles from "./button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const sizeClass = {
      default: styles.sizeDefault,
      sm: styles.sizeSm,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
      "icon-sm": styles.sizeIconSm,
      "icon-lg": styles.sizeIconLg,
    }[size];

    const variantClass = styles[variant];

    return (
      <button
        ref={ref}
        className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
