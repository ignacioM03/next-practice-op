import * as yup from "yup";

export const PetValidate = yup.object().shape({
  title: yup.string().required("El nombre es obligatorio"),
  image: yup.string().required("La imagen es obligatoria"),
  price: yup
    .string()
    .required("El precio es obligatorio")
    .min(1, "El precio debe ser mayor a 0"),
  quantity: yup
    .string()
    .min(1, "La cantidad debe ser mayor a 0")
    .required("La cantidad es obligatoria"),
  description: yup.string().required("La descripción es obligatoria"),
});
