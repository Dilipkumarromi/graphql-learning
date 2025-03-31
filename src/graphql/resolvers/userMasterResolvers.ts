import db from "../../models/index"
const userMasterResolvers={
    Query:{
        getUserMasters:async()=>{
        return await db.tbl_user_master.findAll()
       } ,
       getUserMaster:async(_: any,args: { id: string })=>{
        return await db.tbl_user_master.findOne({
            where:{
                id:args?.id
            }
        })
       } 
    },
    Mutation:{
        addUserMaster:async(_: any, args: { first_name: string; last_name: string,email:string,dob:string,mobile:string,education:string,is_active:1 })=>{
           try {
             const create=await db.tbl_user_master.create({
                ...args
             })
             // or like this
            //  const create1=await db.tbl_user_master.create({
            //     first_name:args.first_name
            //  })

             return create
           } catch (error) {
            console.error('Error adding user master:', error);
            throw new Error('Failed to add user master');
           }
        },
        updateUserMaster:async(_:any,args:{id:string,first_name:string,email:string})=>{
            try {
            const updateUserMaster=await db.tbl_user_master.update({first_name:args.first_name,email:args.email},{
                where:{
                    id:args.id
                }
            })
            } catch (error) {
                console.error('Error adding user master:', error);
            throw new Error('Failed to add user master');
            }
        }

    }
}
export default userMasterResolvers;