import { Company } from '../models/enums/company.enum';

export const designQuestions = [
  {
    text: 'Design a Web crawler',
    requirement: 'High Scalable',
    consideration: ['Video,Music,Link?', 'How many links in total'],
    company: Company.FACEBOOK,
  },
  {
    text: 'Design a click logging system',
    requirement: 'High Scalable',
    company: 'Facebook',
  },
  {
    text: 'Design a job scheduling system',
    description: 'job can only has one running instance.',
    scale: 'thousands of jobs, ',
    requirement: [
      'One running instance per job',
      'cannot run after one job is finished',
      'highly available',
      'fault tolerance',
      'DB schema',
    ],
  },
];
