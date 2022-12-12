import { createContext, useState } from "react";
import {useFormik} from 'formik'
import inicioSchema from "../components/0Inicio/InicioSchema";

export const InicioContext = createContext();

export const InicioProvider = ({ children }) => {
    const [estadoDeEjemplo, setEstadoDeEjemplo] = useState("Ejemplo");
    const functionExample = () => {
        console.log("Jelou uorld");
    };


    const formik = useFormik({
        initialValues:{
            sexo:'',
            fechaNacimiento:'',


            
        },
        validationSchema: inicioSchema.validationSchema,
        onSubmit:() => {
            handleSubmit();
        },
    });

    const handleSubmit = () => {

    }

    return (
        <InicioContext.Provider
            value={{
                estadoDeEjemplo,
                functionExample,
                formik
            }}
        >
            {children}
        </InicioContext.Provider>
    );
};
