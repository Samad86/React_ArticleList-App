import React, { PureComponent } from "react";

class Article extends PureComponent {
  componentWillMount() {
    console.log("---", "mounting");
  }

  componentWillUpdate() {
    console.log("---", "will update");
  }

  render() {
    const { article, isOpen, onButtonClick } = this.props;
    const style = { width: "50%" };
    const body = isOpen && (
      <section className="card-text">{article.text}</section>
    );
    return (
      <div className="card mx-auto" style={style}>
        <div className="card-header">
          <h2>
            {article.title}
            <button
              onClick={onButtonClick}
              className="btn btn-primary btn-lg float-right"
            >
              {isOpen ? "Close" : "Open"}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h3 className="h6 card-subtitle text-muted">
            creation date: {new Date(article.date).toDateString()}
          </h3>
          {body}
        </div>
      </div>
    );
  }
}

export default Article;
