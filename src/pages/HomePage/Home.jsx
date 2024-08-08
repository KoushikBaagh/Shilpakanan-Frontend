import {
  HeroSection,
  Footer,
  ManagmentPeoples,
  SocietyRules,
  Gallery,
  Event,
  BusinessAdvertiseHomePage,
  Loader,
} from "../../import";
import { getHomePageData } from "../../http";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    events: [],
    management: [],
    advertise: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    setLoading(true);
    setError(null);
    try {
      const { data } = await getHomePageData();
      if (data) setData(data);
    } catch (err) {
      console.error("Error fetching home page data:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    document.title = "Shilpakanan Phase 3";
    getData();
  }, []);

  return (
    <>
      <HeroSection />
      {loading ? (
        <Loader message="loading.." type="true" />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <Event events={data.events} />
          <BusinessAdvertiseHomePage advertises={data.advertise} />
          <Gallery />
          <ManagmentPeoples management={data.management} />
        </>
      )}
      <SocietyRules />
      <Footer />
    </>
  );
};

export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import {
//   HeroSection,
//   Footer,
//   ManagmentPeoples,
//   SocietyRules,
//   Gallery,
//   Event,
//   BusinessAdvertiseHomePage,
//   Loader,
// } from "../../import";
// import { getHomePageData } from "../../http";
// import { useEffect, useState } from "react";
// const Home = () => {
//   const [data, setData] = useState({
//     events: [],
//     management: [],
//     advertise: [],
//   });
//   const [loading, setLoading] = useState(false);

//   async function getData() {
//     setLoading(true);
//     const { data } = await getHomePageData();
//     if (data) setData(data);
//     setLoading(false);
//   }
//   useEffect(() => {
//     document.title = "Shilpakanan Phase 3";
//     return getData();
//   }, []);
//   return (
//     <>
//       <HeroSection />
//       {loading ? (
//         <Loader message="loading.." type="true" />
//       ) : (
//         <>
//           <Event events={data.events} />
//           <BusinessAdvertiseHomePage advertises={data.advertise} />
//           <Gallery />
//           <ManagmentPeoples management={data.management} />
//         </>
//       )}
//       <SocietyRules />
//       <Footer />
//     </>
//   );
// };

// export default Home;
