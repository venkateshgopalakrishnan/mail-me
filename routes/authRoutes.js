const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ hi: "there" });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.send(req.user);
    }
  );

  app.get(
    "/auth/linkedin",
    passport.authenticate("linkedin", {
      scope: ["r_liteprofile", "r_emailaddress"]
    })
  );

  app.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin"),
    (req, res) => {
      res.send(req.user);
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
