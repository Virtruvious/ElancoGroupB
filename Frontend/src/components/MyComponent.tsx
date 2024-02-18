// MyComponent.tsx
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:8000/api';
const fetchURL = `${baseURL}/columns`;
const MyComponent: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setColumns(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('Error fetching data' + " " + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Column Names</h1>
      {error && <p>{error}</p>}
      <ul>
        {columns.map((column, index) => (
          <li key={index}>{column}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
