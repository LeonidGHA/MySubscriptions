import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Main = lazy(() => import("../../pages/MainPage/MainPage"));
const Tweets = lazy(() => import("../../pages/TweetsPage/TweetsPage"));
const NotFound = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
