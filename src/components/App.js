import React, { PureComponent } from "react";
import ArticleList from "./ArticleList";
import articles from "../fixtures";
import "bootstrap/dist/css/bootstrap.css";

class App extends PureComponent {
  state = {
    reversed: false,
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3" style={{ textAlign: "center" }}>
            App Name
            <button className="btn btn-success btn-lg" onClick={this.revers}>
              Reverse
            </button>
          </h1>
        </div>
        <ArticleList
          articles={this.state.reversed ? articles.slice().reverse() : articles}
        />
      </div>
    );
  }

  revers = () =>
    this.setState({
      reversed: !this.state.reversed,
    });
}

export default App;
