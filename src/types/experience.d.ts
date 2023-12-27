type TExperience = {
  company: string;
  jobType: string;
  title: string;
  fromDate: Date | string | undefined;
  toDate: Date | string | undefined;
  description: string;
  techStack?: string[];
};
