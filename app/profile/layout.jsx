import React from "react";
import ClientLayout from "../components/clientLayout";

function Layout({ children, session }) {
  return (
    <div className="">
      <ClientLayout session={session}>{children}</ClientLayout>
    </div>
  );
}

export default Layout;
