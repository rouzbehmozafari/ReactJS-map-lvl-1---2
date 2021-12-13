import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import MovieBox from './MovieBox';
import Movies from './Movies';
import movies from './Movies';
import Stars from './Stars';

 

// class App extends React.Component {
//   state = {
//     'is' : false,
//     'bcColor' : 'white',
//     'color' : 'black'
//   }
//   changeMe = ()=>{
//     if (!this.state.is ){
//       this.setState({'bcColor': 'white', 'color': 'black'});
//     }
//     else{
//       this.setState({'bcColor': 'black', 'color': 'white'});
//     }
//     this.setState({is : !this.state.is})

//   }
//   render() {  
//     return (
//       <div className="App">
//         <button style={{color: this.state.color , backgroundColor: this.state.bcColor} } onClick={this.changeMe}>change mode</button>
//       </div>);
//   }
// }
 
// export default App;

// class App extends React.Component {
//   state = {
//     num
//   }
//   render() { 
//     return (
//       <div className="App">
//         {movies.map( i =>
//           <MovieBox 
//             key = {uuidv4()}
//             title = {i.title}
//             year = {i.year}
//             director = {i.director}
//             genre = {i.genre}
//             rate = {i.rate}
//             star = {'https://w7.pngwing.com/pngs/964/685/png-transparent-yellow-five-pointed-star-yellow-star-five-pointed-star.png'}
//             num = {i.rate}
//         /> )}
//       </div>
//       // <img src="https://w7.pngwing.com/pngs/964/685/png-transparent-yellow-five-pointed-star-yellow-star-five-pointed-star.png" alt="img" />
//       )
//   }
// }
 
// export default App;

import ToDoList from './ToDoList';
function App() {
  return (
    <div className="App">
      <ToDoList/>
    </div>
    )}


export default App;
