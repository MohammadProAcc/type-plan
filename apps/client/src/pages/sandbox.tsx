import { Layout } from "components";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useStore } from "state";

const Page = ({ users: usersFromProps }) => {
  const {
    users,
  } = useStore((state: any) => ({
    users: state?.users,
  }));

  console.log(users);
  

  return (
    <Layout>
      {/* {users?.map((user: any) => <>{user?.name}</>)} */}
    </Layout>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: users } = await axios.get("https://jsonplaceholder.ir/users");

  return {
    props: {
      initialState: {
        users,
      },
    },
  };
};
