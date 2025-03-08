"use client";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      Upload button goes here
    </main>
  );
}



const BASE_URL = "https://utfs.io/f/"; 

export async function generateFileUrls(fileKeys: string[]): Promise<string[]> {
  const urls = fileKeys.map((key) => `${BASE_URL}${key}`);

  return urls;
}

