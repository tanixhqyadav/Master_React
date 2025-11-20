import React from 'react'
import { useState, useEffect, useCallback } from 'react'
function PsdGenr() {
    let [pass, setpass]=useState("");
    let [len, setlen]=useState(0);
    let [num, setNum]=useState(false);
    let [charc, setChar]=useState(false);
    let [spl, setspl]=useState(false);


    const psdgenc=useCallback( ()=>{
    let passw = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (spl) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      passw += str.charAt(char)
    }
    setpass(passw);
    },[num,charc,spl, len]);

    useEffect(()=>{
        psdgenc();
    }, [num,charc,spl,len]);    


  return (
    <>
    <p>PSWD GENERATAION </p>
    <p>{pass}</p>
    <input type="number"  value={len} onChange={(e)=>{ setlen(e.target.value)}}/>  <label htmlFor="">Length</label>
    <input type="checkbox" value={charc} onChange={() => {setChar(!charc)}} /> <label htmlFor="">char</label>
    <input type="checkbox" value={spl}  onChange={() => {setspl(!spl)}} /><label htmlFor="">spl</label>
    <input type="checkbox" value={num}  onChange={() => {setNum(!num)}} /><label htmlFor="">num</label>
    
    </>
  );
}

export default PsdGenr;