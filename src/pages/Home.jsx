import HomePageContent from 'components/HomePageContent/HomePageContent';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomePageContent />
    </>
  );
};

export default Home;
