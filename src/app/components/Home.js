import React from "react";

export class Home extends React.Component {
  render() {
    let content ="";
    if (true){
      content = <p>Batman!</p>;
    }
    return(
      <div>
        <p>In a new Component!</p>
        {content}
      </div>
    );
  }
}
