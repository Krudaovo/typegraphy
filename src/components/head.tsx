import React from 'react';
import type { HeadProps } from 'gatsby';

export const Head = (props: HeadProps) => {

  console.log(props)

  return (
    <>
      <title>{ }</title>
      <meta name='description' content={undefined} />
    </>
  )
}
