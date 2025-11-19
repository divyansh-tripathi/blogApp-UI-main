import { useState } from "react";
import { BookOpen, Menu, X, LogOut, User, LayoutDashboard } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { AuthModal } from "./AuthModal";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const { user, logout } = useAuth();

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">BlogApp</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link
                className="text-slate-300 hover:text-white transition-colors"
                to="/"
              >
                Home
              </Link>

              <Link
                className="text-slate-300 hover:text-white transition-colors"
                to="/blogs"
              >
                Blogs
              </Link>

              <Link
                className="text-slate-300 hover:text-white transition-colors"
                to="/"
              >
                Categories
              </Link>

              <Link
                className="text-slate-300 hover:text-white transition-colors"
                to="/about"
              >
                About
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2 bg-slate-800 rounded-lg">
                    <User size={18} className="text-blue-400" />
                    <span className="text-white text-sm">{user.name}</span>
                    {user.role === "admin" && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                        Admin
                      </span>
                    )}
                  </div>
                  <button className="group px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                    <Link to="/admin">Create blog</Link>
                  </button>

                  {user.role === "admin" && (
                    <button className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors">
                      <LayoutDashboard size={20} />
                    </button>
                  )}

                  <button
                    onClick={logout}
                    className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    <LogOut size={20} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => openAuthModal("login")}
                    className="px-6 py-2 text-white hover:text-blue-400 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => openAuthModal("signup")}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <Link
                className="block text-slate-300 hover:text-white transition-colors"
                to="/"
              >
                Home
              </Link>

              <Link
                className="block text-slate-300 hover:text-white transition-colors"
                to="/blogs"
              >
                Blogs
              </Link>

              <Link
                className="block text-slate-300 hover:text-white transition-colors"
                to="/"
              >
                Categories
              </Link>

              <Link
                className="block text-slate-300 hover:text-white transition-colors"
                to="/about"
              >
                About
              </Link>

              {user ? (
                <div className="space-y-2 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-white">
                    <User size={18} />
                    <span>{user.name}</span>
                    {user.role === "admin" && (
                      <span className="px-2 py-1 bg-blue-600 text-xs rounded-full">
                        Admin
                      </span>
                    )}
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 flex items-center gap-2 justify-center hover:to-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                    <Link to="/admin">Create blog</Link>
                  </button>
                  <button
                    onClick={logout}
                    className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2 justify-center"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2 pt-4 border-t border-slate-700">
                  <button
                    onClick={() => openAuthModal("login")}
                    className="w-full px-4 py-2 text-white border border-slate-700 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => openAuthModal("signup")}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};
