import { ReactElement } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { CatDetailParams, CatFactInterface } from "@/interfaces/index";

export default function CatFactDetail(): ReactElement {
  const details = useLoaderData() as CatFactInterface;

  return (
    <div className="catfact__wrap">
      <div className="catfact">
        <h2>Cat fact details</h2>
        <p>
          <span>Fact:</span> {details?.text}{" "}
        </p>
        <p>
          <span>Author</span>: {details?.user.name.first}{" "}
          {details?.user.name.last}
        </p>
        <img src={details?.user.photo} alt="user image" />
      </div>
      <Link to="/">go back to the list</Link>
    </div>
  );
}

export const catDetailLoader = async ({ params }: CatDetailParams) => {
  const { id } = params;
  const res = await fetch(`https://cat-fact.herokuapp.com/facts/${id}`);
  return res.json();
};
