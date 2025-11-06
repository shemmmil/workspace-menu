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
  HeadsetIcon,
  OneCIcon,
  MacroERPIcon,
  SensataServicesIcon,
  RefbookIcon,
} from "./components/icons";
import styles from "./widget.module.css";

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
    icon: <BarChart3 className={styles.iconGreen} />,
    url: "https://isup.sensata.kz",
  },
  {
    id: "partners",
    title: "Портал партнеров",
    icon: <Handshake className={styles.iconFuchsia} />,
    url: "https://portal-prod.sensata.kz",
  },
  {
    id: "knowledge",
    title: "База знаний",
    icon: <Brain className={styles.iconIndigo} />,
    url: "https://wiki.sensata.kz/",
  },
  {
    id: "helpdesk",
    title: "Help Desk",
    icon: <Headphones className={styles.iconBlue} />,
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
    icon: <Mail className={styles.iconBlueLarge} />,
    iconBg: styles.bgBlue,
    url: "https://mail.sensata.kz/",
  },
  {
    id: "documentolog",
    title: "Электронный документооборот Documentolog",
    description: "Служебные записки, Кадровый ЭДО, протокольные поручения",
    icon: <Newspaper className={styles.iconOrangeLarge} />,
    iconBg: styles.bgOrange,
    url: "https://doc.sensata.kz/structure/index",
  },
  {
    id: "knowledge",
    title: "База знаний",
    description:
      "Корпоративные стандарты, Регламенты, Шаблоны документов, Руководства и мануалы",
    icon: <BarChart3 className={styles.iconIndigoLarge} />,
    iconBg: styles.bgIndigo,
    url: "https://wiki.sensata.kz/",
  },
  {
    id: "manager",
    title: "Панель Руководителя. Сервис по планированию графиков",
    description:
      "Паспорта проектов, универсальный сервис для планирования работ, контроль вех жизненного цикла проекта, графики СМР , отчеты по прогрессу строительства",
    icon: <BarChart3 className={styles.iconLimeLarge} />,
    iconBg: styles.bgLime,
    url: "https://isup.sensata.kz/",
  },
  {
    id: "partners",
    title: "Портал партнеров (тендерная площадка)",
    description:
      "Объявления о тендерах, Документы для участия, Результаты тендеров, Партнерские предложения",
    icon: <HandMetal className={styles.iconFuchsiaLarge} />,
    iconBg: styles.bgFuchsia,
    url: "https://portal-prod.sensata.kz/",
  },
  {
    id: "bim360",
    title: "BIM360 (Инженерный документооборот)",
    description:
      "Взаимодействия между проектными организациями, ГИПами, ПТО в части получения ЭП, РП. Возможность просмотра, создания замечаний/запросов на чертежах",
    icon: <FileCheck2 className={styles.iconBlueLargePrimary} />,
    iconBg: styles.bgBluePrimary,
    url: "https://accounts.autodesk.com/logon?resume=%2Fas%2FrRFI1CMk89%2Fresume%2Fas%2Fauthorization.ping&spentity=null",
  },
  {
    id: "1c-estimate",
    title: "1С:Смета",
    description:
      "Сметное производство, контроль бюджета переменных затрат проекта, база индикативных цен",
    icon: <OneCIcon />,
    iconBg: styles.bgAmber,
  },
  {
    id: "macro-erp",
    title: "MacroERP",
    description:
      "Сервис для управления проектами в разрезе оперативного учета; Процессов «заявка на договор», «акты», «заказ и прием ТМЦ», «заявки на оплату»; Интегрирован с 1С Смета в части создания приложения договоров подряда, с Порталом партнеров для подписания с контрагентом договоров и актов через ЭЦП, с 1С Бухгалтерия в части проведение оплаты по акту или накладной",
    icon: <MacroERPIcon />,
    iconBg: styles.bgPink,
    url: "https://macroerp.sensata.kz/",
  },
  {
    id: "plan-radar",
    title: "Plan Radar",
    description: "Создания замечаний от служба контроля качества, БиОТ",
    icon: <PencilRuler className={styles.iconRoseLarge} />,
    iconBg: styles.bgRose,
    url: "https://www.planradar.com/login?redirect=https://www.planradar.com/dr/1287990?tab=projects",
  },
  {
    id: "sensata-services",
    title: "Sensata Services",
    description:
      "Подача заявок, оплата услуг, голосования и уведомления от управляющей компании.",
    icon: <SensataServicesIcon />,
    iconBg: styles.bgIndigo,
    url: "https://services.sensata.kz/",
  },
  {
    id: "refbook",
    title: "База справочников",
    description:
      "Администрирование справочников: юр.лиц, проекты, статьи расходов, виды работ и др.",
    icon: <RefbookIcon />,
    iconBg: styles.bgEmerald,
    url: "https://refbook.sensata.kz/",
  },
  {
    id: "helpdesk",
    title: "Help Desk (Служба поддержки)",
    description: "Справочный центр и колл-центр поддержки партнеров",
    icon: <HeadsetIcon className={styles.iconBlueLargePrimary} />,
    url: "https://help.sensata.kz/",
    iconBg: styles.bgIndigo,
  },
  {
    id: "1c-accounting",
    title: "1С: Бухгалтерия",
    description: "Бухгалтерский учет, налоги и финансы",
    icon: <OneCIcon />,
    iconBg: styles.bgAmber,
  },
  {
    id: "1c-hr",
    title: "1С: ЗУП",
    description: "Кадровый учет",
    icon: <OneCIcon />,
    iconBg: styles.bgAmber,
  },
];

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
    <div className={styles.root}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`${styles.triggerButton} ${className}`}
          >
            <div className={styles.triggerContent}>
              <LayoutGrid className={styles.iconBrand} />
              IT Сервисы
            </div>
            <ChevronsUpDown className={styles.iconSmall} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={styles.dropdownContent} align="start">
          <DropdownMenuGroup>
            {quickAccessApps
              .filter((app) => app.id !== currentApp)
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
                className={styles.allServicesItem}
                onClick={handleAllServicesClick}
              >
                <div className={styles.allServicesContent}>
                  <LayoutGrid className={styles.iconSmall} />
                  Список сервисов
                </div>
                <ChevronRight className={styles.iconMuted} />
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isAppsModalOpen} onOpenChange={setIsAppsModalOpen}>
        <DialogContent
          className={styles.dialogContent}
          style={{
            maxWidth: "calc(100vw - 240px)",
            maxHeight: "95vh",
          }}
        >
          <DialogHeader className={styles.dialogHeader}>
            <DialogTitle className={styles.dialogTitle}>
              Список сервисов
            </DialogTitle>
          </DialogHeader>
          <div className={styles.appsGrid}>
            {fullApps
              .filter((app) => app.id !== currentApp)
              .map((app) => (
                <Card
                  key={app.id}
                  className={app.url ? styles.cardClickable : ""}
                  onClick={() => app.url && handleFullAppClick(app)}
                >
                  <CardContent className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrapper}>
                        <div className={styles.iconContainer}>{app.icon}</div>
                        <div className={`${styles.iconBg} ${app.iconBg}`} />
                      </div>
                      {app.url && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className={styles.externalLinkButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFullAppClick(app);
                          }}
                        >
                          <ExternalLink className={styles.iconSmall} />
                        </Button>
                      )}
                    </div>
                    <h3 className={styles.appTitle}>{app.title}</h3>
                    <p className={styles.appDescription}>{app.description}</p>
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
