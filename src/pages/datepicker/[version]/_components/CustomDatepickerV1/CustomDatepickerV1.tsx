import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatepickerV1.css";

const formatDate = (date: Date | null) => {
  return date
    ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    : "";
};

// Based on: https://dribbble.com/shots/17967967-Date-picker-components-Untitled-UI
const CustomDatepickerV1: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onClickToday = () => {
    setStartDate(new Date());
  };

  return (
    <div className="flex flex-col gap-2">
      <h2>Tailwind + react-datepicker</h2>

      <p>
        Based on:{" "}
        <a
          className="text-primary underline"
          href="https://dribbble.com/shots/17967967-Date-picker-components-Untitled-UI"
          target="_blank"
        >
          Dribbble design 1
        </a>
      </p>

      <DatePicker
        showPopperArrow={false}
        shouldCloseOnSelect={false}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
        fixedHeight
      >
        <div className="relative">
          <button
            className="px-4 py-1.5 border-[1px] rounded-md"
            onClick={onClickToday}
          >
            Today
          </button>

          <div className="w-min flex gap-3 absolute top-0 right-0 align-middle">
            <input
              value={formatDate(startDate)}
              className="px-4 py-1.5 border-[1px] rounded-md w-[100px] outline-none"
            />
            <span className="text-text leading-7">{" - "}</span>
            <input
              value={formatDate(endDate)}
              className="px-4 py-1.5 border-[1px] rounded-md w-[100px] outline-none"
            />
          </div>
        </div>
      </DatePicker>
    </div>
  );
};

export default CustomDatepickerV1