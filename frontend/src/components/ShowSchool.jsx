import { useState, useEffect } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/schools")
      .then((res) => res.json())
      .then((data) => {
        setSchools(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch schools:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-10">Loading schools...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        Schools Directory
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {schools.map((school) => (
          <div
            key={school.id}
            className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition duration-300"
          >
            <img
              src={school.image_url || "https://via.placeholder.com/300x200"}
              alt={school.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg text-gray-900">{school.name}</h2>
              <p className="text-gray-600 text-sm">
                {school.address}, {school.city}
              </p>
              <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:scale-[1.02] transform transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
