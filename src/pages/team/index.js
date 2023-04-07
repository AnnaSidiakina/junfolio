import Heading from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import JoinTeamForm from "@component/components/JoinTeamForm/JoinTeamForm";
import avatar from "../../../public/images/avatar.jpg";
// import TeamItem from "@component/components/Team/TeamItem/TeamItem";

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
    setTeamList(data);
  };

  const handleSubmit = async (data) => {
    console.log(data);
    const url = new URL(`http://localhost:3000/api/team`);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.status); // log response status code
    const res = await response.json();
    console.log(res); // log parsed response body
  };

  return (
    <>
      <Heading text="Our team" />
      <JoinTeamForm onSubmit={handleSubmit} />
      {team && (
        <ul>
          {teamList.map(({ _id, stack, firstName, lastName, photoUrl }) => (
            <li key={_id}>
              <Link href={`/team/${_id}`}>
                <p>{stack}</p>

                <p>
                  <span>{firstName} </span>
                  <span>{lastName}</span>
                </p>
                {photoUrl ? (
                  <Image src={photoUrl} alt="photo" width={200} height={200} />
                ) : (
                  <Image src={avatar} alt="photo" width={200} height={200} />
                )}
              </Link>
              <button onClick={() => handleClick(_id)}>Delete</button>
            </li>
            // <li key={teamMember._id}>
            //   <TeamItem teamMember={teamMember} handleClick={handleClick} />
            // </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Team;
