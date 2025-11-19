import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, User, UserWithPassword } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('blogapp_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const users: UserWithPassword[] = JSON.parse(localStorage.getItem('blogapp_users') || '[]');

      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error('Invalid credentials');
      }

      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('blogapp_user', JSON.stringify(userWithoutPassword));
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      const users: UserWithPassword[] = JSON.parse(localStorage.getItem('blogapp_users') || '[]');

      if (users.find((u) => u.email === email)) {
        throw new Error('User already exists');
      }

      const newUser: UserWithPassword = {
        id: Date.now().toString(),
        email,
        password,
        name,
        role: users.length === 0 ? "admin" : "user",
      };

      users.push(newUser);
      localStorage.setItem('blogapp_users', JSON.stringify(users));

      const { password: _, ...userWithoutPassword } = newUser;

      setUser(userWithoutPassword);
      localStorage.setItem('blogapp_user', JSON.stringify(userWithoutPassword));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('blogapp_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
