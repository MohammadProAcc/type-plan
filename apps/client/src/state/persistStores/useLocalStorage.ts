import { FQl_dynamic_user_IUser } from "state/declarations/schema/schema"
import create from "zustand"
import { persist } from "zustand/middleware"

export const useLocalStorage = create(persist(((set, get) => ({
  user: null,
  loginTimeStamp: null,
  loginPhoneNumber: null,
  setUser: (user: FQl_dynamic_user_IUser) =>
    set({ user }),
  clearUser: () => set({ user: {} }),
  setLoginTimeStamp: (timeStamp: Date) => {
    set({
      loginTimeStap: timeStamp
    })
    setTimeout(() => {
      (get() as any).clearLoginTemp();
    }, 50000)
  },
  setLoginPhoneNumber: (phoneNumber: number) =>
    set({ phoneNumber }),
  clearLoginTemp: () => set({ loginTemp: null })
})), { name: "user-persist" }))