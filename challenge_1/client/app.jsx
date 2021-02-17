import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import EventList from './eventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {events: [], page: 1, keyword: ''};
  }


  loadCommentsFromServer() {
    let page = this.state.page;
    let keyword = this.state.keyword;
  axios.get(`http://localhost:3000/events?_page=${page}&_limit=10&q=${keyword}`)
  .then((data) => {
    console.log(data.data);
    this.setState({events: data.data})
  })
  .catch((error) => {
    console.log(error);
  })
  }



  handlePageClick (data) {
    let selected = data.selected;
    let page = selected + 1;

    this.setState({ page: page }, () => {
      this.loadCommentsFromServer();
    });
  };

  submit () {
    this.loadCommentsFromServer();
  }

  change (e) {
    let keyword = e.target.value;
    this.setState({keyword: keyword});
  }

  render() {
    return (
      <div className="main">

        <h1>Historical Events Finder</h1>
        <input placeholder="Enter keyword..." onChange={(e) => this.change(e)}></input>
        <button onClick={this.submit.bind(this)}>Search</button>
        {
       this.state.events[0] ?
      <div className="commentBox">
        <EventList events={this.state.events} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div> : ''
        }
      </div>
    );
  }
}

export default App;

