import React from "react";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { InicioContext } from "../../contexts/InicioContext";

import GenericComboBox from "../reusables/GenericComboBox";
import DatePicker from "../reusables/DatePicker";
import AlertDialog from "../reusables/AlertDialog";
import { Navigate, useNavigate } from "react-router-dom";

function Componentes() {
    const { estadoDeEjemplo, functionExample, formik } =
        useContext(InicioContext);
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h3">
                Componentes importados en este proyecto
            </Typography>
            <h1>Hola mundo{estadoDeEjemplo}</h1>
            <GenericComboBox
                label="Sexo"
                id="sexo"
                value={formik.values.sexo}
                handleChange={formik.handleChange}
                editable={true}
                valueForNone=""
                labelForNone="Seleccionar sexo"
                values={["Masculino", "Femenino", "No especifica"]}
                minWidth={250}
            />

            <DatePicker
                value={formik.values.fechaNacimiento || ""}
                id="fechaNacimiento"
                name="fechaNacimiento"
                editable={true}
                onChange={formik.setFieldValue}
                errorProp={
                    formik.touched.fechaNacimiento &&
                    Boolean(formik.errors.fechaNacimiento)
                }
                helperTextProp={
                    formik.touched.fechaNacimiento &&
                    formik.errors.fechaNacimiento
                }
            ></DatePicker>

<AlertDialog
                open={openAlertDialog}
                setOpen={setOpenAlertDialog}
                title={ 'Está por eliminar al cliente' + formik.values.nombre}
                content='¿Seguro desea eliminarlo?'
                buttonTextAccept='Borrar'
                buttonTextDeny='Cancelar'
                buttonActionAccept={deleteCliente}
            >
                <DeleteForeverIcon color="warning" fontSize="medium" />
</AlertDialog>

            <Button variant="contained" onClick={() => navigate("/home")}>
                {" "}
                Volver
            </Button>
        </>
    );
}

export default Componentes;
