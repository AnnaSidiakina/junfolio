import TeamMemberInfo from "@component/components/TeamMemberInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await fetch(`http://localhost:3000/api/team/${id}`);
  const { teamMember } = await response.json();

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
