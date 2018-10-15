import React from "react";
import { ComponentForFirstStore } from "./ComponentForFirstStore";
import { ComponentForSecondStore } from "./ComponentForSecondStore";
import { ComponentForThirdStore } from "./ComponentForThirdStore";
import { Pagination } from "./Pagination";
import { Filter } from "./Filter";

const App = () => (
  <React.Fragment>
    <div style={{ float: "left", marginRight: "200px" }}>
      <ComponentForFirstStore />
    </div>

    <div style={{ float: "left", marginRight: "200px" }}>
      <ComponentForSecondStore />
    </div>

    <div style={{ float: "left" }}>
      <ComponentForThirdStore />
    </div>
    <div>
      <Pagination />
      <Filter />
    </div>
  </React.Fragment>
);

export default App;
