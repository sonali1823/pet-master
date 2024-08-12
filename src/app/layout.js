
import Link from 'next/link';
import './globals.css'; // Import your global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/menu"
              className="hover:bg-blue-700 p-2 rounded">Menu
              </Link>
            </li>
            <li>
              <Link href="/aboutus"
               className="hover:bg-blue-700 p-2 rounded">About Us
              </Link>
            </li>
            <li>
              <Link href="/contactus"
                className="hover:bg-blue-700 p-2 rounded">Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
