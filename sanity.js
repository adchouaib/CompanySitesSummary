import {
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  dataset: "production",
  projectId: "xga11qul",
  apiVersion: "2022-06-26",

  useCdn: true,
};

export const sanityClient = createClient(config);

export const currentUser = createCurrentUserHook(config);
