import React from "react";
import QuestionComponents from "./QuestionComponents";
import { SectionHeader } from "./SectionHeader";

const Main = () => {
  return (
    <div className="color_bg_page">
      <div className="container color_bg_light  mx-auto  my-11 py-7 px-11">
        <h1 className="page_title">Create Questions</h1>
        <hr
          className="my-6 mx-0 mb-px "
          style={{ border: "1px solid #733d47" }}
        />
        <form>
          <div>
            <SectionHeader />
            <QuestionComponents />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
