import { supabase } from "@/lib/supabase";

export const authRepository = {
  async signup(name: string, email: string, password: string, captchaToken: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { captchaToken, data: { name } },
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },

  async signin(email: string, password: string, captchaToken: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        captchaToken
      }
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name
    };
  },

  async guestSignin(captchaToken: string) {
    const { data, error } = await supabase.auth.signInAnonymously({
      options: {
        captchaToken
      }
    });
    if (error != null || data.user == null) throw new Error(error?.message);
    return {
      ...data.user,
      userName: data.user.user_metadata.name,
    };
  },

  async getCurrentUser() {
    const { data, error } = await supabase.auth.getSession();
    if (error != null) throw new Error(error.message);
    if (data.session == null) return;
    return {
      ...data.session.user,
      userName: data.session.user.user_metadata.name,
    };
  },

  async signout() {
    const { error } = await supabase.auth.signOut();
    if (error != null) throw new Error(error.message);
    return true;
  }
};
