import React, { useState, useEffect, useCallback } from "react";
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
  ChevronRight,
  ChevronsUpDown,
  LayoutGrid,
  InfoIcon,
  ExternalLinkIcon,
} from "./components/icons";
import styles from "./widget.module.css";

// API Types
interface ITServiceFromAPI {
  id: string;
  title: string;
  description: string;
  hyperlink: string | null;
  hyperlink_video: string | null;
  icon_image: string;
  create_date: string;
  update_date: string;
  children: ITServiceFromAPI[];
}

// API Configuration
const API_BASE_URL = "https://portal-api.sensata.kz/api/v1";

// Quick access service titles (for filtering from API)
// These match partial titles from API response
const QUICK_ACCESS_TITLES = [
  "Sensata Project",
  "Портал партнеров", // matches "Портал партнеров (тендерная площадка)" - but we want Sensata Partners
  "Sensata Wiki",
  "Help Desk", // matches "Help Desk (Служба поддержки)"
];

// Map API titles to display titles for quick access
const QUICK_ACCESS_DISPLAY_TITLES: Record<string, string> = {
  "Sensata Project": "Sensata Project",
  "Sensata Partners": "Портал партнеров",
  "Sensata Wiki": "Sensata Wiki",
  "Help Desk (Служба поддержки)": "Help Desk",
};

// Titles to match from API for quick access (exact or partial match)
const QUICK_ACCESS_API_TITLES = [
  "Sensata Project",
  "Sensata Partners",
  "Sensata Wiki",
  "Help Desk",
];

// Helper to get cookie value
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};

// Hook to fetch IT services from API
const useITServices = (enabled: boolean = true, token?: string) => {
  const [services, setServices] = useState<ITServiceFromAPI[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchServices = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      // Use provided token or fallback to cookie
      const authToken = token || getCookie("accessToken");

      if (!authToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(`${API_BASE_URL}/it-services`, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${authToken}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data: ITServiceFromAPI[] = await response.json();
      setServices(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  }, [enabled, token]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return { services, loading, error, refetch: fetchServices };
};

// Transform API service to FullApp format
const transformServiceToFullApp = (service: ITServiceFromAPI): FullApp => ({
  id: service.id,
  title: service.title,
  description: service.description,
  icon: (
    <img
      src={service.icon_image}
      alt={service.title}
      className={styles.serviceIconImage}
    />
  ),
  url: service.hyperlink || undefined,
  infoLink: service.hyperlink_video
    ? service.hyperlink_video.startsWith("http")
      ? service.hyperlink_video
      : `https://${service.hyperlink_video}`
    : undefined,
  info: service.hyperlink_video ? "Link" : undefined,
});

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
  info?: string;
  infoLink?: string;
}

export interface WidgetProps {
  currentApp?: string;
  className?: string;
  showAllServicesButton?: boolean;
  onServiceClick?: () => void;
  /** Auth token for API requests (passed from parent app) */
  token?: string;
}

// Helper function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// Main component
export const Widget: React.FC<WidgetProps> = ({
  currentApp,
  className = "",
  showAllServicesButton = true,
  onServiceClick = () => {},
  token,
}) => {
  const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch services from API when dropdown or modal is opened
  const { services, loading, error } = useITServices(
    isDropdownOpen || isAppsModalOpen,
    token
  );

  // Transform API services to FullApp format
  const displayApps = services.map(transformServiceToFullApp);

  // Filter quick access apps by specific titles and map display names
  const quickAccessApps = services
    .filter((service) =>
      QUICK_ACCESS_API_TITLES.some((title) =>
        service.title.toLowerCase().includes(title.toLowerCase())
      )
    )
    .map((service) => {
      const displayTitle =
        QUICK_ACCESS_DISPLAY_TITLES[service.title] || service.title;
      return {
        id: service.id,
        title: displayTitle,
        icon: service.icon_image,
        url: service.hyperlink || undefined,
      };
    });

  const handleAppClick = (app: FullApp) => {
    if (app.url) {
      window.open(app.url, "_blank");
    }
  };

  const handleAllServicesClick = () => {
    setIsAppsModalOpen(true);
    onServiceClick?.();
  };

  return (
    <div className={styles.root}>
      <DropdownMenu onOpenChange={setIsDropdownOpen}>
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
            {loading && quickAccessApps.length === 0 && (
              <>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={styles.skeletonItem}>
                    <div className={styles.skeletonIcon} />
                    <div className={styles.skeletonText} />
                  </div>
                ))}
              </>
            )}
            {quickAccessApps
              .filter((app) => app.id !== currentApp)
              .map((app) => (
                <DropdownMenuItem
                  key={app.id}
                  onClick={() => app.url && window.open(app.url, "_blank")}
                  disabled={!app.url}
                >
                  <img
                    src={app.icon}
                    alt={app.title}
                    className={styles.quickAccessIcon}
                  />
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
        <DialogContent className={styles.dialogContent}>
          <DialogHeader className={styles.dialogHeader}>
            <DialogTitle className={styles.dialogTitle}>
              Список сервисов
            </DialogTitle>
          </DialogHeader>
          <div className={styles.appsGrid}>
            {loading && (
              <div className={styles.loadingState}>Загрузка сервисов...</div>
            )}
            {error && (
              <div className={styles.errorState}>
                Ошибка загрузки: {error.message}
              </div>
            )}
            {!loading &&
              !error &&
              displayApps
                .filter((app) => app.id !== currentApp)
                .map((app) => (
                  <Card
                    key={app.id}
                    className={app.url ? styles.cardClickable : ""}
                    onClick={() => app.url && handleAppClick(app)}
                  >
                    <CardContent
                      className={styles.cardContent}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAppClick(app);
                      }}
                    >
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          <div className={styles.iconContainer}>{app.icon}</div>
                        </div>
                        {app?.info && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className={styles.externalLinkButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (app.infoLink) {
                                window.open(app.infoLink, "_blank");
                              }
                            }}
                          >
                            <InfoIcon className={styles.iconSmall} />
                          </Button>
                        )}
                        {app.url && !app.info && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className={styles.externalLinkButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAppClick(app);
                            }}
                          >
                            <ExternalLinkIcon className={styles.iconSmall} />
                          </Button>
                        )}
                      </div>
                      <h3 className={styles.appTitle}>{app.title}</h3>
                      <p
                        className={styles.appDescription}
                        title={
                          app.id === "macro-erp" ? app.description : undefined
                        }
                      >
                        {app.id === "macro-erp"
                          ? (() => {
                              const cutoffText = "заявки на оплату»;";
                              const cutoffIndex =
                                app.description.indexOf(cutoffText);
                              if (cutoffIndex !== -1) {
                                return truncateText(
                                  app.description,
                                  cutoffIndex + cutoffText.length
                                );
                              }
                              return app.description;
                            })()
                          : app.description}
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

// Export hook for external use
export { useITServices };

export default Widget;
