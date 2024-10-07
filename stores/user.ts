import { defineStore } from "pinia";

interface User {
  id: string;
  username: string;
  fullname: string;
  email: string;
  password: string;
  role: string;
}

export const useUserStore = defineStore("tb_user", {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const { data, error } = await useSupabaseClient()
          .from("tb_user")
          .select("*")
          .eq("email", email)
          .eq("password", password)
          .single();

        if (error) {
          throw new Error("Email atau password salah!");
        } else if (!data) {
          throw new Error("Email atau password salah!");
        } else {
          this.user = data;
          return data;
        }
      } catch (error) {
        throw error;
      }
    },

    async logout() {
      this.user = null;
      await useSupabaseClient().auth.signOut();
      navigateTo("/login");
    },
  },
});
