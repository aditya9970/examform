import React, { useContext } from "react";
import { StoreContext } from "../Context/storeContext";

export const SectionHeader = ({ section, i }) => {
  const { dispatch } = useContext(StoreContext);
  // console.log(store.sections[0].sectionTitle, sectionNo - 1);

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    let temp = { ...section };
    temp[name] = e.target.value;
    dispatch({ type: "change_Section", payload: temp });
  };

  const handleShuffle = (e) => {
    let temp = { ...section };
    temp.shuffle = !temp.shuffle;
    dispatch({ type: "change_Section", payload: temp });
  };

  const handleSectionChange = () => {};
  return (
    <div
      className="card_container mt-1 "
      onClick={() =>
        dispatch({
          type: "change_Selected",
          payload: { i, j: -1 },
        })
      }
    >
      <div className="pl-8">
        <input
          type="text"
          className="block  text-4xl w-full section_name mb-2 "
          placeholder="Section Name"
          value={section.sectionTitle}
          onChange={
            // console.log("as");
            handleChange("sectionTitle")

            // dispatch({ type: "change_Section", payload: { sectionNo, e } })
          }
        />

        <textarea
          className="block text-base w-full section_description"
          placeholder="Description(optional)"
          rows="2"
          value={section.sectionDescription}
          onChange={handleChange("sectionDescription")}
        />
      </div>
      <div className="absolute section_checkbox">
        <input
          type="checkbox"
          checked={section.shuffle}
          onChange={() => handleShuffle()}
        />
        <span> Shuffle Questions</span>
      </div>
    </div>
  );
};
