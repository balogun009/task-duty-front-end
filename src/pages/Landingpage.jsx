import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/images/illustration.png";

const Landingpage = () => {
  return (
    <div className="container d-flex flex-column gap-4 py-4 flex-md-row align-items-md-center">
      <div className="d-flex flex-column align-items-center gap-2 text-md-start align-items-md-start">
        <h1>
          Manage your Tasks on <span className="text-purple">TaskDuty</span>
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          aut quas modi quod nam, temporibus maxime quos tenetur iure dolorem
          accusamus amet cumque necessitatibus explicabo reprehenderit
          recusandae quasi aperiam deleniti!
        </p>
        <Link to="/tasks" className="btn bg-purple text-white px-3 fw-semibold">
          Go to My Tasks
        </Link>
      </div>
      <img className="w-100" src={illustration} alt="" />
    </div>
  );
};

export default Landingpage;
