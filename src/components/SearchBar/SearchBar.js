import React from 'react';
import './SearchBar.scss';
import headerBgImg from '../../assets/img/header-bg.jpg';

class SearchBar extends React.Component {
  state = { term: '' };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    console.log(this.state.term);

    event.preventDefault();
  };

  render() {
    return (
      <div className="search-container">
        <div className="search">
          <form onSubmit={this.onFormSubmit} className="search-form">
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
              className="search-input"
              placeholder="What are you looking for..."
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
