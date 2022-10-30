import Calcullation from "./componenets/Calcullation";
import Currency from "./componenets/Currency";
import './css/style.css'

function App() {
  return (
    <div className="App">
      <h1>Currency App</h1>
      <div className="container">
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <Currency />
          <h4 className="mx-4">
            {'<=>'}
          </h4>
          <Currency />
        </div>
        <div className="">
        <Calcullation/>
        </div>
      </div>
    </div>
  );
}

export default App;
