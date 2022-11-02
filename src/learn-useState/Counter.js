import React, {useState} from "react";
import logo from "../logo.svg";
import "./Counter.css";

export default function Counter(){
    const [showImage,setShowImage] = useState(true);
    const [count, setCount] = useState(0);
    const[text, setText]= useState("Ini default Textnya");
    const[fontSize, setFontSize]=useState(16)
    const [color, setColor]= useState('cyan')
    const countUp = () => {
        setCount(count +1); 
    };

    const countDown = () =>{
        setCount(count-1);
    };

    const hideImage = () => {
        setShowImage(!showImage);
    };


return (
    <div className="Main">
        <p className="Text">Counter with useState</p>
        <p>KELOMPOK 03</p>
       
        <h3 style={{//{}ini tandanya objek
          fontSize: fontSize+'px',
          color:color, //ada color disini
        }}>{text}</h3>

        <input type="text" placeholder="masukkan text" 
        onChange={(e)=>{
          setText(e.target.value);
        }} />
        <div className="ViewImage">
            <div className="ViewImage1">
                <img className="App-logo"
                style={{display: showImage === true ? "flex" :
"none"}}
                src={logo}
                alt="logo"/>
            </div>
            <div>
            <input type="range" min={1} max={100}
             onChange={(e)=>{
            setFontSize(e.target.value)
            }} />
            </div>
            <div>
            <input type="color" 
            onChange={(e)=>{
            setColor(e.target.value);
            }}
            />
            </div>
            <button className="Button" onClick={hideImage}>
                {showImage !== true ?"show" :"hide"}
            </button>
        </div>
        <p className="Text">{count}</p>
        <div className="ViewButton">
            <div className="ViewButton2">
                <button className="Button" onClick={countUp}>
                    Up
                </button>
            </div>
            <div className="ViewButton1">
                <button className="Button" onClick={countDown}>
                    Down
                </button>
            </div>
        </div>
    </div>
);
} 