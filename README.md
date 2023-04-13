# React Hook Form

React Hook Form is a lightweight library that simplifies the process of building forms in React applications. It utilizes the React Hooks feature introduced in React 16.8, making it fast and efficient.

## Why use React Hook Form?

One of the main advantages of using React Hook Form is that it avoids using controlled components, which can be cumbersome and less efficient. Instead, it uses uncontrolled components to manage the form's state. This approach allows React Hook Form to be much faster and more efficient than other form libraries.

React Hook Form provides an easy-to-use API for managing form state, validating form inputs, and handling form submission. The library supports a wide range of input types, including text, number, checkbox, radio buttons, select, and more. It also supports form validation using popular validation libraries like Yup and Joi.

Another advantage of React Hook Form is that it provides a simple and intuitive way to handle form submission. When a form is submitted, React Hook Form collects all the form data and passes it to a callback function. This callback function can then be used to send the form data to a server or perform other actions.

## Installation

You can install React Hook Form using npm or yarn:

```bash
npm install react-hook-form

or

yarn add react-hook-form

```

## Usage
In this example, we'll create a form using React Hook Form and add validation rules to some of its fields. The form will have fields for a username, an email, and a channel name.

```react
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const YoutubeForm = () => {
  const form = useForm();

  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <input
            type="text"
            id="username"
            placeholder="username"
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <input
            type="email"
            id="email"
            placeholder="email"
            {...register("email", {
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email format",
              },
              required: {
                value: true,
                message: "email is required",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different email"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "this domain is not supported"
                  );
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <input
            type="text"
            id="channel"
            placeholder="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "channel name is required",
              },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;


```
In this code, we first import the `useForm` hook from `react-hook-form` and the `DevTool` component from `@hookform/devtools`. We then create a functional component called YoutubeForm.

Inside the component, we call the `useForm` hook to create a form object. We then use destructuring to extract the `register`, `control`, `handleSubmit`

For more information on how to use React Hook Form, please refer to the official documentation: https://react-hook-form.com/
