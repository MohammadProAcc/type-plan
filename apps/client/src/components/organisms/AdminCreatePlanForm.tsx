import { Em, InputGroup } from "elements";
import { AdminCreatePlanFormEl } from "elements/Form/Admin";
import { Input } from "elements/Input";
import { CreatePlanFormLabel } from "elements";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { createPlan } from "state";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const planTypeOptions = [
  { label: "مسکونی", value: "Resindental" },
  { label: "ویلایی", value: "Villa"},
];

const exposureOptions = [
  { label: "شمالی", value: "Northern" },
  { label: "شرقی", value: "Eastern" },
  { label: "جنوبی", value: "Southern" },
  { label: "غربی", value: "Western" },
];

const plateTypeOptions = [
  { label: "عادی", value: "Normal" },
  { label: "ثبتی", value: "Registered" },
];

export const AdminCreatePlanForm: React.FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm();

  // FIXME: fix the any
  const onSubmit = async (form: unknown) => {
    setLoading(true);
    const response = await createPlan({
      set: form,
      get: {
        _id: 1,
      },
    }, process.env.TOKEN);
    console.log(response);
    if (!response.error) {
      reset();
      toast.success("طرح اضافه شد");
      router.push("/admin/plans");
    } else {
      toast.error("ساخت طرح موفقیت آمیز نبود");
    }
    setLoading(false);
  };

  return (
    <AdminCreatePlanFormEl onSubmit={handleSubmit(onSubmit)}>
      <InputGroup col>
        <CreatePlanFormLabel>نوع کاربری :</CreatePlanFormLabel>
        <Controller
          name="planType"
          control={control}
          render={({ field }) => (
            <Select
              options={planTypeOptions}
              {...field}
            />
          )}
        />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>تعداد واحد ها :</CreatePlanFormLabel>
        <Input {...register("units", { required: true })} type="number" />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>تعداد طبقات ها :</CreatePlanFormLabel>
        <Input {...register("floors", { required: true })} type="number" />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>تعداد اتاق ها :</CreatePlanFormLabel>
        <Input {...register("sleeps", { required: true })} type="number" />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>موقعیت زمین :</CreatePlanFormLabel>
        <Controller
          name="exposure"
          control={control}
          render={({ field }) => (
            <Select
              options={exposureOptions}
              {...field}
            />
          )}
        />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>مساحت زیر بنا :</CreatePlanFormLabel>
        <InputGroup>
          <Input
            {...register("infrastructureArea.0", { required: true })}
            type="number"
          />
          <Em>تا</Em>
          <Input
            {...register("infrastructureArea.1", { required: true })}
            type="number"
          />
        </InputGroup>
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>طول :</CreatePlanFormLabel>
        <InputGroup>
          <Input {...register("lenght.0", { required: true })} type="number" />
          <Em>تا</Em>
          <Input {...register("lenght.1", { required: true })} type="number" />
        </InputGroup>
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>عرض معبر :</CreatePlanFormLabel>
        <Input
          {...register("passageWidth", { required: true })}
          type="number"
        />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>نوع پلاک :</CreatePlanFormLabel>
        <Controller
          name="plateType"
          control={control}
          render={({ field }) => (
            <Select options={plateTypeOptions} {...field} />
          )}
        />
      </InputGroup>

      <InputGroup>
        <Input
          type="submit"
          value={loading ? "..." : "ارسال"}
          disabled={loading}
        />
      </InputGroup>
    </AdminCreatePlanFormEl>
  );
};
