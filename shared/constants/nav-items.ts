import { Home, Briefcase, Building2, Mail } from "lucide-react";
import { ROUTES } from "./routes";

export const NAV_ITEMS = [
  { label: "nav.home", href: ROUTES.HOME, icon: Home },
  { label: "nav.work", href: ROUTES.WORK, icon: Briefcase },
  { label: "nav.services", href: ROUTES.SERVICES, icon: Building2 },
  { label: "nav.contact", href: ROUTES.CONTACT, icon: Mail },
] as const;
