import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String
        getAllSkills: [Skill]
    }

    type Skill {
        _id: ID
        image: String
        name: String
        pid: Int
    }

    input SkillInput {
        image: String
        name: String
        pid: Int
    }

    type Mutation {
        createSkill(skill: SkillInput): String
        updateSkill(skill: SkillInput): String
    }
`;

export default typeDefs