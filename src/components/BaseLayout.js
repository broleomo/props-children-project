import React, { Component } from 'react';


export default class BaseLayout extends Component {
  render() {
    return (
      <div>
      <Header />
      {this.props.children}
        <Footer />
      </div>

    );
  }
}

class Header extends Component {
  render() {
    return (
      <nav>I am the Navigation Bar</nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>I am the Footer</footer>
    );
  }
}
