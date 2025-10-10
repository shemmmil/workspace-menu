import React from "react";
export type AppId = "manager" | "partners" | "knowledge" | "helpdesk" | "corporate-mail" | "documentolog" | "bim360" | "1c-estimate" | "macro-erp" | "plan-radar";
export interface QuickAccessApp {
    id: AppId;
    title: string;
    icon: React.ReactNode;
    url?: string;
}
export interface FullApp {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    url?: string;
    iconBg?: string;
}
export interface WidgetProps {
    currentApp?: AppId;
    quickAccessApps?: QuickAccessApp[];
    fullApps?: FullApp[];
    className?: string;
    showAllServicesButton?: boolean;
}
export declare const Widget: React.FC<WidgetProps>;
export default Widget;
//# sourceMappingURL=widget.d.ts.map