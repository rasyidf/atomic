import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Layout } from "../Components";

const Home: React.FC<{}> = (): JSX.Element => {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <h1 className="font-bold text-center my-4 text-lg">Home Page</h1>
    
      <Link to="/about" className="block">
        <Button text="About" />
      </Link>
    </Layout>
  );
};

export default Home;
