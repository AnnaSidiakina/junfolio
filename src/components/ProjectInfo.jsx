import Image from "next/image";
import Heading from "./Heading";

const ProjectInfo = ({ project }) => {
  if (!project) {
    return <Heading tag="h3" text="Empty project" />;
  }
  const { imageUrl, description, link, team } = project;

  return (
    <>
      <Image src={imageUrl} alt="photo" width={600} height={600} />
      <p>{description}</p>
      <a href={link}>explore project</a>
      <Heading tag="h4" text="Team of developers" />
      <ul>
        {team &&
          team.map(({ _id, name, email, category, photoUrl }) => (
            <li key={_id}>
              <Heading tag="h5" text={name} />
              <p>{email}</p>
              <p>{category}</p>
              <Image src={photoUrl} alt="photo" width={200} height={200} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProjectInfo;
