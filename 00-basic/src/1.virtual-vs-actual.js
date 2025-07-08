
/* 

virtual DOM
가상 문서 객체 모델
실제 DOM을 추상화 (단순화)

*/
import { createElement, isValidElement } from './lib/virtual/index.js';
import { createRoot } from './lib/virtual-dom/index.js';

// console.log(createElement);
// console.log(createRoot);


/* actual DOM ------------------------ */
/* 
실제 DOM 구성 (엘리먼트 트리)
웹 API 사용해서 문서 객체(document object) 생성
*/

// 부모 요소 생성
const divElement = document.createElement('div')

// 자식 요소 생성
const buttonElement = document.createElement('button')

// 자식 요소 속성 설정
buttonElement.setAttribute('type', 'button')

// 자식 요소 컨텐츠 설정
buttonElement.textContent = '하이 ㅋㅋ;;'

// 요소간 관계 형성
divElement.append(buttonElement)
// console.log("요소간 관계 형성 : ", divElement);

// 실제 DOM에 마운트(mount, 착장 === 렌더링)
const actualDomElement = document.getElementById('app')

actualDomElement.append(divElement);


/* virtual DOM -------------------- */

// API 사용법 : createElement(type,props(값을 전달하려면 사용하는 공간),...children)
const buttonV_Element = createElement('button',{type:'button'},'홀리몰리 💂‍♀️')

// 아래 둘 중 아무거나 사용 가능
// const divV_element = createElement("div", { className: "sik",children:[buttonV_Element] });
const divV_element = createElement("div", { className: "sik" }, buttonV_Element);

console.log("divV_element ->", divV_element);

const VirtualDomElement = document.getElementById('app')
const vRoot = createRoot(VirtualDomElement);

console.log(vRoot);

vRoot.render(divV_element);

// isValidElement : 가상 DOM인지 확인하는 함수
// 일반 javascript 객체
console.log(isValidElement(divElement));
// 가상 요소 객체
console.log(isValidElement(divV_element));

// 가상 DOM -> 실제 DOM을 훙내 : 단순화



























