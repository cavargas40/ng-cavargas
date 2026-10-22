export interface TimelineEntryData {
  position: string;
  company: string;
  description: string;
  tags?: string[];
}

export interface TimelineEntry {
  title: string;
  data: TimelineEntryData;
}

export type TimelineMap = Record<string, TimelineEntry>;

export interface CapabilityPillar {
  id: 'ai' | 'frontend' | 'backend' | 'cloud';
  icon: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  skills: string[];
  highlight?: boolean;
}

export interface StoryChapter {
  id: string;
  code: string;
  name: string;
  tagKey: string;
  titleKey: string;
  subtitleKey: string;
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'ch-00',
    code: '00',
    name: 'CH_00: SIGNAL_INIT',
    tagKey: 'STORY.CHAPTER_00.TAG',
    titleKey: 'STORY.CHAPTER_00.TITLE',
    subtitleKey: 'STORY.CHAPTER_00.SUBTITLE',
  },
  {
    id: 'ch-01',
    code: '01',
    name: 'CH_01: CRAFT_EVOLUTION',
    tagKey: 'STORY.CHAPTER_01.TAG',
    titleKey: 'STORY.CHAPTER_01.TITLE',
    subtitleKey: 'STORY.CHAPTER_01.SUBTITLE',
  },
  {
    id: 'ch-02',
    code: '02',
    name: 'CH_02: AI_HARNESS',
    tagKey: 'STORY.CHAPTER_02.TAG',
    titleKey: 'STORY.CHAPTER_02.TITLE',
    subtitleKey: 'STORY.CHAPTER_02.SUBTITLE',
  },
  {
    id: 'ch-03',
    code: '03',
    name: 'CH_03: CASE_FILES',
    tagKey: 'STORY.CHAPTER_03.TAG',
    titleKey: 'STORY.CHAPTER_03.TITLE',
    subtitleKey: 'STORY.CHAPTER_03.SUBTITLE',
  },
  {
    id: 'ch-04',
    code: '04',
    name: 'CH_04: TRANSMISSION',
    tagKey: 'STORY.CHAPTER_04.TAG',
    titleKey: 'STORY.CHAPTER_04.TITLE',
    subtitleKey: 'STORY.CHAPTER_04.SUBTITLE',
  },
];

export interface ArchitecturalEra {
  id: string;
  tagKey: string;
  badgeKey: string;
  titleKey: string;
  descriptionKey: string;
  highlight?: boolean;
}

export const ARCHITECTURAL_ERAS: ArchitecturalEra[] = [
  {
    id: 'era-01',
    tagKey: 'ABOUT_ME.ERAS.ERA_01.TAG',
    badgeKey: 'ABOUT_ME.ERAS.ERA_01.BADGE',
    titleKey: 'ABOUT_ME.ERAS.ERA_01.TITLE',
    descriptionKey: 'ABOUT_ME.ERAS.ERA_01.DESCRIPTION',
  },
  {
    id: 'era-02',
    tagKey: 'ABOUT_ME.ERAS.ERA_02.TAG',
    badgeKey: 'ABOUT_ME.ERAS.ERA_02.BADGE',
    titleKey: 'ABOUT_ME.ERAS.ERA_02.TITLE',
    descriptionKey: 'ABOUT_ME.ERAS.ERA_02.DESCRIPTION',
  },
  {
    id: 'era-03',
    tagKey: 'ABOUT_ME.ERAS.ERA_03.TAG',
    badgeKey: 'ABOUT_ME.ERAS.ERA_03.BADGE',
    titleKey: 'ABOUT_ME.ERAS.ERA_03.TITLE',
    descriptionKey: 'ABOUT_ME.ERAS.ERA_03.DESCRIPTION',
    highlight: true,
  },
];

export interface AiHarnessTrace {
  title: string;
  status: string;
  code: string;
}

export interface AiWorkflowStep {
  step: string;
  badge: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  artifact: string;
  trace: AiHarnessTrace;
}

export type CaseStudyCategory = 'all' | 'ai' | 'distributed' | 'fullstack';

export interface CaseStudyItem {
  id: string;
  category: Exclude<CaseStudyCategory, 'all'>;
  badgeKey: string;
  titleKey: string;
  problemKey: string;
  architectureKey: string;
  impactKey: string;
  tags: string[];
  repoUrl?: string;
}

export const RESUME_EXPERIENCE_TIMELINE: TimelineMap = {
  '2020': {
    title: 'RESUME.TIME_LINE.EXPERIENCE.2020.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EXPERIENCE.2020.POSITION',
      company: 'RESUME.TIME_LINE.EXPERIENCE.2020.COMPANY',
      description: 'RESUME.TIME_LINE.EXPERIENCE.2020.DETAIL',
      tags: [
        'Angular',
        'TypeScript',
        'Node.js',
        'Spec-Driven AI',
        'Agent Harnesses',
        'Cloud Architecture',
      ],
    },
  },
  '2017_2019': {
    title: 'RESUME.TIME_LINE.EXPERIENCE.2017_2019.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EXPERIENCE.2017_2019.POSITION',
      company: 'RESUME.TIME_LINE.EXPERIENCE.2017_2019.COMPANY',
      description: 'RESUME.TIME_LINE.EXPERIENCE.2017_2019.DETAIL',
      tags: [
        'Angular',
        'React',
        'Vue.js',
        'Golang',
        'Node.js',
        'Kotlin',
        'PostgreSQL',
        'Redis',
        'Docker',
      ],
    },
  },
  '2014_2016': {
    title: 'RESUME.TIME_LINE.EXPERIENCE.2014_2016.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EXPERIENCE.2014_2016.POSITION',
      company: 'RESUME.TIME_LINE.EXPERIENCE.2014_2016.COMPANY',
      description: 'RESUME.TIME_LINE.EXPERIENCE.2014_2016.DETAIL',
      tags: ['.NET', 'C#', 'SQL Server', 'Transact-SQL', 'JavaScript', 'SCRUM'],
    },
  },
  '2013_2014': {
    title: 'RESUME.TIME_LINE.EXPERIENCE.2013_2014.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EXPERIENCE.2013_2014.POSITION',
      company: 'RESUME.TIME_LINE.EXPERIENCE.2013_2014.COMPANY',
      description: 'RESUME.TIME_LINE.EXPERIENCE.2013_2014.DETAIL',
      tags: ['ASP.NET MVC', 'SQL Server', 'Windows Azure', 'Web Services'],
    },
  },
  '2011_2013': {
    title: 'RESUME.TIME_LINE.EXPERIENCE.2011_2013.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EXPERIENCE.2011_2013.POSITION',
      company: 'RESUME.TIME_LINE.EXPERIENCE.2011_2013.COMPANY',
      description: 'RESUME.TIME_LINE.EXPERIENCE.2011_2013.DETAIL',
      tags: ['Requirements Engineering', 'QA Testing', 'Oracle SQL'],
    },
  },
  '2010_2011': {
    title: 'RESUME.TIME_LINE.EXPERIENCE.2010_2011.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EXPERIENCE.2010_2011.POSITION',
      company: 'RESUME.TIME_LINE.EXPERIENCE.2010_2011.COMPANY',
      description: 'RESUME.TIME_LINE.EXPERIENCE.2010_2011.DETAIL',
      tags: ['Web Development', 'MySQL', 'Windows Server', 'Infrastructure'],
    },
  },
};

export const RESUME_EDUCATION_TIMELINE: TimelineMap = {
  JAN_2018_NOV_2018: {
    title: 'RESUME.TIME_LINE.EDUCATION.JAN_2018_NOV_2018.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EDUCATION.JAN_2018_NOV_2018.POSITION',
      company: 'RESUME.TIME_LINE.EDUCATION.JAN_2018_NOV_2018.COMPANY',
      description: 'RESUME.TIME_LINE.EDUCATION.JAN_2018_NOV_2018.DETAIL',
    },
  },
  JAN_2013_DEC_2016: {
    title: 'RESUME.TIME_LINE.EDUCATION.JAN_2013_DEC_2016.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EDUCATION.JAN_2013_DEC_2016.POSITION',
      company: 'RESUME.TIME_LINE.EDUCATION.JAN_2013_DEC_2016.COMPANY',
      description: 'RESUME.TIME_LINE.EDUCATION.JAN_2013_DEC_2016.DETAIL',
    },
  },
  JAN_2009_DEC_2011: {
    title: 'RESUME.TIME_LINE.EDUCATION.JAN_2009_DEC_2011.TITLE',
    data: {
      position: 'RESUME.TIME_LINE.EDUCATION.JAN_2009_DEC_2011.POSITION',
      company: 'RESUME.TIME_LINE.EDUCATION.JAN_2009_DEC_2011.COMPANY',
      description: 'RESUME.TIME_LINE.EDUCATION.JAN_2009_DEC_2011.DETAIL',
    },
  },
};

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'ai',
    icon: 'AI',
    titleKey: 'CAPABILITIES.PILLARS.AI.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.AI.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.AI.DESCRIPTION',
    skills: [
      'Spec-Driven Development (OpenSpec)',
      'Agent Harnesses & Guardrails',
      'Context Engineering',
      'Agentic Coding Workflows',
      'LLM Prompt & Tool Design',
      'Automated Spec Verification',
    ],
    highlight: true,
  },
  {
    id: 'frontend',
    icon: 'FE',
    titleKey: 'CAPABILITIES.PILLARS.FRONTEND.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.FRONTEND.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.FRONTEND.DESCRIPTION',
    skills: [
      'Angular (Signals & Standalone)',
      'TypeScript & RxJS',
      'React & Vue.js',
      'Responsive SCSS Architecture',
      'Web Performance & Accessibility',
      'Karma / Jasmine Unit Testing',
    ],
  },
  {
    id: 'backend',
    icon: 'BE',
    titleKey: 'CAPABILITIES.PILLARS.BACKEND.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.BACKEND.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.BACKEND.DESCRIPTION',
    skills: [
      'Node.js (Express / AdonisJS)',
      'Golang & Kotlin',
      'Microservices Architecture',
      '.NET / C# Enterprise Systems',
      'RESTful & Event-Driven APIs',
      'High-Concurrency Systems',
    ],
  },
  {
    id: 'cloud',
    icon: 'OPS',
    titleKey: 'CAPABILITIES.PILLARS.CLOUD.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.CLOUD.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.CLOUD.DESCRIPTION',
    skills: [
      'PostgreSQL, MySQL & SQL Server',
      'MongoDB & DynamoDB',
      'Redis & Memcached Caching',
      'Docker & Containerization',
      'CI/CD Pipelines (Jenkins)',
      'AWS & Azure Infrastructure',
    ],
  },
];

export const AI_HARNESS_WORKFLOW_STEPS: AiWorkflowStep[] = [
  {
    step: '01',
    badge: 'config.yaml',
    titleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.CONTEXT.TITLE',
    subtitleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.CONTEXT.SUBTITLE',
    descriptionKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.CONTEXT.DESCRIPTION',
    artifact: 'openspec/config.yaml',
    trace: {
      title: 'ARTIFACT // openspec/config.yaml',
      status: 'STATUS: CONTEXT_BOUNDARIES_LOCKED',
      code: `schema: spec-driven\ncontext: |\n  Engineer: Carlos Vargas (Senior Fullstack & AI Systems Engineer)\n  Stack: Angular 19, TypeScript, RxJS, Three.js\n  i18n: Mandatory 4-locale parity (en, es, pt, ja)\n  Budgets: Component SCSS <= 6KB warning / 10KB error`,
    },
  },
  {
    step: '02',
    badge: 'specs/*.md',
    titleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.SPEC.TITLE',
    subtitleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.SPEC.SUBTITLE',
    descriptionKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.SPEC.DESCRIPTION',
    artifact: 'proposal.md + specs/*.md',
    trace: {
      title: 'ARTIFACT // specs/engineering-case-studies-and-ai/spec.md',
      status: 'STATUS: 4/4 SHALL REQUIREMENTS VERIFIED',
      code: `### Requirement: Dedicated AI Engineering & Harnesses Showcase\nThe Portfolio SHALL display the Spec-Driven AI workflow.\n\n#### Scenario: Inspecting the AI Harness Pipeline\n- WHEN a user selects a workflow stage\n- THEN the console renders the deterministic engineering contract`,
    },
  },
  {
    step: '03',
    badge: 'design + tasks',
    titleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.HARNESS.TITLE',
    subtitleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.HARNESS.SUBTITLE',
    descriptionKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.HARNESS.DESCRIPTION',
    artifact: 'design.md + tasks.md',
    trace: {
      title: 'ARTIFACT // changes/matrix-storytelling-redesign/tasks.md',
      status: 'STATUS: DETERMINISTIC_EXECUTION_READY',
      code: `- [x] 1.1 Discrete Matrix character-grid rain & scroll-warp canvas\n- [x] 1.2 Scroll-driven laser spine & 3D perspective chapter lock-in\n- [x] 1.3 Interactive AI Harness console & case study dossiers`,
    },
  },
  {
    step: '04',
    badge: 'CI / Karma',
    titleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.VERIFY.TITLE',
    subtitleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.VERIFY.SUBTITLE',
    descriptionKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.VERIFY.DESCRIPTION',
    artifact: 'Karma/Jasmine + Build Gates',
    trace: {
      title: 'ARTIFACT // verification/karma-build-gate.log',
      status: 'STATUS: ALL QUALITY GATES GREEN',
      code: `$ npm run lint        -> 0 errors\n$ npm run build-prod  -> Initial bundle 538 KB (0 budget warnings)\n$ npx ng test         -> ChromeHeadlessCI: 35 of 35 SUCCESS`,
    },
  },
];

export const ENGINEERING_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'spec-driven-ai-harness',
    category: 'ai',
    badgeKey: 'PORTFOLIO.CASES.AI_HARNESS.BADGE',
    titleKey: 'PORTFOLIO.CASES.AI_HARNESS.TITLE',
    problemKey: 'PORTFOLIO.CASES.AI_HARNESS.PROBLEM',
    architectureKey: 'PORTFOLIO.CASES.AI_HARNESS.ARCHITECTURE',
    impactKey: 'PORTFOLIO.CASES.AI_HARNESS.IMPACT',
    tags: [
      'OpenSpec',
      'Agent Harnesses',
      'Context Engineering',
      'Angular 19',
      'TypeScript',
      'Jasmine',
    ],
    repoUrl: 'https://github.com/cavargas40/ng-cavargas',
  },
  {
    id: 'rappi-microservices',
    category: 'distributed',
    badgeKey: 'PORTFOLIO.CASES.RAPPI_PLATFORM.BADGE',
    titleKey: 'PORTFOLIO.CASES.RAPPI_PLATFORM.TITLE',
    problemKey: 'PORTFOLIO.CASES.RAPPI_PLATFORM.PROBLEM',
    architectureKey: 'PORTFOLIO.CASES.RAPPI_PLATFORM.ARCHITECTURE',
    impactKey: 'PORTFOLIO.CASES.RAPPI_PLATFORM.IMPACT',
    tags: [
      'Golang',
      'Node.js',
      'Kotlin',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Microservices',
    ],
  },
  {
    id: 'polyglot-web-platforms',
    category: 'fullstack',
    badgeKey: 'PORTFOLIO.CASES.POLYGLOT_WEB.BADGE',
    titleKey: 'PORTFOLIO.CASES.POLYGLOT_WEB.TITLE',
    problemKey: 'PORTFOLIO.CASES.POLYGLOT_WEB.PROBLEM',
    architectureKey: 'PORTFOLIO.CASES.POLYGLOT_WEB.ARCHITECTURE',
    impactKey: 'PORTFOLIO.CASES.POLYGLOT_WEB.IMPACT',
    tags: [
      'Angular',
      'React',
      'Vue.js',
      'MongoDB',
      'DynamoDB',
      'Jenkins CI/CD',
    ],
    repoUrl: 'https://github.com/cavargas40',
  },
  {
    id: 'enterprise-erp-cloud',
    category: 'distributed',
    badgeKey: 'PORTFOLIO.CASES.ENTERPRISE_ERP.BADGE',
    titleKey: 'PORTFOLIO.CASES.ENTERPRISE_ERP.TITLE',
    problemKey: 'PORTFOLIO.CASES.ENTERPRISE_ERP.PROBLEM',
    architectureKey: 'PORTFOLIO.CASES.ENTERPRISE_ERP.ARCHITECTURE',
    impactKey: 'PORTFOLIO.CASES.ENTERPRISE_ERP.IMPACT',
    tags: [
      '.NET / C#',
      'SQL Server',
      'Transact-SQL',
      'Windows Azure',
      'SCRUM',
    ],
  },
];
