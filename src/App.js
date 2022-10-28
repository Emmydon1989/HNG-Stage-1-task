import logo from './logo.svg';
//import './App.css';
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className='profile_pics'>
      <img src='NEW PIC.jpg' className='image'/>
     <div id='slackName'>@Emmanuel</div>
      </div>
        
      <div className='container'>
      
      <a href='https://twitter.com/ezeemmachukwu'><button className='twitter' id="links">Twitter Link</button></a>
       <a href='https://training.zuri.team/'><button className='zuri' id="links">Zuri Team</button> </a>
       <a href='https://books.zuri.team/'><button className='books' id ="links">Zuri Books</button></a>
       <a href='https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E'><button className='python' id="links">Python Books</button></a>
       <a href='https://background.zuri.team/'><button className='colors' id='links'>Background check for Colors</button></a>
       <a href='https://books.zuri.team/design-rules'><button className='design' id ="links">Design Books</button></a>
       <img src='logo3.PNG' className='hnglogo3'></img>
     </div>
      <footer>
        <img src='zuri.PNG' className='logo1'></img>
        <div><small>HNG internship 9 Frontend Task</small></div>
        <img src='ingressive.png' className='logo2'></img>
      </footer>
      
    </div>
  );
}

export default App;
