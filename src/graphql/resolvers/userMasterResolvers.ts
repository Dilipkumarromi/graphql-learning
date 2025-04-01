import db from "../../models/index";
const userMasterResolvers = {
  Query: {
    getUserMasters: async () => {
      return await db.tbl_user_master.findAll();
    },
    // relationship of user-> address
    getUserWithAddress: async (_: any, __: any) => {
      try {
        const users = await db.tbl_user_master.findAll({
          logging: false,
          include: [
            {
              model: db.tbl_address_master,
              as: "addresses", // Ensure this matches the alias in the Sequelize association
            },
          ],
        });

        // Ensure 'addresses' is always an array for one to many required another wise not need
        const processedUsers = users.map((user: any) => ({
          ...user.toJSON(),
          addresses: [user.addresses], // Ensure 'addresses' is always an array, // Return an empty array if no addresses found
        }));
        console.log("modify", processedUsers);
        return users;
      } catch (error: any) {
        console.error("Error in user -> address relationship:", error);
        throw new Error(error.message);
      }
    },
    getUserWithOneAddress: async (_: any, __: any) => {
      try {
        const users = await db.tbl_user_master.findAll({
          logging: false,
          include: [
            {
              model: db.tbl_address_master,
              as: "addresses", // Ensure this matches the alias in the Sequelize association
            },
          ],
        });

        // Ensure 'addresses' is always an array for one to many required another wise not need
        const processedUsers = users.map((user: any) => ({
          ...user.toJSON(),
          addresses: [user.addresses], // Ensure 'addresses' is always an array, // Return an empty array if no addresses found
        }));
        console.log("modify", processedUsers);
        return users;
      } catch (error: any) {
        console.error("Error in user -> address relationship:", error);
        throw new Error(error.message);
      }
    },
    getUserMaster: async (_: any, args: { id: string }) => {
      return await db.tbl_user_master.findOne({
        where: {
          id: args?.id,
        },
      });
    },
  },
  Mutation: {
    // create user master
    addUserMaster: async (
      _: any,
      args: {
        first_name: string;
        last_name: string;
        email: string;
        dob: string;
        mobile: string;
        education: string;
        is_active: 1;
      }
    ) => {
      try {
        const create = await db.tbl_user_master.create({
          ...args,
        });
        // or like this
        //  const create1=await db.tbl_user_master.create({
        //     first_name:args.first_name
        //  })

        return create;
      } catch (error) {
        console.error("Error adding user master:", error);
        throw new Error("Failed to add user master");
      }
    },
    // update user master
    updateUserMaster: async (
      _: any,
      args: { id: Number; first_name: string; email: string }
    ) => {
      try {
        const updateUserMaster = await db.tbl_user_master.update(
          { first_name: args.first_name, email: args.email },
          {
            where: {
              id: args.id,
            },
          }
        );
        return updateUserMaster;
      } catch (error) {
        console.error("Error adding user master:", error);
        throw new Error("Failed to add user master");
      }
    },
    deleteUserMaster: async (_: any, args: { id: Number }) => {
      try {
        const deleteUser = await db.tbl_user_master.destroy({
          where: {
            id: args.id,
          },
        });
        return deleteUser;
      } catch (error) {
        console.error("Error adding user master:", error);
        throw new Error("Failed to add user master");
      }
    },
  },
};
export default userMasterResolvers;
