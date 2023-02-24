import { OpenAIApi, Configuration } from "openai";

import { OPENAI_API_KEY } from "@env";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
