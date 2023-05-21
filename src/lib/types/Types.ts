import type { Database } from './Database';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Subscription = Database['public']['Tables']['subscriptions']['Row'];
export type Product = Database['public']['Tables']['products']['Row'];
export type Price = Database['public']['Tables']['prices']['Row'];
export type Customer = Database['public']['Tables']['customers']['Row'];

export type MetadataJson = {
	[key: string]: string | number | boolean;
};
