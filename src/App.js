import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Slider from './Slider/slider';
import DragDrop from './Drag&Drop/DragDrop';
import Uploadfile from './uploadFail/uploadfile';
import SimpleClassComponent from './simple/simple';
import Inheritance from './simple/simple';
import Header from './header/header';
import {Abb} from './uploadFail/uploadfile';


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Route path="/slider" component={Slider}/>
                <Route path="/dragdrop" component={DragDrop}/>
                <Route path="/uploadfile" component={ Uploadfile }/>
            </Router>
            {/* <Abb/> */}
            {/* <Inheritance/> */}
            {/* <SimpleClassComponent/> */}
        </div>
    )
}
export default App