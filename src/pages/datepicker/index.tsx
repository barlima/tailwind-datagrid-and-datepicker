import React from "react";
import { CustomDatepicker } from "./_components/CustomDatepicker";

const DatapickerPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <CustomDatepicker />
    </div>
  );
};

export default DatapickerPage;
