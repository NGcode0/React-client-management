import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'name' : '홍길동',
    'birthday': '940901',
    'gender': '남자',
    'job': '대학'
  },
  {
    'id': 2,
    'name' : '길동',
    'birthday': '111111',
    'gender': 'sksms',
    'job': 'asd'
  },
  {
    'id': 3,
    'name' : 'asd',
    'birthday': 'asfa',
    'gender': 'asda',
    'job': 'asdad'
    },

]
class App extends Component {
  render() {
    return (
      customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
        );
      })
    );
}
}

export default App;
