import Image from "next/image";
export default function MenuPage() {
  return (
    <header className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/dog.jpg)' }}>
    <div className="text-center text-white bg-gray-800 bg-opacity-50 p-8 rounded-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to Heartwarming Pets</h1>
      <p className="text-lg mb-8">Bringing joy and love to your furry friends with our premium pet care services.</p>
     
    </div>
  </header>
  );
}
