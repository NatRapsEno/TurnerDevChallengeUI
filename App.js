import React from 'react';
import './App.css';
import ReactSearchBox from 'react-search-box';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: [], titleMatch: []};

  }

  titleSelected(record) {

    fetch('http://localhost:4000/title/' + record.key)
        .then(res => res.json())
        .then((data) => {
          this.setState({ titleMatch: data })
        })
        .catch(console.log)

  }

  componentDidMount()
  {

    fetch('http://localhost:4000/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ data: data })
        })
        .catch(console.log)
  }

  render() {

    return (
          <div className="centered">
              <ReactSearchBox
              placeholder="Type your search..."
              value=""
              data={this.state.data}
              onSelect={record => this.titleSelected(record)}
              />
          </div>
    );
  }

}

export default App;
