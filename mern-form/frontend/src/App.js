import './App.css'
import React from 'react';
import axios from 'axios';

const submit = async (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const email = e.target.elements.email.value;
  const edu = e.target.elements.edu.value;
  const user = {
    name: name,
    email: email,
    edu: edu
  };

  console.log(user);

  try {
    const res = await axios.post('http://localhost:3001/submit', user);
    console.log(res,res.status,res.statusText,res.data.message);
    alert('Form submitted successfully');
  } catch {
    alert('Hey bro you got Error');
  }
};

export default function App() {
  return (
    <div>
      <form onSubmit={submit}>
        <label>Name: </label>
        <input type="text" name="name"/>
        <label>Email: </label>
        <input type="email" name="email"/>
        <label>Education: </label>
        <input type="text" name="edu"/>
        <input type="submit"/>
      </form>
    </div>
  );
};


