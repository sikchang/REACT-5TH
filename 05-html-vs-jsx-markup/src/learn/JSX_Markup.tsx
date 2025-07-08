import * as learnData from "@/data/learn"
import DataBinding from "./DataBinding"
import ConditionalRendering from "./ConditionalRendering"
import ConditionalDisplay from "./ConditionalDisplay";
import RenderList from "./RenderList";



function JSX_Markup() {

  const {
        imageType,
        statusMessage,
        isShowReactImage,
        reactLibrary,
        statusMessageWithId} = learnData;

        return (
          <dl className="descriptionList">
            <DataBinding statusMessage={statusMessage} />
            <ConditionalRendering imageType={imageType} />
            <ConditionalDisplay isShowImage={isShowReactImage} />
            <RenderList reactLibrary={reactLibrary} items={statusMessageWithId} />
          </dl>
        );
      }
      export default JSX_Markup;

// dl, dt, dd






















