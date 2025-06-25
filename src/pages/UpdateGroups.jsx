import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

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

const UpdateGroups = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [groupData, setGroupData] = useState({
    groupName: '',
    hobbyCategory: '',
    description: '',
    location: '',
    maxMembers: '',
    startDate: '',
    imageUrl: '',
    userEmail: '',
    userName: '',
  });

  useEffect(() => {
    fetch(`https://hobby-hub-server-theta.vercel.app/allGroups/${id}`)
      .then(res => res.json())
      .then(data => {
        setGroupData({
          groupName: data.groupName || '',
          hobbyCategory: data.hobbyCategory || '',
          description: data.description || '',
          location: data.location || '',
          maxMembers: data.maxMembers || '',
          startDate: data.startDate ? data.startDate.slice(0, 10) : '',
          imageUrl: data.imageUrl || '',
          userEmail: data.userEmail || user?.email || '',
          userName: data.userName || user?.displayName || '',
        });
      })
      .catch(err => {
        console.error(err);
        Swal.fire("Error", "Failed to fetch group data.", "error");
      });
  }, [id, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://hobby-hub-server-theta.vercel.app/hobby/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(groupData),
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          title: 'Group Updated!',
          text: 'Your hobby group has been successfully updated.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Back to My Groups'
        }).then(result => {
          if (result.isConfirmed) {
            navigate('/myGroups');
          }
        });
      })
      .catch(err => {
        console.error(err);
        Swal.fire("Error", "Something went wrong during update.", "error");
      });
  };

  return (
    <div className="bg-[#F0F8FF] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-[#3A5BA0] mb-8">
          Update Hobby Group
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="groupName"
            placeholder="Group Name"
            value={groupData.groupName}
            onChange={handleChange}
            required
            className="input w-full"
          />

          <select
            name="hobbyCategory"
            value={groupData.hobbyCategory}
            onChange={handleChange}
            required
            className="input w-full"
          >
            <option value="">Select Category</option>
            {hobbyCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Description"
            value={groupData.description}
            onChange={handleChange}
            required
            className="textarea w-full"
          />

          <input
            name="location"
            placeholder="Meeting Location"
            value={groupData.location}
            onChange={handleChange}
            required
            className="input w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="maxMembers"
              type="number"
              placeholder="Max Members"
              value={groupData.maxMembers}
              onChange={handleChange}
              required
              className="input w-full"
              min={1}
            />
            <input
              name="startDate"
              type="date"
              value={groupData.startDate}
              onChange={handleChange}
              required
              className="input w-full"
            />
          </div>

          <input
            name="imageUrl"
            placeholder="Image URL"
            value={groupData.imageUrl}
            onChange={handleChange}
            required
            className="input w-full"
          />

          <input name="userName" value={groupData.userName} readOnly hidden />
          <input name="userEmail" value={groupData.userEmail} readOnly hidden />

          <button type="submit" className="btn btn-primary w-full">
            Update Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroups;
