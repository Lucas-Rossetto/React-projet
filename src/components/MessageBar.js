import React, { Component }  from 'react';

export default class MessageBar extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button onClick={this.handleSubmit}>
            Ajouter
          </button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit() {
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.props.addMessage(newItem);
  }
}