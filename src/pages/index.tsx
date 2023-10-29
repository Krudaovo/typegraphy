import React, { useEffect } from 'react';
import Layout from '../components/layout';
import BlankSection from '../components/blank-section';
import { textSplit } from '../gsap/animation';

export default function Home() {

  const wisdom: string[] = [
    'Impossible is nothing.',
    'Drive your dreams.',
    'Think different.',
    'Don’t be evil.',
    'Don’t lose faith.',
    'Deeds, not words.',
    'Nobody is perfect.',
    'Happiness requires struggle.',
    'Life won’t wait.',
    'Mistakes make people.',
    'Time heals everything.',
    'Forgive and forget.',
    'Failure teaches success.',
    'Never say never.'
  ];

  useEffect(() => {
    for (let i = 0; i < wisdom.length; i++) {
      textSplit(`.wisdom-${i}`);
    }
  }, []);

  return (
    <>
      <Layout>
        <div className='w-full overflow-hidden'>
          <BlankSection>World's wisdom</BlankSection>
          <main>
            {wisdom.map((wis, i) => {
              return (
                <p key={wis} className={`wisdom-${i} text-9xl whitespace-nowrap italic`}>
                  {wis}
                </p>
              )
            })}
          </main>
          <BlankSection>Thank you.</BlankSection>
        </div>
      </Layout>
    </>
  );
};