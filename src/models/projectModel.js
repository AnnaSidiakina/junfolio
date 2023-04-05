import { Schema, model, models } from "mongoose";
import TeamMember from "./TeamMember";

const projectSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    title: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
    team: [
      {
        type: Schema.Types.ObjectId,
        ref: TeamMember,
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Project = models.Project || model("Project", projectSchema);

export default Project;
