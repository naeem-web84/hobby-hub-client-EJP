import React, { useContext } from "react";
import Swal from "sweetalert2"; 
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const AddItems = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const hobbyCategories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const groupData = Object.fromEntries(formData.entries());

    groupData.userEmail = user?.email;
    groupData.userName = user?.displayName || "Anonymous";

    fetch("https://hobby-hub-server-theta.vercel.app/hobby", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "New Group Added",
            text: "Your hobby group has been successfully created!",
            confirmButtonColor: "#2EA44F",
          });
          navigate("/myGroups");
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while adding the group!",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-base-100">
      <div className="w-full max-w-4xl bg-primary border border-accent rounded-2xl shadow-2xl p-6 md:p-10">
        <h2 className="text-3xl font-bold text-accent text-center mb-8">
          Create a New Hobby Group
        </h2>

        <form
          onSubmit={handleCreateGroup}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="groupName"
            placeholder="Group Name"
            required
            className="input bg-secondary text-black placeholder:text-black border border-accent w-full rounded-xl shadow-sm"
          />

          <select
            name="hobbyCategory"
            required
            className="select bg-secondary text-black placeholder:text-black border border-accent w-full rounded-xl shadow-sm"
          >
            <option value="">Select Category</option>
            {hobbyCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            name="location"
            placeholder="Meeting Location"
            required
            className="input bg-secondary text-black placeholder:text-black border border-accent w-full rounded-xl shadow-sm"
          />

          <input
            name="maxMembers"
            type="number"
            placeholder="Max Members"
            min={1}
            required
            className="input bg-secondary text-black placeholder:text-black border border-accent w-full rounded-xl shadow-sm"
          />

          <input
            name="startDate"
            type="date"
            required
            className="input bg-secondary text-black placeholder:text-black border border-accent w-full rounded-xl shadow-sm"
          />

          <input
            name="imageUrl"
            placeholder="Image URL"
            required
            className="input bg-secondary text-black placeholder:text-black border border-accent w-full rounded-xl shadow-sm"
          />

          <textarea
            name="description"
            placeholder="Description"
            required
            rows={4}
            className="textarea bg-secondary text-black placeholder:text-black border border-accent w-full md:col-span-2 resize-none rounded-xl shadow-sm"
          />

          {/* Hidden Auth Fields */}
          <input name="userName" value={user?.displayName || ""} readOnly hidden />
          <input name="userEmail" value={user?.email || ""} readOnly hidden />

          <button
            type="submit"
            className="btn bg-accent text-primary font-semibold md:col-span-2 hover:bg-accent/80 transition rounded-xl"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
