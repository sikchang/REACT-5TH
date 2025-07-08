import { Fragment } from "react/jsx-runtime";

// 컴포넌트가 받는 props 타입을 정의합니다.
interface Props {
  reactLibrary: ReactLibrary;               // 객체 형태의 데이터 (React 관련 정보)
  items: StatusMessageWithId[];             // 배열 형태의 데이터 (상태 메시지 목록)
}

// 함수형 컴포넌트 선언 (props를 구조 분해하여 받음)
function RenderList({ reactLibrary, items }: Props) {

  // ---------------------------------------------
  // 🧠 이 함수는: 객체를 반복 렌더링하기 위한 유틸 함수입니다.
  // 'reactLibrary' 객체의 key와 value를 설명 목록(<dt>, <dd>)으로 변환합니다.
  // ---------------------------------------------
  const renderDefinitionList = (data: ReactLibrary) => {
    // Object.entries(data): 객체를 [key, value] 배열로 변환
    // 예: {name: 'React'} → [['name', 'React']]
    const definitionItem = Object.entries(data).map(([key, value]) => (
      <Fragment key={key}>              // key는 React의 리스트 최적화를 위한 필수 식별자
        <dt>{key}</dt>                  // 설명 목록의 제목: 객체의 속성 이름
        <dd>{value}</dd>                // 설명 목록의 설명: 속성에 해당하는 값
      </Fragment>
    ));

    // 완성된 <dt>/<dd> 쌍들을 <dl> 태그로 감싸 반환
    return <dl className="reactLibrary">{definitionItem}</dl>;
  };

  // ---------------------------------------------
  // 🧠 이 부분은 실제 JSX 반환 부분입니다.
  // 'reactLibrary'를 설명하고, 다양한 방식으로 'items' 배열을 렌더링합니다.
  // ---------------------------------------------
  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로 렌더링합니다.
        </p>

        {/* 위에서 선언한 renderDefinitionList 함수 실행 결과를 여기 렌더링 */}
        {renderDefinitionList(reactLibrary)}
      </dd>

      {/* ----------------------------------------- */}
      {/* 🔽 배열(items)을 다양한 방식으로 렌더링할 수 있는 자리들 🔽 */}
      {/* ----------------------------------------- */}

      <ul>
        {/* ✅ 표현식을 사용한 리스트 렌더링 */}
        {/* 조건부 렌더링이나 짧은 map 같은 간단한 표현식에 사용됨 */}
        {items.length > 0 ? (
          items.map((item) => <li key={item.id}>{item.message}</li>)
        ) : (
          <li>표시할 항목이 없습니다.</li>
        )}
      </ul>

      <hr />

      <ul>
        {/* ✅ for...of를 사용한 리스트 렌더링 */}
        {/* JSX 외부에서 먼저 반복을 돌고, 결과를 배열로 모아서 리턴 */}
        {(() => {
          const list = [];
          for (const item of items) {
            list.push(<li key={item.id}>{item.message}</li>);
          }
          return list;
        })()}
      </ul>

      <hr />

      <ul>
        {/* ✅ 배열의 메서드(map 등)를 사용한 리스트 렌더링 */}
        {/* 가장 일반적이고 React에서 많이 쓰는 방식 */}
        {items.map((item) => (
          <li key={item.id}>{item.message}</li>
        ))}
      </ul>

      <hr />

      <ul>
        {/* ✅ 함수를 사용한 리스트 렌더링 */}
        {/* 복잡한 렌더링 로직이 있을 경우 외부로 분리해서 재사용 가능 */}
        {renderListItems(items)}
      </ul>
    </>
  );
}

// 🔧 위 JSX에서 호출되는 리스트 렌더링 전용 함수
function renderListItems(data: StatusMessageWithId[]) {
  return data.map((item) => <li key={item.id}>{item.message}</li>);
}

export default RenderList;
