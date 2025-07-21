import { useId } from "react";

/*
우리 DOM이 직접 제어를 하는 것이기 때문에 
defaultChecked를 사용해서 onClick을 통해서 직접 제어
*/
interface Props {
    onToggle: () => void;
    isInstantSearch: boolean;
}

function InstantSearch({onToggle,isInstantSearch}:Props) {

    const id = useId()

    return (
        <div className="formControl">
            <label htmlFor={id} style={{userSelect:'none'}}>
                <input
                    id={id}
                    type="checkbox"
                    defaultChecked={isInstantSearch}
                    onClick={onToggle}
                />
                {' '}
                인스턴스 서치
            </label>
        </div>
    )
}

export default InstantSearch;