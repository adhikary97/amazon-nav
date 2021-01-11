import React, { useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlagIcon from '@material-ui/icons/Flag';
import SearchIcon from '@material-ui/icons/Search';
import './App.css'

export default function App() {
  const [counter, setCounter] = useState(0);

  const [catFacts, setCatFacts] = useState([]);

  const fetchCatFacts = () => {
    let tempFacts = [];
    fetch('https://cat-fact.herokuapp.com/facts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((fact) => {
          console.log(fact.text);
          tempFacts.push(fact.text);
        });
      })
      .then(() => {
        console.log(tempFacts);
        setCatFacts(tempFacts);
      });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: '#232f3e',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: 'white',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg"
          height="30px"
          width="200px"
          className="mouse-hover"
        />
        <a style={{display: 'flex', flexDirection: 'row'}} className="mouse-hover">
          <LocationOnIcon />
          <div>
            <div>Deliver to Paras</div>
            <div><strong>Lake Zurich 60047</strong></div>
          </div>
        </a>
        <div style={{width: '45vw', display: 'flex', flexDirection: 'row'}}>
          <input style={{width: '100%', height: '30px', borderRadius: '5px 0 0 5px', border: 'none', outline: 'none'}} />
          <button style={{backgroundColor: '#ff9900', borderRadius: '0 5px 5px 0', border: 'none'}}><SearchIcon/></button>
        </div>
        <a className="mouse-hover"><FlagIcon/></a>
        <a className="mouse-hover">Hello Paras <br/> <strong>Accounts & Lists</strong></a>
        <a className="mouse-hover">Returns <br/> <strong>& Orders</strong></a>
        <a className="mouse-hover">
          <ShoppingCartIcon/>
          <strong>Cart</strong>
        </a>
      </div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h1>{counter}</h1>
      <button onClick={fetchCatFacts}>Click Me</button>
      <div>
        {catFacts?.map((fact) => (
          <p>{fact}</p>
        ))}
      </div>
      <div />
    </div>
  );
}
