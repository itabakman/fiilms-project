export type Film = {
  name: string;
  slug: string;
  duration: number;
  budget: number; // in $
  language: string;
  imdb: number;
  year: number;
  author?: Author;
};

export type Author = {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
};
