const app = require('express'),
mongoose = require('mongoose');
// we first make schema using mongoose.Schema then using mongoose.model we make an instance of the the schema and then create object with reference of this schema

const storySchema = mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    story: {
        type : String
    }
})
mongoose.model('story',storySchema);