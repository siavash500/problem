import { create } from 'zustand';

// 1. ساخت store
const useUserStore = create((set) => ({
  username: null,
  setUser: (name) => set({ username: name }), // تابع برای تغییر state
}));

// 2. استفاده در کامپوننت
export default function Zustand() {
  const username = useUserStore((state) => state.username);
  const setUser = useUserStore((state) => state.setUser);

  return (
    <div>
      <p>کاربر: {username || 'ناشناس'}</p>
      <button onClick={() => setUser('Ali')}>ورود</button>
    </div>
  );
}