import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('Modern');
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl max-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-xl sm:text-2xl md:ml-10 ml-1 flex gap-1 flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-blue-400">Estate</span>
          </h1>
        </Link>
        <form
  onSubmit={handelSubmit}
  className="flex items-center bg-slate-50 p-3 border-[1px] border-blue-400 rounded-lg hidden md:flex"
>
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search..."
    className="bg-transparent focus:outline-none w-24 sm:w-64"
  />
  <button className="cursor-pointer">
    <FaSearch className="text-slate-500" />
  </button>
</form>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className=" sm:inline hover:text-blue-400 text-slate-700 hover:underline">
              Home
            </li>
          </Link>

          <Link to={"/search"}>
            <li className=" sm:inline hover:text-blue-400 text-slate-700 hover:underline">
              Listing
            </li>
          </Link>

          <Link to="/about">
            <li className=" text-slate-700 hover:text-blue-400 hover:underline">About</li>
          </Link>
          {currentUser ? (
            <Link to={"/profile"}>
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <Link to="/sign-in">
              <li className=" text-slate-700 hover:text-blue-400 hover:underline"> Sign in</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
