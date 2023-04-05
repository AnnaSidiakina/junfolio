import Heading from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export const getStaticProps = async () => {
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
  const handleClick = async (id) => {
    await fetch(`${BACKEND_BASE_URL}/api/team/${id}`, {
      method: "Delete",
    });
  };
  return (
    <>
      <Heading text="Our team" />
      <ul>
        {team &&
          team.map(({ _id, category, email, name, photoUrl }) => (
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
