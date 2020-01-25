import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import iconSrc from "../images/505-logo.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="">
      <div className="flex justify-between max-w-4xl mx-auto p-4 md:p-8">
          <Link className="flex items-center no-underline " to="/">
            <h1 className="text-3xl font-sans italic text-blue-600">505 Economics</h1>
            </Link>
            <Link to="/"><img className="h-12" src={iconSrc}/></Link>

      </div>
    </header>
  );
}

export default Header;
