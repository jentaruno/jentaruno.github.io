import React, { Component } from 'react';
import './App.css';
import CourseMatcher from './components/CourseMatcher';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  state = {}
  render() {
    return (
      <>
        <Header />
        <CourseMatcher />
        <Footer />
      </>
    );
  }
}

export default App;