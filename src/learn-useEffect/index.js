import React,{useState,useEffect,useRef} from "react";
import "./index.css";

export default function Index(){
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    const inputRef = useRef()
    const [greetings, setGreetings] = useState(false);
    const [wrongInput, setWrongInput] = useState(false);
    const [nama, setNama] = useState();
    
    //dijalankan 1 kali
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data)=> {
            console.log(data);
            setData(data);
        })
        .catch((error) =>{
            console.log(error);
        });
    }, []);

    //dijalankan terus setiap ada perubahan count
    useEffect(() => {
        if (count>0) {
            alert ('component will update & count ${count}');
        }
    },[count]);
    
    //dijalankan terus menerus
    useEffect(() => {
        console.log('spam console kuy');
    });

    const countUp =() =>{
        setCount(count +1);
    };

    const countDown=() =>{
        setCount(count -1);
    };

    const showGreetings = () => {
        setGreetings(true);
    }

    const hideGreetings = () => {
        setGreetings(false);
    }

    const showWrongInput = () => {
        setWrongInput(true);
    }

    const hideWrongInput = () => {
        setWrongInput(false);
    }

    const inputName = () => {
        setNama(inputRef.current.value);
    }

    function containsNumbers(nama) {
        return /\d/.test(nama);
    }

    useEffect(() => {
        if (nama === "" || nama === null || nama === undefined) {
            hideGreetings();
            hideWrongInput();
        }
        else if (containsNumbers(nama)) {
            hideGreetings();
            showWrongInput();
        } else {
            showGreetings();
            hideWrongInput();
        }
    }, [nama]);

    return(
        <div className="Main">
            <p style={{ display: greetings === true ? "flex" : "none" }}>Selamat datang, {nama}, di tugas kelompok kami.</p>
            <p className="Text">Learn useEffect</p>
            <input ref={inputRef} placeholder="Masukkan Nama Anda" className="namaPengguna" onChange={inputName}/>
            <p style={{ display: wrongInput === true ? "flex" : "none" }}>Yang Anda masukkan bukan nama.</p>
            <p>KELOMPOK 03</p>
            <ul>
                {data.slice(0,10).map((value) => (
                    <li key={value.id}>{value.title}</li>
                ))}
            </ul>

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