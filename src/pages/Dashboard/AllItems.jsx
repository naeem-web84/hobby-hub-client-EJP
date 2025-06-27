import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router"; 
import AOS from "aos";
import "aos/dist/aos.css";
import GroupCard from "../../components/GroupCard";

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
  const allItems = useLoaderData(); // Comes from loader or fetch
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

  return (
    <div className="min-h-screen bg-secondary text-primary px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-accent">All Items ({filteredItems.length})</h1>

      {/* Controls */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by group name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-xl px-4 py-2 border border-accent bg-secondary text-primary placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
        />

        {/* Category Filter */}
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

        {/* Sorting */}
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

      {/* Item Cards */}
      {filteredItems.length === 0 ? (
        <p className="text-primary/70 text-lg">No items found.</p>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {filteredItems.map((item, i) => (
            <GroupCard key={item._id} singleGroup={item} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllItems;
