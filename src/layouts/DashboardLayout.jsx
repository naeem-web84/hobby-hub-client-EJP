import React from 'react';
import { NavLink, Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-primary text-secondary w-full lg:w-64 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "block font-semibold text-accent"
                : "block hover:text-accent transition"
            }
            end
          >
            📊 Overview
          </NavLink>
          <NavLink
            to="/dashboard/allItems"
            className={({ isActive }) =>
              isActive
                ? "block font-semibold text-accent"
                : "block hover:text-accent transition"
            }
          >
            📁 All Items
          </NavLink>
          <NavLink
            to="/dashboard/myItems"
            className={({ isActive }) =>
              isActive
                ? "block font-semibold text-accent"
                : "block hover:text-accent transition"
            }
          >
            😋 My Items
          </NavLink>
          <NavLink
            to="/dashboard/addItem"
            className={({ isActive }) =>
              isActive
                ? "block font-semibold text-accent"
                : "block hover:text-accent transition"
            }
          >
            ➕ Add Item
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block font-semibold text-accent"
                : "block hover:text-accent transition"
            }
          >
            Home
          </NavLink>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 bg-secondary text-primary p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;