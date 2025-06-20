// src/app/cv/page.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Mail, Linkedin, Github, Calendar, MapPin, Award, BookOpen, Briefcase, Code2, Star, ExternalLink, ChevronRight, GraduationCap, Languages, Activity } from 'lucide-react'
import { PageWrapper } from '../../components/layout/PageWrapper'
import { Badge } from '../../components/ui/Badge'
import Link from 'next/link'
import { useRef, useState } from 'react'

const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Leading development of AI-driven web applications for international clients',
    achievements: [
      'Built scalable platforms processing 10M+ events daily',
      'Reduced client operational costs by 40% through optimization',
      'Led teams of 3-5 developers on multiple projects',
      'Implemented ML pipelines improving user engagement by 120%'
    ],
    technologies: ['React', 'Next.js', 'Python', 'AWS', 'TensorFlow']
  },
  {
    role: 'Full-Stack Developer',
    company: 'Tech Startup',
    location: 'Eindhoven, NL',
    period: '2020 - 2022',
    description: 'Developed core features for a SaaS platform serving 50K+ users',
    achievements: [
      'Architected microservices reducing response time by 60%',
      'Built real-time collaboration features using WebSockets',
      'Implemented CI/CD pipelines improving deployment efficiency',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL']
  },
  {
    role: 'Junior Developer',
    company: 'Digital Agency',
    location: 'Sofia, BG',
    period: '2018 - 2020',
    description: 'Created responsive web applications for diverse client projects',
    achievements: [
      'Delivered 20+ client projects on time and budget',
      'Improved site performance scores by average of 40%',
      'Introduced modern development practices to the team',
      'Built reusable component library used across projects'
    ],
    technologies: ['JavaScript', 'React', 'PHP', 'MySQL', 'WordPress']
  }
]

const education = [
  {
    degree: 'BSc Computer Science & Engineering',
    institution: 'Eindhoven University of Technology',
    location: 'Netherlands',
    period: '2021 - 2025',
    description: 'Comprehensive foundation in software engineering, algorithms, and computer systems',
    achievements: ['Graduated July 2025', 'Focus on Software Engineering & AI']
  },
  {
    degree: 'High School Diploma - Mathematics & Natural Sciences',
    institution: 'School of Mathematics and Natural Sciences',
    location: 'Burgas, Bulgaria',
    period: '2015 - 2021',
    description: 'Specialized mathematics and natural sciences education',
    achievements: ['Strong foundation in Mathematics', 'Preparation for technical studies']
  }
]

const skills = {
  technical: [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 92 },
    { name: 'Python', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'AI/Machine Learning', level: 80 },
    { name: 'Cloud (AWS/GCP)', level: 82 },
    { name: 'Database Design', level: 87 },
    { name: 'System Architecture', level: 85 }
  ],
  soft: [
    'Problem Solving',
    'Team Leadership',
    'Client Communication',
    'Project Management',
    'Technical Writing',
    'Mentoring',
    'Cross-cultural Collaboration',
    'Agile Methodologies'
  ],
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'Bulgarian', level: 'Native' },
    { name: 'Dutch', level: 'Intermediate' },
    { name: 'Russian', level: 'Basic' }
  ]
}

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', year: '2023' },
  { name: 'Google Cloud Professional', issuer: 'Google', year: '2022' },
  { name: 'Advanced React Patterns', issuer: 'Epic React', year: '2022' },
  { name: 'Machine Learning Specialization', issuer: 'Coursera', year: '2021' }
]

const achievements = [
  'Built platform serving 30M+ users globally',
  'Open source contributor with 1K+ GitHub stars',
  'Improved client revenue by 200% through optimization',
  'Worked with clients from 15+ countries',
  'Technical blog with 50K+ monthly readers',
  '99.9% project success rate'
]

export default function CVPage() {
  const [activeSection, setActiveSection] = useState('experience')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <PageWrapper>
      <div ref={containerRef}>
        {/* Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
          style={{ width: progressWidth }}
        />
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-32 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
            
            {/* Animated code snippets */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute font-mono text-xs text-purple-300"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {['const', 'function', 'import', 'export', 'async'][i]}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-4">
                Strahil
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Peykov</span>
              </h1>
              <p className="text-2xl text-gray-400 mb-6">Full-Stack Developer & Digital Architect</p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Eindhoven, NL</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>strahil.peykov@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/strahil-peykov</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                  <span className="text-xs opacity-70">(Updated Jan 2024)</span>
                </motion.button>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Get in touch
                </Link>
              </div>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { label: 'Years Experience', value: '6+' },
                { label: 'Projects Completed', value: '50+' },
                { label: 'Happy Clients', value: '30+' },
                { label: 'Technologies', value: '25+' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="sticky top-20 z-30 px-6 py-4 bg-slate-950/90 backdrop-blur-xl border-y border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {['experience', 'education', 'skills', 'achievements'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-2 rounded-full font-medium capitalize transition-all whitespace-nowrap ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <div className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Experience Section */}
            {activeSection === 'experience' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl font-display font-bold text-white">Professional Experience</h2>
                </div>
                
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline line */}
                      {index < experience.length - 1 && (
                        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent" />
                      )}
                      
                      <div className="flex gap-6">
                        {/* Timeline dot */}
                        <div className="relative z-10 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-950 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 absolute" />
                          <Briefcase className="w-6 h-6 text-purple-400 relative z-10" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                              <p className="text-purple-400">{job.company}</p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {job.period}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 mb-4">{job.description}</p>
                          
                          {/* Achievements */}
                          <div className="space-y-2 mb-4">
                            {job.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge key={tech} variant="purple" size="sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Education Section */}
            {activeSection === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl font-display font-bold text-white">Education</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6 mb-12">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all h-full">
                        <div className="flex items-start justify-between mb-4">
                          <GraduationCap className="w-8 h-8 text-purple-400" />
                          <span className="text-sm text-gray-500">{edu.period}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                        <p className="text-purple-400 mb-1">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mb-4">{edu.location}</p>
                        
                        <p className="text-gray-400 mb-4">{edu.description}</p>
                        
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <Award className="w-4 h-4 text-purple-400" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Certifications */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-6">Certifications</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all"
                      >
                        <Award className="w-8 h-8 text-purple-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-medium">{cert.name}</h4>
                          <p className="text-sm text-gray-500">{cert.issuer} • {cert.year}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Skills Section */}
            {activeSection === 'skills' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Code2 className="w-8 h-8 text-blue-400" />
                  <h2 className="text-3xl font-display font-bold text-white">Skills & Expertise</h2>
                </div>
                
                {/* Technical Skills */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
                  
                  <div className="space-y-4">
                    {skills.technical.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Soft Skills */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-white mb-6">Soft Skills</h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {skills.soft.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Badge variant="default" size="md">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Languages */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Languages className="w-6 h-6 text-purple-400" />
                    Languages
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center hover:border-purple-500/30 transition-all"
                      >
                        <h4 className="text-white font-medium mb-1">{lang.name}</h4>
                        <p className="text-sm text-purple-400">{lang.level}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Achievements Section */}
            {activeSection === 'achievements' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-3xl font-display font-bold text-white">Key Achievements</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all">
                          <p className="text-lg text-white">{achievement}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 text-center"
                >
                  <p className="text-gray-400 mb-6">
                    Interested in working together? Let's discuss your project!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                  >
                    Start a conversation
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
