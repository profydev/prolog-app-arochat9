import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
  email?: string;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
  email,
}: MenuItemProps) {
  const button = (
    <Button className={styles.anchor} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.icon} src={iconSrc} alt={`${text} icon`} />{" "}
      {!isCollapsed && text}{" "}
    </Button>
  );

  return (
    <li className={classNames(styles.listItem, className)}>
      {email ? (
        <a
          href={`mailto:${email}?Support Request: `}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          {button}
        </a>
      ) : (
        button
      )}
    </li>
  );
}
