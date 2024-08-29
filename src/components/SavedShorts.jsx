import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

function SavedShorts() {
  const [savedShorts, setSavedShorts] = useState([]);
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchSavedShorts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/saved-shorts`,
          {
            params: { userId: user._id },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSavedShorts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSavedShorts();
  }, [user._id, token]);

  const handleRemoveShort = async shortId => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/saved-shorts/remove/${shortId}`,
        {
          data: { userId: user._id },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSavedShorts(savedShorts.filter(short => short._id !== shortId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Saved Shorts</h1>
      </header>

      <main className="space-y-8">
        {savedShorts.length > 0 ? (
          savedShorts.map(short => (
            <div
              key={short._id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row md:space-x-6">
              <div className="w-full">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">
                  Job Description
                </h1>
                {short.shortVideoUrl && (
                  <>
                    <p className="text-gray-600">Listen to this description:</p>
                    <audio
                      src={short.shortVideoUrl}
                      controls
                      className="w-full mt-2"
                    />
                  </>
                )}
                <div className="mt-4">
                  <h2 className="font-medium text-gray-700">Position:</h2>
                  <p className="text-gray-600">{short.position}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Salary:</h2>
                  <p className="text-gray-600">{short.salary}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Working Days:</h2>
                  <p className="text-gray-600">{short.workingDays}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Qualification:</h2>
                  <p className="text-gray-600">{short.qualification}</p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleRemoveShort(short._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No saved shorts found.</p>
        )}
      </main>
    </div>
  );
}

export default SavedShorts;
