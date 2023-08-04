import React from "react";

import CustomDataGrid from "./_components/CustomDataGrid";

const DataGridPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 m-10">
      <CustomDataGrid />
    </div>
  );
};

export default DataGridPage;
