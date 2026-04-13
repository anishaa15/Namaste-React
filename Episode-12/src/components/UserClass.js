import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("component constructor");

    this.state = {
        userInfo:{
            name: "Dummy",
            location: "Default",
            company: "Dummy Company",
        }
    }

  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anishaa15");
    const json = await data.json();
    // console.log(json);
    // console.log("Component did mount");
    this.setState({
        userInfo: json,
    })
  }

  componentDidUpdate(){
    // console.log("Component did update");
  }

  componentWillUnmount(){
    // console.log("Component will unmount");
  }

  render() {
    // console.log("Component render");
  const {name, location, company, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Company: {company}</h4>
      </div>
    );
  }
}

export default UserClass;
