import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
        <Route path="/" element={ <ItemListContainer />}/>
        <Route path="/category/:categoryId" element={ <ItemListContainer />}/>
      </Routes>
      </BrowserRouter>
 
    
    </div>
  );
}

export default App;
