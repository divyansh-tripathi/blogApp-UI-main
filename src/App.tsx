import { AuthProvider } from "./contexts/AuthContext";
import { useBlogs } from "./hooks/useBlogs";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BlogsSection } from "./components/BlogsSection";
import { AdminDashboard } from "./components/AdminDashboard";
import { Footer } from "./components/Footer";
import { useAuth } from "./contexts/AuthContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { About } from "./components/About";

// import {  } from 'lucide-react';

function AppContent() {
  const { user } = useAuth();
  const { blogs, isLoading, addBlog, updateBlog, deleteBlog } = useBlogs();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      {/* <Hero />
      <BlogsSection blogs={blogs} /> */}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blogs" element={<BlogsSection blogs={blogs} />} />

        {user?.role === "admin" && (
          <Route
            path="/admin"
            element={
              <AdminDashboard
                blogs={blogs}
                onAddBlog={addBlog}
                onUpdateBlog={updateBlog}
                onDeleteBlog={deleteBlog}
              />
            }
          />
        )}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
