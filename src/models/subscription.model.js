import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // who is sub..ing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, //to whome he is sub..ing
        ref: "User"
    }
},{timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)