import React from 'react';

const Header = () => {
    return (
        <div className='Header'>
            
            <nav class="navbar navbar-inverse" style={{marginBottom:0 , borderRadius:0}}>
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Kiran</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/products">Product</a></li>
    </ul>
    
    <ul class="nav navbar-nav navbar-right">
      <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Header;
