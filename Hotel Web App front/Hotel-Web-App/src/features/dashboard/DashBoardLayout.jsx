import styled from "styled-components";
import React, { lazy, Suspense } from "react";
import Spinner from "../../ui/Spinner";
// import Stats from "./Stats";
// import SalesChart from "./SalesChart";
// import { AreaChart } from "recharts";
// import DurationChart from "./DurationChart";
// import TodayActivity from "./TodayActivity";

const Stats = lazy(() => import("./Stats"));
const SalesChart = lazy(() => import("./SalesChart"));
const DurationChart = lazy(() => import("./DurationChart"));
const TodayActivity = lazy(() => import("./TodayActivity"));

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Suspense fallback={<Spinner />}>
        <Stats />
        <TodayActivity />
        <DurationChart />
        <SalesChart />
      </Suspense>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
