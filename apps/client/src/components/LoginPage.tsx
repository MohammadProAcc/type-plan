import { InputPhoneNumber, InputSubmit, LoginCard, LoginForm } from "elements";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  FQl_response_login_LoginReturn,
  FQl_response_loginRequest_LoginRequestReturn,
  useStore,
} from "state";
import { Layout } from "./Layout";

export const LoginPage: React.FC = () => {
  const [phone, setPhoneNumber] = useState<number>(null);

  const [, setCookie] = useCookies([process.env.TOKEN]);

  const router = useRouter();

  const {
    loginRequest,
    login,
  } = useStore((state) => ({
    loginRequest: state?.loginRequest,
    login: state?.login,
  }));

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (form) => {
    if (phone) {
      const response = await login({
        set: {
          code: form.code,
          phone,
        },
        get: {
          token: 1,
          user: {
            _id: 1,
          },
        },
      });
      if (response.success) {
        reset();
        setCookie(
          process.env.TOKEN,
          (response.body as FQl_response_login_LoginReturn).token,
        );
        toast.success("خوش آمدید 🌹");
        router.back();
      } else {
        toast.error("ورود موفقیت آمیز نبود");
      }
    } else {
      const response = await loginRequest({
        set: {
          phone: form.phone,
          countryCode: "98",
        },
        get: { phone: 1 },
      });
      if (response.success) {
        reset();
        toast.success("کد برای شما ارسال شد");
        setPhoneNumber(
          (response.body as FQl_response_loginRequest_LoginRequestReturn).phone,
        );
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
