import TeamMemberInfo from "@component/components/TeamMemberInfo";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  console.log(context);

  const response = await fetch(`${BACKEND_BASE_URL}/api/team/${id}`);

  const teamMember = await response.json();

  if (!teamMember) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      teamMember,
    },
  };
};

const TeamMember = ({ teamMember }) => {
  return (
    <>
      <TeamMemberInfo teamMember={teamMember} />
    </>
  );
};
export default TeamMember;
