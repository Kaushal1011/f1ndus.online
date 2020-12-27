import React from "react";
import UserNav from "../Parts/UserNav";
const Home = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    <>
      <body>
        <UserNav />
      </body>
    </>
  );
};
export default Home;
