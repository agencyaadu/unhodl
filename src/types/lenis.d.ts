// src/types/lenis.d.ts
declare module "@studio-freight/lenis" {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    smooth?: boolean;
    mouseMultiplier?: number;
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    infinite?: boolean;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    scrollTo(target: string | number | HTMLElement, options?: any): void;
    on(event: string, callback: Function): void;
    destroy(): void;
  }
}
