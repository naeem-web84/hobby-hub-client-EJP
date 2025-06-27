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
          confirmButtonColor: '#2EA44F',
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
    <div className="min-h-screen flex items-center justify-center px-4 pb-10">
      <div
        className="w-full max-w-4xl bg-secondary text-black border border-accent rounded-2xl shadow-2xl p-6 md:p-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-accent text-center mb-8">
          Update Hobby Group
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="groupName"
            value={groupData.groupName}
            onChange={handleChange}
            placeholder="Group Name"
            required
            className="input bg-secondary text-black border border-accent placeholder-accent w-full rounded-xl shadow-sm"
          />

          <select
            name="hobbyCategory"
            value={groupData.hobbyCategory}
            onChange={handleChange}
            required
            className="select bg-secondary text-black border border-accent w-full rounded-xl shadow-sm"
          >
            <option value="">Select Category</option>
            {hobbyCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <input
            name="location"
            value={groupData.location}
            onChange={handleChange}
            placeholder="Meeting Location"
            required
            className="input bg-secondary text-black border border-accent placeholder-accent w-full rounded-xl shadow-sm"
          />

          <input
            name="maxMembers"
            type="number"
            value={groupData.maxMembers}
            onChange={handleChange}
            placeholder="Max Members"
            min={1}
            required
            className="input bg-secondary text-black border border-accent placeholder-accent w-full rounded-xl shadow-sm"
          />

          <input
            name="startDate"
            type="date"
            value={groupData.startDate}
            onChange={handleChange}
            required
            className="input bg-secondary text-black border border-accent w-full rounded-xl shadow-sm"
          />

          <input
            name="imageUrl"
            value={groupData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="input bg-secondary text-black border border-accent placeholder-accent w-full rounded-xl shadow-sm"
          />

          <textarea
            name="description"
            value={groupData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            rows={4}
            className="textarea bg-secondary text-black border border-accent placeholder-accent w-full md:col-span-2 resize-none rounded-xl shadow-sm"
          />

          <input name="userName" value={groupData.userName} readOnly hidden />
          <input name="userEmail" value={groupData.userEmail} readOnly hidden />

          <button
            type="submit"
            className="btn bg-accent text-primary font-semibold md:col-span-2 hover:bg-accent/80 transition rounded-xl"
          >
            Update Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroups;
