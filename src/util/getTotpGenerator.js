/* eslint-disable no-undef */

import { useState } from 'react';
import { wait } from './common';

export default function getTotpGenerator() {
  const [gen, setGen] = useState(() => generator);
  const [tick, setTick] = useState(false);

  if (!gen) {
    if (typeof generator === 'function') {
      setGen(() => generator);
    } else {
      wait(50).then(() => setTick(!tick));
    }
  }

  return generator;
}
