// import React from 'react';
// import "./EvenOddNumbers.css";
// const EvenOddNumbers = () => {
//   const evenNumbers = [];
//   const oddNumbers = [];
//   for(let i=1;i<=100;i++){
//     if(i%2===0){
//       evenNumbers.push(i);
//     }else{
//       oddNumbers.push(i);
//     }
//   }
//   return (
//     <div className='main'>
//       <h1>Even Numbers</h1>  
//       <ul>
//         {evenNumbers.map(number => (
//           <li className='even' key={number}>{number}</li>
//         ))}
//       </ul>
//       <h1>Odd Numbers</h1>
//       <ul>
//         {oddNumbers.map(number => (
//           <li className='odd' key={number}>{number}</li>
//         ))}
//       </ul>
//       <div className='container2'>
//       <button type='button' className='btn'>ADD</button>
//       </div>    
//     </div>
//   );
// };
// export default EvenOddNumbers;
import React,{useState}from 'react';
const EvenOddNumbers=()=>{
  const [number,setNumber]=useState('');
  const [isEven,setIsEven]=useState(false);
  const eventOccur=(e)=>{
    const inputNumber=e.target.value;
    setNumber(inputNumber);
    if(inputNumber%2===0){
      setIsEven(true);
    }else{
      setIsEven(false);
    }
  };
  const boxStyle={
    backgroundColor:isEven?'green':'red',
    padding:'5px',
    size:'20%' ,
    display:'inline-block',
  };
  return (
  <div>
    <input type="number" value={number} onChange={eventOccur}/>
      <div style={boxStyle}>
        <h1>Number:{number}</h1><br></br>
        <h2>{isEven?'Even':'Odd'}</h2>
      </div>
    </div>
  );
};
export default EvenOddNumbers;
