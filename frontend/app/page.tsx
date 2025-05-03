'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedStyle, setSelectedStyle] = useState('Cartoon');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // NEW
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Preview immediately
    }
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStyle(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('style', selectedStyle);

    try {
      const res = await fetch('http://127.0.0.1:8000/stylize/', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to stylize image');

      const blob = await res.blob();
      setOutputUrl(URL.createObjectURL(blob)); // Set artified image
    } catch (err) {
      console.error(err);
      alert('Something went wrong while uploading.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8 space-y-8">
      <h1 className="text-5xl font-bold text-center text-blue-800 tracking-wide">
        <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
          ArtifyME
        </span>
      </h1>
      <p className="text-lg text-center text-blue-700">
        Turn Your Photos into Fun – Cartoonize with a Click
      </p>

      <div className="w-full max-w-md p-8 bg-white rounded-2xl border-2 border-dashed border-blue-400 shadow-xl flex flex-col items-center space-y-6">
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-blue-50 transition relative overflow-hidden">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Selected Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-10 h-10 text-blue-500 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <p className="text-sm text-blue-700">Choose Image</p>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <select
          value={selectedStyle}
          onChange={handleStyleChange}
          className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-blue-700"
        >
          <option>Cartoon</option>
          <option>Black & White</option>
          <option>Oil Painting</option>
          <option>Pencil Sketch</option>
          <option>Stylized</option>
          <option>Sepia</option>
        </select>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Artify Image 🎨'}
        </button>
      </div>

      {outputUrl && (
  <div className="w-full max-w-md mt-8 flex flex-col items-center space-y-4">
    <h2 className="text-2xl font-semibold text-center text-blue-800 mb-2">Your Artified Image 🎨</h2>
    <img src={outputUrl} alt="Styled Output" className="rounded-xl shadow-2xl" />
    <a
      href={outputUrl}
      download="artified_image.png"
      className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
    >
      Download Image ⬇️
    </a>
  </div>
)}
      <footer className="mt-8 text-center text-blue-600">
        <p>© 2023 ArtifyME. All rights reserved.</p>
        <p>Made with ❤️</p>
      </footer>
    </div>
  );
}
