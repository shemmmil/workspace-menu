import React from "react";
export interface DropdownMenuProps {
    children: React.ReactNode;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export interface DropdownMenuTriggerProps {
    asChild?: boolean;
    children: React.ReactElement;
}
export declare const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps>;
export interface DropdownMenuPortalProps {
    children: React.ReactNode;
}
export declare const DropdownMenuPortal: React.FC<DropdownMenuPortalProps>;
export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
}
export declare const DropdownMenuContent: React.ForwardRefExoticComponent<DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    inset?: boolean;
    variant?: "default" | "destructive";
    disabled?: boolean;
}
export declare const DropdownMenuItem: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
export declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
}
export declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    checked?: boolean;
    onValueChange?: (value: string) => void;
}
export declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
    inset?: boolean;
}
export declare const DropdownMenuLabel: React.ForwardRefExoticComponent<DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
}
export declare const DropdownMenuShortcut: React.ForwardRefExoticComponent<DropdownMenuShortcutProps & React.RefAttributes<HTMLSpanElement>>;
export interface DropdownMenuSubProps {
    children: React.ReactNode;
}
export declare const DropdownMenuSub: React.FC<DropdownMenuSubProps>;
export interface DropdownMenuSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    inset?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuSubContentProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}
export declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=dropdown-menu.d.ts.map