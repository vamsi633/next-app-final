import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis
        accusantium quae deleniti adipisci quos error ut, dolores illum aliquid?
        Perferendis assumenda laudantium voluptas repellendus qui. Asperiores
        provident tempora aut!
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero
          laboriosam voluptatum saepe enim alias unde commodi dicta vel.
          Exercitationem consequatur eos quos sit ipsam earum, laborum possimus
          animi nostrum.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero
          laboriosam voluptatum saepe enim alias unde commodi dicta vel.
          Exercitationem consequatur eos quos sit ipsam earum, laborum possimus
          animi nostrum.
        </p>
      </div>
    </main>
  );
}
