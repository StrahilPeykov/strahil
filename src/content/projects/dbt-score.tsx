import { GitPullRequest, Code2, CheckCircle, Package, TestTube, Users } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import type { ProjectData } from '../../components/templates/ProjectTemplate'

const projectData: ProjectData = {
  title: 'dbt-score Open Source Contribution',
  tagline: 'Added seed resource support to dbt metadata quality linter',
  description: 'Extended dbt-score functionality to support seed resources, enabling complete data quality assessment across all dbt resource types.',
  icon: GitPullRequest,
  badges: [
    { variant: 'success' as const, label: 'Open Source' },
    { variant: 'purple' as const, label: 'Merged PR' }
  ],
  links: {
    github: 'https://github.com/PicnicSupermarket/dbt-score/pull/110',
    live: 'https://github.com/PicnicSupermarket/dbt-score'
  },
  details: {
    role: 'Open Source Contributor',
    context: 'Community Contribution',
    timeline: '2024',
    client: 'Picnic Supermarket'
  },
  techStack: {
    categories: [
      {
        name: 'Technologies',
        technologies: ['Python', 'dbt', 'PyTest', 'Test-Driven Development', 'GitHub Actions']
      }
    ]
  },
  metrics: [
    {
      icon: GitPullRequest,
      value: 'PR #110',
      label: 'Contribution'
    },
    {
      icon: Code2,
      value: 'Feature',
      label: 'Impact Level'
    },
    {
      icon: TestTube,
      value: '100%',
      label: 'Test Coverage'
    }
  ],
  content: {
    overview: (
      <div className="space-y-4">
        <p className="text-gray-400">
          dbt-score is an open-source tool developed by Picnic that helps data teams maintain 
          high-quality dbt projects by scoring models based on configurable rules. I contributed 
          a significant feature that extends the tool's capabilities to support seed resources, 
          making it possible to enforce data quality standards across all dbt resource types.
        </p>
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <p className="text-sm text-gray-300">
            <strong className="text-green-400">Merged Contribution:</strong> Pull Request #110 was 
            successfully merged into the main branch, adding comprehensive seed support with full 
            test coverage and documentation.
          </p>
        </div>
      </div>
    ),
    challenge: (
      <div className="space-y-4">
        <p className="text-gray-400">
          dbt-score originally only supported scoring of models, but many dbt projects rely heavily 
          on seed files for reference data, lookup tables, and configuration. Without the ability 
          to score seeds, teams couldn't ensure consistent quality standards across their entire 
          dbt project.
        </p>
        <h3 className="text-lg font-semibold text-white">Key Challenges</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start gap-2">
            <Package className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Seeds have different metadata structure compared to models</span>
          </li>
          <li className="flex items-start gap-2">
            <Code2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Need to maintain backward compatibility with existing rules</span>
          </li>
          <li className="flex items-start gap-2">
            <TestTube className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Ensure comprehensive test coverage for all new functionality</span>
          </li>
          <li className="flex items-start gap-2">
            <Users className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Follow established project conventions and coding standards</span>
          </li>
        </ul>
      </div>
    ),
    solution: (
      <div className="space-y-6">
        <p className="text-gray-400 mb-4">
          I implemented a comprehensive solution that seamlessly integrates seed support into 
          dbt-score while maintaining the tool's existing architecture and user experience.
        </p>
        
        <h3 className="text-lg font-semibold text-white mb-4">Implementation Details</h3>
        
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">1. Extended Core Functionality</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Added seed resource type to the scoring engine</li>
              <li>• Implemented seed-specific metadata parsing</li>
              <li>• Created seed manifest loader functionality</li>
              <li>• Maintained consistent API with model scoring</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">2. Created Seed-Specific Rules</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm mb-2">Implemented 4 new linting rules:</p>
              <div className="grid grid-cols-2 gap-3">
                <Badge variant="green" size="sm">seed_has_description</Badge>
                <Badge variant="green" size="sm">seed_has_meta_keys</Badge>
                <Badge variant="green" size="sm">seed_has_tags</Badge>
                <Badge variant="green" size="sm">seed_has_tests</Badge>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h4 className="font-semibold text-white mb-3">3. Test-Driven Development</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Wrote comprehensive unit tests for all new functionality</li>
              <li>• Added integration tests for end-to-end scenarios</li>
              <li>• Achieved 100% test coverage for new code</li>
              <li>• Ensured all existing tests continued to pass</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    implementation: (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white mb-4">Technical Approach</h3>
        
        <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
          <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
{`# Example of the new seed scoring functionality
from dbt_score import score_seeds

# Score all seeds in the project
results = score_seeds(
    manifest_path="target/manifest.json",
    rules=[
        "seed_has_description",
        "seed_has_tests",
        "seed_has_tags",
        "seed_has_meta_keys"
    ]
)

# Seeds are now scored just like models
for seed_name, score in results.items():
    print(f"{seed_name}: {score}/10")`}</pre>
        </div>
        
        <div className="mt-6 space-y-4">
          <h4 className="font-semibold text-white">Development Process</h4>
          <ol className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">1.</span>
              <div>
                <strong className="text-white">Research & Planning:</strong> Analyzed existing codebase 
                and dbt seed structure to understand integration requirements
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">2.</span>
              <div>
                <strong className="text-white">Implementation:</strong> Developed feature using TDD, 
                writing tests first and then implementing functionality
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">3.</span>
              <div>
                <strong className="text-white">Documentation:</strong> Updated README and added examples 
                for using the new seed scoring features
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">4.</span>
              <div>
                <strong className="text-white">Review & Iteration:</strong> Addressed maintainer feedback 
                and refined implementation based on suggestions
              </div>
            </li>
          </ol>
        </div>
      </div>
    ),
    results: (
      <div className="space-y-6">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Contribution Impact
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Successfully merged as Pull Request #110</li>
            <li>• Extended dbt-score to support all dbt resource types</li>
            <li>• Added 4 new seed-specific linting rules</li>
            <li>• Maintained 100% backward compatibility</li>
            <li>• Comprehensive test suite with full coverage</li>
            <li>• Clear documentation and usage examples</li>
          </ul>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Community Reception</h3>
          <p className="text-gray-300 mb-3">
            The contribution was well-received by the dbt-score maintainers and community:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Praised for following project conventions and coding standards</li>
            <li>• Appreciated the comprehensive test coverage</li>
            <li>• Feature requested by multiple users in the community</li>
            <li>• Smooth integration with minimal review iterations</li>
          </ul>
        </div>
        
        <div className="text-center pt-6">
          <a 
            href="https://github.com/PicnicSupermarket/dbt-score/pull/110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View the merged pull request on GitHub
            <GitPullRequest className="w-4 h-4" />
          </a>
        </div>
      </div>
    )
  }
}

export default projectData