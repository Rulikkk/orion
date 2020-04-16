import { Children } from "react";

export default ({ children }) => (
  <ul className="list-none mt-6">
    {Children.map(children, child => {
      return (
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                <i className="fas fa-fingerprint" />
              </span>
            </div>
            <div>
              <h4 className="text-gray-600">{child}</h4>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
);
