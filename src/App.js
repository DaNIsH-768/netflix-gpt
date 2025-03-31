import './index.css';
import Body from "./components/Body";
import Header from "./components/Header";
import  {Route, Routes} from "react-router";
import Login from "./components/Login";

function App() {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path={"/"} element={<Login/>}/>
          </Routes>
      </div>
  );
}

export default App;
