import { doors } from "../components/Data.js";
import Door from "../components/Cat/Door.js";

const Catalog = () => (
  <>
    <h1>Catalog</h1>
    {Object.entries(doors).map(([key, door]) => (
      <Door {...door} />
    ))}
  </>
);

export default Catalog;
