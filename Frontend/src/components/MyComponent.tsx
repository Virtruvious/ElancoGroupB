// MyComponent.tsx
import { useState, useEffect } from 'react';

const MyComponent: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/columns');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setColumns(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Column Names</h1>
      <ul>
        {columns.map((column, index) => (
          <li key={index}>{column}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
