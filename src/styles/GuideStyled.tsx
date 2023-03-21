import { createGlobalStyle } from "styled-components";

export const GuideStyled = createGlobalStyle`
:root{
    --color-red:#8E0000;
    --color-grey:#474747;
    --color-white:#FFFFFF;
	--color-grey2:#C7C7C7;
	--color-brackgroundImg:#2E2D2D;

}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    background-color: var(--color-black);
	font-family: 'Inter', sans-serif;
	font-family: 'bold', sans-serif;
	font-family: 'regular', sans-serif;
	font-family: 'italic', sans-serif;
	
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
    cursor: pointer;
}
a{
    text-decoration: none;
    color: inherit;
}
`;
