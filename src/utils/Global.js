import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typographies';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
}
body{
     margin:0;
     font-family:${primaryFont}
}
`;
