import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const globalCSS = [
  'styles/css/global/global.css'
];

const theme = {
  bgLight: '#fbfbfb',
  bgDark: '#3a3a3a',
}
const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    path: "/branding",
    title: "Branding",
    pages: [
      {
        path: "/branding/logo",
        title: "Logo",
        content: pageLoader(() => import("./branding/LOGO.md"))
      },
      {
        path: "/branding/colors",
        title: "Colors",
        content: pageLoader(() => import("./branding/COLORS.md"))
      },
      {
        path: "/branding/typography",
        title: "Typography",
        content: pageLoader(() => import("./branding/TYPOGRAPHY.md"))
      },
      {
        path: "/branding/icons",
        title: "Icons",
        content: pageLoader(() => import("./branding/ICONS.md"))
      }
    ]
  },
  {
    path: "/components",
    title: "Components",
    pages: [
      {
        path: "/components/buttons",
        title: "Button",
        styles: ['styles/css/buttons.css'],
        imports: {Button: require('./react/button/Button.jsx')},
        content: pageLoader(() => import("./components/BUTTONS.md"))
      },
      {
        path: "/components/headers",
        title: "Header",
        content: pageLoader(() => import("./components/HEADERS.md"))
      },
      {
        path: "/components/notifications",
        title: "Messages & Notifications",
        content: pageLoader(() => import("./components/NOTIFICATIONS.md"))
      },
      {
        path: "/components/pickers",
        title: "Picker",
        content: pageLoader(() => import("./components/PICKERS.md"))
      },
      {
        path: "/components/textfields",
        title: "Inputs",
        styles: ['styles/css/input.css'],
        imports: {StandardInput: require('./react/input/Input.jsx')},
        content: pageLoader(() => import("./components/TEXTFIELDS.md"))
      }
    ]
  },
  {
    path: "/resources",
    title: "Resources",
    pages: [
      {
        path: "/resources/sketch",
        title: "Sketch File",
        content: pageLoader(() => import("./resources/SKETCH.md"))
      }
    ]
  },
];

ReactDOM.render(
  <Catalog title="Bookit Styleguide" pages={pages} styles={globalCSS} theme={theme}/>,
  document.getElementById("catalog")
);
