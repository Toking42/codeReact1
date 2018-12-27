import React from 'react';
import './SearchBar.css';


const sortByOptions = {
"Best Match":"best_match",
"Highest Rated":"rating",
"Most Reviewed":"review_count"
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term:"",
      location:"",
      sortBy:"best_match"
    };

    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.getSortByClass = this.getSortByClass.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault()
  }

  handleSortByChange(option) {
    this.setState(
        {sortBy:option}
    )
  }

  handleTermChange(event) {
    console.log("Term changed");
    this.setState(
        {term:event.target.value}
    )
  }
  handleLocationChange(event) {
    this.setState(
        {location:event.target.value}
    )
  }


  getSortByClass (sortByOption) {
    if(sortByOption === this.state.sortBy) return 'active';
    return '';
  }


  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      let sortByClass = this.getSortByClass(sortByOptionValue);
      return <li className={sortByClass} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
