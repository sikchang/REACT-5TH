import React, { createElement as h } from "../../lib/react.js";
// 1. PlanetItem 각각의 li 아이템 모아두는 곳이 필요
export function _PlanetItem( { id, title } /* props */) {

  return h(
    "li",
    { className: "item" },
    h("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
    h("span", { className: "content" }, title),
    h(
      "button",
      { type: "button", title: "move item" },
      h("img", { src: "/icons/icon.svg", alt: "move item" })
    )
  );
}



