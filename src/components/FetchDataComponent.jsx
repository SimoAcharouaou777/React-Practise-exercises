import { findByLabelText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

const FetchDateComponent = () => {

    const [data , setData] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok){
                throw new Error(" network response was not ok");
            }
            const result = await response.json();
            setData(result)
        }catch(error){
            setError("failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRefresh = () => {
        fetchData();
    };

    return (
        <div className="container">
          <h1 className="text-center text-2xl font-bold mb-4">Fetch and Display Data</h1>
    
          {/* Show loading state */}
          {loading && <p>Loading...</p>}
    
          {/* Show error message if any */}
          {error && <p className="text-red-500">{error}</p>}
    
          {/* Show data when available */}
          {!loading && !error && (
            <ul>
              {data.map(item => (
                <li key={item.id} className="p-2 border-b">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          )}
    
          {/* Refresh button */}
          <button
            onClick={handleRefresh}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Refresh Data
          </button>
        </div>
      );
}


export default FetchDateComponent;