import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

import { ROUTES } from '../../const';
import { Card } from '../Card'
import './style.css';

export const Navbar = () => {
  
  const user = useSelector(state => state.user);

  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
      {user ? (
        <Card picture = {user.picture} name = {user.name} small />
      ) : (
        <Link to={ROUTES.SIGNIN}>Sign in</Link>
      )}
      
    </nav>
  );
};