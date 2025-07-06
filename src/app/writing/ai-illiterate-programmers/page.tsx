'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, MessageSquare, Share2, Bookmark, AlertTriangle, Code2, Brain } from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '../../../components/layout/PageWrapper'
import { Badge } from '../../../components/ui/Badge'

export default function AIIlliterateProgrammersPost() {
  return (
    <PageWrapper>
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="warning">Opinion</Badge>
                <Badge variant="purple">Technology</Badge>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
                Is AI Creating a Generation of
                <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text"> Illiterate Programmers?</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
                The double-edged sword of AI coding assistants: How tools meant to enhance productivity 
                might be undermining fundamental programming skills.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>January 15, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Strahil Peykov</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-gray-300"
              >
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">The Silent Crisis</h3>
                      <p className="text-gray-300">
                        A junior developer recently asked me: "Why would I learn how quicksort works when 
                        GitHub Copilot can write it for me?" This question encapsulates a growing problem 
                        in our industry.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl leading-relaxed">
                  We're witnessing an unprecedented shift in how people learn to code. AI assistants like 
                  GitHub Copilot, ChatGPT, and Claude have become indispensable tools for many developers. 
                  But there's a dark side to this convenience that we need to talk about.
                </p>
                
                <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
                  The Dependency Trap
                </h2>
                
                <p>
                  I've been coding for over a decade, and I've seen the landscape change dramatically. 
                  When I started, Stack Overflow was the go-to resource. You'd search for a problem, 
                  find similar issues, understand the solutions, and adapt them to your needs. The key 
                  word here is <strong className="text-white">understand</strong>.
                </p>
                
                <p>
                  Today, I watch junior developers type a comment like <code className="bg-slate-800 px-2 py-1 rounded">
                  // function to validate email</code> and wait for Copilot to autocomplete the entire 
                  implementation. They test it, it works, and they move on. But ask them to explain the 
                  regex pattern or why certain edge cases matter, and you're met with blank stares.
                </p>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 my-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-blue-400" />
                    Real Example from Code Review
                  </h3>
                  <pre className="text-sm font-mono text-gray-400 overflow-x-auto">
{`// Developer's comment
// sort users by registration date

// Copilot's suggestion (accepted without thought)
users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// Problem: No null checks, assumes dates are valid
// Better approach they didn't consider:
users.sort((a, b) => {
  if (!a.createdAt || !b.createdAt) return 0;
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);
  if (isNaN(dateA) || isNaN(dateB)) return 0;
  return dateB - dateA;
});`}
                  </pre>
                </div>
                
                <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
                  The Three Types of AI-Dependent Developers
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
                    <h3 className="text-xl font-semibold text-white mb-3">The Copy-Paste Coder</h3>
                    <p className="text-gray-300">
                      Treats AI suggestions like divine truth. Never questions, never modifies, never 
                      understands. Their code works until it doesn't, and then they're completely lost.
                    </p>
                  </div>
                  
                  <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
                    <h3 className="text-xl font-semibold text-white mb-3">The Prompt Engineer</h3>
                    <p className="text-gray-300">
                      Has mastered the art of writing prompts but couldn't implement FizzBuzz without AI. 
                      They're incredibly productive until the AI service goes down or they hit an edge case 
                      the AI wasn't trained on.
                    </p>
                  </div>
                  
                  <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
                    <h3 className="text-xl font-semibold text-white mb-3">The Learned Helplessness Developer</h3>
                    <p className="text-gray-300">
                      Started learning with AI from day one. Literally doesn't know how to code without 
                      autocomplete. The programming equivalent of someone who can't do basic math without 
                      a calculator.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
                  Why This Matters
                </h2>
                
                <p>
                  You might think, "So what? If the code works, who cares how it was written?" Here's why 
                  it matters:
                </p>
                
                <ul className="space-y-4 my-6">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold flex-shrink-0">1.</span>
                    <div>
                      <strong className="text-white">Debugging Becomes Impossible:</strong> When something 
                      breaks (and it always does), these developers can't fix it because they don't 
                      understand what they wrote.
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold flex-shrink-0">2.</span>
                    <div>
                      <strong className="text-white">Security Vulnerabilities:</strong> AI often suggests 
                      code with subtle security flaws. Without understanding, developers blindly introduce 
                      vulnerabilities.
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold flex-shrink-0">3.</span>
                    <div>
                      <strong className="text-white">Innovation Stagnates:</strong> True innovation comes 
                      from deep understanding. AI-dependent developers can only create variations of what 
                      already exists.
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold flex-shrink-0">4.</span>
                    <div>
                      <strong className="text-white">Career Ceiling:</strong> Senior positions require 
                      architectural thinking and problem-solving skills that can't be outsourced to AI.
                    </div>
                  </li>
                </ul>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-8">
                  <div className="flex items-start gap-3">
                    <Brain className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">The Paradox</h3>
                      <p className="text-gray-300">
                        AI tools are most useful to those who already understand programming deeply. They 
                        accelerate experienced developers while potentially crippling beginners. It's like 
                        giving a Formula 1 car to someone who never learned to drive.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
                  The Path Forward
                </h2>
                
                <p>
                  We're at a critical juncture in software development. AI tools are here to stay, and 
                  they'll only get more powerful. The question is: will we use them to augment our 
                  abilities or replace them?
                </p>
                
                <p>
                  For experienced developers, the message is clear: embrace these tools but maintain 
                  your fundamentals. For beginners, the path is harder but more important: resist the 
                  temptation to shortcut your learning. Build a strong foundation first, then add AI 
                  to your toolkit.
                </p>
                
                <p>
                  The future belongs to developers who can leverage AI while maintaining deep technical 
                  knowledge—those who can think critically, solve complex problems, and understand not 
                  just <em>what</em> their code does, but <em>why</em> it works.
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 mt-12 border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Final Thought</h3>
                  <p className="text-gray-300 italic">
                    "The most dangerous phrase in software development isn't 'I don't know.' It's 
                    'The AI said this would work.' The former leads to learning; the latter leads 
                    to digital illiteracy."
                  </p>
                  <p className="text-sm text-gray-500 mt-4">— Me, probably overthinking in the shower</p>
                </div>
              </motion.div>
            </div>
            
            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-slate-800">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">42 comments</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span className="text-sm">Save</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-full transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageWrapper>
  )
}