import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import TabJobs from "../TabJobs/TabJobs";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Martplace | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-10">
        <TabJobs></TabJobs>
      </div>

      <div>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
