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
  id: 'ai' | 'systems' | 'backend' | 'cloud' | 'frontend';
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

export type CaseStudyCategory = 'all' | 'ai' | 'distributed' | 'fullstack' | 'cloud';

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
      'Spec-Driven Development',
      'Agent Harnesses & Guardrails',
      'Context Engineering',
      'Agentic Coding (Claude Code, Cursor, Antigravity)',
      'LLM Prompt & Tool Design',
      'Automated Spec Verification',
    ],
    highlight: true,
  },
  {
    id: 'systems',
    icon: 'SYS',
    titleKey: 'CAPABILITIES.PILLARS.SYSTEMS.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.SYSTEMS.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.SYSTEMS.DESCRIPTION',
    skills: [
      'Rust',
      'Golang',
      'TypeScript & Node.js',
      'C# / .NET Enterprise Systems',
      'Memory Safety & High Concurrency',
      'Linux Systems & Shell Scripting',
    ],
  },
  {
    id: 'backend',
    icon: 'BE',
    titleKey: 'CAPABILITIES.PILLARS.BACKEND.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.BACKEND.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.BACKEND.DESCRIPTION',
    skills: [
      'NestJS & Express',
      'Apache Kafka (Event Streaming)',
      'GraphQL & gRPC APIs',
      'TypeORM & Prisma ORMs',
      'PostgreSQL & Redis',
      'Distributed Microservices Architecture',
    ],
  },
  {
    id: 'cloud',
    icon: 'OPS',
    titleKey: 'CAPABILITIES.PILLARS.CLOUD.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.CLOUD.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.CLOUD.DESCRIPTION',
    skills: [
      'AWS & Azure Cloud Platforms',
      'Terraform & Azure Bicep IaC',
      'DRY Reusable CI/CD Pipelines',
      'GitHub Actions, ADO, Bitbucket Pipelines',
      'Docker & Container Orchestration',
      'Zero-Downtime Deployment & Observability',
    ],
  },
  {
    id: 'frontend',
    icon: 'FE',
    titleKey: 'CAPABILITIES.PILLARS.FRONTEND.TITLE',
    subtitleKey: 'CAPABILITIES.PILLARS.FRONTEND.SUBTITLE',
    descriptionKey: 'CAPABILITIES.PILLARS.FRONTEND.DESCRIPTION',
    skills: [
      'Angular (Signals & Standalone)',
      'React & Vue.js',
      'Accessibility (a11y / WCAG 2.1 AA)',
      'Vite & Build Tooling',
      'Playwright & Cypress E2E',
      'Karma / Jasmine Unit Testing',
      'Responsive SCSS & i18n Architectures',
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
    artifact: 'specs/config.yaml',
    trace: {
      title: 'ARTIFACT // specs/config.yaml',
      status: 'STATUS: CONTEXT_BOUNDARIES_LOCKED',
      code: `schema: spec-driven\ncontext: |\n  Role: Staff Fullstack & AI Systems Engineer\n  Domain: Distributed Systems, Resilient Web, a11y & AI Harnesses\n  Standards: WCAG 2.1 AA, Deterministic Execution, Zero Drift`,
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
      code: `### Requirement: Deterministic AI Systems Workflow\nThe system SHALL enforce specification contracts prior to code generation.\n\n#### Scenario: Contract Verification\n- WHEN an agent executes a planned task\n- THEN verification gates validate architectural adherence`,
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
      title: 'ARTIFACT // changes/spec-driven-architecture/tasks.md',
      status: 'STATUS: DETERMINISTIC_EXECUTION_READY',
      code: `- [x] 1.1 Specification contract & domain boundary definition\n- [x] 1.2 Agent context engineering & guardrail configuration\n- [x] 1.3 Deterministic execution & automated regression verification`,
    },
  },
  {
    step: '04',
    badge: 'CI / Gates',
    titleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.VERIFY.TITLE',
    subtitleKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.VERIFY.SUBTITLE',
    descriptionKey: 'PORTFOLIO.AI_SHOWCASE.STEPS.VERIFY.DESCRIPTION',
    artifact: 'CI Verification & Quality Gates',
    trace: {
      title: 'ARTIFACT // verification/quality-gate.log',
      status: 'STATUS: ALL QUALITY GATES GREEN',
      code: `$ spec-verify   -> 100% specification contracts validated\n$ test:suite    -> All test suites green (0 regressions)\n$ quality-gate  -> Zero architectural drift detected`,
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
      'Technical Specs',
      'Agent Harnesses',
      'Context Engineering',
      'Multi-Model Guardrails',
      'Quality Gates',
      'Automated Verification',
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
    id: 'cloud-iac-pipelines',
    category: 'cloud',
    badgeKey: 'PORTFOLIO.CASES.CLOUD_IAC.BADGE',
    titleKey: 'PORTFOLIO.CASES.CLOUD_IAC.TITLE',
    problemKey: 'PORTFOLIO.CASES.CLOUD_IAC.PROBLEM',
    architectureKey: 'PORTFOLIO.CASES.CLOUD_IAC.ARCHITECTURE',
    impactKey: 'PORTFOLIO.CASES.CLOUD_IAC.IMPACT',
    tags: [
      'AWS',
      'Azure',
      'Terraform',
      'Bicep',
      'GitHub Actions',
      'Azure DevOps',
      'Bitbucket Pipelines',
    ],
    repoUrl: 'https://github.com/cavargas40',
  },
  {
    id: 'reactive-web-platforms',
    category: 'fullstack',
    badgeKey: 'PORTFOLIO.CASES.REACTIVE_WEB.BADGE',
    titleKey: 'PORTFOLIO.CASES.REACTIVE_WEB.TITLE',
    problemKey: 'PORTFOLIO.CASES.REACTIVE_WEB.PROBLEM',
    architectureKey: 'PORTFOLIO.CASES.REACTIVE_WEB.ARCHITECTURE',
    impactKey: 'PORTFOLIO.CASES.REACTIVE_WEB.IMPACT',
    tags: [
      'Angular',
      'React',
      'Vue.js',
      'Accessibility (a11y)',
      'Vite',
      'Playwright',
      'Cypress',
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
