import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import InicioContextLayout from "./contexts/InicioContextLayout";
import Inicio from "./components/0Inicio/Inicio";
import Componentes from "./components/0Inicio/Componentes";
import { InicioProvider } from "./contexts/InicioContext";

import "@fontsource/roboto/300.css";

function App() {
    return (
                <InicioProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Inicio />} />
                <Route path="/componentes" element={<Componentes />} />
                {/* <Route  element={ <InicioContextLayout /> }> */}
                    {/* <Route path="/componentes" element={<Componentes />} /> */}
                {/* </Route> */}
                    
                
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
                </InicioProvider>
    );
}

export default App;
