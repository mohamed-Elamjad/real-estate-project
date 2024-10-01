import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const ProfileLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="pt-8 px-4 flex flex-col lg:flex-row  sm:px-6 lg:px-8 mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
        {/* Sidebar */}
        <div className="flex-none w-full lg:w-56 lg:sticky lg:top-16 lg:h-screen lg:border-r lg:border-gray-200 lg:pr-4">
          <div className="lg:hidden mb-4">
            <div className="lg:hidden mb-4 flex gap-4 items-center justify-center">
              <button
                className={`cursor-pointer outline-none px-10 rounded-lg border p-2 text-sm ${
                  location.pathname === "/profile"
                    ? "bg-slate-700 hover:bg-slate-600 text-white"
                    : "bg-white  border-slate-500"
                }`}
                onClick={() => navigate("/profile")}
              >
                Profile
              </button>
              <button
                className={`cursor-pointer outline-none px-10 rounded-lg border p-2 text-sm ${
                  location.pathname === "/profile/listings"
                    ? "bg-slate-700 hover:bg-slate-600 text-white"
                    : "bg-white  border-slate-500"
                }`}
                onClick={() => navigate("/profile/listings")}
              >
                Listings
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="space-y-4">
              <NavLink to="/profile">
                {" "}
                <li
                  className={`cursor-pointer px-4 py-2 font-semibold transition hover:text-slate-400 ${
                    location.pathname === "/profile"
                      ? "bg-slate-700 rounded-lg hover:text-slate-50 hover:bg-slate-600 text-white"
                      : ""
                  }`}
                >
                  Profile
                </li>
              </NavLink>
              <NavLink to="/profile/listings">
              <li
                className={`cursor-pointer px-4 py-2 font-semibold transition hover:text-slate-400 ${
                  location.pathname === "/profile/listings"
                    ? "bg-slate-700 rounded-lg hover:text-slate-50 hover:bg-slate-600 text-white"
                    : ""
                }`}
              >
                listings
              </li>
              </NavLink>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1  rounded-lg overflow-hidden lg:ml-4 pb-10">
          <div className="py-2 px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
