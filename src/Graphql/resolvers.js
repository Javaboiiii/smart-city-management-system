import '../server/Issue.js'
import mongoose from 'mongoose'

const Issues = mongoose.model('Issues')

const resolvers = { 
    Mutation : {
        async issueInput(parent, { newIssue }) {
            const problem = await Issues.findOne({problem : newIssue.problem})
            if (problem) { 
                throw new Error('Problem already exists')
            }else {
                const issueNew = new Issues({
                    ...newIssue
                })
                return await issueNew.save()
            }
        }
    }
}

export default resolvers