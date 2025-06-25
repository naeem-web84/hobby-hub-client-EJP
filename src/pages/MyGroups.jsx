import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyGroups = () => {
  const [groups, setGroups] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hobby-hub-server-theta.vercel.app/hobby?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setGroups(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-hub-server-theta.vercel.app/hobby/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your group has been removed.", "success");
              setGroups(prev => prev.filter(group => group._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="px-4 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white/80 rounded-3xl shadow-2xl backdrop-blur-lg p-6 md:p-10">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
          My Hobby Groups
        </h2>

        {groups.length > 0 ? (
          <div className="overflow-x-auto animate-fade-in-up">
            <table className="min-w-full table-auto border-collapse md:border-separate md:border-spacing-0">
              <thead className="hidden md:table-header-group">
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 text-left">No</th>
                  <th className="px-6 py-4 text-left">Group Name</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <tr
                    key={group._id}
                    className="border-b border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 md:table-row block md:table-row"
                  >
                    <td
                      className="px-6 py-4 text-gray-500 font-semibold md:table-cell block relative md:static"
                      data-label="#"
                    >
                      <span className="md:hidden font-bold">#:</span> {index + 1}
                    </td>
                    <td
                      className="px-6 py-4 text-indigo-700 font-medium md:table-cell block relative md:static"
                      data-label="Group Name"
                    >
                      <span className="md:hidden font-bold">Group Name:</span> {group.groupName}
                    </td>
                    <td
                      className="px-6 py-4 text-purple-600 md:table-cell block relative md:static"
                      data-label="Category"
                    >
                      <span className="md:hidden font-bold">Category:</span> {group.hobbyCategory}
                    </td>
                    <td
                      className="px-6 py-4 text-pink-600 md:table-cell block relative md:static"
                      data-label="Location"
                    >
                      <span className="md:hidden font-bold">Location:</span> {group.location}
                    </td>
                    <td
                      className="px-6 py-4 md:table-cell block relative md:static"
                      data-label="Actions"
                    >
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow hover:bg-blue-600 transition cursor-pointer"
                          onClick={() => navigate(`/updateGroup/${group._id}`)}
                        >
                          Update
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow hover:bg-red-600 transition cursor-pointer"
                          onClick={() => handleDelete(group._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-6">
            You haven’t created any groups yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
