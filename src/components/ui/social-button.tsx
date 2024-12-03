import React from "react";

interface SocialButtonProps {
  children: React.ReactNode;
  to: string;
}

export const SocialButton =  ({ children, to }: SocialButtonProps) => {
  return (
    <div className="child">
      <button className="socialButton">
        <a href={to}>{children}</a>
      </button>
    </div>
  );
};

export default SocialButton;