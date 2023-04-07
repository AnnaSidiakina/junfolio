import { Schema, model, models, SchemaTypes } from "mongoose";

const teamMemberSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    role: [
      {
        type: String,
        enum: [
          "Fullstack",
          "Frontend",
          "Backend",
          "QA",
          "Project manager",
          "UX/UI designer",
        ],
      },
    ],
    photoUrl: {
      type: String,
      default: "",
    },
    allowed: {
      type: Boolean,
      default: false,
    },
    portfolio: [
      {
        type: Schema.ObjectId,
        ref: "Project",
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const TeamMember = models.TeamMember || model("TeamMember", teamMemberSchema);

export default TeamMember;
