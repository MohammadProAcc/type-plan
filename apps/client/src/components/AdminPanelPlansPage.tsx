import { PlanTableThumb } from "elements";
import React, { useState } from "react";
import { useStore } from "state";
import { AdminPanelLayout } from ".";
import { AdminTable } from "./organisms";

export const AdminPanelPlansPage: React.FC = () => {
  const {
    plans,
  } = useStore(state => ({
    plans: state?.plans,
  }));

  const [columns] = useState(["تصویر", "شناسه"]);
  const [rows] = useState(
    plans?.map(plan => [
      <PlanTableThumb key={plan?._id} Src={plan?.photo?.filename} />,
      plan?._id,
    ]),
  );

  return (
    <AdminPanelLayout
      title="نقشه ها"
      createButtonLabel="افزودن نقشه"
    >
      <AdminTable
        columns={columns}
        rows={rows}
      />
    </AdminPanelLayout>
  );
};
