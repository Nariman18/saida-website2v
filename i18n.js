module.exports = {
  locales: ["en", "az", "ru"], // Array with the languages that I want to use
  defaultLocale: "en", // Default language of this website
  pages: {
    "*": ["common"], // Namespaces that I import per page (I am stick to one namespace for all the application in this tutorial)
  },
};
