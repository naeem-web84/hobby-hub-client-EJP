import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

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

const AllItems = () => {
  const allItems = useLoaderData();
  const navigate = useNavigate();

  const [filteredItems, setFilteredItems] = useState(allItems || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    let items = [...allItems];

    if (selectedCategory) {
      items = items.filter(
        (item) =>
          item.hobbyCategory.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      items = items.filter((item) =>
        item.groupName.toLowerCase().includes(term)
      );
    }

    items.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredItems(items);
  }, [allItems, selectedCategory, searchTerm, sortOrder]);

  const handleViewDetails = (id) => {
    navigate(`/groupDetails/${id}`);
  };

  return (
    <div className="min-h-screen bg-secondary text-primary px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-accent">
        All Items ({filteredItems.length})
      </h1>

      {/* Controls: Search + Category + Sorting buttons */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <input
          type="text"
          placeholder="Search by group name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-xl px-4 py-2 border border-accent bg-secondary text-primary placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-xl px-4 py-2 border border-accent bg-secondary text-primary focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">All Categories</option>
          {hobbyCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-4">
          <span className="font-medium">Sort:</span>
          <button
            onClick={() => setSortOrder("asc")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              sortOrder === "asc"
                ? "bg-accent text-primary"
                : "bg-secondary border border-accent hover:bg-accent hover:text-primary"
            }`}
          >
            Ascending
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              sortOrder === "desc"
                ? "bg-accent text-primary"
                : "bg-secondary border border-accent hover:bg-accent hover:text-primary"
            }`}
          >
            Descending
          </button>
        </div>
      </div>

      {/* Table with filtered data */}
      {filteredItems.length === 0 ? (
        <p className="text-primary/70 text-lg">No items found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-accent shadow-sm">
          <table className="min-w-full divide-y divide-accent bg-primary text-secondary">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Group Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent">
              {filteredItems.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-accent/20 cursor-pointer"
                >
                  <td className="px-6 py-4">{item.groupName}</td>
                  <td className="px-6 py-4">{item.hobbyCategory}</td>
                  <td className="px-6 py-4">
                    {new Date(item.startDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">{item.location}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewDetails(item._id)}
                      className="bg-secondary border border-accent text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-accent hover:text-primary transition"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllItems;
