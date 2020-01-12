import * as React from "react";
import "./button.css";

interface Props {
  text: string;
}

class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <button>{this.props.text}</button>;
  }
}

export default Button;
