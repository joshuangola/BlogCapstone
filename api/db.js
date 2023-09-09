// import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "dotenv";

const envConfig = parse(fs.readFileSync(".env"));

const SUPABASE_URL = envConfig.SUPABASE_URL;
const SUPABASE_ANON_KEY = envConfig.SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
