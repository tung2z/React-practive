import * as React from 'react';
import {Input, Button} from '../../components'


const Login = () => {
  return <div className='col-5 mx-auto'>
    <h2>Login</h2>
    <hr/>
    <Input type="text">UserName</Input>
    <Input type="password">Password</Input>
    <hr />
    <Button>Login</Button>
  </div>;
};

export default Login;
