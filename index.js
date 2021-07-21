//Importando carpetas y APIs de express
const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route")

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

/** Swagger Initalization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJSDoc.Options = {
    info: {
      title: "NodeJs REST APIs (Express + Swagger + MYSQL)",
      description: "API documentation https://www.udemy.com/course/nodejs-restapi-its-simple/",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use(express.json()); // This Middleware is neccesary to transform the req/res to json
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(3000, () => {
  console.log("I am ready to listen you");
});
