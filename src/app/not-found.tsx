"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-black">
          <div className="text-center">
            <h1 className="mb-4 bg-red-400 p-3 rounded-md text-white">
              SOMETHING WENT WRONG
            </h1>
            <h1 className="bg-green-400 p-3 rounded-md text-white">
              {/* GO BACK TO <Link href={"/en"}>ORTHOLINE.MK</Link> */}
            </h1>
          </div>
        </main>
      </body>
    </html>
  );
}
