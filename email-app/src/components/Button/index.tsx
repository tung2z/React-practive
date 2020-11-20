import * as React from 'react';

interface IButtonProps {

}

const Button: React.FunctionComponent<IButtonProps> = (props) => {

  return <button className="btn btn-primary">{props.children}</button>;
};

export default Button;
