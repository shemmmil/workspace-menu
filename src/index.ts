export { Widget, default } from "./widget";
export type { AppId, QuickAccessApp, FullApp, WidgetProps } from "./widget";

// Re-export UI components for advanced usage
export { Button } from "./components/ui/button";
export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
export { Card, CardContent } from "./components/ui/card";

// Export styles
import "./styles.css";
