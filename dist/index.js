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
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(DropdownMenu, { children: [jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: jsxRuntime.jsxs(Button, { variant: "outline", className: `w-full justify-between !px-4 !py-2.5 ${className}`, children: [jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx(lucideReact.LayoutGrid, { className: "w-4 h-4 text-[#5C60CC]" }), "IT \u0421\u0435\u0440\u0432\u0438\u0441\u044B"] }), jsxRuntime.jsx(lucideReact.ChevronsUpDown, { className: "w-4 h-4" })] }) }), jsxRuntime.jsx(DropdownMenuContent, { className: "w-56", align: "start", children: jsxRuntime.jsxs(DropdownMenuGroup, { children: [quickAccessApps
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

var css_248z = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.18 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}:root{--background:0 0% 100%;--foreground:222.2 84% 4.9%;--card:0 0% 100%;--card-foreground:222.2 84% 4.9%;--popover:0 0% 100%;--popover-foreground:222.2 84% 4.9%;--primary:222.2 47.4% 11.2%;--primary-foreground:210 40% 98%;--secondary:210 40% 96%;--secondary-foreground:222.2 84% 4.9%;--muted:210 40% 96%;--muted-foreground:215.4 16.3% 46.9%;--accent:210 40% 96%;--accent-foreground:222.2 84% 4.9%;--destructive:0 84.2% 60.2%;--destructive-foreground:210 40% 98%;--border:214.3 31.8% 91.4%;--input:214.3 31.8% 91.4%;--ring:222.2 84% 4.9%;--radius:0.5rem}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.left-2{left:.5rem}.left-4{left:1rem}.left-\\[50\\%\\]{left:50%}.right-4{right:1rem}.top-2{top:.5rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.ml-auto{margin-left:auto}.mt-6{margin-top:1.5rem}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-fit{height:-moz-fit-content;height:fit-content}.h-px{height:1px}.w-10{width:2.5rem}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-56{width:14rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-full{width:100%}.min-w-\\[8rem\\]{min-width:8rem}.max-w-lg{max-width:32rem}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%}.translate-x-\\[-50\\%\\],.translate-y-\\[-50\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded-\\[3px\\]{border-radius:3px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.border{border-width:1px}.border-input{border-color:hsl(var(--input))}.bg-\\[\\#EBECFF\\]{--tw-bg-opacity:1;background-color:rgb(235 236 255/var(--tw-bg-opacity,1))}.bg-amber-100{--tw-bg-opacity:1;background-color:rgb(254 243 199/var(--tw-bg-opacity,1))}.bg-background{background-color:hsl(var(--background))}.bg-background\\/80{background-color:hsl(var(--background)/.8)}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity,1))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-fuchsia-100{--tw-bg-opacity:1;background-color:rgb(250 232 255/var(--tw-bg-opacity,1))}.bg-indigo-100{--tw-bg-opacity:1;background-color:rgb(224 231 255/var(--tw-bg-opacity,1))}.bg-lime-100{--tw-bg-opacity:1;background-color:rgb(236 252 203/var(--tw-bg-opacity,1))}.bg-muted{background-color:hsl(var(--muted))}.bg-orange-100{--tw-bg-opacity:1;background-color:rgb(255 237 213/var(--tw-bg-opacity,1))}.bg-pink-100{--tw-bg-opacity:1;background-color:rgb(252 231 243/var(--tw-bg-opacity,1))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-rose-100{--tw-bg-opacity:1;background-color:rgb(255 228 230/var(--tw-bg-opacity,1))}.bg-secondary{background-color:hsl(var(--secondary))}.fill-current{fill:currentColor}.p-0{padding:0}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.\\!px-4{padding-left:1rem!important;padding-right:1rem!important}.\\!py-2\\.5{padding-bottom:.625rem!important;padding-top:.625rem!important}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pl-8{padding-left:2rem}.pr-2{padding-right:.5rem}.pt-0{padding-top:0}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-.025em}.tracking-widest{letter-spacing:.1em}.text-\\[\\#09090B\\]{--tw-text-opacity:1;color:rgb(9 9 11/var(--tw-text-opacity,1))}.text-\\[\\#3F3F46\\]{--tw-text-opacity:1;color:rgb(63 63 70/var(--tw-text-opacity,1))}.text-\\[\\#4346A2\\]{--tw-text-opacity:1;color:rgb(67 70 162/var(--tw-text-opacity,1))}.text-\\[\\#4F46E5\\]{--tw-text-opacity:1;color:rgb(79 70 229/var(--tw-text-opacity,1))}.text-\\[\\#5C60CC\\]{--tw-text-opacity:1;color:rgb(92 96 204/var(--tw-text-opacity,1))}.text-\\[\\#65A30D\\]{--tw-text-opacity:1;color:rgb(101 163 13/var(--tw-text-opacity,1))}.text-\\[\\#a21caf\\]{--tw-text-opacity:1;color:rgb(162 28 175/var(--tw-text-opacity,1))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.text-card-foreground{color:hsl(var(--card-foreground))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-fuchsia-600{--tw-text-opacity:1;color:rgb(192 38 211/var(--tw-text-opacity,1))}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229/var(--tw-text-opacity,1))}.text-lime-600{--tw-text-opacity:1;color:rgb(101 163 13/var(--tw-text-opacity,1))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-orange-600{--tw-text-opacity:1;color:rgb(234 88 12/var(--tw-text-opacity,1))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-rose-600{--tw-text-opacity:1;color:rgb(225 29 72/var(--tw-text-opacity,1))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity,1))}.underline-offset-4{text-underline-offset:4px}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color:hsl(var(--background))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-shadow{transition-duration:.15s;transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive)/.9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary)/.9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary)/.8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color:hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color:hsl(var(--ring))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}";
styleInject(css_248z,{"insertAt":"top"});

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
