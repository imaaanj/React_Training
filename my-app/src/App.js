// import logo from './logo.svg';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

// let name = "Aman";
function App() { //React component building blocks of application, structure & behavior of user interface
  return ( 
    //what the App component should render. JSX => syntax extension for JavaScript allows to write HTML-like code within JavaScript
    <>
<Navbar title="TextUtils" about="About us"></Navbar>
<div className="container my-3">
<TextForm heading="Enter Text to Analyze" header="Welcome to TextUtil"/>
{/* <About></About> */}
</div>
    </>
  );
}

export default App;
