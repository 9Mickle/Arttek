import "./styles/App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FirmInfo from "./pages/FirmInfo";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/info" element={<FirmInfo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
