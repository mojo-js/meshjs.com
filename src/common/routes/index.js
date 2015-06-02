module.exports = function(app) {

  app.router.addRoute("home", ["/", "/index"], function(location) {
    location.set("state", {
      pages: {
        body: "home"
      }
    });
  });

  app.router.addRoute("docs", "/docs", function(location) {
    location.set("state", {
      pages: {
        body: "docs"
      }
    });
  });

  app.router.addRoute("examples", "/docs", function(location) {
    location.set("state", {
      pages: {
        body: "docs"
      }
    });
  });

  app.router.addRoute("snippets", "/docs", function(location) {
    location.set("state", {
      pages: {
        body: "docs"
      }
    });
  });
}