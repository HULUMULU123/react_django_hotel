import { lazy, Suspense, useState } from "react";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import AboutUs from "./pages/AboutUs";
// import Booking from "./pages/Booking";
// import Rooms from "./pages/Rooms";
// import Contacts from "./pages/Contacts";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./ui/AppLayout";
// import UserForm from "./pages/UserFrom";
// import Account from "./user/Account";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import InfoRoom from "./features/rooms/InfoRoom";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import { UserProvider } from "./context/UserContext";
// import Spinner from "./ui/Spinner";
// import MyBookings from "./user/MyBookings";
// import AllBookings from "./user/AllBookings";
import AccountPage from "./user/AccountPage";
import Settings from "./user/Settings";
import DashboardLayout from "./features/dashboard/DashBoardLayout";
import Spinner from "./ui/Spinner";
// import { lazily } from "react-lazily";
// import { lazy } from "react";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Booking = lazy(() => import("./pages/Booking"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Contacts = lazy(() => import("./pages/Contacts"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const UserForm = lazy(() => import("./pages/UserFrom"));
const Account = lazy(() => import("./user/Account"));
const InfoRoom = lazy(() => import("./features/rooms/InfoRoom"));

const queryClient = new QueryClient({
  defaultOptions: {
    querues: {
      // staleTime: 60 * 1000,
      scaleTime: 0,
    },
  },
});

function App() {
  return (
    <UserProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <Suspense fallback={"loading"}>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <Suspense fallback={<Spinner />}>
                      <AppLayout />
                    </Suspense>
                  }
                >
                  <Route index element={<Navigate replace to="about" />} />
                  <Route
                    path="about"
                    element={
                      <Suspense fallback={<Spinner />}>
                        <AboutUs />
                      </Suspense>
                    }
                  />
                  <Route
                    path="booking"
                    element={
                      <Suspense fallback={<Spinner />}>
                        <Booking />
                      </Suspense>
                    }
                  />
                  <Route
                    path="rooms"
                    element={
                      <Suspense fallback={<Spinner />}>
                        <Rooms />
                      </Suspense>
                    }
                  />
                  <Route
                    path="rooms/:roomId"
                    element={
                      <Suspense fallback={<Spinner />}>
                        <InfoRoom />
                      </Suspense>
                    }
                  />
                  <Route
                    path="contacts"
                    element={
                      <Suspense fallback={<Spinner />}>
                        <Contacts />
                      </Suspense>
                    }
                  />

                  <Route
                    path="account"
                    element={
                      <Suspense fallback={<Spinner />}>
                        <Account />
                      </Suspense>
                    }
                  >
                    <Route index element={<Navigate replace to="cabinet" />} />
                    <Route
                      path="cabinet"
                      element={
                        <Suspense fallback={<Spinner />}>
                          <AccountPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="allbookings"
                      element={
                        <Suspense fallback={<Spinner />}>
                          <DashboardLayout />
                        </Suspense>
                      }
                    />
                    {/* <Route path="mybookings" element={<MyBookings />} /> */}
                    <Route
                      path="settings"
                      element={
                        <Suspense fallback={<Spinner />}>
                          <Settings />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route
                    path="*"
                    element={
                      <Suspense fallback={<Spinner />}>
                        <PageNotFound />
                      </Suspense>
                    }
                  />
                </Route>
                <Route
                  path="login"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <UserForm />
                    </Suspense>
                  }
                />
              </Routes>
            </BrowserRouter>
          </Suspense>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: { duration: 3000 },
              error: { duration: 5000 },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </UserProvider>
  );
}

export default App;
