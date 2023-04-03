import Heading from "../../components/Heading";
import Image from "next/image";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/team");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { team: data.team },
  };
};

const Team = ({ team }) => {
  return (
    <>
      <Heading text="Our team" />
      <ul>
        {team &&
          team.map(({ _id, category, email, name, photoUrl }) => (
            <li key={_id}>
              <p>{category}</p>
              <p>{email}</p>
              <p>{name}</p>
              <Image src={photoUrl} alt="photo" width={200} height={200} />
            </li>
          ))}
      </ul>
    </>
  );
};
export default Team;
