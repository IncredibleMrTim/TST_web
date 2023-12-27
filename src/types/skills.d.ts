enum SkillTypes {
  "soft",
  "dev",
  "planning",
}

type TSkillTypes = keyof typeof SkillTypes;

type TSkills = {
  title: string;
  description?: string;
  years?: number;
  type: TSkillTypes;
};
