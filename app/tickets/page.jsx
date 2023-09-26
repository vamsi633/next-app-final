import React, { Suspense } from "react";
import Ticklist from "./Ticklist";
import Loading from "../loading";
import Link from "next/link";

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <button className="btn-primary ml-10">
          <Link href="/tickets/create" className="btn-primary">
            create ticket
          </Link>
        </button>
      </nav>
      {/*when we wrap anything with suspence only that content is not rendered during loading to show loading component upper part will be shown as usal during loading screen */}
      <Suspense fallback={<Loading />}>
        <Ticklist />
      </Suspense>
    </main>
  );
};

export default Tickets;
