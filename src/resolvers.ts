import database from './utils/database';

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World';
        },
        getAllSkills: async () => {
            return await (await database())
                .collection('Skills')
                .find({})
                .toArray();
        }
    },
    Mutation: {
        createSkill: async (parent: any, args: any, context: any, info: any) => {
            const { image, name, pid } = args.skill;
            await (await database())
                .collection('Skills')
                .insertOne({ image, name, pid });
            return "Inserted";
        },
        updateSkill: async (parent: any, args: any, context: any, info: any) => {
            const { image, name, pid } = args.skill;
            await (await database())
                .collection('Skills')
                .updateOne(
                    { "name": name },
                    { $set: { "image": image, "pid": pid } }
                );
            return "Update";
        }
    }
};

export default resolvers;