export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  techStack: string[];
  highlights: string[];
  isCurrent?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  topics: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export const cvData = {
  name: "João Vitor de Araújo Braga",
  title: "Software Engineer",
  email: "joaovitor1702@gmail.com",
  phone: "+55 (74) 98101-8871",
  github: "https://github.com/joaovitorbraga",
  linkedin: "https://www.linkedin.com/in/vitorbraga17/",
  
  summary: "Results-driven Software Engineer with over 5 years of experience designing, developing, and maintaining scalable backend systems and APIs in high-demand environments. Strong expertise in Java, Kotlin, Spring Boot, Kafka, and microservices architecture, with additional experience in React, Node.js, and cloud-native solutions. Proven ability to work in agile teams, deliver high-quality code, and build fault-tolerant, high-availability systems for fintech and enterprise solutions.",
  
  experiences: [
    {
      company: "PicPay",
      position: "Software Engineer",
      location: "São Paulo, BR (Remote)",
      period: "Feb 2025 – Present",
      techStack: ["Java", "Kotlin", "Go", "Spring Boot", "Spring Cloud", "Kafka", "Redis", "RabbitMQ", "Spring Batch", "Prometheus", "Terraform", "AWS Glue", "GitOps"],
      highlights: [
        "Developed scalable microservices and APIs using Java, Kotlin, and Go in a distributed architecture",
        "Implemented event-driven systems with Kafka and RabbitMQ, improving real-time data processing",
        "Built batch and ETL data jobs using Spring Batch and AWS Glue for high-volume data processing",
        "Enhanced system reliability with Resilience4j, implementing circuit breakers and retries",
        "Designed GitOps-based CI/CD pipelines and improved observability with Prometheus",
        "Applied Infrastructure as Code (IaC) using Terraform to provision and manage cloud-native AWS resources"
      ],
      isCurrent: true
    },
    {
      company: "PagBank (PagSeguro Group)",
      position: "Software Engineer",
      location: "São Paulo, BR (Remote)",
      period: "Aug 2023 – Feb 2025",
      techStack: ["Kotlin", "Spring Boot", "Spring Cloud", "Kafka", "Metabase", "Jenkins"],
      highlights: [
        "Designed and implemented microservices for investment and stock market domains using clean and hexagonal architecture",
        "Created asynchronous event pipelines with Kafka and Kafka Connect",
        "Developed dashboards and BI reporting via Metabase for strategic decision-making",
        "Led improvements in CI/CD with Jenkins, reducing deployment times and errors"
      ]
    },
    {
      company: "CI&T",
      position: "Software Engineer",
      location: "Campinas, BR (Remote)",
      period: "Jun 2021 – Aug 2023",
      techStack: ["Java", "Spring Boot", "Oracle", "Kafka", "RabbitMQ", "OAuth2", "SonarQube", "Dynatrace", "DataDog"],
      highlights: [
        "Developed backend components for enterprise-grade systems in financial services",
        "Built message-driven services with Kafka and RabbitMQ for reliable, decoupled communication",
        "Enhanced database performance with optimized SQL and Oracle tuning",
        "Applied Spring Security and OAuth2.0 for secure API access and authentication",
        "Monitored systems using Dynatrace and DataDog, proactively identifying bottlenecks"
      ]
    },
    {
      company: "7Comm - Services and Technology",
      position: "Software Developer Intern",
      location: "São Paulo, BR (Remote)",
      period: "Oct 2020 – Apr 2021",
      techStack: ["Java", "Kotlin", "Spring Boot", "AngularJS", "MySQL", "Corda Blockchain"],
      highlights: [
        "Built web-based solutions integrating backend (Spring Boot) and frontend (AngularJS)",
        "Created smart contracts for blockchain-based applications using Kotlin and Corda",
        "Participated in a geolocation project for monitoring livestock in risk-prone zones"
      ]
    }
  ],
  
  freelance: {
    company: "UNEB - Universidade do Estado da Bahia",
    position: "Freelance Developer",
    location: "Juazeiro, Bahia, BR (On-site)",
    period: "Nov 2022 – Feb 2023",
    techStack: ["Spring Boot", "Spring Data", "Spring Cloud", "MySQL", "Docker", "Amazon EC2"],
    highlights: [
      "Developed a mobile application to disseminate pregnancy-related information to women",
      "Designed and implemented backend services using Spring Boot and MySQL",
      "Deployed and maintained cloud infrastructure on Amazon EC2 using Docker containers",
      "Collaborated with university stakeholders to ensure content accuracy and user accessibility"
    ]
  },
  
  education: {
    institution: "FACAPE — Faculdade de Ciências Aplicadas e Sociais de Petrolina",
    degree: "Bachelor of Science in Computer Science",
    period: "2019 – 2022",
    topics: ["Algorithms", "Data Structures", "Databases", "Distributed Systems", "System Design"]
  },
  
  skills: [
    {
      category: "Languages",
      items: ["Java", "Kotlin", "TypeScript", "JavaScript"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["Spring Boot", "Spring Cloud", "Spring Data", "Spring Batch", "React", "React Native", "Node.js", "NestJS", "AngularJS"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"]
    },
    {
      category: "Messaging & Integration",
      items: ["Kafka", "Kafka Connect", "RabbitMQ"]
    },
    {
      category: "DevOps & Monitoring",
      items: ["Jenkins", "GitOps", "Prometheus", "SonarQube", "Dynatrace", "DataDog"]
    },
    {
      category: "Practices & Architecture",
      items: ["Microservices", "Clean Architecture", "Hexagonal Architecture", "Agile", "Git", "OAuth2.0", "CI/CD", "Resilience4j"]
    }
  ],
  
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Spanish", level: "Intermediate" }
  ]
};

