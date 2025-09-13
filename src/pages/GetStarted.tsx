// src/pages/GetStarted.tsx
import { useState } from "react";

const GetStarted = () => {
  const [form, setForm] = useState({ name: "", email: "", school: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#111116] text-[#C7C7C9] flex flex-col">
      {/* HEADER */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-[#E75C60]">
          Studious Owl
        </h1>
        <a
          href="/"
          className="text-sm hover:text-[#E75C60] transition-colors duration-200"
        >
          ← Back to Home
        </a>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-lg w-full bg-gradient-to-br from-[#2F2E33] to-[#313037] rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
          {!submitted ? (
            <>
              <h2 className="text-3xl font-extrabold mb-2 text-center">
                Get Started
              </h2>
              <p className="text-center opacity-80 mb-8">
                Sign up for your free trial and start managing your school with
                confidence.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-[#111116] border border-[#313037] focus:border-[#E75C60] focus:ring focus:ring-[#E75C60]/20 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-[#111116] border border-[#313037] focus:border-[#E75C60] focus:ring focus:ring-[#E75C60]/20 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    School Name
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={form.school}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-[#111116] border border-[#313037] focus:border-[#E75C60] focus:ring focus:ring-[#E75C60]/20 outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 rounded-md bg-[#E75C60] text-[#111116] font-semibold hover:scale-[1.02] hover:shadow-lg transition-transform duration-200"
                >
                  Start Free Trial
                </button>
              </form>
            </>
          ) : (
            <div className="text-center animate-fadeIn">
              <h2 className="text-3xl font-extrabold mb-4 text-[#E75C60]">
                🎉 You’re all set!
              </h2>
              <p className="opacity-80 mb-6">
                Thank you for signing up, {form.name || "friend"}! <br />
                Check your inbox at <strong>{form.email}</strong> for next steps.
              </p>
              <a
                href="/"
                className="inline-block px-6 py-2 rounded-md bg-[#313037] hover:bg-[#2F2E33] transition-colors duration-200"
              >
                Back to Home
              </a>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#2F2E33] py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Studious Owl. All rights reserved.
      </footer>
    </div>
  );
};

export default GetStarted;
