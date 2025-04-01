import db from "../../models/index";
const addressResolvers={
    Query:{
        getAddress:async()=>{
            try {
            const addressData=await db.tbl_address_master.findAll()
            return addressData
            } catch (error) {
                console.error("Error adding user master:", error);
                throw new Error("Failed to add user master");
            }
        }
    }
}
export default addressResolvers;