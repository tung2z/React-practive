import * as React from 'react';

interface IButtonProps {

}

const Button: React.FunctionComponent<IButtonProps> = (props) => {

  return <button className="btn btn-primary ml-1">{props.children}</button>;
};

export default Button;
