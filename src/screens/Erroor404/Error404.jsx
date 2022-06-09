import React from "react";
import { error404 } from "../../Assets/index";
const Error404 = () => {
  return (
    <div className="flex-center flex-col">
      <div style={{ width: "30rem" }}>
        <img src={error404} alt="" />
      </div>
      <div>
        <h3>404 Error page</h3>
        <h2>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST</h2>
      </div>
    </div>
  );
};

export { Error404 };
