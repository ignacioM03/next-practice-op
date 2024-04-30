import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required("El usuario es requerido"),
  password: yup
    .string()
    .trim()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña debe tener al menos 20 caracteres"),
});

export const CheckoutValidate = yup.object().shape({
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
