import { LoginCard, LoginForm, InputSubmit, InputPhoneNumber } from 'elements';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Layout } from './Layout';

export const LoginPage: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout>
      <LoginCard>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          شماره تلفن همراه:
          <InputPhoneNumber
            type="number"
            {...register('phoneNumber', {
              required: 'لطفا شماره تلفن همراه خود را وارد کنید',
              maxLength: {
                value: 11,
                message: 'شماره باید ۱۱ رقم باشد',
              },
              minLength: {
                value: 11,
                message: 'شماره باید ۱۱ رقم باشد',
              },
            })}
            placeholder="با اعداد انگلیسی ..."
          />
          {errors.phoneNumber?.message}
          <InputSubmit type="submit" value="دریافت کد ورود" />
        </LoginForm>
      </LoginCard>
    </Layout>
  );
};

export const InterCode: React.FC<InterCodeProps> = (props) => {
  return <p>inter code</p>;
};

export interface InterCodeProps {}
