import React from "react";
import { useParams } from "react-router-dom";

const CustomDatepickerV1 = React.lazy(
  () => import("./_components/CustomDatepickerV1/CustomDatepickerV1")
);
const CustomDatepickerV2 = React.lazy(
  () => import("./_components/CustomDatepickerV2/CustomDatepickerV2")
);

const DatapickerPage: React.FC = () => {
  const { version } = useParams<{ version: string }>();

  return (
    <div className="flex flex-col gap-6 m-10">
      {version === "1" && <CustomDatepickerV1 />}
      {version === "2" && <CustomDatepickerV2 />}
    </div>
  );
};

export default DatapickerPage;
