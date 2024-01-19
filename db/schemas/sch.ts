import mongoose from "npm:mongoose@7.6.3";

export type ExampleModelType = 
    & mongoose.Document;

const Schema = mongoose.Schema;

const ExampleSchema = new Schema(
    {
        //code
    }
);

export const ExampleModel = mongoose.model<ExampleModelType>("Example", ExampleSchema);