import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const globalCSS = [
  'styles/css/global/global.css'
];
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
        title: "Buttons",
        styles: ['styles/css/foo.css'],
        content: pageLoader(() => import("./components/BUTTONS.md"))
      },
      {
        path: "/components/headers",
        title: "Headers",
        content: pageLoader(() => import("./components/HEADERS.md"))
      },
      {
        path: "/components/notifications",
        title: "Messages & Notifications",
        content: pageLoader(() => import("./components/NOTIFICATIONS.md"))
      },
      {
        path: "/components/pickers",
        title: "Pickers",
        content: pageLoader(() => import("./components/PICKERS.md"))
      },
      {
        path: "/components/textfields",
        title: "Textfields",
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
  <Catalog title="Bookit Styleguide" pages={pages} styles={globalCSS}/>,
  document.getElementById("catalog")
);
