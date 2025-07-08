

import React, {createElement} from "./lib/react.js";
import ReactDOM, {createRoot} from "./lib/react-dom.js";


console.log(React);
console.log("ReactDOM : ",ReactDOM);


const button = createElement('button',{type:'button'},'하이 ㅋㅋ;;')

const div = createElement("div", {
    className: "sik",
    lang: 'en',
    'aria-label':'버튼 태그의 부모'
}, button);


const app = document.getElementById('app')

const root = createRoot(app/* 렌더링 위치 */)

root.render(div)




























































































