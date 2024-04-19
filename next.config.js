module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com', 's3-media0.fl.yelpcdn.com', 'cdn.cdkitchen.com', 'encrypted-tbn0.gstatic.com', 'fatapplesrestaurant.com', 'www.recipetineats.com', 'www.smoking-meat.com', 'alldayidreamaboutfood.com'],
  },
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
};
