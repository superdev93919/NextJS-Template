import { ReactElement } from "react";
import { NavbarItemProps } from "./navbar.type";
import { Text } from "#/lib/components/atoms/text";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavbarItem({ icon, label, href, ...props }: NavbarItemProps): ReactElement {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props}>
      <Text size="large" className={clsx(
        "py-2 px-3 rounded",
        "flex items-center gap-2",
        "transition-colors duration-300",
        {
          "bg-primary text-white": isActive,
          "text-blue hover:bg-primary hover:text-white": !isActive
        }
      )}>
        {icon}
        {label}
      </Text>
    </Link>
  );
}