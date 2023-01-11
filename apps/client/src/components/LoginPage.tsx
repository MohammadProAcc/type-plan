import {
  Input,
  InputPhoneNumber,
  InputSubmit,
  LoginCard,
  LoginForm,
} from "elements";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  FQl_response_login_LoginReturn,
  InitialState,
  login,
  loginRequest,
  useStore,
} from "state";
import { updateUser } from "state/actions/user/updateMe";
import { Layout } from "./Layout";

export const LoginPage: React.FC = () => {
  const router = useRouter();

  const {
    me,
  } = useStore((store: InitialState) => ({
    me: store?.me,
  }));

  const [, setCookie] = useCookies([process.env.TOKEN]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (form) => {
    // one-interPhoneNumber
    if (me.data.loginStatus === "exit") {
      const response = await loginRequest({
        set: {
          phone: form.phone,
          countryCode: "98",
        },
        get: {
          phone: 1,
        },
      });

      if (response.error === null) {
        reset();
        toast.success("کد تایید برای شما ارسال شد");
      } else {
        toast.error("ارسال کد موفقیت آمیز نبود، لطفا دوباره تلاش کنید");
      }
      // two:InterCode
    } else if (me.data.loginStatus === "Request") {
      const response = await login({
        set: {
          phone: me.data.phone,
          code: form.code,
        },
        get: {
          token: 1,
          user: {
            _id: 1,
            name: 1,
            level: 1,
            lastName: 1,
            email: 1,
          },
        },
      });
      if (response.error === null) {
        reset();
        if (response.data.name) router.back();
        toast.success(`${response.data.name} خوش آمدید 🌹`);
      }
    } else if (me.data.loginStatus === "Login") {
      const response = await updateUser(
        {
          set: {
            userId: me.data._id,
            name: form.name,
            lastName: form.lastName,
            email: form.email,
          },
          get: {
            _id: 1,
            name: 1,
            level: 1,
            lastName: 1,
            email: 1,
          },
        },
        me.data.token,
        true,
      );
      if (response.error === null) {
        reset();
        toast.success(`${me.data.name} خوش آمدید 🌹`);
      }
      router.back();
    }
  };

  return (
    <Layout>
      <LoginCard>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          {me.data.loginStatus === "exit"
            ? (
              <>
                شماره تلفن همراه:
                <InputPhoneNumber
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
            : me.data.loginStatus === "Request"
            ? (
              <>
                کد تایید:
                <Input
                  type="tel"
                  {...register("code", {
                    required: "کد تایید را وارد کنید",
                  })}
                />
                {errors.phone?.message}
              </>
            )
            : (
              <>
                نام:
                <Input
                  type="text"
                  placeholder="با حروف فارسی ..."
                  {...register("name", {
                    // required: 'تعیین نام ضروری است',
                  })}
                />
                نام خانوادگی:
                <Input type="text" {...register("lastName", {})} />
                ایمیل:
                <Input type="email" {...register("email", {})} />
              </>
            )}
          <InputSubmit
            disabled={me.loader}
            type="submit"
            value={me.loader ? "..." : "دریافت کد ورود"}
          />
        </LoginForm>
      </LoginCard>
    </Layout>
  );
};

export const InterCode: React.FC = (props) => {
  return <p>inter code</p>;
};
