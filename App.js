import React from 'react'; 
import Card from "./Cards";
import Sdata from "./Sdata";



const App =() => ( 
  <>

  <h1 className="heading_style">List of Top five netflix in 2020</h1>
  {Sdata.map((val,index) => {
 return(
  <Card
  key={val.id}
   imgsrc={val.imgsrc}
  title={val.title}
  sname ={val.sname}
  link={val.link}
  />
 );
}
)}
</>
);

export default App;
// const myname = (a,b)  => a+b;
// const myname =(a,b) => {
//   return a+b;
// }
 