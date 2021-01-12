import React, { Component } from 'react';

import Search from './components/Search';
import ShortList from './components/ShortList';
import NamesList from './components/NamesList';

/* ############################## */
/* ##### Main app component ##### */
/* ############################## */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      favourites: []
    }
  }
  
  // update filterText in state when user types 
  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }
  
  /* ############################# */
  /* ##### the render method ##### */
  /* ############################# */

  render() {
    const hasSearch = this.state.filterText.length > 0
    return ( 
      <div>
        <header>
          <Search
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          /> 
        </header>
        <main>
          <NamesList 
            data={this.props.data}
            filter={this.state.filterText}
          />
          {/* 
            Show only if user has typed in search.
            To reset the input field, we pass an 
            empty value to the filterUpdate method
          */}
          {hasSearch &&
            <button
              onClick={this.filterUpdate.bind(this, '')}>
              Clear Search
            </button>
          }

        </main>
      </div>
    )
  }
}

export default App;
