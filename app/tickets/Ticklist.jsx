import Link from "next/link";
import React from "react";

const getTickets = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
};
const Ticklist = async () => {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        );
      })}
      {tickets.lenth === 0 && <p className="text-center">No Open Tickets</p>}
    </>
  );
};

export default Ticklist;
