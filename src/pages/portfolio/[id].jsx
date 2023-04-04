import ProjectInfo from "@component/components/ProjectInfo";
import Heading from "../../components/Heading";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await fetch(`http://localhost:3000/api/portfolio/${id}`);
  const { project } = await response.json();

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

const Project = ({ project }) => {
  return (
    <>
      <Heading text="Project info" />
      <ProjectInfo project={project} />
    </>
  );
};
export default Project;
