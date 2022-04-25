import { InputPhoneNumber, InputSubmit, LoginCard, LoginForm } from "elements";
import { typePlanApi } from "pages/admin/api/funreq";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Layout } from "./Layout";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { login, loginRequest } from "state";

export const LoginPage: React.FC = () => {
  const [phone, setPhoneNumber] = useState<number>(null);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (form) => {
    if (phone) {
      // const response = await login({
      //   set: {
      //     code: form.code,
      //     phone,
      //   },
      //   get: {
      //     token: 1,
      //     user: {
      //       _id: 1,
      //     },
      //   },
      // }, "");

      // if (!response.error) {
      //   Cookies.set(process.env.TOKEN, response.data.token);
      //   toast.success("خوش آمدید");
      //   router.back();
      // } else {
      //   toast.error("عملیات موفقیت آمیز نبود");
      // }
    } else {
      const response = await loginRequest({
        set: {
          phone: form?.phone,
          countryCode: "98",
        },
      }, Cookies.get(process.env.TOKEN));

      console.log("loginRequest response >>> ", response);
      if (response.error) {
        reset();
        toast.success("کد برای شما ارسال شد");
        setPhoneNumber(response.data.phone);
      } else {
        toast.error("ارسال کد موفقیت آمیز نبود");
      }
    }
  };

  return (
    <Layout>
      <LoginCard>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          {!phone
            ? (
              <>
                شماره تلفن همراه:
                <InputPhoneNumber
                  type="number"
                  {...register("phone", {
                    required: "لطفا شماره تلفن همراه خود را وارد کنید",
                    maxLength: {
                      value: 11,
                      message: "شماره باید ۱۱ رقم باشد",
                    },
                    minLength: {
                      value: 11,
                      message: "شماره باید ۱۱ رقم باشد",
                    },
                    valueAsNumber: true,
                  })}
                  placeholder="با اعداد انگلیسی ..."
                />
                {errors.phone?.message}
              </>
            )
            : (
              <>
                کد تایید:
                <InputPhoneNumber
                  type="number"
                  {...register("code", {
                    required: "کد تایید را وارد کنید",
                    maxLength: {
                      value: 6,
                      message: "کد باید ۶ رقم باشد",
                    },
                    minLength: {
                      value: 6,
                      message: "کد باید ۶ رقم باشد",
                    },
                  })}
                  placeholder="با اعداد انگلیسی ..."
                />
                {errors.phone?.message}
              </>
            )}
          <InputSubmit type="submit" value="دریافت کد ورود" />
        </LoginForm>
      </LoginCard>
    </Layout>
  );
};

export const InterCode: React.FC = (props) => {
  return <p>inter code</p>;
};
