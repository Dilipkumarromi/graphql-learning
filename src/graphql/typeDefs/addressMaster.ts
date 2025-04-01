const addressMasterTypeDefs=`#graphql
type address{
    id:ID!
    address:String,
    address_1:String,
    pincode:String,
    state_id:Int,
    district_id:Int,
    user_id:Int
}

type Query{
    getAddress:[address]
}
`
export default addressMasterTypeDefs