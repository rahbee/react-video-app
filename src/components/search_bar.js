import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term : ''};
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  render(){
    return (
      <div>
        <input placeholder="SEARCH HERE" onChange={event => this.onInputChange(event.currentTarget.value)}/>
      </div>
    );
  }
}

export default SearchBar;