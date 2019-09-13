import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import Header from  './Header';
import Skyline from './Skyline';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }
  render() {

    return (
      <BrowserRouter>
        <main className="container">
          <Header />
          <Skyline />
          <Routes masterKegList={this.state.masterKegList} handleAddingNewKegToList={this.handleAddingNewKegToList}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
