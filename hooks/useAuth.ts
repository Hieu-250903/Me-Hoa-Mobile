import { useState, useContext, createContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Định nghĩa kiểu dữ liệu cho user và các hàm
interface AuthState {
  user: { id: string; email: string } | null; // Kiểu cụ thể cho user
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);

  // Hàm giả lập login (không cần API)
  const login = async (email: string, password: string) => {
    // Kiểm tra email và password giả lập (ví dụ: email: "test@example.com", password: "password123")
    if (email === 'test@example.com' && password === 'password123') {
      const mockUser = { id: '1', email: email };
      await AsyncStorage.setItem('userToken', 'mock-token-123'); // Token giả lập
      setUser(mockUser);
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setUser(null);
  };

     
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}