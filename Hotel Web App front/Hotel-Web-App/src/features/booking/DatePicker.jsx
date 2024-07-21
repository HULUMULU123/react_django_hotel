import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";

import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { ru } from "date-fns/locale/ru";

// registerLocale("ru", ru);
function DatePickerComponent({
  name,

  placeHolder,
  control,
}) {
  const [focusedInput, setFocusedInput] = useState(false);
  // const { control, register, handleSubmit } = useForm();

  const { t, i18n } = useTranslation();
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          // <DatePicker
          //   startDate={startDate}
          //   endDate={endDate}
          //   placeholderText={i18n.language}
          //   locale={i18n.language}
          //   selected={field.value}
          //   onChange={(date) => {
          //     field.onChange(date);
          //     setDate(field.value);
          //   }}
          // />

          <SingleDatePicker
            displayFormat="DD.MM.YYYY"
            firstDayOfWeek={1}
            placeholder={t(placeHolder)}
            date={field.value}
            onDateChange={(date) => field.onChange(date)} // PropTypes.func.isRequired
            focused={focusedInput} // PropTypes.bool
            onFocusChange={() => setFocusedInput(!focusedInput)} // PropTypes.func.isRequired
            id={name}
            orientation="vertical"
            readOnly
            hideKeyboardShortcutsPanel
          />

          // <DateRangePicker
          //   startDatePlaceholderText={t("datepicker.start")}
          //   endDatePlaceholderText={t("datepicker.end")}
          //   startDate={field1.value} // momentPropTypes.momentObj or null,
          //   startDateId="startDate" // PropTypes.string.isRequired,
          //   endDate={field2.value} // momentPropTypes.momentObj or null,
          //   endDateId="endDate" // PropTypes.string.isRequired,
          //   onDatesChange={({ startDate, endDate }) => {
          //     setStartDate(startDate);
          //     setEndDate(endDate);
          //   }} // PropTypes.func.isRequired,
          //   focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          //   onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
          //   hideKeyboardShortcutsPanel={true}
          //   readOnly={true}
          //   // orientation={"vertical"}
          //   // verticalHeight={370}
          // />
        )}
      />
    </div>
  );
}

export default DatePickerComponent;
