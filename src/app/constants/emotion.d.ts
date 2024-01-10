import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      white: string;
      text: {
        default: string;
        body: string;
        label: string;
        placeholder: string;
      };
      blue: {
        pressed: string;
        hover: string;
        default: string;
        disabled: string;
      };
      grey: {
        pressed: string;
        hover: string;
        default: string;
        disabled: string;
      };
      green: {
        pressed: string;
        hover: string;
        default: string;
        disabled: string;
      };
      red: {
        pressed: string;
        hover: string;
        default: string;
        disabled: string;
      };
    };
    border: string;
    borderRadius: string;
    boxShadow: string;
    spacing(value: number): string;
  }
}
