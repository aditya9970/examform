import React from "react";

const SideBar = () => {
  return (
    <>
      <ul
        className="flex flex-col justify-evenly items-center color_bg_secondary rounded-xl "
        style={{ width: "63px", height: "324px" }}
      >
        <li
          // className="w-6 h-6"
          style={{
            height: "22px",
            width: "22px",
          }}
        >
          <img
            src={"/svg/add.svg"}
            style={{
              height: "20px",
              width: "20px",
            }}
            alt="add"
          />
        </li>
        <li
          // className="w-6 h-6"
          style={{
            height: "22px",
            width: "22px",
          }}
        >
          <img
            src={"/svg/image.svg"}
            style={{
              height: "20px",
              width: "20px",
            }}
            alt="add"
          />
        </li>
        <li
          // className="w-6 h-6"
          style={{
            height: "22px",
            width: "22px",
          }}
        >
          <img
            src={"/svg/copy.svg"}
            style={{
              height: "20px",
              width: "20px",
            }}
            alt="add"
          />
        </li>
        <li
          // className="w-6 h-6"
          style={{
            height: "22px",
            width: "22px",
          }}
        >
          <img
            src={"/svg/delete.svg"}
            style={{
              height: "20px",
              width: "20px",
            }}
            alt="add"
          />
        </li>
        <li
          // className="w-6 h-6"
          style={{
            height: "22px",
            width: "22px",
            background: "#F2D8D5",
            borderRadius: "100%",
            paddingLeft: "6px",
          }}
        >
          <img
            src={"/svg/section.svg"}
            style={{
              height: "21px",
              width: "10px",
            }}
            alt="add"
          />
        </li>
      </ul>
    </>
  );
};

export default SideBar;

export const DragNDrop = () => {
  return (
    <div>
      <img src={"/svg/dragNDrop.svg"} alt="dragNDrop" />
    </div>
  );
};
