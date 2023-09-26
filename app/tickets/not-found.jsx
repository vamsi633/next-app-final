import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">we hit a brick wall</h2>
      <p>we could not find the page you are looking for</p>
      <p>
        Go back to all <Link href="/tickets">tickets</Link>
      </p>
    </main>
  );
};

export default NotFound;
