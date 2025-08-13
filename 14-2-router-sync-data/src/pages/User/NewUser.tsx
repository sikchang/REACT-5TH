import { useId } from 'react';
import { Form } from 'react-router';


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
