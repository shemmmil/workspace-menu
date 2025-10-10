import React, { useState } from "react";
import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { Card, CardContent } from "./components/ui/card";
import {
  BarChart3,
  Brain,
  ChevronRight,
  ChevronsUpDown,
  HandMetal,
  Headphones,
  LayoutGrid,
  ExternalLink,
  Mail,
  Newspaper,
  FileCheck2,
  PencilRuler,
} from "lucide-react";

// Types
export type AppId =
  | "manager"
  | "partners"
  | "knowledge"
  | "helpdesk"
  | "corporate-mail"
  | "documentolog"
  | "bim360"
  | "1c-estimate"
  | "macro-erp"
  | "plan-radar";

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
  onNavigate?: (url: string, appId: string) => void;
  className?: string;
  showAllServicesButton?: boolean;
}

// Default quick access apps
const defaultQuickAccessApps: QuickAccessApp[] = [
  {
    id: "manager",
    title: "Панель руководителя",
    icon: <BarChart3 className="w-4 h-4 text-[#65A30D]" />,
    url: "/manager",
  },
  {
    id: "partners",
    title: "Портал партнеров",
    icon: <HandMetal className="w-4 h-4 text-[#a21caf]" />,
    url: "/partners",
  },
  {
    id: "knowledge",
    title: "База знаний",
    icon: <Brain className="w-4 h-4 text-[#4F46E5]" />,
    url: "/knowledge",
  },
  {
    id: "helpdesk",
    title: "Help Desk",
    icon: <Headphones className="w-4 h-4 text-[#4346A2]" />,
    url: "/helpdesk",
  },
];

// Default full apps list
const defaultFullApps: FullApp[] = [
  {
    id: "corporate-mail",
    title: "Корпоративная почта",
    description:
      "Ваш почтовый ящик, Получение важных рассылок, Создание встреч и совещаний",
    icon: <Mail className="w-8 h-8 text-[#4346A2]" />,
    iconBg: "bg-[#EBECFF]",
  },
  {
    id: "documentolog",
    title: "Электронный документооборот Documentolog",
    description:
      "Договоры, Контракты, Акты и накладные, Кадровый ЭДО, Контроль поручений",
    icon: <Newspaper className="w-8 h-8 text-orange-600" />,
    iconBg: "bg-orange-100",
  },
  {
    id: "knowledge",
    title: "База знаний",
    description:
      "Корпоративные стандарты, Регламенты, Шаблоны документов, Руководства и мануалы",
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
    iconBg: "bg-indigo-100",
  },
  {
    id: "manager",
    title: "Панель Руководителя. Сервис по планированию графиков",
    description:
      "Контроль вех, еженедельные отчёты СМР, сводка по проектам, сервис планирования графиков СМР и ГПП",
    icon: <BarChart3 className="w-8 h-8 text-lime-600" />,
    iconBg: "bg-lime-100",
  },
  {
    id: "partners",
    title: "Портал партнеров (тендерная площадка)",
    description:
      "Объявления о тендерах, Документы для участия, Результаты тендеров, Партнерские предложения",
    icon: <HandMetal className="w-8 h-8 text-fuchsia-600" />,
    iconBg: "bg-fuchsia-100",
  },
  {
    id: "bim360",
    title: "BIM360 (Инженерный документооборот)",
    description:
      "Взаимодействие с проектировщиками, контроль готовности РП, координация техотдела и стройки.",
    icon: <FileCheck2 className="w-8 h-8 text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    id: "1c-estimate",
    title: "1С:Смета",
    description:
      "Управление сметами, бюджетом переменных затрат и базой индикативных цен",
    icon: <OneCIcon />,
    iconBg: "bg-amber-100",
  },
  {
    id: "macro-erp",
    title: "MacroERP",
    description:
      "Сквозной учёт: сметные данные, договоры, поставки, оплаты и оперативная отчётность",
    icon: <MacroERPIcon />,
    iconBg: "bg-pink-100",
  },
  {
    id: "plan-radar",
    title: "Plan Radar",
    description:
      "Учёт дефектов по строительно-монтажным работам, мониторинг статуса и работа с документацией",
    icon: <PencilRuler className="w-8 h-8 text-rose-600" />,
    iconBg: "bg-rose-100",
  },
];

// Custom icons
function OneCIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="1C"
    >
      <path
        d="M7.27275 7.27274V24.7272H2.90906V13.0909H0V8.72724H2.90906V7.27274H7.27275ZM21.5273 14.5454H26.0364C25.3091 10.4727 21.8182 7.27274 17.4545 7.27274C12.6545 7.27274 8.72725 11.2 8.72725 16C8.72725 20.7026 12.4969 24.5724 17.1636 24.7272H32V20.3636H17.4546C13.3125 20.2708 11.9342 15.7128 14.1375 13.1359C16.3177 10.6042 20.4394 11.4068 21.5386 14.577"
        fill="#F59E0B"
      />
    </svg>
  );
}

function MacroERPIcon() {
  return (
    <svg
      width="32"
      height="26"
      viewBox="0 0 32 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MacroERP"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5224 -0.00979614L16.0001 5.32204L6.47779 -0.00979614L0 3.6171L16.0001 12.5753L31.9997 3.6171L25.5224 -0.00979614Z"
        fill="#C85FA5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9996 3.61734L16 12.5755V21.5321L24.0006 17.0532V26.0098L31.9996 21.5311V3.61734Z"
        fill="#7391C8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.61734L16.0001 12.5755V21.5321L7.99951 17.0532V26.0098L0 21.5311V3.61734Z"
        fill="#50648C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.0006 17.0529L16 21.5318L24.0006 26.0095V17.0529Z"
        fill="#AAAAAA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 17.0529L16.0006 21.5318L8 26.0095V17.0529Z"
        fill="#D2D2D2"
      />
    </svg>
  );
}

// Main component
export const Widget: React.FC<WidgetProps> = ({
  currentApp,
  quickAccessApps = defaultQuickAccessApps,
  fullApps = defaultFullApps,
  onNavigate,
  className = "",
  showAllServicesButton = true,
}) => {
  const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);

  const handleQuickAppClick = (app: QuickAccessApp) => {
    if (onNavigate && app.url) {
      onNavigate(app.url, app.id);
    } else if (app.url) {
      window.location.href = app.url;
    }
  };

  const handleFullAppClick = (app: FullApp) => {
    if (onNavigate && app.url) {
      onNavigate(app.url, app.id);
    } else if (app.url) {
      window.open(app.url, "_blank");
    }
    setIsAppsModalOpen(false);
  };

  const handleAllServicesClick = () => {
    setIsAppsModalOpen(true);
  };

  return (
    <div className="workspace-menu-root">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`w-full justify-between !px-4 !py-2.5 ${className}`}
          >
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-[#5C60CC]" />
              IT Сервисы
            </div>
            <ChevronsUpDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuGroup>
            {quickAccessApps
              .filter((app) => app.id !== currentApp) // Убираем текущее приложение
              .map((app) => (
                <DropdownMenuItem
                  key={app.id}
                  onClick={() => handleQuickAppClick(app)}
                  disabled={!app.url}
                >
                  {app.icon}
                  {app.title}
                </DropdownMenuItem>
              ))}

            {showAllServicesButton && (
              <DropdownMenuItem
                className="justify-between items-center"
                onClick={handleAllServicesClick}
              >
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  Все сервисы
                </div>
                <ChevronRight className="w-4 h-4 text-[#3F3F46]" />
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isAppsModalOpen} onOpenChange={setIsAppsModalOpen}>
        <DialogContent
          className="overflow-y-auto p-6"
          style={{
            maxWidth: "calc(100vw - 240px)",
            maxHeight: "95vh",
          }}
        >
          <DialogHeader className="h-fit">
            <DialogTitle className="text-xl font-semibold">
              Список всех доступных приложений
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {fullApps
              .filter((app) => app.id !== currentApp) // Убираем текущее приложение
              .map((app) => (
                <Card
                  key={app.id}
                  className={
                    app.url
                      ? "cursor-pointer hover:shadow-md transition-shadow"
                      : ""
                  }
                  onClick={() => app.url && handleFullAppClick(app)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3 relative">
                      <div className="flex items-center gap-3 relative">
                        <div className="z-10">{app.icon}</div>
                        <div
                          className={`absolute top-2 left-4 w-6 h-7 rounded-[3px] ${app.iconBg} z-0`}
                        />
                      </div>
                      {app.url && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="p-0 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFullAppClick(app);
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <h3 className="font-bold text-sm mb-2 leading-tight text-[#09090B]">
                      {app.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Widget;
