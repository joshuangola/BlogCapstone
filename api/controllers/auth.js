import { supabase } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", req.body.email)
      .or(`username.eq.${req.body.username}`);

    if (error) throw error;
    if (users.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const { data, error: insertError } = await supabase
      .from("users")
      .insert([
        { username: req.body.username, email: req.body.email, password: hash },
      ]);

    if (insertError) throw insertError;

    return res.status(200).json("User has been created!");
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username);

    if (error) throw error;
    if (!users.length) return res.status(404).json("User not found!");

    const user = users[0];

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) return res.status(401).json("Invalid password!");

    const token = jwt.sign({ id: user.id }, "jwtkey", {
      expiresIn: "6h",
    });

    const { password: userPassword, ...other } = user;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};
