import React from "react";

const NewsletterBox: React.FC = () => {
  //we submit this form it will not reload the page
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className=" text-center ">
      <p className="text-2xl font-medium text-gray-800 ">
        subscribe now &get 20% off
      </p>
      <p className="text-gray-400 mt-3"></p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6  pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="border-2 sm:flex-1 outline-none border-gray-400 rounded-md p-3 w-full "
        />
        <button type="submit" className="add text-md  ">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
