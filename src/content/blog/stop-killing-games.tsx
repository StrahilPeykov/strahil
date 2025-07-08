import { AlertTriangle, Gamepad2, Shield, Scale, TrendingUp, Globe, CheckCircle, Clock } from 'lucide-react'

export default function StopKillingGamesContent() {
  return (
    <div className="space-y-6 text-gray-300">
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Recent Example</h3>
            <p className="text-gray-300">
              Ubisoft just announced they're shutting down "The Crew" servers on March 31, 2024. 
              A game people paid full price for will become completely unplayable. This isn't 
              just about one game—it's about the precedent we're setting for digital ownership.
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-xl leading-relaxed">
        As developers, we pour years of our lives into creating digital worlds. We obsess over 
        every pixel, every line of code, every user interaction. So why are we okay with these 
        creations having built-in expiration dates?
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Problem: Games as a Service, Death as a Feature
      </h2>
      
      <p>
        The shift from games as products to games as services has fundamentally changed what 
        it means to "own" a game. When you bought a Nintendo 64 cartridge, it was yours forever. 
        Today, you're essentially renting access to a server that can be shut down at any moment.
      </p>

      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Why This Matters: Beyond Gaming
      </h2>
      
      <p>
        This isn't just about gamers losing access to their favorite titles. It's about:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Cultural Preservation</h4>
            <p className="text-gray-300">
              Games are cultural artifacts. When we lose them, we lose part of our digital 
              heritage. Imagine if we couldn't watch classic films because the studios decided 
              to destroy all copies.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <Scale className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Consumer Rights</h4>
            <p className="text-gray-300">
              When you pay $70 for a game, you should own something. The current model is 
              like buying a car that the manufacturer can remotely disable whenever they 
              want.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Environmental Impact</h4>
            <p className="text-gray-300">
              Planned obsolescence in games encourages constant consumption. Players are 
              forced to buy new games not because they want to, but because their old ones 
              were killed.
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Technical Reality: It Doesn't Have to Be This Way
      </h2>
      
      <p>
        As a developer, I know the technical arguments publishers make are largely bullshit. 
      </p>
      
      <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800 my-8">
        <h3 className="text-lg font-semibold text-white mb-4">Common Excuses vs Reality</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-red-400 font-medium mb-1">"It's too expensive to maintain servers"</p>
            <p className="text-gray-400 text-sm">
              <strong className="text-green-400">Reality:</strong> Release server binaries. 
              Let the community run them. Counter-Strike 1.6 servers still run today, 
              maintained by fans at zero cost to Valve.
            </p>
          </div>
          
          <div>
            <p className="text-red-400 font-medium mb-1">"The game architecture requires our servers"</p>
            <p className="text-gray-400 text-sm">
              <strong className="text-green-400">Reality:</strong> Most "always-online" 
              requirements are artificial. The game logic usually runs fine locally—the 
              server dependency is often just DRM with extra steps.
            </p>
          </div>
          
          <div>
            <p className="text-red-400 font-medium mb-1">"It would hurt sales of our new games"</p>
            <p className="text-gray-400 text-sm">
              <strong className="text-green-400">Reality:</strong> If your new game can't 
              compete with a 10-year-old title running on community servers, maybe make 
              better games?
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        What the Stop Killing Games Movement Wants
      </h2>
      
      <p>
        The movement, spearheaded by Ross Scott (of Freeman's Mind fame), isn't asking for 
        the impossible. The demands are simple and reasonable:
      </p>
      
      <ol className="space-y-4 my-8">
        <li className="flex items-start gap-3">
          <span className="text-purple-400 font-bold flex-shrink-0">1.</span>
          <div>
            <strong className="text-white">End-of-Life Plans:</strong> When shutting down 
            a game, publishers must provide a way for customers to continue playing. This 
            could be server binaries, offline patches, or peer-to-peer functionality.
          </div>
        </li>
        
        <li className="flex items-start gap-3">
          <span className="text-purple-400 font-bold flex-shrink-0">2.</span>
          <div>
            <strong className="text-white">Clear Disclosure:</strong> Games that will become 
            unplayable must clearly state this at point of sale. No more hiding it in 
            50-page EULAs.
          </div>
        </li>
        
        <li className="flex items-start gap-3">
          <span className="text-purple-400 font-bold flex-shrink-0">3.</span>
          <div>
            <strong className="text-white">Legal Protection:</strong> Legislation preventing 
            companies from rendering purchased software intentionally non-functional.
          </div>
        </li>
      </ol>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">EU Citizens: You Can Help</h3>
            <p className="text-gray-300 mb-3">
              The movement is pushing for an EU Citizens' Initiative. If successful, this 
              would force the European Commission to consider legislation protecting games 
              from being killed.
            </p>
            <a 
              href="https://www.stopkillinggames.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn more and sign the petition
              <Shield className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        What We Can Do as Developers
      </h2>
      
      <p>
        If you're building online games, here's how you can be part of the solution:
      </p>
      
      <div className="space-y-4 my-8">
        <div className="bg-slate-900/50 rounded-xl p-6 border border-green-500/20">
          <h4 className="font-semibold text-white mb-3">Design for Longevity</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Build with eventual community hosting in mind</li>
            <li>• Separate game logic from proprietary backend services</li>
            <li>• Document your server architecture</li>
            <li>• Use standard protocols where possible</li>
          </ul>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl p-6 border border-green-500/20">
          <h4 className="font-semibold text-white mb-3">Plan Your Exit Strategy</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Have an end-of-life plan from day one</li>
            <li>• Budget for creating offline/community versions</li>
            <li>• Consider open-sourcing server code when sunsetting</li>
            <li>• Build tools for community server management</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Bigger Picture
      </h2>
      
      <p>
        This movement isn't anti-developer or even anti-publisher. It's pro-preservation, 
        pro-consumer, and ultimately pro-gaming. When games can live forever, everyone wins:
      </p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-2">
          <span className="text-green-400 mt-1">•</span>
          <span><strong className="text-white">Players</strong> get to keep what they paid for</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-400 mt-1">•</span>
          <span><strong className="text-white">Developers</strong> see their work preserved</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-400 mt-1">•</span>
          <span><strong className="text-white">Publishers</strong> build goodwill and trust</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-400 mt-1">•</span>
          <span><strong className="text-white">Culture</strong> gains permanent artifacts</span>
        </li>
      </ul>
      
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 mt-12 border border-purple-500/20">
        <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
        <p className="text-gray-300 mb-4">
          We're at a crossroads. We can accept a future where games are temporary, where 
          our digital culture has an expiration date set by corporate accountants. Or we 
          can demand better.
        </p>
        <p className="text-gray-300 italic">
          The games we create today will be someone's childhood memories tomorrow. Let's 
          make sure those memories don't come with a kill switch.
        </p>
      </div>
      
      <div className="mt-12 p-6 bg-slate-900/30 rounded-xl border border-slate-800">
        <h3 className="text-lg font-semibold text-white mb-3">Learn More</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• <a href="https://www.stopkillinggames.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Stop Killing Games Official Site</a></li>
          <li>• <a href="https://www.youtube.com/watch?v=tUAX0gnZ3Nw" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Ross Scott's Original Video</a></li>
          <li>• <a href="https://www.europarl.europa.eu/citizens-initiative/home" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">EU Citizens' Initiative Info</a></li>
        </ul>
      </div>
    </div>
  )
}