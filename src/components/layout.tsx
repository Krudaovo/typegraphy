import React from "react";

type LayoutChildrenType = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildrenType) {
  return (
    <>
      <div className='background bg-neutral-500 text-neutral-300'>
        {children}
      </div>
    </>
  );
};