import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "../icons";
import styles from "./dialog.module.css";

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | undefined>(
  undefined
);

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  children,
}) => {
  return (
    <DialogContext.Provider
      value={{ open: open || false, onOpenChange: onOpenChange || (() => {}) }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  onClick,
  ...props
}) => {
  const context = React.useContext(DialogContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    context?.onOpenChange(true);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export interface DialogPortalProps {
  children: React.ReactNode;
}

export const DialogPortal: React.FC<DialogPortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div data-workspace-menu-portal="">{children}</div>,
    document.body
  );
};

export interface DialogOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  closing?: boolean;
}

export const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  DialogOverlayProps
>(({ className = "", closing, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="dialog-overlay"
      className={`${styles.overlay} ${
        closing ? styles.closing : ""
      } ${className}`}
      {...props}
    />
  );
});

DialogOverlay.displayName = "DialogOverlay";

export interface DialogContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(
  (
    { className = "", children, showCloseButton = true, style, ...props },
    ref
  ) => {
    const context = React.useContext(DialogContext);
    const [closing, setClosing] = useState(false);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
      setClosing(true);
      setTimeout(() => {
        context?.onOpenChange(false);
        setClosing(false);
      }, 200);
    }, [context]);

    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      },
      [handleClose]
    );

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      if (context?.open) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }, [context?.open, handleClose]);

    if (!context?.open) return null;

    return (
      <DialogPortal>
        <DialogOverlay closing={closing} onClick={handleOverlayClick} />
        <div
          ref={contentRef}
          data-slot="dialog-content"
          className={`${styles.content} ${
            closing ? styles.closing : ""
          } ${className}`}
          style={style}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {children}
          {showCloseButton && (
            <button
              data-slot="dialog-close"
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close"
            >
              <XIcon />
              <span className={styles.srOnly}>Close</span>
            </button>
          )}
        </div>
      </DialogPortal>
    );
  }
);

DialogContent.displayName = "DialogContent";

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dialog-header"
        className={`${styles.header} ${className}`}
        {...props}
      />
    );
  }
);

DialogHeader.displayName = "DialogHeader";

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dialog-footer"
        className={`${styles.footer} ${className}`}
        {...props}
      />
    );
  }
);

DialogFooter.displayName = "DialogFooter";

export interface DialogTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  DialogTitleProps
>(({ className = "", ...props }, ref) => {
  return (
    <h2
      ref={ref}
      data-slot="dialog-title"
      className={`${styles.title} ${className}`}
      {...props}
    />
  );
});

DialogTitle.displayName = "DialogTitle";

export interface DialogDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className = "", ...props }, ref) => {
  return (
    <p
      ref={ref}
      data-slot="dialog-description"
      className={`${styles.description} ${className}`}
      {...props}
    />
  );
});

DialogDescription.displayName = "DialogDescription";

export const DialogClose: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick, ...props }) => {
  const context = React.useContext(DialogContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    context?.onOpenChange(false);
  };

  return (
    <button data-slot="dialog-close" onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
