import { AdminPanelPlansPage } from "components";
import { NextPage, GetServerSideProps } from "next";

const Page: NextPage = () => <AdminPanelPlansPage />

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}