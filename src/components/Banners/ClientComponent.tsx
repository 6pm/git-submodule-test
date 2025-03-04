"use client";

import * as React from "react";

const Banners: React.FC = () => {
  const [status, setStatus] = React.useState<string>("initial");

  React.useEffect(() => {
    setStatus("mounted");
    return () => setStatus("unmounted");
  }, []);

  return (
    <div>
      <h3 className="text-lg text-red-700">Client component status: {status} </h3>
      <div className="flex">
        <img src="https://placehold.co/200x150?text=Turborepo\nimage" width='200' height='150' alt="First Image" />
      </div>
      
    </div>
  );
};

export default Banners;
