import { useState } from "react";
import { Upload, Link as LinkIcon, X } from "lucide-react";

export function Documents() {
    const [uploadMethod, setUploadMethod] = useState<"file" | "url">("file");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [url, setUrl] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUrlSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle URL submission here
        console.log("URL submitted:", url);
    };

    const clearFile = () => {
        setSelectedFile(null);
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Document</h2>

            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-8">
                <button
                    onClick={() => setUploadMethod("file")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${uploadMethod === "file"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    <Upload size={20} />
                    File Upload
                </button>
                <button
                    onClick={() => setUploadMethod("url")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${uploadMethod === "url"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    <LinkIcon size={20} />
                    URL
                </button>
            </div>

            {/* File Upload Section */}
            {uploadMethod === "file" && (
                <div className="space-y-4">
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors duration-300"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            const file = e.dataTransfer.files?.[0];
                            if (file) setSelectedFile(file);
                        }}
                    >
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.txt"
                        />
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer flex flex-col items-center gap-3"
                        >
                            <Upload className="w-12 h-12 text-gray-400" />
                            <div className="text-gray-600">
                                <span className="text-blue-600 font-semibold">
                                    Click to upload
                                </span>{" "}
                                or drag and drop
                            </div>
                            <p className="text-sm text-gray-500">
                                PDF, DOC, DOCX, TXT (max 10MB)
                            </p>
                        </label>
                    </div>

                    {/* Selected File Display */}
                    {selectedFile && (
                        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Upload className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">
                                        {selectedFile.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={clearFile}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* URL Input Section */}
            {uploadMethod === "url" && (
                <form onSubmit={handleUrlSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter document URL"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                        />
                        <LinkIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Upload from URL
                    </button>
                </form>
            )}
        </div>
    );
}
