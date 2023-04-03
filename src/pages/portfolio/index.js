import Heading from "../../components/Heading";
import { getProjects } from "../api/portfolio";

export const getStaticProps = async (context) => {
  const data = await getProjects();

  return {
    props: {
      // portfolio: data,
    },
    revalidate: 60,
  };
};

const Portfolio = (props) => {
  return (
    <>
      <Heading text="Portfolio" />
      {/* <h1>{data}</h1> */}
    </>
  );
};
export default Portfolio;
