import './App.css';


function App (){

  return (

    <div className="App">
      <div className="container">
        <h3 className="">Form</h3>
        <input type="text" className="input" placeholder="First Name" />
        <input type="text" className="input" placeholder="Last Name"/>
        <input type="text" className="input" placeholder="Email Address"/>
        <input type="password" className="input" placeholder="Password"/>
      </div>
      <button className="btn-login">Sign Up</button>
    </div>
  );
}

export default App;
