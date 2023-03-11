import React from 'react';

declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
