import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        name: string;
        colors: {
            text: string;
            header_text: string;
            header: string;
            about_background: string;
            border: string;
            hp_bar: string;
        }
    }
}