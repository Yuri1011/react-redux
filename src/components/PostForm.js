import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      title: this.state.title,
      id: Date.now().toString(),
    };

    console.log(newPost);

    this.setState({ title: "" });
  };

  changeInputHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title.value}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success mt-2" type="submit">
          Создать
        </button>
      </form>
    );
  }
}
