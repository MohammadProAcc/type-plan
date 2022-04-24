import { AdminPanelCreatePlanPage } from "components";
import { NextPage, GetServerSideProps } from "next";

const Page: NextPage = () => <AdminPanelCreatePlanPage />

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}