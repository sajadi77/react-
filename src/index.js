import React from 'react';
import ReactDOM from 'react-dom';



const trick= ()=>{
  const eleman = (
    <div>
      <h1>
        hi
      </h1>
      <h2>
        it is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )
  ReactDOM.render(eleman, document.getElementById('root'));
}
setInterval(()=>{
trick();
} , 1000)


 



