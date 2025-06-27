import React, { useContext, useEffect, useState } from 'react'; 
import { AuthContext } from '../contexts/AuthContext';
import Profile from './Dashboard/Profile';

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [allItemsCount, setAllItemsCount] = useState(0);
  const [myItemsCount, setMyItemsCount] = useState(0);

  useEffect(() => {
    fetch("https://hobby-hub-server-theta.vercel.app/hobby")
      .then(res => res.json())
      .then(data => {
        setAllItemsCount(data.length);
        const myItems = data.filter(item => item.userEmail === user?.email);
        setMyItemsCount(myItems.length);
      });
  }, [user]);

  return (
    <div>
        <div>
            <Profile></Profile>
        </div>
      <h2 className="text-2xl font-bold mb-4">👋 Welcome, {user?.displayName || 'User'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-primary text-secondary p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Items</h3>
          <p className="text-3xl font-bold mt-2">{allItemsCount}</p>
        </div>
        <div className="bg-primary text-secondary p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">My Items</h3>
          <p className="text-3xl font-bold mt-2">{myItemsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;