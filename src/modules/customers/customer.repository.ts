import { supabase } from "@/lib/supabase";
import { Customer } from "./customer.entity";
import { CustomerTypes } from "@/types/customer";

export const customerRepository = {
  async create(userId: string, customerData: CustomerTypes) {
    const { data, error } = await supabase
      .from('customers')
      .insert([{ ...customerData, user_id: userId }])
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  async getAll(): Promise<Customer[]> {
    const { data, error } = await supabase
      .from('customers')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }

};
