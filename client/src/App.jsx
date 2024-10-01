import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import ProfileLayout from "./pages/ProfileLayout";
import Listings from "./pages/Listings";
import UpdateListing from "./pages/UpdateListing";
import ListingDetails from "./pages/ListingDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:id" element={<ListingDetails />} />

        {/* private route */}
        <Route element={<PrivateRoute />}>
          <Route exact path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="listings" element={<Listings />} />
            <Route path="create-listing" element={<CreateListing />} />
            <Route path="update-listing/:id" element={<UpdateListing />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
