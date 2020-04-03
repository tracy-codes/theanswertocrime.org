import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like you aren&apos;t on the right page.{" "}
          <Link className="underline">Go back to the home page</Link>
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
