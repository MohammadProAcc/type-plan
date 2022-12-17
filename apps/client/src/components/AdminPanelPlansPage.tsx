import { PlansPagePlansContainer, PlanTableThumb } from "elements";
import React, { useState } from "react";
import { InitialState, useStore } from "state";
import { AdminPanelLayout } from ".";
import { AdminTable, PlanCard } from "./organisms";

export const AdminPanelPlansPage: React.FC = () => {
  const {
    plans,
  } = useStore((state: InitialState) => ({
    plans: state?.plans.data,
  }));

  /* const [columns] = useState(["تصویر", "شناسه"]); */
  /* const [rows] = useState( */
  /*   plans?.map(plan => [ */
  /*     <PlanTableThumb key={plan?._id} Src={plan?.photo?.filename} />, */
  /*     plan?._id, */
  /*   ]), */
  /* ); */

  return (
    <AdminPanelLayout
      title="نقشه ها"
      createButtonLabel="افزودن نقشه"
    >
      {/* <AdminTable */}
      {/*   columns={columns} */}
      {/*   rows={rows} */}
      {/* /> */}

      <PlansPagePlansContainer>
        {plans?.map((plan) => <PlanCard key={plan?._id} plan={plan} />)}
      </PlansPagePlansContainer>
    </AdminPanelLayout>
  );
};
