'use-client'
import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Code, Briefcase, LucideIcon } from "lucide-react"
import { Card } from "../components/Card"

interface TimeLineItem {
    icon: LucideIcon,
    title: string,
    place: string,
    date: string,
    description: string,
    category: string,
    color: string,
    details?: string[]
}

const timeline: TimeLineItem[] = [
  {
    icon: GraduationCap,
    title: "Master's Student in AI & Data Science",
    place: "University of Algiers",
    date: "2023 - 2025",
    description: "Deep dive into machine learning and advanced data engineering.",
    category: "education",
    color: "from-purple-500 to-pink-600",
    details: [
      "Machine Learning & Neural Networks",
      "Big Data with Hadoop & Spark",
      "Data Visualization & Communication",
      "Deep Learning and Natural Language Processing"
    ]
  },
  {
    icon: Briefcase,
    title: "Frontend Developer Intern",
    place: "DigiTech Solutions",
    date: "2024",
    description: "Contributed to UI development for a SaaS product using React and Tailwind CSS.",
    category: "professional",
    color: "from-green-400 to-emerald-600",
    details: [
      "Implemented responsive dashboard using React.js",
      "Integrated REST APIs with Axios",
      "Participated in sprint planning and Agile ceremonies"
    ]
  },
  {
    icon: GraduationCap,
    title: "Bachelor's in Computer Science",
    place: "Higher School of Computer Science (ESI)",
    date: "2020 - 2023",
    description: "Fundamentals of computing and software engineering practices.",
    category: "education",
    color: "from-blue-500 to-indigo-600",
    details: [
      "Algorithms & Data Structures",
      "Software Engineering",
      "Web Development Fundamentals",
      "Database Systems"
    ]
  },
  {
    icon: Briefcase,
    title: "Full Stack Developer (Freelance)",
    place: "Self-Employed",
    date: "2023",
    description: "Developed and deployed full stack solutions for small businesses.",
    category: "professional",
    color: "from-yellow-400 to-orange-500",
    details: [
      "Built CRUD apps using MERN stack",
      "Deployed apps on Vercel & Render",
      "Authentication via JWT and OAuth"
    ]
  },
  {
    icon: GraduationCap,
    title: "Online Certification in Cloud & DevOps",
    place: "Coursera / AWS Academy",
    date: "2022",
    description: "Learned the essentials of CI/CD and cloud deployment.",
    category: "education",
    color: "from-sky-500 to-cyan-600",
    details: [
      "Docker & Kubernetes Basics",
      "CI/CD with GitHub Actions",
      "AWS EC2, S3, Lambda usage"
    ]
  },
  {
    icon: Briefcase,
    title: "Junior Web Developer",
    place: "CodeNest Agency",
    date: "2022",
    description: "Assisted in building dynamic websites and internal tools.",
    category: "professional",
    color: "from-red-500 to-rose-600",
    details: [
      "Styled UIs with Tailwind CSS",
      "Used Vue.js for dynamic frontend components",
      "Maintained backend logic with Node.js & Express"
    ]
  }
];

const containerAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemAnimation = {
    hidden : {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

interface TimeLineCardProps {
    item: TimeLineItem
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({ item }) => {
    return (
        <motion.div
          variants={{ itemAnimation }}
          className="group relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
            <div
              className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition-all duration-500 bg-gradient-to-br ${item.color}
                blur-xl -z-10
              `}
            />
            <Card className="h-full p-6 rounded-2xl border-2 border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20`}>
                                <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-medium text-white/80 bg-white/5 px-3 py-1 rounded-full">
                                {item.category}
                            </span>
                        </div>
                        <span className="text-sm font-medium text-white/60">
                            {item.date}
                        </span>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-300">
                            {item.title}
                        </h3>
                        <p className="text-white/60 font-medium text-sm">
                            {item.place}
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                            {item.description}
                        </p>
                        {item.details && (
                            <motion.ul 
                              initial= {{ opacity: 0 }}
                              animate= {{ opacity: 1 }}
                              className="mt-3 space-y-2"
                            >
                                {item.details.map((detail: string, idx: number) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-sm text-white/70"
                                    >
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/50" />
                                        {detail}
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}


const AboutMe: React.FC = () => {
    return (
        <section
          id="about"
          className="relative min-h-screen pt-24 pb-16 overflow-hidden"
        >
            <motion.div
              className="absolute inset-0 bg-[#0A0F1C]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 30%),
                  radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 30%)
                `
              }}
            >
                <motion.div
                  className="absolute inset-0"
                  initial={{ 
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: 1
                  }}
                  transition={{ 
                    duration: 1
                  }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                    <div className="absolute inset-0 backdrop-blur-3xl" />
                </motion.div>
            </motion.div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ 
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px'
                  }}
                  className="text-center mb-16"                
                >
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold"
                      whileHover={{ 
                        scale: 1.05 
                      }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 300, 
                        damping: 10 
                      }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-rose-400 animate-gradient">
                            Mon parcours
                        </span>
                    </motion.h2>
                    <p className="mt-4 text-blue-200/80 max-w-2xl mx-auto">
                        Une évolution professionnelle marquée par la passion du développement
                        et l&apos;innovation technologique
                    </p>
                </motion.div>
                <motion.div
                  initial={{ 
                    scaleX: 0 
                  }}
                  whileInView={{ 
                    scaleX: 1 
                  }}
                  viewport={{ 
                    once: true 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 
                  }}
                  className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600"
                ></motion.div>
                <motion.div
                  variants={ containerAnimation }
                  initial='hidden'
                  whileInView='visible'
                  viewport={{
                    once: true,
                    margin: '-50px'
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
                >
                    {timeline.map((item, index) => (
                        <TimeLineCard 
                          key={index}
                          item={item}
                        />
                    ))}
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px'
                  }}
                  whileHover={{
                    scale: 1.02
                  }}
                  className="mt-16 p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl shadow-blue-500/5"
                >
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <motion.h3
                          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                          whileHover={{
                            scale: 1.05
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 10
                          }}
                        >
                            Ma vision
                        </motion.h3>
                        <p className="text-blue-200 leading-relaxed">
                            Passionné par le développement web et fort d&apos;une expérience en automatique,
                            je combine expertise technique et créativité pour créer des solutions numériques
                            innovantes. Mon approche unique me permet d&apos;apporter une vision globale aux projets,
                            en alliant performance technique et expérience utilisateur optimale.
                        </p>
                        <motion.div
                          className="pt-4"
                          whileHover={{
                            scale: 1.05
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 10
                          }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm hover:bg-blue-500/20 transition-colors duration-300">
                                <Code className="w-4 h-4" />
                                Développement Web Moderne
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMe