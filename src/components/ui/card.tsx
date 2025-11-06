import React from "react";
import styles from "./card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        className={`${styles.card} ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-header"
        className={`${styles.cardHeader} ${className}`}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-title"
        className={`${styles.cardTitle} ${className}`}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardDescription = React.forwardRef<HTMLDivElement, CardDescriptionProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-description"
        className={`${styles.cardDescription} ${className}`}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

export interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-action"
        className={`${styles.cardAction} ${className}`}
        {...props}
      />
    );
  }
);

CardAction.displayName = "CardAction";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-content"
        className={`${styles.cardContent} ${className}`}
        {...props}
      />
    );
  }
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-footer"
        className={`${styles.cardFooter} ${className}`}
        {...props}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";
