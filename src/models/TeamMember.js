import { Schema, model, models, SchemaType } from "mongoose";

const teamMemberSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    category: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
    portfolio: {
      type: Array,
      ref: "Project",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const TeamMember = models.teamMember || model("teamMember", teamMemberSchema);

export default TeamMember;
