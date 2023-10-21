import { createClient } from 'microcms-js-sdk'; //ES6

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_SERVICE_API_KEY!,
});