import { Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-gray-900">
      <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto p-4 md:p-8">
        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/#answer`,
              title: `The answer`,
            },
            {
              route: `/#clemency`,
              title: `Clemency`,
            },
            {
              route: `the-answer-full-10202020.pdf`,
              title: `Download The Answer`,
            },
            {
              route: `clemency-petition.pdf`,
              title: `Download Clemency`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block text-center mt-4 md:mt-0 md:ml-6 no-underline text-white bg-gray-800 hover:bg-gray-700 transition-all duration-150 py-2 px-4 rounded-sm uppercase"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
