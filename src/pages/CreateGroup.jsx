import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const CreateGroup = () => {
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
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "New Group Added",
            text: "Your hobby group has been successfully created!",
            confirmButtonColor: "#3A5BA0",
          });
        }

        navigate("/myGroups");
      })
      .catch((error) => {
        console.error("Error adding group:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while adding the group!",
        });
      });
  };

  return (
    <div className="bg-[#F0F8FF] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-[#3A5BA0] mb-8">
          Create a New Hobby Group
        </h2>

        <form onSubmit={handleCreateGroup} className="space-y-6">
          {/* Group Name */}
          <input name="groupName" placeholder="Group Name" required className="input w-full" />

          {/* Category */}
          <select name="hobbyCategory" required className="input w-full">
            <option value="">Select Category</option>
            {hobbyCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Description */}
          <textarea name="description" placeholder="Description" required className="textarea w-full" />

          {/* Location */}
          <input name="location" placeholder="Meeting Location" required className="input w-full" />

          {/* Max Members & Start Date */}
          <div className="grid grid-cols-2 gap-4">
            <input name="maxMembers" type="number" placeholder="Max Members" required className="input w-full" />
            <input name="startDate" type="date" required className="input w-full" />
          </div>

          {/* Image */}
          <input name="imageUrl" placeholder="Image URL" required className="input w-full" />

          {/* Hidden inputs (not editable) */}
          <input name="userName" value={user?.displayName || ""} readOnly hidden />
          <input name="userEmail" value={user?.email || ""} readOnly hidden />

          <button type="submit" className="btn btn-primary w-full">Create Group</button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
