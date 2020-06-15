import { Project } from './models/project';
import { Developer } from './models/developer';

export const allDevelopers: Developer[] = [
  new Developer(1, 'Rich', 'Software Developer'),
  new Developer(2, 'Mary', 'Software Developer'),
  new Developer(3, 'Phillip', 'Senior Architect '),
  new Developer(4, 'Sarah', 'DevOps Engineer')
];

export const allProjects: Project[] = [
  new Project(1, 'Falcon', 2021),
  new Project(2, 'Annis', 2021),
  new Project(3, 'Hobbit', 2030),
  new Project(4, 'Kiara', 2022, ['Ryan', 'Salma'])
];
