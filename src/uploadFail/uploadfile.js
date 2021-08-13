import { useState } from "react"
import "./style.css"
import React from "react";
import { useRef } from "react";

function Uploadfile() {
  const imageRef = useRef(null)
  const [result,setResult] = useState("")
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    debugger
    setResult(e.target.result);
  });

  return (
      <div>
          <input type="file" onChange={(e) => {
            reader.readAsDataURL(e.target.files[0]);
          }} />
          {result && <img ref={imageRef} src={undefined} alt="opload img"/>}
      </div>
  )
}
export default Uploadfile  