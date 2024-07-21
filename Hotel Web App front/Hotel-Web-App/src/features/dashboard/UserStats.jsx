import React from "react";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

function UserStats({ bookings, confirmedStays, numDays, cabinCount }) {
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={14}
      />
      <Stat
        title="Bonus"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={124}
      />
      <Stat
        title="Days to check in"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={12}
      />
    </>
  );
}

export default UserStats;
