import "./slider.css"
import { useState } from 'react';

function Slider() {
  let [gaj,setx] = useState(0)
  let [dd,setddd] = useState(1)

  return (
    <div id="app">
      <div id="appheader" style={{left:gaj + "px",transform:"scale("+ dd +")"}}>
        <div><img alt="alt" src="./logo192.png" width="fit-content"/></div>
        <div id="appfolder"></div>
        <div id="appfolder"></div>
      </div>
      <button id="appbuttonToright"  onClick={() => {
        setddd(dd += 0.3)
        setx(gaj+=256)
      }} >To Right</button>
      <button id="appbuttonToleft"  onClick={() => {
        setddd(dd -= 0.3)
        setx(gaj-=200)
      }}>To Right</button>
    </div>
  );
}
export default Slider;