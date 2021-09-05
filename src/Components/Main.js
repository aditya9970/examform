import React, { useReducer } from "react";
import { storeReducer } from "../reducer/storeReducer";
import QuestionComponents from "./QuestionComponents";
import { SectionHeader } from "./SectionHeader";
import SideBar, { DragNDrop } from "./SideBar";

const Main = () => {
  const [store, dispatch] = useReducer(storeReducer, {});
  return (
    <div className="color_bg_page">
      <div className="container color_bg_light  mx-auto  my-11 py-7 px-11">
        <h1 className="page_title">Create Questions</h1>
        <hr
          className="my-6 mx-0 mb-px "
          style={{ border: "1px solid #733d47" }}
        />
        <form>
          <div
            className="flex mx-auto items-center xl:w-3/4 lg:w-9/12 md:full"
            // style={{ marginLeft: "11%", marginRight: "16%" }}
          >
            <div>
              <DragNDrop />
            </div>
            <div
              className="flex flex-col "
              style={{ marginLeft: "13px", marginRight: "24px", width: "100%" }}
            >
              <QuestionComponents />
            </div>
            <div>
              <SideBar />
            </div>
          </div>
          <div className="flex mx-auto items-center xl:w-3/4 lg:w-9/12 md:full">
            <div style={{ width: "21px" }}></div>
            <div
              className="flex flex-col "
              style={{ marginLeft: "13px", marginRight: "24px", width: "100%" }}
            >
              <SectionHeader />
            </div>
            <div>
              <SideBar />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
