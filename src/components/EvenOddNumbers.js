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
    padding:'15px',
    size:'20%' ,
    border:'1px',
    display:'inline-block',
  };
  return (
  <div>
    <input type="number" value={number} onChange={eventOccur}/>
      <div className="container2" style={boxStyle}>
        <h1>Number:{number}</h1><br></br>
        <h2>{isEven?'Even':'Odd'}</h2>
      </div>
    </div>
  );
};
export default EvenOddNumbers;


// import React, { useState } from 'react';

// const EvenOddNumbers = () => {
//   const [numbers, setNumbers] = useState([]);
//   const [number, setNumber] = useState('');
//   const [isEven, setIsEven] = useState(false);

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setNumber(inputValue);
//     setIsEven(inputValue % 2 === 0);
//   };

//   const handleAddClick = () => {
//     if (number !== '') {
//       setNumbers([...numbers, number]);
//       setNumber('');
//     }
//   };

//   const boxColor = isEven ? 'green' : 'red';

//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={handleInputChange}
//         style={{ backgroundColor: boxColor }}
//       />
//       <button onClick={handleAddClick}>Add</button>
//       <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
//         {numbers.map((num, index) => (
//           <div
//             key={index}
//             style={{ backgroundColor: num % 2 === 0 ? 'green' : 'red', padding: '5px', margin: '5px' }}
//           >
//             {num}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EvenOddNumbers;