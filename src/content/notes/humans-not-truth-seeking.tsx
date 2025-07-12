import { Brain, AlertTriangle, Users, Target, Shield, Lightbulb, TrendingUp, Globe, Search, Eye } from 'lucide-react'
import Link from 'next/link'

export default function HumansNotTruthSeekingContent() {
  return (
    <div className="space-y-6 text-gray-300">
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Brain className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">What is it?</h3>
            <p className="text-gray-300">
              Humans treat truth as instrumental, meaning truth is simply (and only) a tool to be utilized to further someone's personal happiness. This is most obviously seen in the dichotomy of science vs technology, where "science" is an exploration of the universe, and "technology" is the application of that exploration in order to create some useful tool for us to enrich our lives. This is why people highly prefer some forms of science (like medical research, which leads to applications like medicine) and shun other forms of science (like space exploration, where the technological applications can be harder to identify).
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-xl leading-relaxed">
        When the tool is no longer serving that purpose, it will be abandoned in favor of another tool. In certain domains, especially relating to science, engineering and medicine, the "truth claims" almost always need to adhere closely to reality in order to yield any tangible benefit. It's not very beneficial for one to believe drinking mercury will cure their disease nor pouring gasoline onto a candle will extinguish the flame, so these beliefs are quickly and immediately dispelled in favor of something that more accurately approaches what is actually true.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Examples
      </h2>
      
      <h3 className="text-2xl font-semibold text-white mt-8 mb-4 flex items-center gap-2">
        <Globe className="w-6 h-6 text-blue-400" />
        The Internet
      </h3>
      
      <p>
        This is truly the best example of humans seeking pleasure over truth. Decades ago, people joked that with the advent of the internet, almost everyone on the planet would become immediately informed of events and reach very high levels of general awareness and intelligence regarding current events, among other things. We can see today that nothing can be further from the truth. People navigate the internet in a way that appeals to what makes them feel good, and resist searching through areas that produce cognitive dissonance.
      </p>
      
      <h3 className="text-2xl font-semibold text-white mt-8 mb-4 flex items-center gap-2">
        <Eye className="w-6 h-6 text-purple-400" />
        Watching People Research
      </h3>
      
      <p>
        If you have the opportunity to watch someone research for a topic, it can be incredibly eye-opening to see how they search for information and evaluate sources. People will become incredibly skeptical of sources they don't trust, but all of the skepticism will disappear immediately if it's a source that is providing them with some type of cognitive consonance.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Limitations
      </h2>
      
      <p>
        There is nothing wrong with seeking pleasure. Arguably, normativity precedes all epistemic or metaphysical investigation anyway, meaning, we have to make some value statement about truth or the physical world before we can even decide to explore it. The problem, however, is when someone confuses their pleasure-seeking for truth-seeking. People will become confused, assuming their sense and intuitions are naturally leading them to truthful grounds, resulting in them having far more confidence in their beliefs than they should, and preventing them from developing healthy epistemic practices.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        How to Avoid
      </h2>
      
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Self-Awareness and Training
        </h3>
        <p className="text-gray-300 mb-4">
          This pitfall should be easy enough to avoid with some simple introspection. Just realize that your senses did not evolve to convey truth to you, they evolved to help you survive and to help your genes persevere, nothing more. We can easily conceive of times when "lies" may help a person survive, e.g. convincing a person that eating all pork is evil, since much of the meat may be prone to disease.
        </p>
        <p className="text-gray-300">
          If you have no formal training (a simple philosophy class or media literacy course) in formal thinking, it may be best to find some. Naturally, our minds are not inclined to rational thought, just to identifying patterns (real or imaginary) that further our survival.
        </p>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        How to help others
      </h2>
      
      <p>
        It's important to recognize this because humans who believe their senses naturally and intuitively lead them to "truthful" things rather than "pleasurable" things are likely to confuse the two when there is incentive to believe the truth about a thing. Without any immediate mechanisms to align "truth" with "reality", people's understandings can wildly diverge from reality in fantastic ways that lead to catastrophic consequences down the road. Examples of things might be things like vaccine skepticism, climate change denialism, or the mistrust of our voting process. Since these beliefs inherited from our social groups lack any immediately corrective mechanisms, it's easy for them to fester and manifest in long term negative ways.
      </p>
      
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">The Challenge</h3>
            <p className="text-gray-300">
              For friends, one have to simply direct them to engage in healthy epistemic practices. No one wants to be told that the things they believe in are done for selfish reasons. It's unlikely even if you convince someone that humans are not truth-seeking, they would change their beliefs, as they'd simply agree with you but claim that they are seeking truth while others are simply seeking pleasure.
            </p>
          </div>
        </div>
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