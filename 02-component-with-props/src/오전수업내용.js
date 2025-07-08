import React, { createElement as h } from "./lib/react.js";
import ReactDOM, { createRoot } from "./lib/react-dom.js";
// import { listData } from "./data.js";

const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};

/* class syntax */

// 1. PlanetItem 각각의 li 아이템 모아두는 곳이 필요
class PlanetItem extends React.Component{
  
  // constructor는 생략해도 됀다. 메서드 안에 this.pros를 사용하여 가져올 수 있다.
/*   constructor(props) {
    super();
    console.log(props);
    
  } */

  render() {

    const { id,title } = this.props;

    // return h("div", null, title); /* virtual DOM */
    return h('li',{ className: 'item' },
      h('img',{src:`/planet/image-0${id}.jpg`,alt:''}),
      h('span',{className:'content'},title),
      h('button', {type:'button',title:'mobe item'},
        h('img',{src:'/icons/icon.svg',alt:'move item'})),
    )
  }
}
// 2. PlanetList 모든 ul 테그를 가지고 있는 부모 태그
// const ulElement = h('ul', { className: 'planet,', lang: 'en' }, render())
// console.log(ulElement);

class PlanetList extends React.Component{

  render() {
    const {lang,children} = this.props
    return h('ul',
      { className: 'planet,', lang },
      children
      )
  }
}


// 3. PlanetPage 렌더링 하는 것
class PlanetPage extends React.Component{

  render() {
    
    return h(
      PlanetList,
      // {/* lang, cgildren */}
      {
        lang: 'en',
        children:listData.items.map(({id,title}) => h(PlanetItem,{key:id,id,title}))
      }
    );
  }
}

/* function syntax  */

const container = document.getElementById('app');
const reactDomRoot = ReactDOM.createRoot(container);

reactDomRoot.render(h(PlanetPage));




































