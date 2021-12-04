import React from "react";
import smartPhone from "./../icons/smartphone.png";
import camera from "./../icons/camera.png";
import computer from "./../icons/computer.png";
import controller from "./../icons/console.png";
import tablet from "./../icons/tablet.png";
import videoCamera from "./../icons/video-camera .png";
const repairData = [
  {
    id: 1,
    title: "MOBILE PHONES",
    description:
      "Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.",
    icon: smartPhone
  },
  {
    id: 2,
    title: "PHOTO CAMERAS",
    description:
      "Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.",
    icon: camera
  },
  {
    id: 3,
    title: "COMPUTERS",
    description:
      "Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.",
    icon: computer
  },

  {
    id: 4,
    title: "TABLETS",
    description:
      "Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.",
    icon: tablet
  },
  {
    id: 5,
    title: "VIDEO CAMERAS",
    description:
      "Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.",
    icon: videoCamera
  },
  {
    id: 6,
    title: "GAME CONSOLES",
    description:
      "Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.",
    icon: controller
  }
];
const ServiceList = () => {
  return (
    <section className="mt-5 common-gap">
      <div className="repair">
        <h1 className="text-center" style={{color: '#000957'}}>
          WE REPAIR
        </h1>
        <div className="row mt-4 container m-auto">
          {repairData.map((data) => (
            <div className="col-md-4 col-sm-6 d-flex my-3 px-4">
              <div className="icons">
                <img className="ms-1" src={data.icon} alt="" />
              </div>
              <div className="ms-4">
                <h2 className="fs-4 text-info">{data.title}</h2>
                <p className="w-100 fs-6">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
