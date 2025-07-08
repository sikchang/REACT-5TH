import React, { createElement as h } from "../../lib/react.js";

// 2. PlanetList 모든 ul 테그를 가지고 있는 부모 태그
// const ulElement = h('ul', { className: 'planet,', lang: 'en' }, render())
// console.log(ulElement);
export function _PlanetList ({ lang, children }) {
    return h("ul", { className: "planet", lang }, children);
}