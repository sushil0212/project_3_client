/* import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/dashboard/data`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Log data received from the backend
        console.log("Data fetched:", response.data);

        setData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  // Include the specific counts (cvUploadCount, likeCount, etc.) in userActivities for the charts
  const userActivities = [
    { name: "CV Uploads", value: data.cvUploadCount },
    { name: "Likes", value: data.likeCount },
    { name: "Dislikes", value: data.dislikeCount },
    { name: "Comments", value: data.commentCount },
    ...data.userActivities.map(activity => ({
      name: activity._id,
      value: activity.count,
    })),
  ];

  // Log the processed data to verify
  console.log("Processed User Activities:", userActivities);

  // Define colors for the PieChart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>User Count</h3>
        <p>{data.userCount}</p>
      </div>
      <div>
        <h3>CV Uploads</h3>
        <p>{data.cvUploadCount}</p>
      </div>
      <div>
        <h3>Likes</h3>
        <p>{data.likeCount}</p>
      </div>
      <div>
        <h3>Dislikes</h3>
        <p>{data.dislikeCount}</p>
      </div>
      <div>
        <h3>Comments</h3>
        <p>{data.commentCount}</p>
      </div>

      {userActivities.length > 0 ? (
        <div>
          <h3>Activities Breakdown</h3>
          <PieChart
            width={400}
            height={400}>
            <Pie
              data={userActivities}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label>
              {userActivities.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      ) : (
        <p>No activity data available</p>
      )}

      {userActivities.length > 0 ? (
        <div>
          <h3>Activity Statistics</h3>
          <BarChart
            width={600}
            height={300}
            data={userActivities}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              fill="#8884d8">
              {userActivities.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      ) : (
        <p>No activity data available</p>
      )}
    </div>
  );
}

export default Dashboard;
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/dashboard/data`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Log data received from the backend
        console.log("Data fetched:", response.data);

        setData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!data) return <div className="text-center text-gray-600">Loading...</div>;

  // Include the specific counts (cvUploadCount, likeCount, etc.) in userActivities for the charts
  const userActivities = [
    { name: "CV Uploads", value: data.cvUploadCount },
    { name: "Likes", value: data.likeCount },
    { name: "Dislikes", value: data.dislikeCount },
    { name: "Comments", value: data.commentCount },
    ...data.userActivities.map(activity => ({
      name: activity._id,
      value: activity.count,
    })),
  ];

  // Log the processed data to verify
  console.log("Processed User Activities:", userActivities);

  // Define colors for the PieChart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">User Count</h3>
          <p className="text-2xl font-bold text-gray-900">{data.userCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">CV Uploads</h3>
          <p className="text-2xl font-bold text-gray-900">
            {data.cvUploadCount}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Likes</h3>
          <p className="text-2xl font-bold text-gray-900">{data.likeCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Dislikes</h3>
          <p className="text-2xl font-bold text-gray-900">
            {data.dislikeCount}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Comments</h3>
          <p className="text-2xl font-bold text-gray-900">
            {data.commentCount}
          </p>
        </div>
      </div>

      {userActivities.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Activities Breakdown
          </h3>
          <div className="flex justify-center">
            <PieChart
              width={400}
              height={400}>
              <Pie
                data={userActivities}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label>
                {userActivities.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No activity data available</p>
      )}

      {userActivities.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Activity Statistics
          </h3>
          <div className="flex justify-center">
            <BarChart
              width={600}
              height={300}
              data={userActivities}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
                fill="#8884d8">
                {userActivities.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No activity data available</p>
      )}
    </div>
  );
}

export default Dashboard;
