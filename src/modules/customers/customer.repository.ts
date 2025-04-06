import { supabase } from "@/lib/supabase";

interface CustomerData {
  company: string;
  email: string | null;
  furigana: string;
  name: string;
  phone: string | null;
}

export const customerRepository = {
  async create(userId: string, customerData: CustomerData) {
    const { data, error } = await supabase
      .from('customers')
      .insert([{ ...customerData, user_id: userId }])
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
};
