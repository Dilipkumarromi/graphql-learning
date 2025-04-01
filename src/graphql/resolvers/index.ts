import userResolvers from './userResolvers';
import productResolvers from './productResolvers';
import userMasterResolvers from './userMasterResolvers';
import addressResolvers from './addressMasterResolvers';

const resolvers = [userResolvers, productResolvers,userMasterResolvers,addressResolvers];
export default resolvers;
