import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { XIcon, BarChart3, HandMetal, Brain, Headphones, Mail, Newspaper, FileCheck2, PencilRuler, LayoutGrid, ChevronsUpDown, ChevronRight, ExternalLink } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (jsx(Comp, { "data-slot": "button", className: cn(buttonVariants({ variant, size, className })), ...props }));
}

function DropdownMenu({ ...props }) {
    return jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({ ...props }) {
    return (jsx(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props }));
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return (jsx(DropdownMenuPrimitive.Portal, { children: jsx(DropdownMenuPrimitive.Content, { "data-slot": "dropdown-menu-content", sideOffset: sideOffset, className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className), ...props }) }));
}
function DropdownMenuGroup({ ...props }) {
    return (jsx(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props }));
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return (jsx(DropdownMenuPrimitive.Item, { "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props }));
}

function Dialog({ ...props }) {
    return jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({ ...props }) {
    return jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({ className, ...props }) {
    return (jsx(DialogPrimitive.Overlay, { "data-slot": "dialog-overlay", className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className), ...props }));
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return (jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [jsx(DialogOverlay, {}), jsxs(DialogPrimitive.Content, { "data-slot": "dialog-content", className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className), ...props, children: [children, showCloseButton && (jsxs(DialogPrimitive.Close, { "data-slot": "dialog-close", className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [jsx(XIcon, {}), jsx("span", { className: "sr-only", children: "Close" })] }))] })] }));
}
function DialogHeader({ className, ...props }) {
    return (jsx("div", { "data-slot": "dialog-header", className: cn("flex flex-col gap-2 text-center sm:text-left", className), ...props }));
}
function DialogTitle({ className, ...props }) {
    return (jsx(DialogPrimitive.Title, { "data-slot": "dialog-title", className: cn("text-lg leading-none font-semibold", className), ...props }));
}
function DialogDescription({ className, ...props }) {
    return (jsx(DialogPrimitive.Description, { "data-slot": "dialog-description", className: cn("text-muted-foreground text-sm", className), ...props }));
}

function Card({ className, ...props }) {
    return (jsx("div", { "data-slot": "card", className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className), ...props }));
}
function CardContent({ className, ...props }) {
    return (jsx("div", { "data-slot": "card-content", className: cn("px-6", className), ...props }));
}

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

var css_248z = "/*! tailwindcss v4.1.14 | MIT License | https://tailwindcss.com */@layer theme, base, components, utilities;@layer theme{:host,:root{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-orange-100:oklch(95.4% 0.038 75.164);--color-orange-600:oklch(64.6% 0.222 41.116);--color-amber-100:oklch(96.2% 0.059 95.617);--color-lime-100:oklch(96.7% 0.067 122.328);--color-lime-600:oklch(64.8% 0.2 131.684);--color-green-500:oklch(72.3% 0.219 149.579);--color-blue-100:oklch(93.2% 0.032 255.585);--color-blue-500:oklch(62.3% 0.214 259.815);--color-blue-600:oklch(54.6% 0.245 262.881);--color-indigo-100:oklch(93% 0.034 272.788);--color-indigo-600:oklch(51.1% 0.262 276.966);--color-purple-100:oklch(94.6% 0.033 307.174);--color-purple-600:oklch(55.8% 0.288 302.321);--color-fuchsia-100:oklch(95.2% 0.037 318.852);--color-fuchsia-600:oklch(59.1% 0.293 322.896);--color-pink-100:oklch(94.8% 0.028 342.258);--color-rose-100:oklch(94.1% 0.03 12.58);--color-rose-600:oklch(58.6% 0.253 17.585);--color-slate-500:oklch(55.4% 0.046 257.417);--color-black:#000;--color-white:#fff;--spacing:0.25rem;--container-xs:20rem;--container-sm:24rem;--container-lg:32rem;--text-xs:0.75rem;--text-xs--line-height:1.33333;--text-sm:0.875rem;--text-sm--line-height:1.42857;--text-lg:1.125rem;--text-lg--line-height:1.55556;--text-xl:1.25rem;--text-xl--line-height:1.4;--text-2xl:1.5rem;--text-2xl--line-height:1.33333;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-0.025em;--tracking-widest:0.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-xs:0.125rem;--radius-sm:calc(0.5rem - 4px);--radius-md:calc(0.5rem - 2px);--radius-lg:0.5rem;--radius-xl:0.75rem;--blur-sm:8px;--default-transition-duration:150ms;--default-transition-timing-function:cubic-bezier(0.4,0,0.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-border:#e2e8f0;--color-input:#e2e8f0;--color-ring:#020817;--color-background:#fff;--color-foreground:#020817;--color-primary:#0f172a;--color-primary-foreground:#f8fafc;--color-secondary:#f1f5f9;--color-secondary-foreground:#020817;--color-destructive:#ef4444;--color-destructive-foreground:#f8fafc;--color-muted:#f1f5f9;--color-muted-foreground:#64748b;--color-accent:#f1f5f9;--color-accent-foreground:#020817;--color-popover:#fff;--color-popover-foreground:#020817;--color-card:#fff;--color-card-foreground:#020817}}@layer base{*,::backdrop,::file-selector-button,:after,:before{border:0 solid;box-sizing:border-box;margin:0;padding:0}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:var(--default-font-feature-settings,normal);-webkit-tap-highlight-color:transparent;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-variation-settings:var(--default-font-variation-settings,normal);line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:var(--default-mono-font-feature-settings,normal);font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-size:1em;font-variation-settings:var(--default-mono-font-variation-settings,normal)}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}menu,ol,ul{list-style:none}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}::file-selector-button,button,input,optgroup,select,textarea{font-feature-settings:inherit;background-color:transparent;border-radius:0;color:inherit;font:inherit;font-variation-settings:inherit;letter-spacing:inherit;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentcolor;@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,currentcolor 50%,transparent)}}::placeholder{color:currentcolor;@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}::file-selector-button,button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.\\@container\\/card-header{container-name:card-header;container-type:inline-size}.pointer-events-none{pointer-events:none}.sr-only{border-width:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute,.sr-only{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-\\[50\\%\\]{top:50%}.right-4{right:calc(var(--spacing)*4)}.left-2{left:calc(var(--spacing)*2)}.left-4{left:calc(var(--spacing)*4)}.left-\\[50\\%\\]{left:50%}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.col-start-2{grid-column-start:2}.row-span-2{grid-row:span 2/span 2}.row-start-1{grid-row-start:1}.container{width:100%;@media (width >= 40rem){max-width:40rem}@media (width >= 48rem){max-width:48rem}@media (width >= 64rem){max-width:64rem}@media (width >= 80rem){max-width:80rem}@media (width >= 96rem){max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing)*-1)}.mx-auto{margin-inline:auto}.my-1{margin-block:calc(var(--spacing)*1)}.mt-6{margin-top:calc(var(--spacing)*6)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.ml-auto{margin-left:auto}.flex{display:flex}.grid{display:grid}.inline-flex{display:inline-flex}.table{display:table}.size-2{height:calc(var(--spacing)*2);width:calc(var(--spacing)*2)}.size-3{height:calc(var(--spacing)*3);width:calc(var(--spacing)*3)}.size-3\\.5{height:calc(var(--spacing)*3.5);width:calc(var(--spacing)*3.5)}.size-4{height:calc(var(--spacing)*4);width:calc(var(--spacing)*4)}.size-8{height:calc(var(--spacing)*8);width:calc(var(--spacing)*8)}.size-9{height:calc(var(--spacing)*9);width:calc(var(--spacing)*9)}.size-10{height:calc(var(--spacing)*10);width:calc(var(--spacing)*10)}.h-2{height:calc(var(--spacing)*2)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-fit{height:-moz-fit-content;height:fit-content}.h-px{height:1px}.max-h-\\(--radix-dropdown-menu-content-available-height\\){max-height:var(--radix-dropdown-menu-content-available-height)}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing)*2)}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-56{width:calc(var(--spacing)*56)}.w-64{width:calc(var(--spacing)*64)}.w-full{width:100%}.max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.max-w-lg{max-width:var(--container-lg)}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-\\[8rem\\]{min-width:8rem}.shrink-0{flex-shrink:0}.origin-\\(--radix-dropdown-menu-content-transform-origin\\){transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%}.translate-x-\\[-50\\%\\],.translate-y-\\[-50\\%\\]{translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.auto-rows-min{grid-auto-rows:min-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.space-y-1{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*1*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*1*var(--tw-space-y-reverse))}}.self-start{align-self:flex-start}.justify-self-end{justify-self:flex-end}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded-\\[3px\\]{border-radius:3px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-xs{border-radius:var(--radius-xs)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-input{border-color:var(--color-input)}.bg-\\[\\#EBECFF\\]{background-color:#ebecff}.bg-amber-100{background-color:var(--color-amber-100)}.bg-background{background-color:var(--color-background)}.bg-black{background-color:var(--color-black)}.bg-black\\/50{background-color:color-mix(in srgb,#000 50%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-100{background-color:var(--color-blue-100)}.bg-border{background-color:var(--color-border)}.bg-card{background-color:var(--color-card)}.bg-destructive{background-color:var(--color-destructive)}.bg-fuchsia-100{background-color:var(--color-fuchsia-100)}.bg-indigo-100{background-color:var(--color-indigo-100)}.bg-lime-100{background-color:var(--color-lime-100)}.bg-muted{background-color:var(--color-muted)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-popover{background-color:var(--color-popover)}.bg-primary{background-color:var(--color-primary)}.bg-purple-100{background-color:var(--color-purple-100)}.bg-rose-100{background-color:var(--color-rose-100)}.bg-secondary{background-color:var(--color-secondary)}.bg-white{background-color:var(--color-white)}.fill-current{fill:currentcolor}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.\\!px-4{padding-inline:calc(var(--spacing)*4)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.\\!py-2\\.5{padding-block:calc(var(--spacing)*2.5)!important}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-0{padding-top:calc(var(--spacing)*0)}.pr-2{padding-right:calc(var(--spacing)*2)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#3F3F46\\]{color:#3f3f46}.text-\\[\\#4F46E5\\]{color:#4f46e5}.text-\\[\\#5C60CC\\]{color:#5c60cc}.text-\\[\\#65A30D\\]{color:#65a30d}.text-\\[\\#4346A2\\]{color:#4346a2}.text-\\[\\#09090B\\]{color:#09090b}.text-\\[\\#a21caf\\]{color:#a21caf}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-card-foreground{color:var(--color-card-foreground)}.text-destructive-foreground{color:var(--color-destructive-foreground)}.text-fuchsia-600{color:var(--color-fuchsia-600)}.text-green-500{color:var(--color-green-500)}.text-indigo-600{color:var(--color-indigo-600)}.text-lime-600{color:var(--color-lime-600)}.text-muted-foreground{color:var(--color-muted-foreground)}.text-orange-600{color:var(--color-orange-600)}.text-popover-foreground{color:var(--color-popover-foreground)}.text-primary{color:var(--color-primary)}.text-primary-foreground{color:var(--color-primary-foreground)}.text-purple-600{color:var(--color-purple-600)}.text-rose-600{color:var(--color-rose-600)}.text-secondary-foreground{color:var(--color-secondary-foreground)}.text-slate-500{color:var(--color-slate-500)}.text-white{color:var(--color-white)}.underline-offset-4{text-underline-offset:4px}.opacity-60{opacity:60%}.opacity-70{opacity:70%}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow,.shadow-lg{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,rgba(0,0,0,.1)),0 4px 6px -4px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,rgba(0,0,0,.1)),0 2px 4px -2px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow-md,.shadow-sm{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.05))}.ring,.shadow-xs{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor)}.ring-offset-background{--tw-ring-offset-color:var(--color-background)}.outline-hidden{--tw-outline-style:none;outline-style:none;@media (forced-colors:active){outline:2px solid transparent;outline-offset:2px}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition-all{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-colors{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-opacity{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-shadow{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.duration-200{--tw-duration:200ms;transition-duration:.2s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.hover\\:bg-accent{&:hover{@media (hover:hover){background-color:var(--color-accent)}}}.hover\\:bg-destructive\\/90{&:hover{@media (hover:hover){background-color:color-mix(in srgb,#ef4444 90%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-destructive) 90%,transparent)}}}}.hover\\:bg-primary\\/90{&:hover{@media (hover:hover){background-color:color-mix(in srgb,#0f172a 90%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-primary) 90%,transparent)}}}}.hover\\:bg-secondary\\/80{&:hover{@media (hover:hover){background-color:color-mix(in srgb,#f1f5f9 80%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-secondary) 80%,transparent)}}}}.hover\\:text-accent-foreground{&:hover{@media (hover:hover){color:var(--color-accent-foreground)}}}.hover\\:underline{&:hover{@media (hover:hover){text-decoration-line:underline}}}.hover\\:opacity-100{&:hover{@media (hover:hover){opacity:100%}}}.hover\\:shadow-md{&:hover{@media (hover:hover){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,rgba(0,0,0,.1)),0 2px 4px -2px var(--tw-shadow-color,rgba(0,0,0,.1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}}.focus\\:bg-accent{&:focus{background-color:var(--color-accent)}}.focus\\:text-accent-foreground{&:focus{color:var(--color-accent-foreground)}}.focus\\:ring-2{&:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:ring-ring{&:focus{--tw-ring-color:var(--color-ring)}}.focus\\:ring-offset-2{&:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}}.focus\\:outline-hidden{&:focus{--tw-outline-style:none;outline-style:none;@media (forced-colors:active){outline:2px solid transparent;outline-offset:2px}}}.focus-visible\\:border-ring{&:focus-visible{border-color:var(--color-ring)}}.focus-visible\\:ring-\\[3px\\]{&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus-visible\\:ring-destructive\\/20{&:focus-visible{--tw-ring-color:color-mix(in srgb,#ef4444 20%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-ring-color:color-mix(in oklab,var(--color-destructive) 20%,transparent)}}}.focus-visible\\:ring-ring\\/50{&:focus-visible{--tw-ring-color:color-mix(in srgb,#020817 50%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-ring-color:color-mix(in oklab,var(--color-ring) 50%,transparent)}}}.disabled\\:pointer-events-none{&:disabled{pointer-events:none}}.disabled\\:opacity-50{&:disabled{opacity:50%}}.has-data-\\[slot\\=card-action\\]\\:grid-cols-\\[1fr_auto\\]{&:has([data-slot=card-action]){grid-template-columns:1fr auto}}.has-\\[\\>svg\\]\\:px-2\\.5{&:has(>svg){padding-inline:calc(var(--spacing)*2.5)}}.has-\\[\\>svg\\]\\:px-3{&:has(>svg){padding-inline:calc(var(--spacing)*3)}}.has-\\[\\>svg\\]\\:px-4{&:has(>svg){padding-inline:calc(var(--spacing)*4)}}.aria-invalid\\:border-destructive{&[aria-invalid=true]{border-color:var(--color-destructive)}}.aria-invalid\\:ring-destructive\\/20{&[aria-invalid=true]{--tw-ring-color:color-mix(in srgb,#ef4444 20%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-ring-color:color-mix(in oklab,var(--color-destructive) 20%,transparent)}}}.data-\\[disabled\\]\\:pointer-events-none{&[data-disabled]{pointer-events:none}}.data-\\[disabled\\]\\:opacity-50{&[data-disabled]{opacity:50%}}.data-\\[inset\\]\\:pl-8{&[data-inset]{padding-left:calc(var(--spacing)*8)}}.data-\\[state\\=open\\]\\:bg-accent{&[data-state=open]{background-color:var(--color-accent)}}.data-\\[state\\=open\\]\\:text-accent-foreground{&[data-state=open]{color:var(--color-accent-foreground)}}.data-\\[state\\=open\\]\\:text-muted-foreground{&[data-state=open]{color:var(--color-muted-foreground)}}.data-\\[variant\\=destructive\\]\\:text-destructive{&[data-variant=destructive]{color:var(--color-destructive)}}.data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10{&[data-variant=destructive]{&:focus{background-color:color-mix(in srgb,#ef4444 10%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-destructive) 10%,transparent)}}}}.data-\\[variant\\=destructive\\]\\:focus\\:text-destructive{&[data-variant=destructive]{&:focus{color:var(--color-destructive)}}}.dark\\:bg-destructive\\/60,.dark\\:bg-input\\/30,.dark\\:border-input,.dark\\:hover\\:bg-accent\\/50,.lg\\:grid-cols-3,.md\\:grid-cols-2,.sm\\:flex-row,.sm\\:justify-end,.sm\\:max-w-lg,.sm\\:text-left{@media (prefers-color-scheme:dark){&:hover{@media (hover:hover){background-color:color-mix(in srgb,#f1f5f9 50%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-accent) 50%,transparent)}}}}}.dark\\:hover\\:bg-input\\/50{@media (prefers-color-scheme:dark){&:hover{@media (hover:hover){background-color:color-mix(in srgb,#e2e8f0 50%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-input) 50%,transparent)}}}}}.dark\\:focus-visible\\:ring-destructive\\/40{@media (prefers-color-scheme:dark){&:focus-visible{--tw-ring-color:color-mix(in srgb,#ef4444 40%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-ring-color:color-mix(in oklab,var(--color-destructive) 40%,transparent)}}}}.dark\\:aria-invalid\\:ring-destructive\\/40{@media (prefers-color-scheme:dark){&[aria-invalid=true]{--tw-ring-color:color-mix(in srgb,#ef4444 40%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-ring-color:color-mix(in oklab,var(--color-destructive) 40%,transparent)}}}}.dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20{@media (prefers-color-scheme:dark){&[data-variant=destructive]{&:focus{background-color:color-mix(in srgb,#ef4444 20%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-destructive) 20%,transparent)}}}}}.\\[\\&_svg\\]\\:pointer-events-none{& svg{pointer-events:none}}.\\[\\&_svg\\]\\:shrink-0{& svg{flex-shrink:0}}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4{& svg:not([class*=size-]){height:calc(var(--spacing)*4);width:calc(var(--spacing)*4)}}.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground{& svg:not([class*=text-]){color:var(--color-muted-foreground)}}.\\[\\.border-b\\]\\:pb-6{&:is(.border-b){padding-bottom:calc(var(--spacing)*6)}}.\\[\\.border-t\\]\\:pt-6{&:is(.border-t){padding-top:calc(var(--spacing)*6)}}.data-\\[variant\\=destructive\\]\\:\\*\\:\\[svg\\]\\:\\!text-destructive{&[data-variant=destructive]{:is(&>*){&:is(svg){color:var(--color-destructive)!important}}}}}.workspace-menu-root,.workspace-menu-root *{--color-background:#fff;--color-foreground:#020817;--color-card:#fff;--color-card-foreground:#020817;--color-popover:#fff;--color-popover-foreground:#020817;--color-primary:#0f172a;--color-primary-foreground:#f8fafc;--color-secondary:#f1f5f9;--color-secondary-foreground:#020817;--color-muted:#f1f5f9;--color-muted-foreground:#64748b;--color-accent:#f1f5f9;--color-accent-foreground:#020817;--color-destructive:#ef4444;--color-destructive-foreground:#f8fafc;--color-border:#e2e8f0;--color-input:#e2e8f0;--color-ring:#020817}.workspace-menu-root.dark,.workspace-menu-root.dark *{--color-background:#020817;--color-foreground:#f8fafc;--color-card:#020817;--color-card-foreground:#f8fafc;--color-popover:#020817;--color-popover-foreground:#f8fafc;--color-primary:#f8fafc;--color-primary-foreground:#0f172a;--color-secondary:#1e293b;--color-secondary-foreground:#f8fafc;--color-muted:#1e293b;--color-muted-foreground:#94a3b8;--color-accent:#1e293b;--color-accent-foreground:#f8fafc;--color-destructive:#7f1d1d;--color-destructive-foreground:#f8fafc;--color-border:#1e293b;--color-input:#1e293b;--color-ring:#cbd5e1}[data-radix-popper-content-wrapper],[data-radix-popper-content-wrapper] *,[data-radix-portal],[data-radix-portal] *{--color-background:#fff;--color-foreground:#020817;--color-card:#fff;--color-card-foreground:#020817;--color-popover:#fff;--color-popover-foreground:#020817;--color-primary:#0f172a;--color-primary-foreground:#f8fafc;--color-secondary:#f1f5f9;--color-secondary-foreground:#020817;--color-muted:#f1f5f9;--color-muted-foreground:#64748b;--color-accent:#f1f5f9;--color-accent-foreground:#020817;--color-destructive:#ef4444;--color-destructive-foreground:#f8fafc;--color-border:#e2e8f0;--color-input:#e2e8f0;--color-ring:#020817}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}";
styleInject(css_248z);

export { Button, Card, CardContent, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, Widget, Widget as default };
//# sourceMappingURL=index.esm.js.map
