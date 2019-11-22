import React from "react";
import { render } from "react-dom";
import {
  FileDrop,
  StyledSimplePagination,
  SimplePagination
} from "carbon-addons-iot-react";

const AlignmentHelper = ({ children }) => (
  <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
    {children}
  </div>
);

const App = () => (
  <FileDrop
    accept={[]}
    buttonLabel="Upload File"
    description="Any file can be uploaded.  Feel free to upload more than one!"
    dragAndDropLabel="Drag and drop your file here or "
    id="FileUploader"
    kind="browse"
    multiple
    onData={function noRefCheck() {}}
    onError={function noRefCheck() {}}
    showFiles
    title="Upload Files"
  />
);

render(<App />, document.getElementById("root"));
