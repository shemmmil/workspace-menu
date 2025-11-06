import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronRight } from "../icons";
import styles from "./dropdown-menu.module.css";

interface DropdownMenuContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | undefined>(undefined);

export interface DropdownMenuProps {
  children: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenuContext.Provider value={{ open, onOpenChange: setOpen }}>
      <div className={styles.dropdownMenu} data-slot="dropdown-menu">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

export interface DropdownMenuTriggerProps {
  asChild?: boolean;
  children: React.ReactElement;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ asChild, children }) => {
  const context = React.useContext(DropdownMenuContext);

  const handleClick = () => {
    context?.onOpenChange(!context.open);
  };

  if (asChild) {
    return React.cloneElement(children, {
      onClick: handleClick,
      "data-slot": "dropdown-menu-trigger",
    });
  }

  return (
    <button
      data-slot="dropdown-menu-trigger"
      className={styles.trigger}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export interface DropdownMenuPortalProps {
  children: React.ReactNode;
}

export const DropdownMenuPortal: React.FC<DropdownMenuPortalProps> = ({ children }) => {
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

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
}

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className = "", children, align = "start", side = "bottom", sideOffset = 4, ...props }, ref) => {
    const context = React.useContext(DropdownMenuContext);
    const [closing, setClosing] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    const handleClose = useCallback(() => {
      setClosing(true);
      setTimeout(() => {
        context?.onOpenChange(false);
        setClosing(false);
      }, 150);
    }, [context]);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
          const trigger = document.querySelector('[data-slot="dropdown-menu-trigger"]');
          if (trigger && !trigger.contains(e.target as Node)) {
            handleClose();
          }
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      if (context?.open) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        
        // Calculate position
        const trigger = document.querySelector('[data-slot="dropdown-menu-trigger"]');
        if (trigger && contentRef.current) {
          const triggerRect = trigger.getBoundingClientRect();
          const contentRect = contentRef.current.getBoundingClientRect();
          
          let top = triggerRect.bottom + sideOffset;
          let left = triggerRect.left;

          if (side === "top") {
            top = triggerRect.top - contentRect.height - sideOffset;
          } else if (side === "right") {
            top = triggerRect.top;
            left = triggerRect.right + sideOffset;
          } else if (side === "left") {
            top = triggerRect.top;
            left = triggerRect.left - contentRect.width - sideOffset;
          }

          if (align === "end") {
            left = triggerRect.right - contentRect.width;
          } else if (align === "center") {
            left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
          }

          setPosition({ top, left });
        }
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [context?.open, handleClose, align, side, sideOffset]);

    if (!context?.open) return null;

    return (
      <DropdownMenuPortal>
        <div
          ref={contentRef}
          data-slot="dropdown-menu-content"
          data-side={side}
          data-align={align}
          className={`${styles.content} ${closing ? styles.closing : ""} ${className}`}
          style={position ? { position: "fixed", top: `${position.top}px`, left: `${position.left}px` } : {}}
          {...props}
        >
          {children}
        </div>
      </DropdownMenuPortal>
    );
  }
);

DropdownMenuContent.displayName = "DropdownMenuContent";

export interface DropdownMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DropdownMenuGroup = React.forwardRef<HTMLDivElement, DropdownMenuGroupProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-group"
        className={`${styles.group} ${className}`}
        role="group"
        {...props}
      />
    );
  }
);

DropdownMenuGroup.displayName = "DropdownMenuGroup";

export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

export const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className = "", inset, variant = "default", disabled, children, onClick, ...props }, ref) => {
    const context = React.useContext(DropdownMenuContext);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      onClick?.(e);
      context?.onOpenChange(false);
    };

    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-item"
        data-inset={inset ? "true" : undefined}
        data-variant={variant}
        className={`${styles.item} ${className}`}
        onClick={handleClick}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DropdownMenuItem.displayName = "DropdownMenuItem";

export interface DropdownMenuCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const DropdownMenuCheckboxItem = React.forwardRef<HTMLDivElement, DropdownMenuCheckboxItemProps>(
  ({ className = "", children, checked, onCheckedChange, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(e);
      onCheckedChange?.(!checked);
    };

    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-checkbox-item"
        className={`${styles.checkboxItem} ${className}`}
        onClick={handleClick}
        role="menuitemcheckbox"
        aria-checked={checked}
        tabIndex={0}
        {...props}
      >
        <span className={styles.itemIndicator}>
          {checked && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
        {children}
      </div>
    );
  }
);

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export interface DropdownMenuRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

export const DropdownMenuRadioGroup = React.forwardRef<HTMLDivElement, DropdownMenuRadioGroupProps>(
  ({ className = "", children, value, onValueChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-radio-group"
        className={className}
        role="radiogroup"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              checked: child.props.value === value,
              onValueChange,
            });
          }
          return child;
        })}
      </div>
    );
  }
);

DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";

export interface DropdownMenuRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  checked?: boolean;
  onValueChange?: (value: string) => void;
}

export const DropdownMenuRadioItem = React.forwardRef<HTMLDivElement, DropdownMenuRadioItemProps>(
  ({ className = "", children, value, checked, onValueChange, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(e);
      onValueChange?.(value);
    };

    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-radio-item"
        className={`${styles.radioItem} ${className}`}
        onClick={handleClick}
        role="menuitemradio"
        aria-checked={checked}
        tabIndex={0}
        {...props}
      >
        <span className={styles.itemIndicator}>
          {checked && (
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="4" />
            </svg>
          )}
        </span>
        {children}
      </div>
    );
  }
);

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
}

export const DropdownMenuLabel = React.forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className = "", inset, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-label"
        data-inset={inset ? "true" : undefined}
        className={`${styles.label} ${className}`}
        {...props}
      />
    );
  }
);

DropdownMenuLabel.displayName = "DropdownMenuLabel";

export interface DropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-separator"
        className={`${styles.separator} ${className}`}
        role="separator"
        {...props}
      />
    );
  }
);

DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export interface DropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const DropdownMenuShortcut = React.forwardRef<HTMLSpanElement, DropdownMenuShortcutProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-slot="dropdown-menu-shortcut"
        className={`${styles.shortcut} ${className}`}
        {...props}
      />
    );
  }
);

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export interface DropdownMenuSubProps {
  children: React.ReactNode;
}

export const DropdownMenuSub: React.FC<DropdownMenuSubProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.subMenu} data-slot="dropdown-menu-sub">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            open,
            onOpenChange: setOpen,
          });
        }
        return child;
      })}
    </div>
  );
};

export interface DropdownMenuSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const DropdownMenuSubTrigger = React.forwardRef<HTMLDivElement, DropdownMenuSubTriggerProps>(
  ({ className = "", inset, children, open, onOpenChange, ...props }, ref) => {
    const handleClick = () => {
      onOpenChange?.(!open);
    };

    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-sub-trigger"
        data-inset={inset ? "true" : undefined}
        data-state={open ? "open" : "closed"}
        className={`${styles.subTrigger} ${className}`}
        onClick={handleClick}
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={open}
        tabIndex={0}
        {...props}
      >
        {children}
        <ChevronRight className="ml-auto" />
      </div>
    );
  }
);

DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export interface DropdownMenuSubContentProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export const DropdownMenuSubContent = React.forwardRef<HTMLDivElement, DropdownMenuSubContentProps>(
  ({ className = "", children, open, ...props }, ref) => {
    const [closing, setClosing] = useState(false);

    if (!open) return null;

    return (
      <div
        ref={ref}
        data-slot="dropdown-menu-sub-content"
        className={`${styles.subContent} ${closing ? styles.closing : ""} ${className}`}
        role="menu"
        {...props}
      >
        {children}
      </div>
    );
  }
);

DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
