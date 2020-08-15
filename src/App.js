import React,{useState} from 'react';
import './App.css';
import Hello from './hello';
import World from './world';
import ValueContext from './ValueContext';

function App(props) {
  let [sayHi,setHi] =useState(true);
  let [Number,setNum] = useState(256);

  

   




  return (  
    <ValueContext.Provider value={Number}>

      <div className={"greeting "+(sayHi?'Hello':'Hi')}>

      
      
      Say Greetings : {sayHi ? 'Hello':'Hi' } <World/>
      
        <button onClick={ () => {
        setHi(!sayHi)

        } }>
        Say Hi</button>

        <div>


          <Hello num={Number}></Hello>

          <button onClick={()=>{
            setNum(++Number)
          }}>
            add number
          </button>
        </div>
      
      </div>
    </ValueContext.Provider>
  );
}

export default App;
