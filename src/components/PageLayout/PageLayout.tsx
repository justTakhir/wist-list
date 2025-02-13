import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
}

export function PageLayout({children}: PageLayoutProps) {
  return <div>
    {children}
  </div>
}