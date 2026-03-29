export interface TechCharacter {
  id: string;
  name: string;
  emoji: string;
  color: string; // tailwind gradient classes
  description: string;
}

export const techCharacters: TechCharacter[] = [
  {
    id: "coder-cat",
    name: "The Coder Cat",
    emoji: "🐱",
    color: "from-primary to-neon-cyan",
    description: "Purrs while debugging. Loves TypeScript and naps between deploys.",
  },
  {
    id: "ai-astronaut",
    name: "The AI Astronaut",
    emoji: "🧑‍🚀",
    color: "from-neon-violet to-primary",
    description: "Exploring the frontiers of machine learning, one epoch at a time.",
  },
  {
    id: "blockchain-bot",
    name: "The Blockchain Bot",
    emoji: "🤖",
    color: "from-neon-cyan to-primary",
    description: "Decentralized, immutable, and always on-chain. Consensus is key.",
  },
  {
    id: "ui-unicorn",
    name: "The UI Unicorn",
    emoji: "🦄",
    color: "from-accent to-astra-gold",
    description: "Pixel-perfect designs and animations so smooth they're magical.",
  },
  {
    id: "data-dragon",
    name: "The Data Dragon",
    emoji: "🐉",
    color: "from-astra-gold to-destructive",
    description: "Breathes fire through datasets. No query is too complex.",
  },
];

export const getRandomCharacter = (): TechCharacter => {
  return techCharacters[Math.floor(Math.random() * techCharacters.length)];
};

export const getCharacterById = (id: string): TechCharacter | undefined => {
  return techCharacters.find((c) => c.id === id);
};
