import {createElement} from "./lib/react.js"; // 가상 DOM 요소를 만드는 함수 (React의 createElement와 유사)
import {createRoot} from "./lib/react-dom.js"; // 최상위 렌더링 컨테이너 생성 함수
import { listData } from "./data.js"; // 렌더링에 사용할 데이터(리스트 아이템) 불러오기

// Proxy로 감싸서 listData.items가 바뀔 때마다 render()를 자동 실행!
// 우회, 대체
/* 
reactiveListData.items
reactiveListData.items = [...]
*/
// target : 원래 감싼 대상 객체 ( listData => { items:[...]} )
// prop : 접근하려는 속성 키     => 'items'
// newValue : 새로 설정하려는 값 => [ ...reactiveListData.items,{...} ]
const reactiveListData = new Proxy(listData, {
  // 데이터 조회할 때 그대로 반환
  get(target, prop) { 
    return target[prop];
  },
  // 데이터 변경(set) 시 무조건 render()를 실행시켜서 UI 갱신
  set(target, prop, newValue) {
    target[prop] = newValue; // 실제 데이터 변경
    render();                // UI 새로 그리기
    return true;             // Proxy set 규칙상 true 반환
  }
});

const root = createRoot(document.getElementById("app")); // 렌더링할 최상위 DOM 요소를 root로 만듦

// 화면 그리는 함수: listData.items의 배열을 li로 변환해서 ul로 감싸고 root에 렌더링
function render() {
  const children = listData.items.map(({ id, title }) => {
    // 각각의 데이터로 li, img, span, button을 만든다
    const liElemnt = createElement('li', { key:id, className: 'item' },
      createElement('img', { src: `../public/planet/image-0${id}.jpg`, alt: '' }),
      createElement('span', { className: 'content' }, title),
      createElement("button", { type: "button", title: '아이템 이동' },
        createElement('img', { src:'../public/icons/icon.svg' ,alt:'아이템 이동'})
      ),
    );
    return liElemnt; // 완성된 li 반환
  });

  // 모든 li를 ul로 묶고, 언어 속성/클래스명 부여
  const ulElement = createElement('ul', { className:'planet', lang:'en' }, children);

  // 완성된 ulElement를 root 컨테이너에 렌더링
  root.render(ulElement);
}

render(); // 최초 1번: 비어있는 리스트 화면 그리기

// setTimeout으로 1초마다 아이템을 하나씩 추가
setTimeout(() => {
  // 기존 배열 복사해서 새 객체 추가(불변성 유지!)
  reactiveListData.items = [
    ...reactiveListData.items,
    { id: 1, title:'Life on Earth' }
  ];
}, 1000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    { id: 2, title:'Life on Earth' }
  ];
}, 2000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    { id: 3, title:'Life on Earth' }
  ];
}, 3000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    { id: 4, title:'Life on Earth' }
  ];
}, 4000);
