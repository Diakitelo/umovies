import React from 'react';

import NavBar from '../components/navbar/NavBar';
import Input from '../components/form/Input';
import PasswordForgot from '../components/modal/PasswordForgot';

export default function LoginPage() {
  return (
    <div className="">
      <div className="z-50 absolute">
        <NavBar />
      </div>

      <div className="bg-blue flex flex-col items-center justify-center h-screen w-screen">
        <div className="p-5">
          <h1 className="text-white text-center text-4xl">
            Login to access your account
          </h1>
        </div>
        <section className="bg-white w-96 rounded-lg p-4 pt-9">
          <Input
            placeholder="E-mail"
            label="E-mail"
            //className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            required="required"
            //type="text"
          />

          <Input
            placeholder="Password"
            label="Password"
            //className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            required="required"
            type="password"
          />

          <button
            className=" text-white bg-red active:bg-pink-600 mb-4 w-full  text-lg font-medium px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            Sign in
          </button>
          <PasswordForgot modalTitle="Forgot your password?" />
        </section>
      </div>
    </div>
  );
}
