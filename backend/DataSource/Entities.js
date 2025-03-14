import { EntitySchema } from "typeorm";
export default new EntitySchema({
  name: "User",
  tableName: "userinfo",
  columns: {
    id: {
      primary: true,
      generated: true,
      type: "int",
    },
    firstname: {
      type: "varchar",
    },
    lastname: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
