import React from "react";
export interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}
export declare const Dialog: React.FC<DialogProps>;
export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export declare const DialogTrigger: React.FC<DialogTriggerProps>;
export interface DialogPortalProps {
    children: React.ReactNode;
}
export declare const DialogPortal: React.FC<DialogPortalProps>;
export interface DialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    closing?: boolean;
}
export declare const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<HTMLDivElement>>;
export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    showCloseButton?: boolean;
}
export declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const DialogHeader: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const DialogFooter: React.ForwardRefExoticComponent<DialogFooterProps & React.RefAttributes<HTMLDivElement>>;
export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
export declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
export declare const DialogDescription: React.ForwardRefExoticComponent<DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export declare const DialogClose: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
//# sourceMappingURL=dialog.d.ts.map