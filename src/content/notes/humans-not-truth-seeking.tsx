import { Brain, AlertTriangle, Users, Target, Shield, Lightbulb, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HumansNotTruthSeekingContent() {
  return (
    <div className="space-y-6 text-gray-300">
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Brain className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Core Insight</h3>
            <p className="text-gray-300">
              After years of arguing with people across every imaginable platform and context, 
              I've reached an uncomfortable conclusion: humans didn't evolve to find truth. 
              We evolved to survive, reproduce, and maintain social cohesion. Truth is, at best, 
              a secondary concern.
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-xl leading-relaxed">
        This isn't cynicism, it's biology. Understanding this fundamental reality about human 
        cognition is the first step to having more productive conversations and, paradoxically, 
        getting closer to truth.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Evolutionary Mismatch
      </h2>
      
      <p>
        For 99.9% of human history, being right about abstract concepts didn't matter. What 
        mattered was:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" />
            Survival Priorities
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Avoiding predators (better safe than sorry)</li>
            <li>• Finding food (pattern recognition over accuracy)</li>
            <li>• Recognizing threats (false positives beat false negatives)</li>
            <li>• Quick decisions (speed over precision)</li>
          </ul>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            Social Priorities
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Maintaining group cohesion</li>
            <li>• Signaling loyalty and belonging</li>
            <li>• Avoiding social ostracism</li>
            <li>• Building alliances and coalitions</li>
          </ul>
        </div>
      </div>
      
      <p>
        The human who stopped to verify whether that rustling bush really contained a lion 
        didn't pass on their genes. The one who ran first and asked questions later did.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Social Brain Hypothesis
      </h2>
      
      <p>
        Our large brains didn't evolve to solve physics equations or philosophize about 
        truth. They evolved to navigate complex social environments. This has profound 
        implications for how we process information:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <span className="text-purple-400 font-bold">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Tribal Truth</h4>
            <p className="text-gray-300">
              We instinctively adopt beliefs that align with our "tribe." This isn't 
              stupidity, it's a survival mechanism. In ancestral environments, being cast 
              out from your group meant death.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <span className="text-purple-400 font-bold">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Motivated Reasoning</h4>
            <p className="text-gray-300">
              We don't reason to find truth; we reason to justify positions we've already 
              taken. Our conscious reasoning is often just our brain's PR department, 
              crafting explanations for decisions made by unconscious processes.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <span className="text-purple-400 font-bold">3</span>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Confirmation Bias as Feature</h4>
            <p className="text-gray-300">
              We seek information that confirms our existing beliefs because, historically, 
              questioning fundamental group beliefs was dangerous. Unity was more important 
              than accuracy.
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Modern Implications
      </h2>
      
      <p>
        In the modern world, these ancient programs create massive problems:
      </p>
      
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          The Information Age Paradox
        </h3>
        <p className="text-gray-300 mb-4">
          We have more access to information than ever before, yet we seem less able to 
          agree on basic facts. Why? Because our brains treat information like weapons 
          in tribal warfare, not tools for understanding reality.
        </p>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Social media amplifies tribal dynamics</li>
          <li>• Algorithm-driven content reinforces biases</li>
          <li>• Information overload triggers defensive thinking</li>
          <li>• Online discourse mimics tribal conflict</li>
        </ul>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Case Studies from My Arguments
      </h2>
      
      <p>
        Here are patterns I've observed repeatedly across thousands of online discussions:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3">The Backfire Effect</h3>
          <p className="text-gray-300 mb-3">
            When presented with evidence that contradicts their beliefs, people often 
            double down rather than reconsider. I once spent three hours showing someone 
            peer-reviewed studies about vaccine safety. Their response? "That just proves 
            how deep the conspiracy goes."
          </p>
          <p className="text-sm text-gray-500">
            <strong>Lesson:</strong> Facts alone rarely change minds when identity is at stake.
          </p>
        </div>
        
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3">The Intelligence Trap</h3>
          <p className="text-gray-300 mb-3">
            Surprisingly, the most intelligent people are often the hardest to convince. 
            They're not better at finding truth, they're better at rationalizing their 
            existing beliefs. Their intelligence becomes a tool for sophisticated 
            self-deception.
          </p>
          <p className="text-sm text-gray-500">
            <strong>Lesson:</strong> Intelligence without intellectual humility is a liability.
          </p>
        </div>
        
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3">The Social Proof Override</h3>
          <p className="text-gray-300 mb-3">
            I've watched people abandon well-reasoned positions the moment they realized 
            their social group disagreed. The fear of social rejection overrides logical 
            thinking almost every time.
          </p>
          <p className="text-sm text-gray-500">
            <strong>Lesson:</strong> Address social concerns before logical ones.
          </p>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        So What Do We Do?
      </h2>
      
      <p>
        Understanding that humans aren't truth-seeking machines isn't cause for despair, it's 
        the beginning of wisdom. Here's how to work with human nature instead of against it:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            For Protecting Your Own Mind
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Actively seek out smart people who disagree with you</li>
            <li>• Practice changing your mind on small things</li>
            <li>• Notice when you're reasoning emotionally</li>
            <li>• Build identity around process, not positions</li>
            <li>• Embrace uncertainty as strength, not weakness</li>
          </ul>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-blue-400" />
            For Persuading Others
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Start with shared values and common ground</li>
            <li>• Make it socially safe to change positions</li>
            <li>• Tell stories instead of citing statistics</li>
            <li>• Help them save face when changing views</li>
            <li>• Focus on incremental shifts, not instant conversion</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Meta-Truth
      </h2>
      
      <p>
        Here's the paradox: recognizing that we're not truth-seeking machines is itself a 
        truth that our brains resist. It threatens our self-image as rational beings. But 
        this recognition is also liberating.
      </p>
      
      <p>
        Once you understand that everyone (including you) is running ancient software 
        optimized for tribal politics rather than truth-seeking, you can:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-2">
          <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Have more compassion for others' "irrational" beliefs</span>
        </li>
        <li className="flex items-start gap-2">
          <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Be more skeptical of your own certainties</span>
        </li>
        <li className="flex items-start gap-2">
          <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Design better systems that account for human nature</span>
        </li>
        <li className="flex items-start gap-2">
          <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Actually get closer to truth by acknowledging our limitations</span>
        </li>
      </ul>
      
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 mt-12 border border-purple-500/20">
        <h3 className="text-xl font-semibold text-white mb-4">Final Thought</h3>
        <p className="text-gray-300 mb-4">
          We may not be truth-seeking machines, but we can build tools and practices that 
          help us transcend our biological limitations. Science, mathematics, and formal 
          logic are humanity's attempts to create external systems that correct for our 
          internal biases.
        </p>
        <p className="text-gray-300 italic">
          The goal isn't to become perfectly rational beings, that's impossible. The goal 
          is to be slightly less wrong tomorrow than we are today. And that starts with 
          admitting we're not designed to be right.
        </p>
      </div>
      
      <div className="mt-12 p-6 bg-slate-900/30 rounded-xl border border-slate-800">
        <h3 className="text-lg font-semibold text-white mb-3">Related Ideas</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/notes/constellation-of-beliefs" className="text-blue-400 hover:text-blue-300">
              → The Constellation of Beliefs
            </Link>
          </li>
          <li>
            <Link href="/notes/social-incentives-beliefs" className="text-blue-400 hover:text-blue-300">
              → Social Incentives Dictate Beliefs
            </Link>
          </li>
          <li>
            <Link href="/notes/aesthetic-vs-function" className="text-blue-400 hover:text-blue-300">
              → Aesthetic vs Function in Decision Making
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}