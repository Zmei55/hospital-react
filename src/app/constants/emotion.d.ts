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
        white: string;
      };
      primary: {
        pressed: string;
        hover: string;
        default: string;
        disabled: string;
      };
      secondary: {
        pressed: string;
        hover: string;
        default: string;
        disabled: string;
      };
      success: {
        pressed: string;
        hover: string;
        default: string;
        disabled: string;
      };
      error: {
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
