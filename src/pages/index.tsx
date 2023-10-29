import React, { useEffect } from 'react';
import Layout from '../components/layout';
import gsap from 'gsap';

export default function Home() {

  useEffect(() => {
    console.log('happy tween');
    const neutralBefore = "#7E7E7E";
    const neutralAfter = "#3B3B3B";

    gsap.fromTo('.background', {
      color: neutralBefore
    }, {
      color: neutralAfter
    })
  }, []);

  return (
    <>
      <Layout>
        <main className='h-screen w-full flex'>

        </main>
      </Layout>
    </>
  );
};