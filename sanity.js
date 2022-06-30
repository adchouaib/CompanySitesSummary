import {
  createImageUrlBuilder,
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

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const currentUser = createCurrentUserHook(config);
