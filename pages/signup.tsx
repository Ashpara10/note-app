import Head from "next/head";
import React from "react";
import Form from "../components/Form";
import supabase from "../lib/supabase";

const signup = () => {
  console.log(supabase.auth.user());
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <Head>
        <title>Signup</title>
      </Head>
      <Form />
    </div>
  );
};

export default signup;
