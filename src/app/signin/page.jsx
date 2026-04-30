
"use client"
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { FaGoogle } from "react-icons/fa";


export default function SignIn() {
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Data = Object.fromEntries(formData.entries());
    console.log(Data)
   const {error,data} = await authClient.signIn.email({

    email:Data.email,
    password:Data.password,
     rememberMe: true,
    callbackURL: "/"
   });
   console.log(error,data)
  };

  const handelsigninGoogle = async () => {
    await authClient.signIn.social({
      provider:"google",
    })
  }
  return (
    <div className="justify-center my-6 border-2 border-gray-200 rounded-lg w-md mx-auto p-8">
         <p className="text-xl font-bold text-center  mt-4">SignIn</p>
        <Form className="flex w-96 flex-col gap-4 " onSubmit={onSubmit}>
         
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>

    </Form>
     <p className="text-center">or</p>
     <div className="flex justify-center items-center">
           <Button onClick={handelsigninGoogle} className="w-full"> <FaGoogle />Sign in with Google</Button>
     </div>
   
    </div>
  )
}
 