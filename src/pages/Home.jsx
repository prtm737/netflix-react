import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Upcomming" fetchUrl={requests.requestUpcoming} />
      <Row rowID="2" title="TopRated" fetchUrl={requests.requestTopRated} />
      <Row rowID="3" title="Treanding" fetchUrl={requests.requestTrending} />
      <Row rowID="4" title="Horror" fetchUrl={requests.requestHorror} />
      <Row rowID="5" title="Popular" fetchUrl={requests.requestPopular} />
    </>
  );
};

export default Home;
