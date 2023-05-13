"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
interface MobileItemProps {
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({icon: Icon, href, active, onClick}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `
      group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-200
    `,
        active && "bg-gray-300 text-gray-900"
      )}
    >
      <Icon className="w-6 h-6" />
    </Link>
  );
};

export default MobileItem;
