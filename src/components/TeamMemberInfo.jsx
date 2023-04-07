import Image from "next/image";
import Heading from "@component/components/Heading";

const TeamMemberInfo = ({ teamMember }) => {
  if (!teamMember) {
    return <Heading tag="h3" text="There is no info!" />;
  }
  const { photoUrl, firstName, lastName, role, email, portfolio } = teamMember;
  console.log(portfolio);
  return (
    <>
      <Heading
        tag="h3"
        text={
          <>
            <span>{firstName} </span>
            <span>{lastName}</span>
          </>
        }
      />
      <div>
        {photoUrl && (
          <Image src={photoUrl} alt="photo" width={600} height={600} />
        )}
      </div>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Role: </strong>
        {role}
      </div>
      {/* {portfolio > 0 && (
        <ul>
          {portfolio.map(({ _id, imageUrl, title }) => {
            return (
              <li key={_id}>
                <Image src={imageUrl} width={200} height={200} alt={title} />
              </li>
            );
          })}
        </ul>
      )} */}
    </>
  );
};
export default TeamMemberInfo;
