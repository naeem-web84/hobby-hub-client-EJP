import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../components/GroupCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiFilter } from "react-icons/fi";

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

const AllGroups = () => {
  const allGroups = useLoaderData();
  const [filteredGroups, setFilteredGroups] = useState(allGroups || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    let groups = [...allGroups];

    if (selectedCategory) {
      groups = groups.filter(
        (g) => g.hobbyCategory.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      groups = groups.filter((g) => g.groupName.toLowerCase().includes(term));
    }

    groups.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredGroups(groups);
  }, [allGroups, selectedCategory, searchTerm, sortOrder]);

  const handleFilterAction = (callback) => {
    callback();
    if (window.innerWidth < 1024) setShowDashboard(false);
  };

  return (
    <div className="min-h-screen bg-secondary text-primary flex flex-col lg:flex-row">
      {/* Mobile Toggle Button */}
      <div className="p-4 flex justify-end lg:hidden">
        <button
          onClick={() => setShowDashboard(!showDashboard)}
          className="flex items-center gap-2 bg-accent text-primary font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary hover:text-accent transition"
        >
          <FiFilter className="text-lg" />
          {showDashboard ? "Hide Filters" : "Dashboard"}
        </button>
      </div>

      {/* Sidebar */}
      {(showDashboard || window.innerWidth >= 1024) && (
        <aside className="w-full lg:w-72 xl:w-80 bg-primary text-secondary p-6 border-r border-accent flex flex-col gap-8 lg:min-h-screen lg:sticky lg:top-0 lg:overflow-y-auto">
          <h2 className="text-xl font-bold mb-2 border-b border-accent pb-2">
            Filters & Sorting
          </h2>

          {/* Search */}
          <div>
            <label htmlFor="search" className="block mb-2 font-semibold text-accent">
              Search by Group Name
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search groups..."
              value={searchTerm}
              onChange={(e) => handleFilterAction(() => setSearchTerm(e.target.value))}
              className="w-full rounded-xl px-3 py-2 text-primary border border-accent focus:outline-none focus:ring-2 focus:ring-accent bg-secondary placeholder-accent"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block mb-2 font-semibold text-accent">
              Filter by Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleFilterAction(() => setSelectedCategory(e.target.value))}
              className="w-full rounded-xl px-3 py-2 text-primary border border-accent focus:outline-none focus:ring-2 focus:ring-accent bg-secondary"
            >
              <option value="">All Categories</option>
              {hobbyCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block mb-2 font-semibold text-accent">Sort by Start Date</label>
            <div className="flex gap-4">
              <button
                onClick={() => handleFilterAction(() => setSortOrder("asc"))}
                className={`flex-1 rounded-xl px-4 py-2 font-semibold transition ${
                  sortOrder === "asc"
                    ? "bg-accent text-primary"
                    : "bg-secondary text-primary border border-accent hover:bg-accent hover:text-primary"
                }`}
              >
                Ascending
              </button>
              <button
                onClick={() => handleFilterAction(() => setSortOrder("desc"))}
                className={`flex-1 rounded-xl px-4 py-2 font-semibold transition ${
                  sortOrder === "desc"
                    ? "bg-accent text-primary"
                    : "bg-secondary text-primary border border-accent hover:bg-accent hover:text-primary"
                }`}
              >
                Descending
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-3xl font-bold mb-8 text-accent">
          All Hobby Groups ({filteredGroups.length})
        </h1>

        {filteredGroups.length === 0 ? (
          <p className="text-primary/70 text-lg">No groups found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredGroups.map((group, i) => (
              <GroupCard key={group._id} singleGroup={group} index={i} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllGroups;
