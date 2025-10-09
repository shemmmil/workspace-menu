'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var lucideReact = require('lucide-react');
var DialogPrimitive = require('@radix-ui/react-dialog');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(DropdownMenuPrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(DialogPrimitive);

function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}

const buttonVariants = classVarianceAuthority.cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
const Button = React__namespace.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = "Button";

const DropdownMenu = DropdownMenuPrimitive__namespace.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
const DropdownMenuSubTrigger = React__namespace.forwardRef(({ className, inset, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.SubTrigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className), ...props, children: [children, jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })] })));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive__namespace.SubTrigger.displayName;
const DropdownMenuSubContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.SubContent, { ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive__namespace.SubContent.displayName;
const DropdownMenuContent = React__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Content, { ref: ref, sideOffset: sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
const DropdownMenuItem = React__namespace.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Item, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props })));
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
const DropdownMenuCheckboxItem = React__namespace.forwardRef(({ className, children, checked, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.CheckboxItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked, ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }), children] })));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
const DropdownMenuRadioItem = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.RadioItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
const DropdownMenuLabel = React__namespace.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
const DropdownMenuSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;

const Dialog = DialogPrimitive__namespace.Root;
const DialogPortal = DialogPrimitive__namespace.Portal;
const DialogOverlay = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Overlay, { ref: ref, className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props })));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
const DialogContent = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(DialogPortal, { children: [jsxRuntime.jsx(DialogOverlay, {}), jsxRuntime.jsxs(DialogPrimitive__namespace.Content, { ref: ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [children, jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }), jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })] })] })] })));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
const DialogHeader = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }));
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Title, { ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props })));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
const DialogDescription = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props })));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;

const Card = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })));
Card.displayName = "Card";
const CardHeader = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";

// Default quick access apps
const defaultQuickAccessApps = [
    {
        id: "manager",
        title: "Панель руководителя",
        icon: jsxRuntime.jsx(lucideReact.BarChart3, { className: "w-4 h-4 text-[#65A30D]" }),
        url: "/manager",
    },
    {
        id: "partners",
        title: "Портал партнеров",
        icon: jsxRuntime.jsx(lucideReact.HandMetal, { className: "w-4 h-4 text-[#a21caf]" }),
        url: "/partners",
    },
    {
        id: "knowledge",
        title: "База знаний",
        icon: jsxRuntime.jsx(lucideReact.Brain, { className: "w-4 h-4 text-[#4F46E5]" }),
        url: "/knowledge",
    },
    {
        id: "helpdesk",
        title: "Help Desk",
        icon: jsxRuntime.jsx(lucideReact.Headphones, { className: "w-4 h-4 text-[#4346A2]" }),
        url: "/helpdesk",
    },
];
// Default full apps list
const defaultFullApps = [
    {
        id: "corporate-mail",
        title: "Корпоративная почта",
        description: "Ваш почтовый ящик, Получение важных рассылок, Создание встреч и совещаний",
        icon: jsxRuntime.jsx(lucideReact.Mail, { className: "w-8 h-8 text-[#4346A2]" }),
        iconBg: "bg-[#EBECFF]",
    },
    {
        id: "documentolog",
        title: "Электронный документооборот Documentolog",
        description: "Договоры, Контракты, Акты и накладные, Кадровый ЭДО, Контроль поручений",
        icon: jsxRuntime.jsx(lucideReact.Newspaper, { className: "w-8 h-8 text-orange-600" }),
        iconBg: "bg-orange-100",
    },
    {
        id: "knowledge",
        title: "База знаний",
        description: "Корпоративные стандарты, Регламенты, Шаблоны документов, Руководства и мануалы",
        icon: jsxRuntime.jsx(lucideReact.BarChart3, { className: "w-8 h-8 text-indigo-600" }),
        iconBg: "bg-indigo-100",
    },
    {
        id: "manager",
        title: "Панель Руководителя. Сервис по планированию графиков",
        description: "Контроль вех, еженедельные отчёты СМР, сводка по проектам, сервис планирования графиков СМР и ГПП",
        icon: jsxRuntime.jsx(lucideReact.BarChart3, { className: "w-8 h-8 text-lime-600" }),
        iconBg: "bg-lime-100",
    },
    {
        id: "partners",
        title: "Портал партнеров (тендерная площадка)",
        description: "Объявления о тендерах, Документы для участия, Результаты тендеров, Партнерские предложения",
        icon: jsxRuntime.jsx(lucideReact.HandMetal, { className: "w-8 h-8 text-fuchsia-600" }),
        iconBg: "bg-fuchsia-100",
    },
    {
        id: "bim360",
        title: "BIM360 (Инженерный документооборот)",
        description: "Взаимодействие с проектировщиками, контроль готовности РП, координация техотдела и стройки.",
        icon: jsxRuntime.jsx(lucideReact.FileCheck2, { className: "w-8 h-8 text-blue-600" }),
        iconBg: "bg-blue-100",
    },
    {
        id: "1c-estimate",
        title: "1С:Смета",
        description: "Управление сметами, бюджетом переменных затрат и базой индикативных цен",
        icon: jsxRuntime.jsx(OneCIcon, {}),
        iconBg: "bg-amber-100",
    },
    {
        id: "macro-erp",
        title: "MacroERP",
        description: "Сквозной учёт: сметные данные, договоры, поставки, оплаты и оперативная отчётность",
        icon: jsxRuntime.jsx(MacroERPIcon, {}),
        iconBg: "bg-pink-100",
    },
    {
        id: "plan-radar",
        title: "Plan Radar",
        description: "Учёт дефектов по строительно-монтажным работам, мониторинг статуса и работа с документацией",
        icon: jsxRuntime.jsx(lucideReact.PencilRuler, { className: "w-8 h-8 text-rose-600" }),
        iconBg: "bg-rose-100",
    },
];
// Custom icons
function OneCIcon() {
    return (jsxRuntime.jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-label": "1C", children: jsxRuntime.jsx("path", { d: "M7.27275 7.27274V24.7272H2.90906V13.0909H0V8.72724H2.90906V7.27274H7.27275ZM21.5273 14.5454H26.0364C25.3091 10.4727 21.8182 7.27274 17.4545 7.27274C12.6545 7.27274 8.72725 11.2 8.72725 16C8.72725 20.7026 12.4969 24.5724 17.1636 24.7272H32V20.3636H17.4546C13.3125 20.2708 11.9342 15.7128 14.1375 13.1359C16.3177 10.6042 20.4394 11.4068 21.5386 14.577", fill: "#F59E0B" }) }));
}
function MacroERPIcon() {
    return (jsxRuntime.jsxs("svg", { width: "32", height: "26", viewBox: "0 0 32 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-label": "MacroERP", children: [jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.5224 -0.00979614L16.0001 5.32204L6.47779 -0.00979614L0 3.6171L16.0001 12.5753L31.9997 3.6171L25.5224 -0.00979614Z", fill: "#C85FA5" }), jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9996 3.61734L16 12.5755V21.5321L24.0006 17.0532V26.0098L31.9996 21.5311V3.61734Z", fill: "#7391C8" }), jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 3.61734L16.0001 12.5755V21.5321L7.99951 17.0532V26.0098L0 21.5311V3.61734Z", fill: "#50648C" }), jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0006 17.0529L16 21.5318L24.0006 26.0095V17.0529Z", fill: "#AAAAAA" }), jsxRuntime.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 17.0529L16.0006 21.5318L8 26.0095V17.0529Z", fill: "#D2D2D2" })] }));
}
// Main component
const Widget = ({ currentApp, quickAccessApps = defaultQuickAccessApps, fullApps = defaultFullApps, onNavigate, className = "", showAllServicesButton = true, }) => {
    const [isAppsModalOpen, setIsAppsModalOpen] = React.useState(false);
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
    return (jsxRuntime.jsxs("div", { className: "workspace-menu-root", children: [jsxRuntime.jsxs(DropdownMenu, { children: [jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: jsxRuntime.jsxs(Button, { variant: "outline", className: `w-full justify-between !px-4 !py-2.5 ${className}`, children: [jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx(lucideReact.LayoutGrid, { className: "w-4 h-4 text-[#5C60CC]" }), "IT \u0421\u0435\u0440\u0432\u0438\u0441\u044B"] }), jsxRuntime.jsx(lucideReact.ChevronsUpDown, { className: "w-4 h-4" })] }) }), jsxRuntime.jsx(DropdownMenuContent, { className: "w-56", align: "start", children: jsxRuntime.jsxs(DropdownMenuGroup, { children: [quickAccessApps
                                    .filter((app) => app.id !== currentApp) // Убираем текущее приложение
                                    .map((app) => (jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => handleQuickAppClick(app), disabled: !app.url, children: [app.icon, app.title] }, app.id))), showAllServicesButton && (jsxRuntime.jsxs(DropdownMenuItem, { className: "justify-between items-center", onClick: handleAllServicesClick, children: [jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx(lucideReact.LayoutGrid, { className: "w-4 h-4" }), "\u0412\u0441\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B"] }), jsxRuntime.jsx(lucideReact.ChevronRight, { className: "w-4 h-4 text-[#3F3F46]" })] }))] }) })] }), jsxRuntime.jsx(Dialog, { open: isAppsModalOpen, onOpenChange: setIsAppsModalOpen, children: jsxRuntime.jsxs(DialogContent, { className: "overflow-y-auto p-6", style: {
                        maxWidth: "calc(100vw - 240px)",
                        maxHeight: "95vh",
                    }, children: [jsxRuntime.jsx(DialogHeader, { className: "h-fit", children: jsxRuntime.jsx(DialogTitle, { className: "text-xl font-semibold", children: "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439" }) }), jsxRuntime.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6", children: fullApps
                                .filter((app) => app.id !== currentApp) // Убираем текущее приложение
                                .map((app) => (jsxRuntime.jsx(Card, { className: app.url
                                    ? "cursor-pointer hover:shadow-md transition-shadow"
                                    : "", onClick: () => app.url && handleFullAppClick(app), children: jsxRuntime.jsxs(CardContent, { className: "p-4", children: [jsxRuntime.jsxs("div", { className: "flex items-start justify-between mb-3 relative", children: [jsxRuntime.jsxs("div", { className: "flex items-center gap-3 relative", children: [jsxRuntime.jsx("div", { className: "z-10", children: app.icon }), jsxRuntime.jsx("div", { className: `absolute top-2 left-4 w-6 h-7 rounded-[3px] ${app.iconBg} z-0` })] }), app.url && (jsxRuntime.jsx(Button, { variant: "ghost", size: "icon", className: "p-0 cursor-pointer", onClick: (e) => {
                                                        e.stopPropagation();
                                                        handleFullAppClick(app);
                                                    }, children: jsxRuntime.jsx(lucideReact.ExternalLink, { className: "w-4 h-4" }) }))] }), jsxRuntime.jsx("h3", { className: "font-bold text-sm mb-2 leading-tight text-[#09090B]", children: app.title }), jsxRuntime.jsx("p", { className: "text-xs text-slate-500 leading-relaxed", children: app.description })] }) }, app.id))) })] }) })] }));
};

exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.Dialog = Dialog;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogHeader = DialogHeader;
exports.DialogTitle = DialogTitle;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Widget = Widget;
exports.default = Widget;
//# sourceMappingURL=index.js.map
