import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests"
import App from "./App";

it("renders without crashing", () => {
    shallow(<App />);
  });

  
