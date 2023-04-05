import { Schema, model, models } from "mongoose";

const TeamMemberSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  category: {
    type: String,
  },
  // portfolio: Array,
});

const TeamMember = models.TeamMember || model("teamMember", TeamMemberSchema);

export default TeamMember;
