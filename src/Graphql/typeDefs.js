
const typeDefs = `#graphql 
    type Issue { 
        problem : String! 
        username : String! 
        email : String! 
        phone : String! 
    }

    input IssueInput { 
        problem : String! 
        username : String! 
        email : String! 
        phone : String!
    }

    type Query { 
        issues : [Issue]
    }

    type Mutation {
        issueInput(newIssue: IssueInput!) : Issue!
    }
`

export default typeDefs