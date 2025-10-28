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
  Handshake,
  BookOpen,
  HeadsetIcon,
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
  className?: string;
  showAllServicesButton?: boolean;
}

// Default quick access apps
const defaultQuickAccessApps: QuickAccessApp[] = [
  {
    id: "manager",
    title: "Панель руководителя",
    icon: <BarChart3 className="w-4 h-4 text-[#65A30D]" />,
    url: "https://isup.sensata.kz",
  },
  {
    id: "partners",
    title: "Портал партнеров",
    icon: <Handshake className="w-4 h-4 text-[#a21caf]" />,
    url: "https://portal-prod.sensata.kz",
  },
  {
    id: "knowledge",
    title: "База знаний",
    icon: <Brain className="w-4 h-4 text-[#4F46E5]" />,
    url: "https://wiki.sensata.kz/",
  },
  {
    id: "helpdesk",
    title: "Help Desk",
    icon: <Headphones className="w-4 h-4 text-[#4346A2]" />,
    url: "https://help.sensata.kz/",
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
    url: "https://mail.sensata.kz/",
  },
  {
    id: "documentolog",
    title: "Электронный документооборот Documentolog",
    description: "Служебные записки, Кадровый ЭДО, протокольные поручения",
    icon: <Newspaper className="w-8 h-8 text-orange-600" />,
    iconBg: "bg-orange-100",
    url: "https://doc.sensata.kz/structure/index",
  },
  {
    id: "knowledge",
    title: "База знаний",
    description:
      "Корпоративные стандарты, Регламенты, Шаблоны документов, Руководства и мануалы",
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
    iconBg: "bg-indigo-100",
    url: "https://wiki.sensata.kz/",
  },
  {
    id: "manager",
    title: "Панель Руководителя. Сервис по планированию графиков",
    description:
      "Паспорта проектов, универсальный сервис для планирования работ, контроль вех жизненного цикла проекта, графики СМР , отчеты по прогрессу строительства",
    icon: <BarChart3 className="w-8 h-8 text-lime-600" />,
    iconBg: "bg-lime-100",
    url: "https://isup.sensata.kz/",
  },
  {
    id: "partners",
    title: "Портал партнеров (тендерная площадка)",
    description:
      "Объявления о тендерах, Документы для участия, Результаты тендеров, Партнерские предложения",
    icon: <HandMetal className="w-8 h-8 text-fuchsia-600" />,
    iconBg: "bg-fuchsia-100",
    url: "https://portal-prod.sensata.kz/",
  },
  {
    id: "bim360",
    title: "BIM360 (Инженерный документооборот)",
    description:
      "Взаимодействия между проектными организациями, ГИПами, ПТО в части получения ЭП, РП. Возможность просмотра, создания замечаний/запросов на чертежах",
    icon: <FileCheck2 className="w-8 h-8 text-blue-600" />,
    iconBg: "bg-blue-100",
    url: "https://accounts.autodesk.com/logon?resume=%2Fas%2FrRFI1CMk89%2Fresume%2Fas%2Fauthorization.ping&spentity=null",
  },
  {
    id: "1c-estimate",
    title: "1С:Смета",
    description:
      "Сметное производство, контроль бюджета переменных затрат проекта, база индикативных цен",
    icon: <OneCIcon />,
    iconBg: "bg-amber-100",
  },
  {
    id: "macro-erp",
    title: "MacroERP",
    description:
      "Сервис для управления проектами в разрезе оперативного учета; Процессов «заявка на договор», «акты», «заказ и прием ТМЦ», «заявки на оплату»; Интегрирован с 1С Смета в части создания приложения договоров подряда, с Порталом партнеров для подписания с контрагентом договоров и актов через ЭЦП, с 1С Бухгалтерия в части проведение оплаты по акту или накладной",
    icon: <MacroERPIcon />,
    iconBg: "bg-pink-100",
    url: "https://macroerp.sensata.kz/",
  },
  {
    id: "plan-radar",
    title: "Plan Radar",
    description: "Создания замечаний от служба контроля качества, БиОТ",
    icon: <PencilRuler className="w-8 h-8 text-rose-600" />,
    iconBg: "bg-rose-100",
    url: "https://www.planradar.com/login?redirect=https://www.planradar.com/dr/1287990?tab=projects",
  },
  {
    id: "sensata-services",
    title: "Sensata Services",
    description:
      "Подача заявок, оплата услуг, голосования и уведомления от управляющей компании.",
    icon: <SensataServicesIcon />,
    iconBg: "bg-indigo-100",
    url: "https://services.sensata.kz/",
  },
  {
    id: "refbook",
    title: "База справочников",
    description:
      "Администрирование справочников: юр.лиц, проекты, статьи расходов, виды работ и др.",
    icon: <RefbookIcon />,
    iconBg: "bg-emerald-100",
    url: "https://refbook.sensata.kz/",
  },
  {
    id: "helpdesk",
    title: "Help Desk (Служба поддержки)",
    description: "Справочный центр и колл-центр поддержки партнеров",
    icon: <HeadsetIcon className="w-8 h-8 text-blue-600" />,
    url: "https://help.sensata.kz/",
    iconBg: "bg-indigo-100",
  },
  {
    id: "1c-accounting",
    title: "1С: Бухгалтерия",
    description: "Бухгалтерский учет, налоги и финансы",
    icon: <OneCIcon />,
    iconBg: "bg-amber-100",
  },
  {
    id: "1c-hr",
    title: "1С: ЗУП",
    description: "Кадровый учет",
    icon: <OneCIcon />,
    iconBg: "bg-amber-100",
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

function SensataServicesIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00004 17.3333H5.33337V26.6666C5.33337 28.1373 6.52938 29.3333 8.00004 29.3333H24C25.4707 29.3333 26.6667 28.1373 26.6667 26.6666V17.3333H28C28.2637 17.3333 28.5214 17.255 28.7407 17.1085C28.9599 16.962 29.1307 16.7538 29.2316 16.5102C29.3325 16.2666 29.3589 15.9985 29.3075 15.7399C29.2561 15.4813 29.1291 15.2438 28.9427 15.0573L16.9427 3.05731C16.6927 2.80735 16.3536 2.66693 16 2.66693C15.6465 2.66693 15.3074 2.80735 15.0574 3.05731L3.05737 15.0573C2.87096 15.2438 2.74402 15.4813 2.6926 15.7399C2.64117 15.9985 2.66758 16.2666 2.76847 16.5102C2.86936 16.7538 3.04022 16.962 3.25943 17.1085C3.47864 17.255 3.73637 17.3333 4.00004 17.3333ZM16 5.88531L24 13.8853V20L24.0014 26.6666H8.00004V13.8853L16 5.88531Z"
        fill="#4346A2"
      />
      <path
        d="M16 24C20.9374 24 22.5347 19.2814 22.6 19.0814L20.0667 18.2534C20.056 18.284 19.0254 21.3334 16 21.3334C13.016 21.3334 11.9734 18.372 11.932 18.2454L9.40002 19.0814C9.46536 19.2814 11.0627 24 16 24Z"
        fill="#4346A2"
      />
    </svg>
  );
}

function RefbookIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33325 26V5.99996C5.33325 5.1159 5.68444 4.26806 6.30956 3.64294C6.93468 3.01782 7.78253 2.66663 8.66659 2.66663H26.6666V29.3333H8.66659C7.78253 29.3333 6.93468 28.9821 6.30956 28.357C5.68444 27.7319 5.33325 26.884 5.33325 26ZM5.33325 26C5.33325 25.1159 5.68444 24.2681 6.30956 23.6429C6.93468 23.0178 7.78253 22.6666 8.66659 22.6666H26.6666M10.6666 17.3333L15.9999 7.99996L21.3333 17.3333M12.1334 14.6666H19.7334"
        stroke="#047857"
        stroke-width="2.9925"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

// Main component
export const Widget: React.FC<WidgetProps> = ({
  currentApp,
  quickAccessApps = defaultQuickAccessApps,
  fullApps = defaultFullApps,
  className = "",
  showAllServicesButton = true,
}) => {
  const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);

  const handleQuickAppClick = (app: QuickAccessApp) => {
    if (app.url) {
      window.open(app.url, "_blank");
    }
  };

  const handleFullAppClick = (app: FullApp) => {
    if (app.url) {
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
                  Список сервисов
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
              Список сервисов
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
