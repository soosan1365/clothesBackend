import React, { useState } from "react";

const Login: React.FC = () => {
  //این استیت برای دوحالا لاگین و سیگن هست
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] mb-10 sm:max-w-96 m-auto mt-20 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular  collection text-3xl">{currentState}</p>
        <hr className="border-none h-[2px] w-12 bg-gray-800 line" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="Subtotal w-full px-3 py-2 border-2 border-gray-400  "
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="  Subtotal w-full px-3   py-2 border-2 border-gray-400  focus:border-red-900"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="Subtotal w-full px-3 py-2   border-2 border-gray-400 "
        placeholder="password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer  hover:text-red-900  ">
          {" "}
          Forget Your Password
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer hover:text-red-900"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer  hover:text-red-900"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="add">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
