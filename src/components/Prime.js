import React,{useState} from "react";
import './Prime.css';
function Prime() {
    const [value,setValue]=useState("");
    const [result,setResult]=useState("");
    const handleChange = e =>{
        setValue(e.target.value);
        setResult("");
    }
    const checkPrime = num => {
        for(let i=2;i<num;i++)
            if(num%i===0)
                return false;
        return num>1;       
    }
    const onClick = _ =>{
        if(isNaN(value)){
            setResult("Error");
        }else{
            const res = checkPrime(parseInt(value))?"true":"false";
            setResult(res);
        }
    }
    let txt="";
    let classValue="";
    if(result==="true"){
        txt=`${value} is Prime`;
        classValue="success";
    }else if(result==="false"){
        txt=`${value} is not Prime`;
        classValue="fail";
    }
  return (
    <div className='main'>
      <div className="main2">
        <p>Enter number to check number is Prime or Not</p>
        <input className="input" type="text" value={value} onChange={handleChange}/>
      </div>
      <div className="main3">
        <button className="btn" onClick={onClick}>submit</button>
        <button className="btn1" onClick={()=>setValue("")}>clear</button>
      </div>
      <div className={classValue}>
        {txt}
      </div>
    </div>
  );
}
export default Prime;

// const Graph = () => (
//   <div class="score">
//   {results.length > 0 && (
//     <div>
//       {results.map((result) => (
//         <CircularProgressbar
//           value={result.score}
//           text={`${Math.round((result.score / 89).toFixed(2) * 100)}%`}
//           styles={buildStyles({
//             pathColor: "#2bad60",
//             textColor: "#2bad60",
//             trailColor: "#0b0c18",
//             backgroundColor: "#3e98c7",
//           })}
//         />
//       ))}
//     </div>
//   )}
// </div>
// );