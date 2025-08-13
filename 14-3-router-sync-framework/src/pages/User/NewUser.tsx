import { useId } from 'react';
import { Form } from 'react-router';

//@ts-ignore
import type { Route } from "./+types/users/newUser.tsx";


export const meta = () => ([
  {title: 'new | user generator'}
])


export async function clientAction({request}:Route.clientActionArgs) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  console.log(name,email);

}

function NewUser() {

  const nameId = useId();
  const emailId = useId();

  return (
    <div>
      <h2>새로운 유저 추가</h2>
      <Form method='post'>
        <div>
          <label htmlFor={nameId}></label>
          <input type="text" name="name" id={nameId} placeholder='이름' required/>
        </div>
        <div>
          <label htmlFor={emailId}></label>
          <input type="email" name="email" id={emailId} placeholder='이메일' required/>
        </div>

        <button type="submit">추가</button>
      </Form>
    </div>
  );
}
export default NewUser
