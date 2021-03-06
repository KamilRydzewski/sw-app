import "styled-components";

declare module "styled-components" {
  export interface MainTheme {
    yellow: string;
    black: string;
    white: string;
    blue: string;
    red: string;
    redTransparent: string;
    blueTransparent: string;
    light: number;
    bold: number;
    fontSize: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    bpMobile: string;
    bpTablet: string;
  }
}
