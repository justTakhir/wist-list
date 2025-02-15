import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
}

export function PageLayout({children}: PageLayoutProps) {
  return <div style={{width: "100%", height: "100%"}}>
    {children}
  </div>
}