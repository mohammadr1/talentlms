import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (

<nav>
  <ul class="nav masthead-nav">
    <li class="active"><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>


    );
  }
}

export default Header;



