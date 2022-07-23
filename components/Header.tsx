import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase";
import router from "next/router";
import { User } from "@supabase/supabase-js";
const Header = () => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    setUser(supabase.auth.user());
  }, []);
  return (
    <header className="w-full  px-4 py-2 border-b border-gray-300 ">
      <span className="font-mono text-blue-700">
        {user && user.email?.slice(0, user.email.lastIndexOf("@"))}
      </span>
      {user ? (
        <button onClick={() => supabase.auth.signOut()}>SignOut</button>
      ) : (
        <button onClick={() => router.push("/signup")}>SignIn</button>
      )}
    </header>
  );
};

export default Header;
