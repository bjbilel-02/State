import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.person = {
      FullName: "Bilel",
      Bio: "FullStackJS",
      Profession: "devlopper",
      img: "https://www.facebook.com/photo.php?fbid=3203693523073672&set=pb.100002991662289.-2207520000..&type=3",
    };
    this.state = { count: 0 };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(prevState=> ({ count: prevState.count+0.5 }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>{this.person.FullName}</h2>
        <h2>{this.person.Bio}</h2>
        <h2>{this.person.Profession}</h2>
        <h2>{this.state.count}</h2>
        <img style={{ width: "500px" }} src={this.person.img} alt="hi" />
      </div>
    );
  }
}
