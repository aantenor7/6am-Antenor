import React from 'react';


const Function = ({items,name,children}) => {

    const getAPI = (url) => {
        return fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => console.log(data));
    }
    
   
  return (
    <div></div>
  )
}

export default Function;