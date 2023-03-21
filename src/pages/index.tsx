import Head from "next/head";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Grid Example</title>
        <meta name="description" content="A basic grid system layout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header>The header</Header>
        <SideNav>
          <ul>
            <li>
              <a href="">Nav 1</a>
            </li>
            <li>
              <a href="">Nav 2</a>
            </li>
            <li>
              <a href="">Nav 3</a>
            </li>
          </ul>
        </SideNav>
        <Content>
          <h1>Main article area</h1>
          <p>
            In this layout, we display the areas in source order for any screen
            less that 500 pixels wide. We go to a two column layout, and then to
            a three column layout by redefining the grid, and the placement of
            items on the grid.
          </p>
        </Content>
        <Side>Sidebar</Side>
        <Ad>Advertising</Ad>
        <Footer>The footer</Footer>
      </Wrapper>
      <ProductTileWrapper>
        <Box>A</Box>
        <Box>B</Box>
        <Box>C</Box>
        <Box>D</Box>
        <Box>E</Box>
        <Box>F</Box>
        <Box>G</Box>
      </ProductTileWrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [col-start] 1fr);
  gap: 12px;
  margin: 0 24px;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(8, [col-start] 1fr);
    gap: 16px;
    margin: 0 32px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: 16px;
    margin: 0 32px;
  }
`;

const Header = styled.header`
  grid-column: col-start / span 4;

  @media (min-width: 480px) {
    grid-column: col-start / span 8;
  }

  @media (min-width: 1024px) {
    grid-column: col-start / span 12;
  }
`;

const SideNav = styled.nav`
  grid-column: col-start / span 4;

  @media (min-width: 480px) {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }

  @media (min-width: 1024px) {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
`;

const Content = styled.article`
  grid-column: col-start / span 4;

  @media (min-width: 480px) {
    grid-column: col-start 3 / span 6;
    grid-row: 2 / 4;
  }

  @media (min-width: 1024px) {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
`;

const Side = styled.aside`
  grid-column: col-start / span 2;

  @media (min-width: 480px) {
    grid-column: col-start / span 4;
  }

  @media (min-width: 1024px) {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
`;

const Ad = styled.aside`
  grid-column: col-start 3 / span 2;

  @media (min-width: 480px) {
    grid-column: col-start 5 / span 4;
  }

  @media (min-width: 1024px) {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
`;

const ProductTileWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 0 24px;

  @media (min-width: 480px) {
    margin: 0 32px;
  }
`;

const Box = styled.div`
  background-color: gray;
`;

const Footer = styled.footer`
  grid-column: col-start / span 4;

  @media (min-width: 480px) {
    grid-column: col-start / span 8;
  }

  @media (min-width: 1024px) {
    grid-column: col-start / span 12;
  }
`;

export default Home;
