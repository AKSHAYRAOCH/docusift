"use client";

import { UploadDropzone } from "@/utils/uploadthing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <UploadDropzone
        endpoint="fileUploader"
        accept="image/*,.pdf" // Ensure this attribute allows both images and PDFs
        className="w-full max-w-lg h-64 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}



const BASE_URL = "https://utfs.io/f/"; 

export async function generateFileUrls(fileKeys: string[]): Promise<string[]> {
  const urls = fileKeys.map((key) => `${BASE_URL}${key}`);

  return urls;
}

