// 명령형이지만 태그를 만들어서 해본다.



const template = /* html */ `
    <form id="form">
        <h2>프로그래머스 퀴즈!</h2>
        <p>프로그래머스에서 가장 잘생긴 사람은?</p>
        <textarea id="textarea"></textarea>
        <br />
        <button type="submit" id="button">Submit</button>
        <p id="loading" style="display:none">Loading...</p>
        <p id="error" style="display:none; color:red;">error</p>
    </form>
    <h1 id="success" style="display:none">정답입니다~~!!</h1>
    <hr /> 
`;

const app = document.getElementById("app");
app?.insertAdjacentHTML("beforeend", template);


/* ------------------------------------------------------------ */

// 프로퍼티 제어이기 때문에 어트리뷰트는 필요 없음
// 명령형으로 진행 유틸함수 만들고 연결하고 하나하나씩 길을 만들어주는 것
const form = document.getElementById("form") as HTMLFormElement;
const textarea = document.getElementById("textarea") as HTMLTextAreaElement;
const button = document.getElementById("button") as HTMLButtonElement;
const loading = document.getElementById("loading") as HTMLParagraphElement;
const error = document.getElementById("error") as HTMLParagraphElement;
const success = document.getElementById("success") as HTMLHeadingElement;


const hide = (el:HTMLElement) => el.style.display = 'none';
const show = (el:HTMLElement) => el.style.display = 'block';
const enable = (el:HTMLElement & {disabled:boolean}) => el.disabled = false;
const disable = (el:HTMLElement & {disabled:boolean}) => el.disabled = true;


const handleTextareaChange = () => {
    if (textarea.value.length === 0) {
        disable(button)
    } else {
        enable(button)
    }
}

const submitForm = (answer:string):Promise<string> => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (answer.toLowerCase() === '신섬범') {
                resolve('최고')
            } else {
                reject(new Error('땡!! 너는 이미 정답을 알고 있다.'))
            }
        }, 1500)
    })
}

const handleFormSubmit = async (e:SubmitEvent) => {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loading);

    try {
        await submitForm(textarea.value)
        show(success);
        hide(form);
    } catch (err) {
        show(error);
        if (err instanceof Error) {
            error.textContent = err.message;
        }
    }
    finally {
        hide(loading);
        enable(textarea);
        enable(button);
    }
}

textarea.addEventListener('input',handleTextareaChange)
form.addEventListener('submit',handleFormSubmit)




























