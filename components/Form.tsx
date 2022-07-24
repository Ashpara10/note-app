import { useFormik } from "formik";
import React, { useState } from "react";
import supabase from "../lib/supabase";

const Form = () => {
  const [showdPwd, setShowPwd] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      const { user, error } = await supabase.auth.signIn({
        email: values.email,
        // password: values.password,
      },{redirectTo:"https://turbonote.vercel.app"});
      error && alert(JSON.stringify(error));
      console.log({ userForm: user && user });
    },
  });
  return (
    <form
      className="w-full max-w-sm flex flex-col gap-y-3 items-center justify-center px-3 "
      onSubmit={formik.handleSubmit}
    >
      <input
        placeholder="Enter email..."
        className="w-full p-2 border border-gray-300 rounded-md"
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <button
        type="submit"
        className="w-full mt-2 text-lg bg-violet-700 text-white rounded-md py-2 px-6"
      >
        Signin with Email
      </button>
      <button
        type="button"
        className="w-full mt-1 text-lg bg-black text-white rounded-md py-2 px-6"
      >
        SignIn with Github
      </button>
    </form>
  );
};

export default Form;

{
  /* <input
    placeholder="Enter password..."
    className="w-full p-2 border border-gray-300 rounded-md"
    type={showdPwd ? "text" : "password"}
    name="password"
    value={formik.values.password}
    onChange={formik.handleChange}
  />
  <div className="w-full px-3 flex items-center justify-start gap-x-2">
    <input
      className="accent-violet-700"
      type="checkbox"
      // readOnly={false}
      onChange={() => setShowPwd(!showdPwd)}
      checked={showdPwd}
    />
    <span className="text-black/90">Show Password</span>
  </div> */
}
