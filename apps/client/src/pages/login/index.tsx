import { NextPage, GetServerSideProps } from "next";

const Page: NextPage = () => <div />

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}