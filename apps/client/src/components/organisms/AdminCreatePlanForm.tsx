import {
  CreatePlanInputGroup,
  CreatePlanPreviewImg,
  CreatePlanPreviewPdfName,
  CreatePlanPreviewsContainer,
  Em,
} from "elements";
import { CreatePlanFormLabel } from "elements";
import { AdminCreatePlanFormEl } from "elements/Form/Admin";
import { Input } from "elements/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import { createPlan } from "state";
import {
  FQl_dynamic_plan_PLANTYPE,
  FQl_dynamic_plan_PLATETYPE,
  FQl_dynamic_plan_POSITION,
  FQl_dynamic_plan_UNITTYPE,
  FQl_dynamic_upload_IFile,
} from "state/declarations/schema/schema";
import { css } from "styled-components";
import { CreatePlanImagePreview, UploadFile } from "./molecules";

const fileInputStyles = css`
  margin-right: 1rem;
`;

const fileInputGroupStyles = css`
  margin-bottom: 1rem;
`;

const unitTypeOptions = [
  { label: "تک", value: FQl_dynamic_plan_UNITTYPE.Solo },
  { label: "دوبلکس", value: FQl_dynamic_plan_UNITTYPE.Duplex },
  { label: "تری بلکس", value: FQl_dynamic_plan_UNITTYPE.Triplex },
];

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

  const [pdf, setPdf] = useState<FQl_dynamic_upload_IFile>();
  const [photo, setPhoto] = useState<FQl_dynamic_upload_IFile>();
  const [slider, setSlider] = useState<FQl_dynamic_upload_IFile[]>([]);

  const removePhoto = (photo: FQl_dynamic_upload_IFile) =>
    setSlider((current) => current.filter((item) => item._id !== photo._id));

  const removePdf = () => setPdf(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm();

  // FIXME: fix the any
  const onSubmit = async (form) => {
    setLoading(true);

    const finalForm = {
      ...form,
      exposure: form?.exposure?.value,
      planType: form?.planType?.value,
      plateType: form?.plateType?.value,
      unitType: form?.unitType?.value,
      photo,
      slider,
    };
    const response = await createPlan(finalForm, cookies[process.env.TOKEN]);
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
      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>کد نقشه :</CreatePlanFormLabel>
        <Input
          {...register("planCode", {
            required: true,
            minLength: 6,
            maxLength: 10,
          })}
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
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
      </CreatePlanInputGroup>

      <CreatePlanInputGroup Style={fileInputGroupStyles}>
        <CreatePlanFormLabel className="file">
          تصویر اصلی نقشه :
        </CreatePlanFormLabel>
        <UploadFile
          type="file"
          callback={(file) => setPhoto(file)}
          Style={fileInputStyles}
        />
      </CreatePlanInputGroup>

      {photo &&
        <CreatePlanPreviewImg Src={photo.filename} />}

      <CreatePlanInputGroup Style={fileInputGroupStyles}>
        <CreatePlanFormLabel className="file">
          تصاویر نقشه :
        </CreatePlanFormLabel>
        <UploadFile
          type="file"
          Style={fileInputStyles}
          callback={(file) => setSlider((curr) => [...curr, file])}
        />
      </CreatePlanInputGroup>

      {slider?.length > 0 &&
        (
          <CreatePlanPreviewsContainer>
            {slider?.map((file) => (
              <CreatePlanImagePreview
                key={file.filename}
                file={file}
                removeCallback={(file) => removePhoto(file)}
              />
            ))}
          </CreatePlanPreviewsContainer>
        )}

      <CreatePlanInputGroup Style={fileInputGroupStyles}>
        <CreatePlanFormLabel className="file">
          فایل PDF :
        </CreatePlanFormLabel>
        <UploadFile
          type="pdf"
          callback={(file) => setPdf(file)}
          Style={fileInputStyles}
        />
        <CreatePlanPreviewPdfName onClick={removePdf}>
          {pdf && pdf.filename}
        </CreatePlanPreviewPdfName>
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>تعداد واحد ها :</CreatePlanFormLabel>
        <Input
          {...register("units", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>نوع واحد :</CreatePlanFormLabel>
        <Controller
          name="unitType"
          control={control}
          render={({ field }) => (
            <Select
              options={unitTypeOptions}
              {...field}
            />
          )}
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>تعداد طبقات ها :</CreatePlanFormLabel>
        <Input
          {...register("floors", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>تعداد اتاق ها خواب :</CreatePlanFormLabel>
        <Input
          {...register("sleeps", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>تعداد حمام :</CreatePlanFormLabel>
        <Input
          {...register("bathroom", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
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
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>مساحت زیر بنا :</CreatePlanFormLabel>
        {/* <Input */}
        {/*   {...register("infrastructureArea.0", { */}
        {/*     required: true, */}
        {/*     valueAsNumber: true, */}
        {/*   })} */}
        {/*   type="number" */}
        {/*   placeholder="-" */}
        {/* /> */}
        {/* <Em>تا</Em> */}
        {/* <Input */}
        {/*   {...register("infrastructureArea.1", { */}
        {/*     required: true, */}
        {/*     valueAsNumber: true, */}
        {/*   })} */}
        {/*   type="number" */}
        {/*   placeholder="-" */}
        {/* /> */}
        <Input
          {...register("infrastructureArea", {
            required: true,
            valueAsNumber: true,
          })}
          type="number"
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>طول :</CreatePlanFormLabel>
        {/* <Input */}
        {/*   {...register("length.0", { required: true, valueAsNumber: true })} */}
        {/*   type="number" */}
        {/*   placeholder="-" */}
        {/* /> */}
        {/* <Em>تا</Em> */}
        {/* <Input */}
        {/*   {...register("length.1", { required: true, valueAsNumber: true })} */}
        {/*   type="number" */}
        {/*   placeholder="-" */}
        {/* /> */}
        <Input
          {...register("length", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>عرض :</CreatePlanFormLabel>
        {/* <Input */}
        {/*   {...register("width.0", { required: true, valueAsNumber: true })} */}
        {/*   type="number" */}
        {/*   placeholder="-" */}
        {/* /> */}
        {/* <Em>تا</Em> */}
        {/* <Input */}
        {/*   {...register("width.1", { required: true, valueAsNumber: true })} */}
        {/*   type="number" */}
        {/*   placeholder="-" */}
        {/* /> */}
        <Input
          {...register("width", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="-"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>عرض معبر :</CreatePlanFormLabel>
        <Input
          {...register("passageWidth", { required: true, valueAsNumber: true })}
          placeholder="-"
          type="number"
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup col>
        <CreatePlanFormLabel>نوع پلاک :</CreatePlanFormLabel>
        <Controller
          name="plateType"
          control={control}
          render={({ field }) => (
            <Select options={plateTypeOptions} {...field} />
          )}
        />
      </CreatePlanInputGroup>

      <CreatePlanInputGroup>
        <Input
          type="submit"
          value={loading ? "..." : "ارسال"}
          // disabled={loading}
        />
      </CreatePlanInputGroup>
    </AdminCreatePlanFormEl>
  );
};
