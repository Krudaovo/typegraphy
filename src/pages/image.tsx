import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Image() {
  return (
    <>
      <StaticImage src={'../images/wisdom_ogp.png'} placeholder={'blurred'} imgStyle={{ objectFit: 'cover' }} quality={100} alt={'ogp'} />
    </>
  );
};