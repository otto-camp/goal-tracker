export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          id: string
          metadata: Json | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          id: string
          metadata?: Json | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          id?: string
          metadata?: Json | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
