db.createUser(
    {
      user: "root",
      password: "admin",
      roles: [
        {
          role: "readWrite",
          db: "db"
        }
      ]
    }
);
