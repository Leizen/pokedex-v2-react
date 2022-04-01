import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        name: string;
        colors: {
            text: string;
            header_text: string;
            header: string;
            page_background: string;
            about_background: string;
            about_border: string;
            bar_background: string;
        }
    }
}