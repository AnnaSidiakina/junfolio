import Heading from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { getTeamMembers } from "../api/team";

export const getServerSideProps = async () => {
  // const response = await fetch("http://localhost:3000/api/team");
  const data = await getTeamMembers();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { team: data },
  };
};

const Team = ({ team }) => {
  return (
    <>
      <Heading text="Our team" />
      {/* <ul>
        {team &&
          team.map(({ _id, category, email, name, photoUrl }) => (
            <li key={_id}>
              <Link href={`/team/${_id}`}>
                <p>{category}</p>
                <p>{email}</p>
                <p>{name}</p>
                <Image src={photoUrl} alt="photo" width={200} height={200} />
              </Link>
            </li>
          ))}
      </ul> */}
    </>
  );
};
export default Team;
