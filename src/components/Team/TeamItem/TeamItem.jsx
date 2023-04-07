import Image from "next/image";
import Link from "next/link";
import avatar from "../../../../public/images/avatar.jpg";

const TeamItem = ({ teamMember, handleClick }) => {
  <div>
    <Link href={`/team/${teamMember._id}`}>
      <p>Role: {teamMember.stack}</p>

      <p>
        <span>{teamMember.firstName} </span>
        <span>{teamMember.lastName}</span>
      </p>
      {teamMember.photoUrl ? (
        <Image src={teamMember.photoUrl} alt="photo" width={200} height={200} />
      ) : (
        <Image src={avatar} alt="photo" width={200} height={200} />
      )}
    </Link>
    <button onClick={() => handleClick(_id)}>Delete</button>
  </div>;
};
export default TeamItem;
