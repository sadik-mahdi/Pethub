
import React from 'react';

const DashBoardPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black tracking-tight">Welcome to your Dashboard!</h1>
      <p className="text-slate-400 text-base max-w-xl">
        Select an option from the menu tab on the left side panel to manage your active pet requests, listings, and profile information.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
        <div className="p-6 bg-gray-800/50 border border-white/5 rounded-2xl">
          <h3 className="text-sm font-semibold text-slate-400">Overview</h3>
          <p className="text-2xl font-bold mt-2">Active Sessions</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;