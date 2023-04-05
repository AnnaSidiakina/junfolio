import Image from "next/image";
import Heading from "../../components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/portfolio");
  const res = await response.json();

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      portfolio: res,
    },
  };
};

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <Heading text="Portfolio" />
      <ul>
        {portfolio.map(({ _id, description, imageUrl }) => (
          <li key={_id}>
            <Image
              src={imageUrl}
              alt="Project image"
              width={320}
              height={320}
            />
            <p>{description}</p>
            <Link href={`/portfolio/${_id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Portfolio;
