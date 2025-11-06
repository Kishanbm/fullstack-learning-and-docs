import React from "react";

type UserCardProps = {
  name: string;
  role?: string;
  stats: {
    activeUsers: number;
    revenue: number;
  };
};

export default function UserCard({ name, role, stats }: UserCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      {role && <p className="text-sm text-gray-500">{role}</p>}
      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p>Active Users: <span className="font-medium text-gray-800">{stats.activeUsers}</span></p>
        <p>Revenue: <span className="font-medium text-gray-800">₹{stats.revenue}</span></p>
      </div>
    </div>
  );
}
