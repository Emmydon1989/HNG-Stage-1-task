import './index.css'

function App() {
  return (
    <div className="App">
      <div className='profile'>
      <img src='NEW PIC.jpg' id="profile__img" className='image'/>
     <div id='twitter'>ezeemmachukwu</div>
     <div id='slack'>Emmanuel</div>
      </div>

      <div className='container'>
      
      <a href='https://twitter.com/ezeemmachukwu'><button className="links">Twitter Link</button></a>
       <a href='https://training.zuri.team/'><button id='btn__zuri' className="links">Zuri Team</button> </a>
       <a href='https://books.zuri.team/'><button id='books' className ="links">Zuri Books</button></a>
       <a href='https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E'><button id='book__python' className="links">Python Books</button></a>
       <a href='https://background.zuri.team/'><button id='pitch' className='links'>Background check for Colors</button></a>
       <a href='https://books.zuri.team/design-rules'><button id='book__design' className ="links">Design Books</button></a>
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
