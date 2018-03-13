import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function findUsersByRole ({
    role = 'user',
    withContactInfo = true, 
    includeInactive
  }={}) {
      console.log(role);
      console.group("1");

  }

  findUsersByRole({role:'admin', withContactInfo: false, includeInactive: true});

  findUsersByRole();

  console.log([1,2,3,4,5].reduce((accumulator, currentValue) => {
      console.log(currentValue, accumulator);
      return accumulator + currentValue; 
  }));

  function pipe(...fns){
      console.log(arguments);
      return param => {
          console.log(param);
          return fns.reduce((result, fn) => {
              console.log(fn(result));
              return fn(result)
          }, param)
      }
  }

  function validate(
    id,
    firstName,
    lastName,
    email,
    username,
    pass,
    address,
    ...rest
  ) {
    // do some validation
    return {
      id,
      firstName,
      lastName,
      email,
      username,
      pass,
      address,
      ...rest
    }
  }

  function normalize(
    email,
    username,
    ...rest
  ) {
    // do some normalizing
    console.log("in normalize");
    return {
      email,
      username,
      ...rest
    }
  }
const userInfo = {
    id: 1, email: 'abc', firstName: 'bla',
    lastName: 'bla',
    username: 'dga',
    pass: 'dhjgasj',
    address: 'asgdjas',
}

console.log(pipe(
    validate,
    normalize
  )(userInfo));
