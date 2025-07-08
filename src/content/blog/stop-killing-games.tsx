import { Gamepad2, AlertTriangle, Shield, Users, Zap, ExternalLink, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function StopKillingGamesContent() {
  return (
    <div className="space-y-6 text-gray-300">
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Gamepad2 className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Digital Destruction in Progress</h3>
            <p className="text-gray-300">
              When publishers shut down game servers, they're not just ending a service—they're 
              destroying digital culture. And unlike a discontinued book or movie, these games 
              disappear forever, taking years of player investment with them.
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-xl leading-relaxed">
        Imagine buying a book, only to have the publisher break into your house months later 
        to burn it. Sounds absurd, right? Yet this is exactly what's happening in the gaming 
        world today, and most of us have accepted it as normal.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Movement That's Fighting Back
      </h2>
      
      <p>
        <a 
          href="https://citizens-initiative.europa.eu/initiatives/details/2024/000007_en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          Stop Killing Games
        </a> is a European Citizens' Initiative launched on June 19, 2024, by Ross Scott. 
        Officially registered as <strong className="text-white">ECI(2024)000007</strong>, 
        it's calling on the European Commission to require video game publishers in the EU 
        to keep games functional and playable even after they cease supporting them.
      </p>
      
      <p>
        At its core, this isn't about forcing publishers to run servers indefinitely. 
        It's about challenging the practice of selling products as "purchases" when they're 
        effectively just temporary licenses that can be revoked without warning or compensation.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Crew: A Case Study in Digital Destruction
      </h2>
      
      <p>
        The movement's legal action centers around Ubisoft's handling of "The Crew," 
        which became a perfect example of everything wrong with the current system.
      </p>
      
      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 my-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-red-400" />
          Timeline of Destruction
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-gray-400">December 14, 2023:</span>
            <span className="text-white">Ubisoft delists The Crew from digital platforms</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span className="text-gray-400">December 2023:</span>
            <span className="text-white">Microtransaction sales suspended</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span className="text-gray-400">March 31, 2024:</span>
            <span className="text-white">Servers shut down permanently</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <span className="text-gray-400">Post-shutdown:</span>
            <span className="text-white">Licenses revoked with no refunds or game file access</span>
          </div>
        </div>
      </div>
      
      <p>
        This wasn't just a server shutdown—it was systematic erasure. Players who had purchased 
        the game lost all access, despite having paid full price for what was marketed as a 
        purchase. No refunds were offered, no offline mode was provided, and the game files 
        themselves became inaccessible.
      </p>
      
      <p>
        The most troubling part? <strong className="text-white">The same fate awaits games like 
        Need for Speed (2015)</strong> unless something changes. These aren't isolated incidents; 
        they're a business model.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Pirate Software Controversy
      </h2>
      
      <p>
        The movement faced significant pushback when Pirate Software (Thor) released a critical 
        video titled <a 
          href="https://youtu.be/ioqSvLqB46Y?si=6Iwo-uy_3nt9fGRG" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          "Stop Killing Games"
        </a> on August 6, 2024. His critique centered on what he perceived as the initiative's 
        vagueness and potential damage to live service games.
      </p>
      
      <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800 my-8">
        <h3 className="text-lg font-semibold text-white mb-3">The Misunderstanding</h3>
        <p className="text-gray-400 mb-4">
          Thor quoted the official objectives summary:
        </p>
        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300 bg-slate-800/50 p-4 rounded-r-lg">
          "This initiative calls to require publishers that sell or license videogames to consumers 
          in the European Union [...] to leave said videogames in a functional (playable) state. 
          [...] The initiative seeks to prevent the remote disabling of videogames by the publishers, 
          before providing reasonable means to continue functioning of said videogames without the 
          involvement from the side of the publisher."
        </blockquote>
        <p className="text-gray-400 mt-4">
          His criticism: <em>"this isn't always possible in all video games and it doesn't call out 
          the specific practice that this is supposedly trying to defeat. It is incredibly vague 
          and will damage all live service games."</em>
        </p>
      </div>
      
      <p>
        But here's the crucial point Thor missed: <strong className="text-white">this vagueness 
        is intentional and necessary</strong>. Stop Killing Games is a European Citizen's Initiative, 
        not a law or legislative proposal. It's a formal request to start a conversation and ask 
        the European Commission to consider drafting legislation.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Technical Reality vs. Misconceptions
      </h2>
      
      <p>
        One of Thor's main technical arguments deserves closer examination. He claimed that keeping 
        games like League of Legends functional would require rearchitecting the entire game because 
        of their client-server architecture.
      </p>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">The Technical Truth</h3>
            <p className="text-gray-300 mb-4">
              Most modern online games use client-server architecture where the client sends input 
              and the server processes logic and sends back results. This prevents cheating since 
              important calculations never happen on player machines.
            </p>
            <p className="text-gray-300">
              However, Thor's claim that "all of the math, all of the game, everything happens on 
              the server" isn't entirely accurate. While servers are the ultimate authority, clients 
              still make predictions locally for responsiveness and receive more information than 
              what's displayed (which is why wallhacks are possible).
            </p>
          </div>
        </div>
      </div>
      
      <p>
        More importantly, preservation doesn't require massive rearchitecture. Publishers could 
        release server binaries or offer lightweight self-hosting versions. The client wouldn't 
        need reworking since it's already built to communicate with servers—whether official or 
        player-hosted.
      </p>
      
      <p>
        <strong className="text-white">The real obstacle isn't technical; it's legal and commercial.</strong> 
        Publishers simply don't want to provide these options because they prefer controlled obsolescence.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Addressing the "Why Preserve Dead Games?" Question
      </h2>
      
      <p>
        In his follow-up video on August 8, Thor questioned the value of preserving "dead" multiplayer 
        games: <em>"when a multiplayer game dies... why would you want to preserve a game in that 
        state? You want to take down these live service games, put them up on a private server and 
        then play it with a couple of people?"</em>
      </p>
      
      <p>
        This misses the fundamental point: <strong className="text-white">if people want to play 
        these games, why not let them?</strong> Gaming history is filled with communities that have 
        kept "dead" games alive for decades. The question isn't whether everyone will play them—it's 
        whether we should allow entire pieces of digital culture to be erased forever.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        The Current State: Fighting for Digital Rights
      </h2>
      
      <p>
        On June 23, 2025, Ross Scott released <a 
          href="https://youtu.be/HIfRLujXtUo?si=lLQN2WOl24gAp7Dr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          "The end of Stop Killing Games,"
        </a> acknowledging that the initiative was toward its finish line with limited success. 
        Scott addressed the Pirate Software controversy directly, explaining that he'd avoided 
        responding earlier to prevent "drama farming" that might delegitimize the movement.
      </p>
      
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">The Misinformation Problem</h3>
            <p className="text-gray-300 mb-4">
              Scott revealed that Pirate Software had fundamentally misunderstood the initiative 
              on stream, claiming it was specifically about single-player DRM when it actually 
              addresses the broader issue of purchased games being remotely disabled.
            </p>
            <p className="text-gray-300">
              Despite the published videos still misrepresenting the initiative, Pirate Software 
              has shown little willingness to acknowledge these errors or their detrimental impact 
              on the movement.
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        What's Really at Stake
      </h2>
      
      <p>
        The core issue isn't licensing transparency—it's the hostile terms themselves. Take Blizzard's 
        license agreement, which states they <em>"reserve the right to terminate this Agreement at 
        any time for any reason, or for no reason, with or without notice to you."</em> The language 
        is clear, but the terms are fundamentally anti-consumer.
      </p>
      
      <p>
        For centuries, basic commerce has operated on simple principles: when you pay money, you 
        either keep what you bought or, for services, you're told when access ends. Most online-only 
        games violate both principles.
      </p>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Legal Framework: A Glimmer of Hope
      </h2>
      
      <p>
        There's reason for optimism in EU law. According to a <a 
          href="https://www.europarl.europa.eu/doceo/document/P-9-2024-001352-ASW_EN.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          European Commission response
        </a>, the standard "terminate at any time for any reason" clauses might violate 
        Directive 93/13/EEC, which <em>"prohibits unfair terms causing a significant imbalance 
        in the parties' rights and obligations to the detriment of consumers."</em>
      </p>
      
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-8">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Legal Precedent</h3>
            <p className="text-gray-300">
              The Commission specifically noted that <em>"Terms such as those related to the 
              unilateral modification or termination by the trader of a contract of indeterminate 
              duration without reasonable notice may be deemed unfair subject to a case-by-case 
              assessment."</em>
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        What You Can Still Do
      </h2>
      
      <p>
        Despite the challenges, the movement isn't over. There are two crucial opportunities 
        that could change the course of gaming history:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            UK Government Petition
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            A <a 
              href="https://petition.parliament.uk/petitions/702074" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              government petition
            </a> can bring this issue before UK Parliament for debate.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ExternalLink className="w-3 h-3" />
            <span>Sign the UK petition</span>
          </div>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            European Citizens' Initiative
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            The EU initiative remains the most powerful tool available, with potential to set 
            global precedent through consumer protection laws.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ExternalLink className="w-3 h-3" />
            <span>Support the EU initiative</span>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-bold text-white mt-12 mb-6">
        Why This Matters Beyond Gaming
      </h2>
      
      <p>
        The Stop Killing Games movement represents something larger than gaming preservation. 
        It's about establishing digital ownership rights in an increasingly digital world. 
        If we accept that publishers can revoke access to products we've purchased without 
        recourse, we're setting a precedent that extends far beyond entertainment.
      </p>
      
      <p>
        This is about the fundamental nature of ownership in the digital age. When everything 
        becomes a "service," nothing truly belongs to us anymore. The games industry is simply 
        the testing ground for this new reality.
      </p>
      
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 mt-12 border border-purple-500/20">
        <h3 className="text-xl font-semibold text-white mb-4">The Bottom Line</h3>
        <p className="text-gray-300 mb-4">
          Stop Killing Games isn't asking for the impossible. It's not demanding eternal server 
          support or free maintenance. It's asking for something simpler: that when you buy 
          something, you should be able to keep it.
        </p>
        <p className="text-gray-300 italic">
          In a world where digital goods can vanish at a publisher's whim, the right to preserve 
          what we've purchased isn't radical—it's fundamental.
        </p>
      </div>
      
      <div className="mt-12 p-6 bg-slate-900/30 rounded-xl border border-slate-800">
        <h3 className="text-lg font-semibold text-white mb-3">Take Action</h3>
        <div className="space-y-3">
          <div>
            <strong className="text-white">Learn more:</strong>
            <a 
              href="https://www.stopkillinggames.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 ml-2 underline"
            >
              StopKillingGames.com
            </a>
          </div>
          <div>
            <strong className="text-white">UK residents:</strong>
            <a 
              href="https://petition.parliament.uk/petitions/702074" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-2 underline"
            >
              Sign the parliamentary petition
            </a>
          </div>
          <div>
            <strong className="text-white">EU citizens:</strong>
            <a 
              href="https://citizens-initiative.europa.eu/initiatives/details/2024/000007_en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 ml-2 underline"
            >
              Support the Citizens' Initiative
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}