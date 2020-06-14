import React, { Component, PureComponent } from "react";

class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
    };
  }

  componentWillMount() {
    console.log("---", "mounting");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen)
      this.setState({
        isOpen: nextProps.defaultOpen,
      });
  }

  componentWillUpdate() {
    console.log("---", "will update");
  }

  render() {
    const { article } = this.props;
    const style = { width: "50%" };
    const body = this.state.isOpen && (
      <section className="card-text">{article.text}</section>
    );
    return (
      <div className="card mx-auto" style={style}>
        <div className="card-header">
          <h2>
            {article.title}
            <button
              onClick={this.handleClick}
              className="btn btn-primary btn-lg float-right"
            >
              {this.state.isOpen ? "Close" : "Open"}
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

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

export default Article;
