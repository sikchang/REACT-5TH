import {createElement} from "./lib/react.js";
import {createRoot} from "./lib/react-dom.js";
import { listData } from "./data.js";

const children = listData.items.map(({ id, title }) => {

    const liElemnt = createElement('li', {key:id, className: 'item' },
        createElement('img', { src: `../public/planet/image-0${id}.jpg`, alt: '' }),
        createElement('span', { className: 'content' }, title),
        createElement("button", { type: "button", title: '아이템 이동' },
            createElement('img', { src:'../public/icons/icon.svg' ,alt:'아이템 이동'})
        ),
    )
    
    return liElemnt
});


const ulElement = createElement('ul',{className:'planet',lang:'en'},children)

const root = createRoot(document.getElementById('app'))




function render() {
    root.render(ulElement);
}

render();

/* 
setTimeout(() => {
    root.unmount();
}, 2000)
 */



































