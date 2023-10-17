import React from "react";

interface LayoutChildrenType {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildrenType) {
  return (
    <>
      {children}
    </>
  );
};