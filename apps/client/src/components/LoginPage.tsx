import { InputPhoneNumber, InputSubmit, LoginCard, LoginForm } from "elements";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "./Layout";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import {
  FQl_response_login_LoginReturn,
  FQl_response_loginRequest_LoginRequestReturn,
  login,
  loginRequest,
} from "state";
import { toast } from "react-toastify";
import { P } from "elements/P";

export const LoginPage: React.FC = () => {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState<number>(null);
  const [loading, setLoading] = useState(false);

  const [, setCookie] = useCookies([process.env.TOKEN]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (form) => {
    setLoading(true);
    if (phoneNumber) {
      console.log({
        phone: phoneNumber,
        code: form.code,
      });
      const response = await login({
        set: {
          phone: phoneNumber,
          code: form.code,
        },
        get: {
          token: 1,
          user: {
            _id: 1,
          },
        },
      });
      if (response.success) {
        setCookie(
          process.env.TOKEN,
          (response.body as FQl_response_login_LoginReturn).token,
        );
        reset();
        toast.success("خوش آمدید 🌹");
        router.back();
      }
    } else {
      const response = await loginRequest({
        set: {
          phone: form.phone,
          countryCode: "98",
        },
        get: {
          phone: 1,
        },
      });

      if (response.success) {
        setPhoneNumber(
          (response.body as FQl_response_loginRequest_LoginRequestReturn).phone,
        );
        reset();
        toast.success("کد تایید برای شما ارسال شد");
      } else {
        toast.error("ارسال کد موفقیت آمیز نبود، لطفا دوباره تلاش کنید");
      }
    }
    setLoading(false);
  };

  return (
    <Layout>
      <LoginCard>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          {!phoneNumber
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
          <InputSubmit
            disabled={loading}
            type="submit"
            value={loading ? "..." : "دریافت کد ورود"}
          />
        </LoginForm>
      </LoginCard>
    </Layout>
  );
};

export const InterCode: React.FC = (props) => {
  return <p>inter code</p>;
};
