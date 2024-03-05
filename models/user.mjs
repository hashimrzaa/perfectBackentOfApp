import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});



const Users = mongoose.model("users", userSchema);

export default Users;
// userSchema.pre("save", (n) => {
//   const user = this;
//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync(user.password, salt);
//   n();
// });

// userSchema.method.comparePassword = (pass) => {
//   const user = this;
//   return bcrypt.compareSync(password, user.password);
// };