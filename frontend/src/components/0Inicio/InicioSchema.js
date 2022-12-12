import * as yup from 'yup'
const currentDate = new Date();

const validationSchema = yup.object({
    sexo: yup.string(),
    fechaNacimiento: yup
        .date()
        .typeError("Seleccione una fecha valida")
        .required("La fecha de nacimiento es obligatoria")
        .max(currentDate, "La fecha no puede ser posterior a la fecha actual")
})

const inicioSchema = {
    validationSchema
}

export default inicioSchema;