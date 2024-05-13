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

export const RegisterValidate = yup.object().shape({
  username: yup
    .string()
    .trim()
    .email("El usuario debe ser un correo")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "El usuario debe ser un correo"
    )
    .required("El usuario es requerido")
    .max(30, "Se superó la longitud máxima 30 caracteres"),
  password: yup
    .string()
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "La contraseña debe tener al menos una letra minúscula, una letra mayúscula y un número"
    )
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña debe tener al menos 20 caracteres"),
  name: yup
    .string()
    .trim()
    .required("El nombre es requerido")
    .max(30, "Se superó la longitud máxima 30 caracteres"),
});
