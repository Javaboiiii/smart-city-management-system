import mongoose from 'mongoose'

const IssueSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    problem: {
        type: String, 
        required: true
    }
})

export default mongoose.model('Issues', IssueSchema)
