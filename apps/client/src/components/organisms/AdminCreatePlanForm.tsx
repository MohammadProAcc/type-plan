import { Em, InputGroup } from "elements";
import { CreatePlanFormLabel } from "elements";
import { AdminCreatePlanFormEl } from "elements/Form/Admin";
import { Input } from "elements/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import { createPlan, typePlanApi, uploadFile } from "state";
import {
  FQl_dynamic_plan_PLANTYPE,
  FQl_dynamic_plan_PLATETYPE,
  FQl_dynamic_plan_POSITION,
} from "state/declarations/schema/schema";

const planTypeOptions = [
  { label: "مسکونی", value: FQl_dynamic_plan_PLANTYPE.Resindental },
  { label: "ویلایی", value: FQl_dynamic_plan_PLANTYPE.Villa },
];

const exposureOptions = [
  { label: "شمالی", value: FQl_dynamic_plan_POSITION.Northern },
  { label: "شرقی", value: FQl_dynamic_plan_POSITION.Eastern },
  { label: "جنوبی", value: FQl_dynamic_plan_POSITION.Southern },
  { label: "غربی", value: FQl_dynamic_plan_POSITION.Western },
];

const plateTypeOptions = [
  { label: "عادی", value: FQl_dynamic_plan_PLATETYPE.Normal },
  { label: "ثبتی", value: FQl_dynamic_plan_PLATETYPE.Registered },
];

export const AdminCreatePlanForm: React.FC = () => {
  const router = useRouter();

  const [cookies] = useCookies([process.env.TOKEN]);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm();

  // FIXME: fix the any
  const onSubmit = async (form: any) => {
    setLoading(true);
    const uploadedFile = await uploadFile(form.photo[0]);
    console.log(uploadedFile);

    const finalForm = {
      ...form,
      exposure: form?.exposure?.value,
      planType: form?.planType?.value,
      plateType: form?.plateType?.value,
      photo: uploadedFile,
    };
    const response = await createPlan(finalForm, cookies[process.env.TOKEN]);
    console.log(response);
    if (response.success) {
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
        <CreatePlanFormLabel>تصاویر نقشه :</CreatePlanFormLabel>
        <Input
          type="file"
          {...register("photo", {
            required: true,
          })}
        />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>تعداد واحد ها :</CreatePlanFormLabel>
        <Input
          {...register("units", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>تعداد طبقات ها :</CreatePlanFormLabel>
        <Input
          {...register("floors", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>تعداد اتاق ها :</CreatePlanFormLabel>
        <Input
          {...register("sleeps", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
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
            {...register("infrastructureArea.0", {
              required: true,
              valueAsNumber: true,
            })}
            type="number"
            placeholder="-"
          />
          <Em>تا</Em>
          <Input
            {...register("infrastructureArea.1", {
              required: true,
              valueAsNumber: true,
            })}
            type="number"
            placeholder="-"
          />
        </InputGroup>
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>طول :</CreatePlanFormLabel>
        <InputGroup>
          <Input
            {...register("lenght.0", { required: true, valueAsNumber: true })}
            type="number"
            placeholder="-"
          />
          <Em>تا</Em>
          <Input
            {...register("lenght.1", { required: true, valueAsNumber: true })}
            type="number"
            placeholder="-"
          />
        </InputGroup>
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>عرض :</CreatePlanFormLabel>
        <InputGroup>
          <Input
            {...register("width.0", { required: true, valueAsNumber: true })}
            type="number"
            placeholder="-"
          />
          <Em>تا</Em>
          <Input
            {...register("width.1", { required: true, valueAsNumber: true })}
            type="number"
            placeholder="-"
          />
        </InputGroup>
      </InputGroup>

      <InputGroup col>
        <CreatePlanFormLabel>عرض معبر :</CreatePlanFormLabel>
        <Input
          {...register("passageWidth", { required: true, valueAsNumber: true })}
          placeholder="-"
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
          // disabled={loading}
        />
      </InputGroup>
    </AdminCreatePlanFormEl>
  );
};
