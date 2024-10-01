import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Listings = () => {
  const [userListings, setUserListings] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  const fetchListings = async () => {
    try {
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();

      if (!res.ok) {
        toast.error("Failed to fetch listings!");
        return;
      }

      setUserListings(data);
    } catch (error) {
      toast.error("An error occurred!");
    }
  };

const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
      toast.success("Listing deleted successfully!");

    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="flex flex-col gap-4 p-3 max-w-4xl mx-auto">
      <h1 className="text-center mt-7 text-2xl font-semibold">Your Listings</h1>

      {userListings.length > 0 ? (
        userListings.map((listing) => (
          <div
            key={listing._id}
            className="border rounded-lg p-3 flex justify-between items-center gap-4"
          >
            <Link to={`/listing/${listing._id}`}>
              <img
                src={listing.imageUrls[0]}
                alt="listing cover"
                className="h-16 w-16 object-contain"
              />
            </Link>

            <Link
              className="text-slate-700 font-semibold hover:underline truncate flex-1"
              to={`/listing/${listing._id}`}
            >
              <p>{listing.name}</p>
            </Link>

            <div className="flex flex-col items-center">
              <button
                onClick={() => handleListingDelete(listing._id)}
                className="text-red-700 hover:underline uppercase mb-2"
              >
                Delete
              </button>
              <Link to={`/update-listing/${listing._id}`}>
                <button className="text-green-700 hover:underline uppercase">Edit</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No listings available.</p>
      )}
    </div>
  );
};

export default Listings;
