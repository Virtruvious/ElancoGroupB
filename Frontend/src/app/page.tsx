import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white w-full text-black">text</div>
    </main>
  );
}
