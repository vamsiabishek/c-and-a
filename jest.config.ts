import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  setupFilesAfterEnv: ["<rootDir>/tools/setupTests.ts"],
};
