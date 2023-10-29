import React from "react";
import ContactMe from './contact-me';

type LayoutChildrenType = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildrenType) {
  return (
    <>
      <div className='background bg-neutral-900 text-neutral-300 font-roboto'>
        {children}
        <ContactMe />
      </div>
    </>
  );
};