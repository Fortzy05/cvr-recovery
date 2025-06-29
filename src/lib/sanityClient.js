import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "rewsmzz2", // ✅ your actual Sanity project ID
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
