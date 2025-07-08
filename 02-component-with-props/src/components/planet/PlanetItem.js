import React, { createElement as h } from "../../lib/react.js";
// 1. PlanetItem 각각의 li 아이템 모아두는 곳이 필요
export class PlanetItem extends React.Component{
  
  // constructor는 생략해도 됀다. 메서드 안에 this.pros를 사용하여 가져올 수 있다.
/*   constructor(props) {
    super();
    console.log(props);
    
  } */

    render(){
        const { id, title } = this.props;
    
        return h('li',
          {className:'item'},
          h('img',{src:`/planet/image-0${id}.jpg`,alt:''}),
          h('span',{className:'content'},title),
          h('button',{type:'button',title:'move item'},
            h('img',{src:'/icons/icon.svg',alt:'move item'})
          ),
        )
      }
    }



