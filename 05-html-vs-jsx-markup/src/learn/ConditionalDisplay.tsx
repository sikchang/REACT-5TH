
interface Props {
    isShowImage: boolean;
}

// 주로 에니매이션 사용할 때 사용함
    // 처음부터 만들어 져 있는 것에서 사용함.
function ConditionalDisplay({ isShowImage }: Props) {
  return (
      <>
          <dt>조건부 표시(conditional display)</dt>
          <dd>
              <p>
                  표시(display) 여부에 따라 이미지가 화면에 감춰지거나 표시됩니다.
              </p>
              <picture hidden={isShowImage}>
                  <source type="image/avif" srcSet="/react/react.avif" />
                  <source type="image/webp" srcSet="/react/react.webp" />
                  <img src="/react/react.png" alt="React" height={40} />
              </picture>
          </dd>
      </>
  )
}

export default ConditionalDisplay