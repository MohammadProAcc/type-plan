import { AdminPanelDashboardPage } from "components";
import { NextPage, GetServerSideProps } from "next";

const Page: NextPage = () => <AdminPanelDashboardPage />

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}