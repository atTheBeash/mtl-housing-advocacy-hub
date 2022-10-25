import { createGlobalStyle } from "styled-components";
import RobotoWoff from "./roboto-condensed-v25-latin-regular.woff";
import RobotoWoff2 from "./roboto-condensed-v25-latin-regular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff');
}

body {
  font-family: 'Roboto Condensed', sans-serif;
}
`;

export default FontStyles;
