export const reviewData = {
  id: 1,
  user: {
    id: 13,
    name: `Zak`
  },
  rating: 1.4,
  comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
  date: `2021-03-07T08:04:28.658Z`
};

const reviewsData = [
  reviewData,
  {
    id: 2,
    user: {
      id: 17,
      name: `Emely`
    },
    rating: 7.2,
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2021-02-22T08:04:28.658Z`
  },
];

export const reviews = {
  id: 1,
  data: reviewsData,
};
