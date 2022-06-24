import "./App.css";

function InputElement({label,type}) {
  return (<label>
    <div className="label">{label}</div>
    <input className="input" type={type}/>
  </label>);
}

function App() {
  return (
  <form className="form">
    <div className="form-filed">
      <InputElement label="Username" type="text"/>
    </div>
    <div className="form-filed">
    <InputElement label="Pasword" type="pasword"/>
    </div>
    <div className="form-filed">
      <button className="button">Sign in</button>
    </div>
  </form>
  );
}

export default App;
