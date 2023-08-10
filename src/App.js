
import Box from './components/box';
import './App.css'
import { useState } from 'react';



function App()
 {
 const[square,setSquare]=useState(Array(9).fill(null));
 const[isX,setisX]=useState(false);


 function handleRestart()
 {
  setSquare(Array(9).fill(null));
  setisX(false);
 }

function boxClick(i)
{
  if(calculateWinner(square)===null)
{
square[i]= isX? 'O' :'X';
setSquare(square);
setisX(!isX);
}

}

const winner = calculateWinner(square);
 let status 
 if(winner)
 {
  status= `Winner is : ${winner}`;
 }
 else
 {
  status = `Next Move : ${isX ? 'O' :'X'}`
 }

function calculateWinner(square)
{
const lines =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
for(let i=0 ;i<lines.length ;i++)
{
const[a ,b, c]=lines[i];
if(square[a] && square[a]===square[b] && square[a]===square[c])
{
  return square[a]
}

}
return null;
}

    return (
     <>
     <h1>Tic-Tac-Toe</h1>
      <p> {status}</p>
        <div className='game'>

          
          <div className="row">
            <Box value={square[0]} onBoxClick={()=>boxClick(0)}></Box>
            <Box  value={square[1]} onBoxClick={()=>boxClick(1)}></Box>
            <Box value={square[2]} onBoxClick={()=>boxClick(2)}></Box>
          </div>
          <div className="row">
            <Box  value={square[3]} onBoxClick={()=>boxClick(3)} ></Box>
            <Box value={square[4]} onBoxClick={()=>boxClick(4)}></Box>
            <Box value={square[5]} onBoxClick={()=>boxClick(5)}></Box>
          </div>
          <div className="row">
            <Box value={square[6]}  onBoxClick={()=>boxClick(6)}></Box>
            <Box value={square[7]} onBoxClick={()=>boxClick(7)}></Box>
            <Box value={square[8]} onBoxClick={()=>boxClick(8)}></Box>
          </div>
        </div>
        <button className='restart-button' onClick={handleRestart}> RESTART</button>
     
</>
    );
  }

  export default App;
