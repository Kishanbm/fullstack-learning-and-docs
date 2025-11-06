import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">User Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <UserCard
          name="A"
          role="Frontend Developer"
          stats={{ activeUsers: 120, revenue: 14500 }}
        />
        <UserCard
          name="B"
          role="Backend Developer"
          stats={{ activeUsers: 98, revenue: 10200 }}
        />
        <UserCard
          name="C"
          stats={{ activeUsers: 156, revenue: 18500 }}
        />
      </div>
    </main>
  );
}
