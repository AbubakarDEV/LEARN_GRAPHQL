module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      createdAt: "create_at",
      updatedAt: "modified_at",
    }
  );
  return Users;
};
