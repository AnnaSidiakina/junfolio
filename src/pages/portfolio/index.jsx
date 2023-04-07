import Heading from "../../components/Heading";
import { Section } from "@component/components/Section.styled";
import { Container } from "@component/components/Container.styled";
// import {
//   PortfolioList,
//   PortfolioItem,
//   PortfolioImage,
//   DescriptionContainer,
//   PortfolioDescription,
//   ReadMoreLink,
// } from "./Portfolio.styled";
import Link from "next/link";
import Image from "next/image";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export const getStaticProps = async () => {
  const response = await fetch(`${BACKEND_BASE_URL}/api/portfolio`);
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
      <Section>
        <Container>
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
                <div>
                  <p>{description}</p>
                  <Link href={`/portfolio/${_id}`}>Read more</Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
