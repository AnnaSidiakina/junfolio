import Heading from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export const getServerSideProps = async () => {
  const response = await fetch(`${BACKEND_BASE_URL}/api/team`);
  const data = await response.json();

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
  const [teamList, setTeamList] = useState(team);
  const router = useRouter();
  const handleClick = async (id) => {
    const url = new URL(`http://localhost:3000/api/team/${id}`);
    const response = await fetch(url, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    setTeamList(data);
  };
  return (
    <>
      <Heading text="Our team" />
      <ul>
        {teamList &&
          teamList.map(({ _id, category, email, name, photoUrl }) => (
            <li key={_id}>
              <Link href={`/team/${_id}`}>
                <p>{category}</p>
                <p>{email}</p>
                <p>{name}</p>
                <Image src={photoUrl} alt="photo" width={200} height={200} />
              </Link>
              <button onClick={() => handleClick(_id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Team;
