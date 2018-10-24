import React from "react";

const DashboardStaff = props => (
  <main className="dashboard dashboard--volunteer">
    <header>
      <h2>Your Shelter's Tasks:</h2>
    </header>

    <h3>Available Tasks:</h3>
    <div className="task task--volunteer">
      <div className="task__title">Leaking Pipe</div>
      <div className="task__job">Plumbing</div>
      <div className="task__description">
        There's a leak somewhere and no one here knows how to fix it!
      </div>
      <div className="task__shelter">Helper Shelter</div>
      <div className="task__shelter_address">1 Rainbow Lane, Candy Land</div>
    </div>

    <div className="task task--volunteer">
      <div className="task__title">New Dorms</div>
      <div className="task__job">General Handiness</div>
      <div className="task__description">
        We admitted too many freshmen, someone pretty please build us new dorms!
      </div>
      <div className="task__shelter">Snevets Universalis</div>
      <div className="task__shelter_address">
        1 Castle Point Terrace, Hoboken
      </div>
    </div>
  </main>
);

export default DashboardStaff;
