import React from "react";

function Cards() {
  return (
    <section className="mx-auto my-16 flex items-center justify-center z-30 gap-10">
      <div className="w-96 h-96 bg-blue-200 p-5 shadow-lg">
        <div className="w-full h-max flex justify-center">
          <img
            src="/training.gif"
            className="h-20 w-auto  border rounded-full overflow-hidden p-2 bg-white"
            alt=""
          />
        </div>
      </div>
      <div className="w-96 h-96 bg-blue-200 p-5 shadow-lg">
        <div className="w-full h-max flex justify-center">
          <img
            src="/geography.gif"
            className="h-20 w-auto  border rounded-full overflow-hidden p-2 bg-white"
            alt=""
          />
        </div>
      </div>
      <div className="w-96 h-96 bg-blue-200 p-5 shadow-lg">
        <div className="w-full h-max flex justify-center">
          <img
            src="/target.gif"
            className="h-20 w-auto  border rounded-full overflow-hidden p-2 bg-white"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Cards;
