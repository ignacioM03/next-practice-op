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
  card: yup.string().trim().required("La tarjeta es requerida"),
  //.matches(/^[0-9\b]+$/, "La tarjeta es inválida"),
  cvc: yup
    .string()
    .trim()
    .required("El cvc es requerido")
    .matches(/^[0-9\b]+$/, "El cvc es inválido")
    .min(3, "El cvc debe tener 3 caracteres"),
  exp_month: yup
    .string()
    .trim()
    .required("El mes es requerido")
    .matches(/^[0-9\b]+$/, "El mes es inválido")
    .min(2, "El mes debe tener 2 caracteres"),
  exp_year: yup
    .string()
    .trim()
    .required("El año es requerido")
    .matches(/^[0-9\b]+$/, "El año es inválido")
    .min(2, "El año debe tener 2 caracteres"),
  expire: yup.string().trim().required("La fecha es requerida"),
  //.matches(/^[0-9\b]+$/, "La fecha es inválida")
  //.min(5, "La fecha debe tener 5 caracteres"),
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

export const ProductValidate = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required("El nombre es requerido")
    .max(30, "Se superó la longitud máxima 30 caracteres"),
  description: yup
    .string()
    .trim()
    .required("La descripción es requerida")
    .max(100, "Se superó la longitud máxima 100 caracteres"),
  price: yup
    .number()
    .required("El precio es requerido")
    .min(0, "El precio debe ser mayor a 0"),
  quantity: yup
    .number()
    .required("La cantidad es requerida")
    .min(0, "La cantidad debe ser mayor a 0"),
  image: yup.string().trim().required("La imagen es requerida"),
  category: yup.string().trim().required("La categoria es requerida"),
});
