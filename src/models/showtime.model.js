const { Schema , model } = require("mongoose");

const showtimeSchema = new Schema ({

cinema_name:{type: String , required:true},
screen:{type: Schema.Types.ObjectId , ref : "screen", required:true },
timing:{type:String , required:true},
total_seats:{type:Number , require:true}

},
{
    versionKey:false,
    timestamps:true
});

module.exports = model("showtime" ,showtimeSchema);