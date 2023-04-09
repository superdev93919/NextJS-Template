import { NavbarItem } from "./navbar.type";
import { FiHelpCircle, FiHome, FiSettings, FiUsers } from "react-icons/fi";

export const navbarPages: NavbarItem[] = [
  { icon: <FiHome />, label: "Homepage", href: "/" },
  { icon: <FiUsers />, label: "Shared", href: "/shared" },
  { icon: <FiHelpCircle />, label: "Help center", href: "/help" },
  { icon: <FiSettings />, label: "Settings", href: "/settings" }
];