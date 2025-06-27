// src/layouts/DashboardLayout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f3f4f6]">
      {/* Sidebar */}
      <aside className="bg-primary text-secondary w-full lg:w-64 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4 text-base">
          {[
            { path: "/dashboard", label: "📊 Overview", end: true },
            { path: "/dashboard/allItems", label: "📁 All Items" },
            { path: "/dashboard/myItems", label: "😋 My Items" },
            { path: "/dashboard/addItem", label: "➕ Add Item" },
          ].map(({ path, label, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) =>
                isActive
                  ? "block font-semibold text-accent"
                  : "block hover:text-accent transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
