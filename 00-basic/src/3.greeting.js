



// React API를 사용해서
// data에서 랜덤한 인사말 1개 선택 후 h1태그로 렌더링

/* <h1 name="나라별 인사말 - IT">인사말 : Buon giorno</h1>; */
//다시 해봐야함 찾을 수 없다함.

import React, { createElement } from "./lib/react.js";
import ReactDOM, { createRoot } from "./lib/react-dom.js";
import { Greeting } from "./data.js";

const getRandom = (n) => {
    return Math.floor(Math.random() * n)
}

const keys = Object.keys(Greeting)
const key = keys[getRandom(keys.length)];
const value = Greeting[key]

const h1 = createElement(
  "h1",
  { name: "나라별 인사말 - IT" },
  `인사말 : ${value}}`
);
const div = createElement("div", { type: "text" }, h1);

const app = document.getElementById('app')

const root = createRoot(app)

root.render(div)






















































