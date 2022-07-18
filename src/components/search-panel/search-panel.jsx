import { Component } from "react";
import "./search-panel.sass";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  onUpdateSearch = ({ target }) => {
    const term = target.value;

    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        value={this.state.term}
        className="form-control search-input"
        type="text"
        placeholder="Найти сотрудника"
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
