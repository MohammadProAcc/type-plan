import { PlanShowPage } from "components";
import { GetServerSideProps } from "next";
import React from "react";
import { getPlan } from "state";

export const planshow: React.FC = () => <PlanShowPage />;

export default planshow;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const planId = context.query.plan_id;
  const plan = await getPlan({
    set: {
      _id: planId,
    },
    get: {
      updateAt: 0,
    },
  });

  return {
    props: {
      initialZustandState: {
        plan,
      },
    },
  };
};
