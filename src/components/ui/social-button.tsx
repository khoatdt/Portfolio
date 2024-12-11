import Link from "next/link";
import React from "react";

interface SocialButtonProps {
  children: React.ReactNode;
  to: string;
}

export const SocialButton =  ({ children, to }: SocialButtonProps) => {
  return (
    <div className="child">
      <button className="socialButton">
        <Link href={to}>{children}</Link>
      </button>
    </div>
  );
};

export default SocialButton;