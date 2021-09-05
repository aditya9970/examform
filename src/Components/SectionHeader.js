import React from "react";

export const SectionHeader = () => {
  return (
    <div className="card_container mt-1 ">
      <div className="pl-8">
        <input
          type="text"
          className="block  text-4xl w-full section_name mb-2 "
          placeholder="Section Name"
        />
        <textarea
          className="block text-base w-full section_description"
          placeholder="Description(optional)"
          rows="2"
        />
      </div>
      <div className="absolute section_checkbox">
        <input type="checkbox" />
        <span> Shuffle Questions</span>
      </div>
    </div>
  );
};
