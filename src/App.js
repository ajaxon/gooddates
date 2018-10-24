import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Login from './auth/Login';
import {firebase} from './config/Firebase';
import Header from './Header'
import DateList from './DateList';
const Home = () => {
  return(<div>
    <h2>Home</h2>
    </div>)
};


class App extends Component {


  state = {
    places: []
  }

  async componentWillMount() {
    try{
   let data = await firebase.firestore().collection('places').get();
   console.log("data",data);

   data.forEach( (doc) => {
    console.log(doc.id, doc.data());
    this.setState({
      places: doc.data()
    })
  })
  
    } catch(err) {
      console.log("Error", err);
    }
  
  }
  render() {
    return (
      <div className="App">
        <header>
        
        </header>
        <Header />

      {this.state.places.placeName}
        <div><Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dates">Dates</Link>

        </div>

        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/dates" component={DateList}/>
      </div>
    );
  }
}

export default App;
