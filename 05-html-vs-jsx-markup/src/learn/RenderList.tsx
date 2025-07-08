import { Fragment } from "react/jsx-runtime";



interface Props {
  reactLibrary: ReactLibrary;
  items:StatusMessageWithId[]
}


function RenderList({reactLibrary, items}:Props) {

  /* 객체의 리스트 렌더링 */

  const renderDefinitionList = (data:ReactLibrary) => {
    const definitionItem = Object.entries(data).map(([key,value])=> (
        <Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
    ))
    return <dl className="reactLibrary">{definitionItem}</dl>
  }

    // for .. of 
    const arrayItem = [];
    for (const item of items) {
        arrayItem.push(<li key={item.id}>{item.message}</li>)
        // console.log('for of 문 : ', item.id);
        // console.log('for of 문 : ', item.message);
        
    }


    const renderItems = (data: StatusMessageWithId[]) => {
        return data.map((item) => <li key={item.id}>{item.message}</li>)
    };

    const reverseRenderItems = (data: StatusMessageWithId[]) => {
        return [...data].reverse().map((item) => <li key={item.id}>{item.message}</li>)
    };

  return (
    <> 
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로 렌더링합니다.
        </p>
        {renderDefinitionList(reactLibrary)}
      </dd>
        <dd>
          <ul>
              {/* 표현식을 사용한 리스트 렌더링 ConditionalRendering.tsx */}
              {/* {items.length > 0 ? (
                  items.map((item) => <li key={item.id}>{item.message}</li>) ) :
                    (<li>표시할 메시지가 없다</li>
              )} */}
              {items.map(({ id, message }: StatusMessageWithId) => (<li key={id}>{message}</li>))}
          </ul>
          <hr />
          <ul>
              {/* for..of를 사용한 리스트 렌더링 */}
              { arrayItem }
          </ul>
          <hr />
          <ul>
              {/* 배열의 메서드를 사용한 리스트 렌더링 */}
              {items.map((item)=>(<li key={item.id}>{item.message}</li>))}
          </ul>
          <hr />
          <ul>
              {/* 함수를 사용한 리스트 렌더링 */}
              {renderItems(items)}
          </ul>
        </dd>
          <dd>
              <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링 합니다.</p>
              {/* 역순 리스트 렌더링. */}
              {reverseRenderItems(items)}
              {items.toReversed().map((item, index) => (<li key={item.id ?? index}>{item.message}</li>))}
          </dd>
    </>
  )
}



export default RenderList