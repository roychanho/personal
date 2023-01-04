import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ReactFormHook = () => {
  const validate = yup.object({
    fullName: yup.string().max(10, "長度不得超過10").required("欄位不得為空"),
    email: yup.string().email("電子郵件的格式有誤").required("欄位不得為空"),
    age: yup.number().min(1, "年齡不得小於1").required("欄位不得為空"),
    password: yup.string().min(6).required("欄位不得為空"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "密碼匹配不一致"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
  });

  console.log(errors)
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-flow-row grid-cols-1 gap-3 w-1/2 m-auto"
    >
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <input type="text" placeholder="Email.." {...register("email")} />
      {errors?.email && <p>{errors.email.message}</p>}
      <input type="number" placeholder="Age.." {...register("age")} />
      <input
        type="password"
        placeholder="Password.."
        {...register("password")}
      />
      <input
        type="password"
        placeholder="Confirm Password.."
        {...register("confirmPassword")}
      />

      <input
        className="cursor-pointer bg-white w-2/6 mx-auto rounded hover:bg-black/40"
        type="submit"
        value="submit"
      />
    </form>
  );
};

export default ReactFormHook;
