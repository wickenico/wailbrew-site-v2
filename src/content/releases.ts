import data from "./releases.json";

export interface Release {
  version: string;
  date: string;
  url: string;
  html: string;
}

export const releases: Release[] = data;
