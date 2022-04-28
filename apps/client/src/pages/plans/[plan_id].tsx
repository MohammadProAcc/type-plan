import { PlanShowPage } from "components";
import React from "react";
import { GetServerSideProps } from "next"
import { getPlan } from "state";

export const planshow: React.FC = () => <PlanShowPage />;

export default planshow;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const planId = context.query.plan_id;
  const { body: plan } = await getPlan({
    set: {
      _id: planId
    },
    get: {
      updateAt: 0
    }
  });

  return {
    props : { 
      initialState: {
        plan
      }
     }
  }
}
