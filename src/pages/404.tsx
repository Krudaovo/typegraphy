import { css } from '../../styled-system/css';
import React from "react";

export default function PageNotFount() {
  return (
    <>
      <div className={css({ h: 'screen', w: 'full', bg: '#633194', display: 'grid', placeItems: 'center' })}>
        <div className={css({ color: 'gray.300', fontSize: '4rem', lineHeight: 'relaxed' })}>
          <p>🫠I should have prepared that page...🫠</p>
        </div>
      </div>
    </>
  );
};