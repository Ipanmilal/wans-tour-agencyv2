import { createClient } from "@supabase/supabase-js";

export function useSupabaseClient(){
    const supabase = createClient("https://pocsarjrfrnfbvdkjles.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvY3NhcmpyZnJuZmJ2ZGtqbGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNjc2NjIsImV4cCI6MjAzMTk0MzY2Mn0.v732XoR95zJsqkJXBMrz6wjSsEtxeh-bbB54zE0V28k")
    return supabase
    
}