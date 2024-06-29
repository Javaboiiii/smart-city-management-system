const typeDefs = `#graphql 
    type Issue { 
        problem : String! 
        username : String! 
        email : String! 
        phone : String! 
    }

    type Query { 
        issues : [Issue]
    }
`

export default typeDefs