import { supabase } from "../db.js";

export const getPosts = async (req, res) => {
  try {
    const { cat } = req.query;

    let { data, error } = cat
      ? await supabase.from("posts").select("*").eq("cat", cat)
      : await supabase.from("posts").select("*");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("posts")
      .select("*, users: user_id (username)")
      .eq("id", id);

    if (error) throw error;

    res.json(data[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const addPost = async (req, res) => {
  try {
    const { data, error } = await supabase.from("posts").insert([req.body]);

    if (error) throw error;

    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase.from("posts").delete().eq("id", id);

    if (error) throw error;

    res.json({ message: "Post deleted successfully!" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("posts")
      .update(req.body)
      .eq("id", id);

    if (error) throw error;

    res.json(data[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
