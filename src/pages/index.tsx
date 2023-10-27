import React, { useEffect } from "react";
import Layout from "../components/layout";
import gsap from "gsap";

export default function Home() {

  const initAnimation = (): void => {

    const gatsbyColor = "#633194";
    const tailwindColor = "#38BDF8";

    gsap.fromTo(".background", {
      background: gatsbyColor,
    }, {
      background: tailwindColor,
      yoyo: true,
      repeat: -1,
      repeatDelay: 2
    });

    gsap.fromTo(".text", {
      color: tailwindColor,
    }, {
      color: gatsbyColor,
      yoyo: true,
      repeat: -1,
      repeatDelay: 2
    });

    console.log("init")
  };
  useEffect(() => {
    initAnimation();
  }, []);


  return (
    <>
      <Layout>
        <div className={`background h-screen w-full grid place-content-center`}>
          <span className={`text text-[4rem] font-thin text-cyan-300 tracking-wider`}>
            Hello Gatsby
          </span>
        </div>
      </Layout>
    </>
  );
};