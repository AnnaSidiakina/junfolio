import Heading from "../../components/Heading";
import { Section } from "@component/components/Section.styled";
import { Container } from "@component/components/Container.styled";
import {
  PortfolioList,
  PortfolioItem,
  PortfolioImage,
  DescriptionContainer,
  PortfolioDescription,
  ReadMoreLink,
} from "./Portfolio.styled";

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
      <Section>
        <Container>
          <Heading text="Portfolio" />
          <PortfolioList>
            {portfolio.map(({ _id, description, imageUrl }) => (
              <PortfolioItem key={_id}>
                <PortfolioImage
                  src={imageUrl}
                  alt="Project image"
                  width={320}
                  height={320}
                />
                <DescriptionContainer>
                  <PortfolioDescription>{description}</PortfolioDescription>
                  <ReadMoreLink href={`/portfolio/${_id}`}>
                    Read more
                  </ReadMoreLink>
                </DescriptionContainer>
              </PortfolioItem>
            ))}
          </PortfolioList>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
