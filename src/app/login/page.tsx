"use client";
import axios from "axios";
import { error } from "console";

import { redirect } from "next/navigation";

import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // axios("", {
    //   method: "POST",
    //   data: {
    //     userName: userName,
    //     password: password,
    //   },
    // })
    //   .then((Response) => Response.data)
    //   .catch((error) => console.log(error));

    const respose = {
      token: "skdjfkdljgkldfgj",
      expire: 6,
    };
    // Cookie.set("token",respose.token,{expire:respose.expire})
    redirect("/dashboar")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          ورود به حساب کاربری
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              نام کاربری
            </label>
            <input
              id="userName"
              type="userName"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="نام کاربری خود را وارد کنید"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="رمز عبور خود را وارد کنید"
              required
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            ورود
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          حساب کاربری ندارید؟{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            ثبت‌نام کنید
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
