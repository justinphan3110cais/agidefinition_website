import openai_logo from "@/assets/openai-logomark.png";
import claude_logo from "@/assets/claude_logo.png";
import gemini_logo from "@/assets/gemini_logo.png";
import grok_logo from "@/assets/grok_logo.png";
import meta_logo from "@/assets/meta-icon.png";
import deepseek_logo from "@/assets/deepseek_logo.svg";
import qwen_logo from "@/assets/qwen_logo.png";
import kimi_logo from "@/assets/kimi_logo.png";
import witness_logo from "@/assets/games/witness.svg";
import moonmist_logo from "@/assets/games/moonmist.svg";
import plunderedhearts_logo from "@/assets/games/plunderedhearts.svg";
import seastalker_logo from "@/assets/games/seastalker.svg";
import deadline_logo from "@/assets/games/deadline.svg";
import infidel_logo from "@/assets/games/infidel.svg";

export const PAPER_URL = "";
export const GITHUB_URL = "";

export const BIBTEX_CITATION = "";

export const GAME_LOGOS = {
  witness: witness_logo,
  moonmist: moonmist_logo,
  plunderedhearts: plunderedhearts_logo,
  seastalker: seastalker_logo,
  deadline: deadline_logo,
  infidel: infidel_logo,
};

export const LOGO_MAP = {
  openai_logo: openai_logo,
  claude_logo: claude_logo,
  gemini_logo: gemini_logo,
  grok_logo: grok_logo,
  meta_logo: meta_logo,
  deepseek_logo: deepseek_logo,
  qwen_logo: qwen_logo,
  kimi_logo: kimi_logo,
};

export const GAME_URLS = {
  witness: "https://en.wikipedia.org/wiki/The_Witness_(1983_video_game)",
  moonmist: "https://en.wikipedia.org/wiki/Moonmist", 
  plunderedhearts: "https://en.wikipedia.org/wiki/Plundered_Hearts",
  seastalker: "https://en.wikipedia.org/wiki/Seastalker",
  deadline: "https://en.wikipedia.org/wiki/Deadline_(1982_video_game)",
  infidel: "https://en.wikipedia.org/wiki/Infidel_(video_game)",
};

export const MODEL_RESULTS = [
  {
    model: "GPT-5",
    noClues: {
      progress: 37.8,
      completed: 5,
      harm: 17.2,
    },
    withClues: {
      progress: 70.0,
      completed: 5,
      harm: 21.8,
    },
    completedGames: ["witness", "moonmist", "seastalker", "plunderedhearts", "infidel"],
    isTopModel: true,
    modelGeneration: "gold",
    logo: {
      src: "openai_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Claude Opus 4.1",
    noClues: {
      progress: 33.9,
      completed: 4,
      harm: 19.1,
    },
    withClues: {
      progress: 68.0,
      completed: 4,
      harm: 22.1,
    },
    completedGames: ["witness", "moonmist", "seastalker", "plunderedhearts"],
    isTopModel: true,
    modelGeneration: "gold",
    logo: {
      src: "claude_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Grok 4",
    noClues: {
      progress: 31.2,
      completed: 0,
      harm: 30.4,
    },
    withClues: {
      progress: 61.4,
      completed: 3,
      harm: 31.4,
    },
    completedGames: ["witness", "moonmist", 'deadline'],
    isTopModel: true,
    modelGeneration: "silver",
    logo: {
      src: "grok_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "o3",
    noClues: {
      progress: 30.9,
      completed: 0,
      harm: 18.7,
    },
    withClues: {
      progress: 60.4,
      completed: 3,
      harm: 17.2,
    },
    completedGames: ["witness", "moonmist", "plunderedhearts"],
    isTopModel: true,
    modelGeneration: "silver",
    logo: {
      src: "openai_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Claude Opus 4",
    noClues: {
      progress: 26.4,
      completed: 0,
      harm: 16.5,
    },
    withClues: {
      progress: 60.5,
      completed: 4,
      harm: 19.2,
    },
    completedGames: ["witness", "moonmist", "plunderedhearts", "seastalker"],
    isTopModel: true,
    modelGeneration: "silver",
    logo: {
      src: "claude_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Gemini 2.5 Pro",
    noClues: {
      progress: 23.2,
      completed: 0,
      harm: 15.9,
    },
    withClues: {
      progress: 60.6,
      completed: 3,
      harm: 25.6,
    },
    completedGames: ["witness", "moonmist", "plunderedhearts"],
    isTopModel: true,
    modelGeneration: "silver",
    logo: {
      src: "gemini_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Claude Sonnet 4",
    noClues: {
      progress: 24.7,
      completed: 0,
      harm: 16.0,
    },
    withClues: {
      progress: 57.2,
      completed: 2,
      harm: 18.4,
    },
    completedGames: ["witness", "moonmist"],
    isTopModel: false,
    modelGeneration: "silver",
    logo: {
      src: "claude_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Grok 3",
    noClues: {
      progress: 18.9,
      completed: 0,
      harm: 15.4,
    },
    withClues: {
      progress: 41.9,
      completed: 2,
      harm: 21.2,
    },
    completedGames: ["witness", "moonmist"],
    isTopModel: false,
    logo: {
      src: "grok_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "GPT-5-mini",
    noClues: {
      progress: 15.9,
      completed: 1,
      harm: 12.0,
    },
    withClues: {
      progress: 42.1,
      completed: 1,
      harm: 15.7,
    },
    completedGames: ["moonmist"],
    isTopModel: false,
    logo: {
      src: "openai_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "GPT-4.1",
    noClues: {
      progress: 22.8,
      completed: 0,
      harm: 11.4,
    },
    withClues: {
      progress: 37.5,
      completed: 0,
      harm: 15.3,
    },
    isTopModel: false,
    logo: {
      src: "openai_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Grok 3 mini",
    noClues: {
      progress: 22.4,
      completed: 0,
      harm: 17.8,
    },
    withClues: {
      progress: 32.2,
      completed: 0,
      harm: 18.2,
    },
    isTopModel: false,
    logo: {
      src: "grok_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Qwen 3 Thinking",
    noClues: {
      progress: 15.1,
      completed: 0,
      harm: 16.4,
    },
    withClues: {
      progress: 29.8,
      completed: 1,
      harm: 10.8,
      
    },
    completedGames: ["witness"],
    isTopModel: false,
    modelWeights: "Qwen/Qwen3-235B-A22B-Thinking-2507",
    logo: {
      src: "qwen_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Gemini 2.5 Flash",
    noClues: {
      progress: 14.4,
      completed: 0,
      harm: 11.7,
    },
    withClues: {
      progress: 31.8,
      completed: 0,
      harm: 16.8,
    },
    isTopModel: false,
    logo: {
      src: "gemini_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "DeepSeek R1",
    noClues: {
      progress: 15.2,
      completed: 0,
      harm: 15.4,
    },
    withClues: {
      progress: 23.8,
      completed: 0,
      harm: 23.0,
    },
    isTopModel: false,
    modelWeights: "deepseek-ai/DeepSeek-R1",
    logo: {
      src: "deepseek_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "o4-mini",
    noClues: {
      progress: 12.8,
      completed: 0,
      harm: 18.6,
    },
    withClues: {
      progress: 20.6,
      completed: 0,
      harm: 20.0,
    },
    isTopModel: false,
    logo: {
      src: "openai_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Qwen 3 Instruct",
    noClues: {
      progress: 11.7,
      completed: 0,
      harm: 16.6,
    },
    withClues: {
      progress: 21.1,
      completed: 0,
      harm: 11.0,
    },
    isTopModel: false,
    modelWeights: "Qwen/Qwen3-235B-A22B-Instruct-2507",
    logo: {
      src: "qwen_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Kimi K2",
    noClues: {
      progress: 10.5,
      completed: 0,
      harm: 8.3,
    },
    withClues: {
      progress: 19.7,
      completed: 0,
      harm: 9.0,
    },
    isTopModel: false,
    modelWeights: "moonshotai/Kimi-K2-Instruct",
    logo: {
      src: "kimi_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "GPT-OSS-120B",
    noClues: {
      progress: 12.0,
      completed: 0,
      harm: 21.2,
    },
    withClues: {
      progress: 18.1,
      completed: 0,
      harm: 13.8,
    },
    isTopModel: false,
    modelWeights: "openai/gpt-oss-120b",
    logo: {
      src: "openai_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Gemini 2.5 Flash-Lite",
    noClues: {
      progress: 11.7,
      completed: 0,
      harm: 22.8,
    },
    withClues: {
      progress: 16.6,
      completed: 0,
      harm: 10.6,
    },
    isTopModel: false,
    logo: {
      src: "gemini_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "GPT-4.1-mini",
    noClues: {
      progress: 10.6,
      completed: 0,
      harm: 11.7,
    },
    withClues: {
      progress: 15.9,
      completed: 0,
      harm: 12.2,
    },
    isTopModel: false,
    logo: {
      src: "openai_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Claude Haiku 3.5",
    noClues: {
      progress: 12.3,
      completed: 0,
      harm: 14.9,
    },
    withClues: {
      progress: 13.4,
      completed: 0,
      harm: 10.6,
    },
    isTopModel: false,
    logo: {
      src: "claude_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Llama 4 Maverick",
    noClues: {
      progress: 9.2,
      completed: 0,
      harm: 13.1,
    },
    withClues: {
      progress: 16.1,
      completed: 0,
      harm: 12.1,
    },
    isTopModel: false,
    modelWeights: "meta-llama/Llama-4-Maverick-17B-128E-Instruct",
    logo: {
      src: "meta_logo",
      width: 18,
      height: 18,
    },
  },
  {
    model: "Llama 4 Scout",
    noClues: {
      progress: 4.8,
      completed: 0,
      harm: 7.4,
    },
    withClues: {
      progress: 7.7,
      completed: 0,
      harm: 7.0,
    },
    isTopModel: false,
    modelWeights: "meta-llama/Llama-4-Scout-17B-16E-Instruct",
    logo: {
      src: "meta_logo",
      width: 18,
      height: 18,
    },
  },
];