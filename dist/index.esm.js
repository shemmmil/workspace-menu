import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRight, Check, Circle, X, BarChart3, HandMetal, Brain, Headphones, Mail, Newspaper, FileCheck2, PencilRuler, LayoutGrid, ChevronsUpDown, ExternalLink } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = "Button";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (jsxs(DropdownMenuPrimitive.SubTrigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className), ...props, children: [children, jsx(ChevronRight, { className: "ml-auto h-4 w-4" })] })));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (jsx(DropdownMenuPrimitive.SubContent, { ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsx(DropdownMenuPrimitive.Portal, { children: jsx(DropdownMenuPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (jsx(DropdownMenuPrimitive.Item, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props })));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (jsxs(DropdownMenuPrimitive.CheckboxItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked, ...props, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(Check, { className: "h-4 w-4" }) }) }), children] })));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (jsxs(DropdownMenuPrimitive.RadioItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (jsx(DropdownMenuPrimitive.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (jsx(DropdownMenuPrimitive.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Overlay, { ref: ref, className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props })));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (jsxs(DialogPortal, { children: [jsx(DialogOverlay, {}), jsxs(DialogPrimitive.Content, { ref: ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [children, jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] })));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => (jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }));
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Title, { ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props })));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (jsx(DialogPrimitive.Description, { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props })));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Card = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";

// Default quick access apps
const defaultQuickAccessApps = [
    {
        id: "manager",
        title: "Панель руководителя",
        icon: jsx(BarChart3, { className: "w-4 h-4 text-[#65A30D]" }),
        url: "/manager",
    },
    {
        id: "partners",
        title: "Портал партнеров",
        icon: jsx(HandMetal, { className: "w-4 h-4 text-[#a21caf]" }),
        url: "/partners",
    },
    {
        id: "knowledge",
        title: "База знаний",
        icon: jsx(Brain, { className: "w-4 h-4 text-[#4F46E5]" }),
        url: "/knowledge",
    },
    {
        id: "helpdesk",
        title: "Help Desk",
        icon: jsx(Headphones, { className: "w-4 h-4 text-[#4346A2]" }),
        url: "/helpdesk",
    },
];
// Default full apps list
const defaultFullApps = [
    {
        id: "corporate-mail",
        title: "Корпоративная почта",
        description: "Ваш почтовый ящик, Получение важных рассылок, Создание встреч и совещаний",
        icon: jsx(Mail, { className: "w-8 h-8 text-[#4346A2]" }),
        iconBg: "bg-[#EBECFF]",
    },
    {
        id: "documentolog",
        title: "Электронный документооборот Documentolog",
        description: "Договоры, Контракты, Акты и накладные, Кадровый ЭДО, Контроль поручений",
        icon: jsx(Newspaper, { className: "w-8 h-8 text-orange-600" }),
        iconBg: "bg-orange-100",
    },
    {
        id: "knowledge",
        title: "База знаний",
        description: "Корпоративные стандарты, Регламенты, Шаблоны документов, Руководства и мануалы",
        icon: jsx(BarChart3, { className: "w-8 h-8 text-indigo-600" }),
        iconBg: "bg-indigo-100",
    },
    {
        id: "manager",
        title: "Панель Руководителя. Сервис по планированию графиков",
        description: "Контроль вех, еженедельные отчёты СМР, сводка по проектам, сервис планирования графиков СМР и ГПП",
        icon: jsx(BarChart3, { className: "w-8 h-8 text-lime-600" }),
        iconBg: "bg-lime-100",
    },
    {
        id: "partners",
        title: "Портал партнеров (тендерная площадка)",
        description: "Объявления о тендерах, Документы для участия, Результаты тендеров, Партнерские предложения",
        icon: jsx(HandMetal, { className: "w-8 h-8 text-fuchsia-600" }),
        iconBg: "bg-fuchsia-100",
    },
    {
        id: "bim360",
        title: "BIM360 (Инженерный документооборот)",
        description: "Взаимодействие с проектировщиками, контроль готовности РП, координация техотдела и стройки.",
        icon: jsx(FileCheck2, { className: "w-8 h-8 text-blue-600" }),
        iconBg: "bg-blue-100",
    },
    {
        id: "1c-estimate",
        title: "1С:Смета",
        description: "Управление сметами, бюджетом переменных затрат и базой индикативных цен",
        icon: jsx(OneCIcon, {}),
        iconBg: "bg-amber-100",
    },
    {
        id: "macro-erp",
        title: "MacroERP",
        description: "Сквозной учёт: сметные данные, договоры, поставки, оплаты и оперативная отчётность",
        icon: jsx(MacroERPIcon, {}),
        iconBg: "bg-pink-100",
    },
    {
        id: "plan-radar",
        title: "Plan Radar",
        description: "Учёт дефектов по строительно-монтажным работам, мониторинг статуса и работа с документацией",
        icon: jsx(PencilRuler, { className: "w-8 h-8 text-rose-600" }),
        iconBg: "bg-rose-100",
    },
];
// Custom icons
function OneCIcon() {
    return (jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-label": "1C", children: jsx("path", { d: "M7.27275 7.27274V24.7272H2.90906V13.0909H0V8.72724H2.90906V7.27274H7.27275ZM21.5273 14.5454H26.0364C25.3091 10.4727 21.8182 7.27274 17.4545 7.27274C12.6545 7.27274 8.72725 11.2 8.72725 16C8.72725 20.7026 12.4969 24.5724 17.1636 24.7272H32V20.3636H17.4546C13.3125 20.2708 11.9342 15.7128 14.1375 13.1359C16.3177 10.6042 20.4394 11.4068 21.5386 14.577", fill: "#F59E0B" }) }));
}
function MacroERPIcon() {
    return (jsxs("svg", { width: "32", height: "26", viewBox: "0 0 32 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-label": "MacroERP", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.5224 -0.00979614L16.0001 5.32204L6.47779 -0.00979614L0 3.6171L16.0001 12.5753L31.9997 3.6171L25.5224 -0.00979614Z", fill: "#C85FA5" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9996 3.61734L16 12.5755V21.5321L24.0006 17.0532V26.0098L31.9996 21.5311V3.61734Z", fill: "#7391C8" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 3.61734L16.0001 12.5755V21.5321L7.99951 17.0532V26.0098L0 21.5311V3.61734Z", fill: "#50648C" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0006 17.0529L16 21.5318L24.0006 26.0095V17.0529Z", fill: "#AAAAAA" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 17.0529L16.0006 21.5318L8 26.0095V17.0529Z", fill: "#D2D2D2" })] }));
}
// Main component
const Widget = ({ currentApp, quickAccessApps = defaultQuickAccessApps, fullApps = defaultFullApps, onNavigate, className = "", showAllServicesButton = true, }) => {
    const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);
    const handleQuickAppClick = (app) => {
        if (onNavigate && app.url) {
            onNavigate(app.url, app.id);
        }
        else if (app.url) {
            window.location.href = app.url;
        }
    };
    const handleFullAppClick = (app) => {
        if (onNavigate && app.url) {
            onNavigate(app.url, app.id);
        }
        else if (app.url) {
            window.open(app.url, "_blank");
        }
        setIsAppsModalOpen(false);
    };
    const handleAllServicesClick = () => {
        setIsAppsModalOpen(true);
    };
    return (jsxs("div", { className: "workspace-menu-root", children: [jsxs(DropdownMenu, { children: [jsx(DropdownMenuTrigger, { asChild: true, children: jsxs(Button, { variant: "outline", className: `w-full justify-between !px-4 !py-2.5 ${className}`, children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(LayoutGrid, { className: "w-4 h-4 text-[#5C60CC]" }), "IT \u0421\u0435\u0440\u0432\u0438\u0441\u044B"] }), jsx(ChevronsUpDown, { className: "w-4 h-4" })] }) }), jsx(DropdownMenuContent, { className: "w-56", align: "start", children: jsxs(DropdownMenuGroup, { children: [quickAccessApps
                                    .filter((app) => app.id !== currentApp) // Убираем текущее приложение
                                    .map((app) => (jsxs(DropdownMenuItem, { onClick: () => handleQuickAppClick(app), disabled: !app.url, children: [app.icon, app.title] }, app.id))), showAllServicesButton && (jsxs(DropdownMenuItem, { className: "justify-between items-center", onClick: handleAllServicesClick, children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(LayoutGrid, { className: "w-4 h-4" }), "\u0412\u0441\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B"] }), jsx(ChevronRight, { className: "w-4 h-4 text-[#3F3F46]" })] }))] }) })] }), jsx(Dialog, { open: isAppsModalOpen, onOpenChange: setIsAppsModalOpen, children: jsxs(DialogContent, { className: "overflow-y-auto p-6", style: {
                        maxWidth: "calc(100vw - 240px)",
                        maxHeight: "95vh",
                    }, children: [jsx(DialogHeader, { className: "h-fit", children: jsx(DialogTitle, { className: "text-xl font-semibold", children: "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439" }) }), jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6", children: fullApps
                                .filter((app) => app.id !== currentApp) // Убираем текущее приложение
                                .map((app) => (jsx(Card, { className: app.url
                                    ? "cursor-pointer hover:shadow-md transition-shadow"
                                    : "", onClick: () => app.url && handleFullAppClick(app), children: jsxs(CardContent, { className: "p-4", children: [jsxs("div", { className: "flex items-start justify-between mb-3 relative", children: [jsxs("div", { className: "flex items-center gap-3 relative", children: [jsx("div", { className: "z-10", children: app.icon }), jsx("div", { className: `absolute top-2 left-4 w-6 h-7 rounded-[3px] ${app.iconBg} z-0` })] }), app.url && (jsx(Button, { variant: "ghost", size: "icon", className: "p-0 cursor-pointer", onClick: (e) => {
                                                        e.stopPropagation();
                                                        handleFullAppClick(app);
                                                    }, children: jsx(ExternalLink, { className: "w-4 h-4" }) }))] }), jsx("h3", { className: "font-bold text-sm mb-2 leading-tight text-[#09090B]", children: app.title }), jsx("p", { className: "text-xs text-slate-500 leading-relaxed", children: app.description })] }) }, app.id))) })] }) })] }));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".workspace-menu-root{--wm-background:0 0% 100%;--wm-foreground:222.2 84% 4.9%;--wm-card:0 0% 100%;--wm-card-foreground:222.2 84% 4.9%;--wm-popover:0 0% 100%;--wm-popover-foreground:222.2 84% 4.9%;--wm-primary:222.2 47.4% 11.2%;--wm-primary-foreground:210 40% 98%;--wm-secondary:210 40% 96%;--wm-secondary-foreground:222.2 84% 4.9%;--wm-muted:210 40% 96%;--wm-muted-foreground:215.4 16.3% 46.9%;--wm-accent:210 40% 96%;--wm-accent-foreground:222.2 84% 4.9%;--wm-destructive:0 84.2% 60.2%;--wm-destructive-foreground:210 40% 98%;--wm-border:214.3 31.8% 91.4%;--wm-input:214.3 31.8% 91.4%;--wm-ring:222.2 84% 4.9%;--wm-radius:0.5rem}.workspace-menu-root.dark{--wm-background:222.2 84% 4.9%;--wm-foreground:210 40% 98%;--wm-card:222.2 84% 4.9%;--wm-card-foreground:210 40% 98%;--wm-popover:222.2 84% 4.9%;--wm-popover-foreground:210 40% 98%;--wm-primary:210 40% 98%;--wm-primary-foreground:222.2 47.4% 11.2%;--wm-secondary:217.2 32.6% 17.5%;--wm-secondary-foreground:210 40% 98%;--wm-muted:217.2 32.6% 17.5%;--wm-muted-foreground:215 20.2% 65.1%;--wm-accent:217.2 32.6% 17.5%;--wm-accent-foreground:210 40% 98%;--wm-destructive:0 62.8% 30.6%;--wm-destructive-foreground:210 40% 98%;--wm-border:217.2 32.6% 17.5%;--wm-input:217.2 32.6% 17.5%;--wm-ring:212.7 26.8% 83.9%}";
styleInject(css_248z);

export { Button, Card, CardContent, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, Widget, Widget as default };
//# sourceMappingURL=index.esm.js.map
