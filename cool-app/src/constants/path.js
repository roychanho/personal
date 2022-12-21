import React from "react";
import { ReactComponent as OpenSea } from "../asset/openSea.svg";
import { ReactComponent as Twitter } from "../asset/twitter.svg";
import { ReactComponent as Discord } from "../asset/discord.svg";
import { ReactComponent as Instagram } from "../asset/instagram.svg";
import _ from "lodash";

export const ROUTES = {
//   HOME: "/",
//   ROADMAP: "/roadmap",
//   REFER: "/refer/:referralId",
//   ERROR_PAGE: "/404",
};

export const HEADER_NAV_CONFIG = [
//   {
//     label: "components.Header.nft",
//     path: ROUTES.NFT,
//   },
//   {
//     label: "components.Header.gamefi",
//     path: "/gamefi",
//     child: [
//       {
//         label: "components.Header.cosmosMini",
//         path: "/cosmosMini",
//       },
//       {
//         label: "components.Header.cosmosHeroesMmog",
//         path: "/cosmosHeroesMmog",
//       },
//     ],
//   },
].filter(({ path }) =>
  _.includes(
    [
    //   ROUTES.HOME,
    ],
    path
  )
);

export const FLOAT_BAR = [
  {
    icon: <Instagram />,
    renderIcon: (props) => <Instagram {...props} />,
    link: "https://www.instagram.com",
  },
  {
    icon: <Discord />,
    renderIcon: (props) => <Discord {...props} />,
    link: "https://discord.com",
  },
  {
    icon: <Twitter />,
    renderIcon: (props) => <Twitter {...props} />,
    link: "https://twitter.com",
  },
  {
    icon: "",
    renderIcon: (props) => <OpenSea {...props} />,
    link: "",
  },
];
