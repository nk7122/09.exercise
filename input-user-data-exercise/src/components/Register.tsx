import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(6, "Name must be at least 6 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email adress").required("Required"),
  password: Yup.string()
    .min(10, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Must contain at least one lower case")
    .matches(/[A-Z]/, "Must contain at least one upper case")
    .matches(/[!@#$%^&*().,?":[\]{}<>]/, "Must contain at least one symbol")
    .matches(/[0-9]/, "Must contain at least one number")
    .required("Required"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: (values) => console.log(values),
  });

  return (
    <form style={{ display: "grid" }} onSubmit={formik.handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      ) : null}

      <label htmlFor="">email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <p style={{ color: "red" }}>{formik.errors.email}</p>
      ) : null}

      <label htmlFor="">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
