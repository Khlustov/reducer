import React, { Component, useCallback } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import { ROUTES } from '../../const';
 
import './style.css';

const SignInPageContainer = () => {

  const phone = useSelector(state => state.phone);
  const password = useSelector(state => state.password);
  const user = useSelector(state => state.user);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  

  const onChangePassword = (event) => {
    const changePasswordAction = {
      type: 'CHANGE_PASSWORD',
      payload: event.target.value
    }

    dispatch(changePasswordAction);
  }

  const onChangePhone = (event) => {
    const changePhoneAction = {
      type: 'CHANGE_PHONE',
      payload: event.target.value
    }

    dispatch(changePhoneAction);
  }

  const onClickSignIn = useCallback(async () => {
    try {
      const response =  await axios.post('http://localhost:3001/auth/sign-in', {
        phone: phone,
        password: password
      });
    
      const changeUserInfo = {
        type: 'CHANGE_USER',
        payload: response.data
      }
      dispatch(changeUserInfo);
    }
    catch (err) {
      
      const changeError = {
        type: 'CHANGE_ERROR',
        payload: err.response.data
      }
      
      dispatch(changeError)
    }
    
  })

  // state = {
  //   phone: '',
  //   password: '',
  //   user: null,
  //   error: ''
  // }

  // componentDidMount = () => {
  //   console.log('mounted');
  // }

  // componentWillUnmount = () => {
  //   console.log('unmounted');
  // }

  // onLogin = async () => {
  //   try {
  //     // const response = await axios.post('http://localhost:3001/auth/sign-in', {
  //     //   phone: this.state.phone,
  //     //   password: this.state.password
  //     // });
  //     // this.setState({ user: response.data, phone: '', password: '' });
  //     // this.props.history.push(ROUTES.MAIN);
  //   } catch (err) {
  //     console.log(err.response);
  //     // this.setState({ error: err.response.data });
  //   }
  // }

  // onChangeCredentials = (event, fieldName) => {
  //   // this.setState({ [fieldName]: event.target.value, error: '' });
  // }

  
    return (
      <div className="page">
        <div className="page-sign-in">
          <input
          type="text"
          placeholder="phone number"
          onChange={onChangePhone}
          value={phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={onChangePassword} 
          value={password}
        />
        <button onClick = {onClickSignIn}>Sign in</button>
        <div>
        {error}
        </div>
        {user && <Redirect to = {ROUTES.MAIN} />}
        <div>
          {/* {this.state.user && (
            <span>{this.state.user.name.first} {this.state.user.name.last}</span>
          )} */}
        </div>
          {/* <span className="text-field error-text">{this.state.error}</span> */}
          {/* <button onClick={this.onLogin}>Sign in</button> */}
        </div>
        {/* {this.state.user !== null && <Redirect to={ROUTES.MAIN} />} */}
      </div>
    )
  
}

export default SignInPageContainer;