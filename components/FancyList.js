const subItems = (child, baseIndex) =>
  child.map((item, index) => (
    <li key={`${baseIndex}.${index}`} className="py-2">
      <div
        className="border-l-4 border-pink-200"
        style={{ marginLeft: "1.8rem" }}
      >
        <h4 className="text-gray-600 pl-2">{item}</h4>
      </div>
    </li>
  ));

const plainItem = (child, index) => (
  <li key={index} className="py-2">
    <div className="flex items-center">
      <div>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
          <i className="fas" />
        </span>
      </div>
      <div>
        <h4 className="text-gray-600">{child}</h4>
      </div>
    </div>
  </li>
);

export default ({ children, className = "" }) => (
  <ul className={`list-none ${className}`}>
    {children.map((child, index) =>
      Array.isArray(child) ? subItems(child, index) : plainItem(child, index)
    )}
  </ul>
);
