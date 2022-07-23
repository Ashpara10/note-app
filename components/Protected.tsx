import React from "react";
import { useEffect, useState } from "react";
import supabase from "../lib/supabase";
import { Session, User } from "@supabase/supabase-js";
import router from "next/router";
import Header from "./Header";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<User | null | Session>(null);
  const [authState, setAuthState] = useState<
    "authenticated" | "not-authenticated"
  >("not-authenticated");

  useEffect(() => {
    const state = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setAuthState("authenticated");
        const user = supabase.auth.user();
        setAuth(user);
        console.log(auth);

        router.push("/");
      } else if (event === "SIGNED_OUT") {
        setAuthState("not-authenticated");
        router.push("/signup");
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main className="w-full min-h-screen ">{children}</main>
    </>
  );
};

export default Protected;
