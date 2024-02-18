"use client";
import Sidebar from '../../components/sidebar';
import MyComponent from '../../components/MyComponent';


const Home: React.FC = () => {
  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar className="order-1" />
      <div className="container mx-auto flex-none order-2">
        <div className="w-max m-auto pt-6 pb-6">
          <h1>WELCOME</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-around w-full">
          <MyComponent />
        </div>
      </div>
    </main>
  );
};

export default Home;
