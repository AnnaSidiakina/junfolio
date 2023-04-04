import Image from "next/image";
import Heading from "@component/components/Heading";

const TeamMemberInfo = ({ teamMember }) => {
  if (!teamMember) {
    return <Heading tag="h3" text="There is no info!" />;
  }
  const { photoUrl, name, category, email } = teamMember;

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <Image src={photoUrl} alt="photo" width={600} height={600} />
      </div>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Stack: </strong>
        {category}
      </div>
    </>
  );
};
export default TeamMemberInfo;
