import React, { ElementRef, useRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatepickerV2.css";

// Based on: https://dribbble.com/shots/17967967-Date-picker-components-Untitled-UI
const CustomDatepickerV2: React.FC = () => {
  const calendarRef = useRef<ElementRef<typeof DatePicker>>(null);
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <div className="flex flex-col gap-2">
      <h2>Tailwind + react-datepicker</h2>

      <p>
        Based on{" "}
        <a href="https://dribbble.com/shots/10768744-Datepicker-Component">
          Dribbble design 2
        </a>
      </p>

      <DatePicker
        ref={calendarRef}
        showPopperArrow={false}
        shouldCloseOnSelect={false}
        selected={startDate}
        adjustDateOnChange
        onChange={onChange}
        fixedHeight
        showMonthDropdown
        showYearDropdown
        focusSelectedMonth
      >
        <div className="mx-2 text-xs w-full mb-3">
          <button
            className="mx-2 text-blue-400 font-bold"
            onClick={() => {
              setStartDate(new Date("2023-08-01"))
              calendarRef.current?.setPreSelection(new Date("2023-08-01"))
            }}
          >
            Week Ago
          </button>
          <button
            className="mx-2 text-blue-400 font-bold"
            onClick={() => {
              setStartDate(new Date("2023-07-07"));
              calendarRef.current?.setPreSelection(new Date("2023-07-07"))
            }}
          >
            Month Ago
          </button>
          <button
            className="mx-2 text-blue-400 font-bold"
            onClick={() => {
              setStartDate(new Date("2023-01-07"));
              calendarRef.current?.setPreSelection(new Date("2023-01-07"));
            }}
          >
            6 Months Ago
          </button>
        </div>
      </DatePicker>
    </div>
  );
};

export default CustomDatepickerV2;
