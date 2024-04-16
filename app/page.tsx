import Image from "next/image";
import Survey from "./components/survey";
import { Quicksand } from 'next/font/google'
import { Suspense } from "react";
 
// If loading a variable font, you don't need to specify the font weight
const font = Quicksand({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 tracking-wider">
      <div className={font.className + ' max-w-screen-md'}>
        <Suspense>
          <Survey />
        </Suspense>
      </div>
    </main>
  );
}
