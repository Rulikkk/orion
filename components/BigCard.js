export default ({ children }) => (
  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
      <img
        alt="..."
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        className="w-full align-middle rounded-t-lg"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block"
          style={{
            height: "95px",
            top: "-94px"
          }}
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-pink-600 fill-current"
          />
        </svg>
        {children}
      </blockquote>
    </div>
  </div>
);
