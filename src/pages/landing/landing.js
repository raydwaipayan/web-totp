import React from 'react';
import getTotpGenerator from '../../util/getTotpGenerator';

export default function Landing() {
  const secret = 'ABCDEFGHI';
  const generator = getTotpGenerator();

  return (
    <>
      <div>
        {typeof generator === 'function' ? generator(secret) : null}
      </div>
    </>
  );
}
