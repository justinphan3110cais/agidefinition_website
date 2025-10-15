"use client";

import React from 'react';
import Image from 'next/image';

export function DiscussionSection() {
  // Define ability data for consistent styling
  const abilities = {
    'K': { color: '#AACEF2', fullName: 'General Knowledge' },
    'RW': { color: '#AACEF2', fullName: 'Reading and Writing' },
    'M': { color: '#AACEF2', fullName: 'Mathematical Ability' },
    'R': { color: '#9ECC75', fullName: 'On-the-Spot Reasoning' },
    'WM': { color: '#9ECC75', fullName: 'Working Memory' },
    'MS': { color: '#9ECC75', fullName: 'Long-Term Memory Storage' },
    'MR': { color: '#9ECC75', fullName: 'Long-Term Memory Retrieval' },
    'V': { color: '#E28988', fullName: 'Visual Processing' },
    'A': { color: '#E28988', fullName: 'Auditory Processing' },
    'S': { color: '#EDCC85', fullName: 'Speed' }
  };

  // Component to render ability mentions with styling
  const AbilityMention = ({ id, children }: { id: keyof typeof abilities; children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-1">
      <Image 
        src={`/assets/icons/${id.toLowerCase()}.svg`}
        alt={`${abilities[id].fullName} icon`}
        width={16}
        height={16}
        className="w-4 h-4"
      />
      <span 
        className="underline decoration-dashed decoration-2 underline-offset-2"
        style={{ textDecorationColor: abilities[id].color }}
      >
        {children}
      </span>
    </span>
  );

  return (
    <section id="discussion" className="mb-16 mt-12">
      <div className="pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6" style={{fontFamily: 'Arial, sans-serif'}}>
          Discussion
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6" style={{fontFamily: 'Arial, sans-serif'}}>
          <p>
            This framework provides a structured, quantifiable methodology for evaluating Artificial General Intelligence (AGI), moving beyond narrow, specialized benchmarks to assess the breadth (versatility) and depth (proficiency) of cognitive capabilities. By operationalizing AGI through ten core cognitive domains inspired by the CHC theory, we can systematically diagnose the strengths and profound weaknesses of current AI systems. The estimated AGI scores (e.g., GPT-4 at 27%, GPT-5 at 58%) illustrate both the rapid progress in the field and the substantial gap remaining before achieving human-level general intelligence.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">&quot;Jagged&quot; AI Capabilities and Crucial Bottlenecks</h3>
            <p>
              The application of this framework reveals that contemporary AI systems exhibit a highly uneven or &quot;jagged&quot; cognitive profile. While models demonstrate high proficiency in areas that leverage vast training data—such as <AbilityMention id="K">General Knowledge (K)</AbilityMention>, <AbilityMention id="RW">Reading and Writing (RW)</AbilityMention>, and <AbilityMention id="M">Mathematical Ability (M)</AbilityMention>—they simultaneously possess critical deficits in foundational cognitive machinery.
            </p>
            <p>
              This uneven development highlights specific bottlenecks impeding the path to AGI. Long-term memory storage is perhaps the most significant bottleneck, scoring near 0% for current models. Without the ability to continually learn, AI systems suffer from &quot;amnesia&quot; which limits their utility, forcing the AI to re-learn context in every interaction. Similarly, deficits in visual reasoning limit the ability of AI agents to interact with complex digital environments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Capability Contortions and the Illusion of Generality</h3>
            <p>
              The jagged profile of current AI capabilities often leads to &quot;capability contortions,&quot; where strengths in certain areas are leveraged to compensate for profound weaknesses in others. These workarounds mask underlying limitations and can create a brittle illusion of general capability.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Working Memory vs. Long-Term Storage:</strong> A prominent contortion is the reliance on massive context windows (<AbilityMention id="WM">Working Memory, WM</AbilityMention>) to compensate for the lack of <AbilityMention id="MS">Long-Term Memory Storage (MS)</AbilityMention>. Practitioners use these long contexts to manage state and absorb information (e.g., entire codebases). However, this approach is inefficient, computationally expensive, and can overload the system&apos;s attentional mechanisms. It ultimately fails to scale for tasks requiring days or weeks of accumulated context.
              </li>
              <li>
                <strong>External Search vs. Internal Retrieval:</strong> Imprecision in <AbilityMention id="MR">Long-Term Memory Retrieval (MR)</AbilityMention>—manifesting as hallucinations or confabulation—is often mitigated by integrating external search tools, a process known as Retrieval-Augmented Generation (RAG). However, this reliance on RAG is a capability contortion that obscures two distinct underlying weaknesses in an AI&apos;s memory. First, it compensates for the inability to reliably access the AI&apos;s vast but static parametric knowledge. Second, and more critically, it masks the absence of a dynamic, experiential memory—a persistent, updatable store for private interactions and evolving contexts in a long time scale. While RAG can be adapted for private documents, its core function remains retrieving facts from a database. This dependency can potentially become a fundamental liability for AGI, as it is not a substitute for the holistic, integrated memory required for genuine learning, personalization, and long-term contextual understanding.
              </li>
            </ul>
            <p>
              Mistaking these contortions for genuine cognitive breadth can lead to inaccurate assessments of when AGI will arrive. These contortions can also mislead people to assume that intelligence is too jagged to be understood systematically.
            </p>
          </div>

          <div className="flex justify-center my-8">
            <div className="max-w-2xl">
              <Image
                src="/assets/input_output_diagram.png"
                alt="Intelligence as a processor diagram"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <p className="text-lg text-gray-600 text-center mt-2 italic">
                Intelligence as a processor.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">The Engine Analogy</h3>
            <p>
              Our multifaceted view of intelligence suggests an analogy to a high-performance engine, where overall intelligence is the &quot;horsepower.&quot; An artificial mind, much like an engine, is ultimately constrained by its weakest components. Currently, several critical parts of the AI &quot;engine&quot; are highly defective. This severely limits the overall &quot;horsepower&quot; of the system, regardless of how optimized other components might be. This framework identifies these defects to guide our assessment and how far we are from AGI.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Intelligence</h3>
            <p>
              Interpersonal skills are represented across these broad abilities. For example, cognitive empathy is captured in <AbilityMention id="K">K&apos;s</AbilityMention> &quot;commonsense&quot; narrow ability. Facial emotion recognition is necessary for proficiency in <AbilityMention id="V">V&apos;s</AbilityMention> &quot;image captioning.&quot; And theory of mind is tested in <AbilityMention id="R">on-the-spot reasoning (R)</AbilityMention>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Interdependence of Cognitive Abilities</h3>
            <p>
              While this framework dissects intelligence into ten distinct axes for measurement, it is crucial to recognize that these abilities are deeply interdependent. Complex cognitive tasks rarely utilize a single domain in isolation. For example, solving advanced mathematical problems requires both <AbilityMention id="M">Mathematical Ability (M)</AbilityMention> and <AbilityMention id="R">On-the-Spot Reasoning (R)</AbilityMention>. Theory of Mind questions require <AbilityMention id="R">On-the-Spot Reasoning (R)</AbilityMention> as well as <AbilityMention id="K">General Knowledge (K)</AbilityMention>. Image recognition involves <AbilityMention id="V">Visual Processing (V)</AbilityMention> and <AbilityMention id="K">General Knowledge (K)</AbilityMention>. Understanding a movie requires the integration of <AbilityMention id="A">Auditory Processing (A)</AbilityMention>, <AbilityMention id="V">Visual Processing (V)</AbilityMention>, and <AbilityMention id="WM">Working Memory (WM)</AbilityMention>. Consequently, various batteries of narrow abilities test cognitive abilities in combination, reflecting the integrated nature of general intelligence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contamination</h3>
            <p>
              Sometimes AI corporations &quot;juice&quot; their numbers by training on data highly similar to or identical to target tests. To defend against this, evaluators should assess model performance under minor distribution shifts (e.g., rephrasing the question) or testing on similar but distinct questions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Solving the Dataset vs. Solving the Task</h3>
            <p>
              Our operationalization relies on task specifications. We occasionally elaborate on these task specifications with specific datasets, and we usually treat them as necessary but not sufficient for solving the task. Moreover, solving our illustrative examples do not imply the task is solved, as our collection of examples are not exhaustive. It is the default for automatic evaluations to inadequately cover their target phenomena, so our operationalization is far more likely to be robust and stand the test of time compared to existing automated evaluations. Since we couch our definition in a collection of tasks rather than heavily depend on specific existing datasets, we can test AI systems using the best available tests at the time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ambiguity Resolution</h3>
            <p>
              The batteries in the operationalization have varying levels of precision. However, the descriptions and examples should be clear enough that people can grade the AI systems themselves. Consequently, different people could issue their own estimates of the AGI score, and people can decide whether they find the grader&apos;s judgment reasonable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitations</h3>
            <p>
              First, our conceptualization of intelligence is not exhaustive. It deliberately excludes certain faculties, such as the kinesthetic abilities proposed in alternative frameworks like Gardner&apos;s theory of multiple intelligences. Second, our illustrative examples are specific to the English language and are not culturally agnostic. Future research could involve adapting these tests across diverse linguistic and cultural contexts. Furthermore, our operationalization has inherent constraints. The <AbilityMention id="K">General Knowledge (K)</AbilityMention> tests are necessarily selective and do not assess the full breadth of possible subject areas. A 100% AGI score represents a &quot;highly proficient&quot; well-educated individual who has achieved mastery in across these tested dimensions, rather than well-educated in the sense of having a college degree. Moreover, while the scoring weights we employ are necessary for quantitative measurement, they represent one of many possible configurations. We give equal weight to each broad ability (10%) to prioritize breadth, but more discretionary weighting schemes could be reasonable. The results are contingent on these methodological choices, and future work could explore alternative collections of tasks and weighting schemes. Finally, while the aggregate AGI Score is provided for convenience, it could be misleading. A simple summation can obscure critical failures in bottleneck capabilities. For example, an AI system with a 90% AGI Score but 0% on <AbilityMention id="MS">Long-Term Memory Storage (MS)</AbilityMention> would be functionally impaired by a form of &quot;amnesia,&quot; severely limiting its capabilities despite a high overall score. Therefore, we recommend reporting the AI system&apos;s cognitive profile and not just its AGI Score.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Definitions of Related Concepts</h3>
            <p>Some types of strategically relevant AI can arrive before or after AGI. As follows are some particularly noteworthy types of AI:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>AGI</strong> is an AI that can match or exceed the cognitive versatility and proficiency of a well-educated adult.</li>
              <li><strong>Replacement AI</strong> is an AI that performs almost all tasks more effectively and affordably, rendering human labor economically obsolete.</li>
              <li><strong>Superintelligence</strong> is an AI that greatly exceeds the cognitive performance of humans in virtually all domains of interest.</li>
              <li><strong>Self-Sustaining AI</strong> is an AI that can autonomously operate indefinitely, acquire resources, and defend its existence.</li>
              <li><strong>Cyberwarfare AI</strong> is an AI that can design and execute sophisticated, multi-stage cyber campaigns against critical infrastructure (e.g., energy grids, financial systems, defense networks).</li>
              <li><strong>Pandemic AI</strong> is an AI that can engineer and produce new, infectious, and virulent pathogens that could cause a pandemic.</li>
              <li><strong>Recursive AI</strong> is an AI that can independently conducting the entire AI R&D lifecycle, leading to the creation of markedly more advanced AI systems without human input.</li>
            </ol>
            <p>
              Our AGI definition is about human-level AI, not economically-valuable AI, nor economy-level AI. OpenAI and Microsoft have reportedly considered AGI to be an AI that can generate $100 billion in profit. We do not conflate AGI with economically valuable AI because narrow technologies, such as the iPhone, can generate billions in economic value, despite not being generally intelligent. Meanwhile, <em>Replacement AI</em> is about economy-level AI, and it includes physical tasks, unlike AGI.
            </p>
            <p>
              <em>Recursive AI</em> removes the need for human researchers and &quot;closes the loop&quot; on AI R&D, enabling rapid, recursive capability gains (an &quot;intelligence recursion&quot;) without human scientific input and could potentially lead to <em>Superintelligence</em>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Barriers to AGI</h3>
            <p>
              Achieving AGI requires solving a variety of grand challenges. For example, the machine learning community&apos;s ARC-AGI Challenge aiming to measure <em>abstract reasoning</em> is represented in <AbilityMention id="R">On-the-Spot Reasoning (R)</AbilityMention> tasks. Meta&apos;s attempts to create <em>world models</em> that include intuitive physics understanding is represented in the video anomaly detection task (<AbilityMention id="V">V</AbilityMention>). The challenge of <em>spatial navigation</em> memory (<AbilityMention id="WM">WM</AbilityMention>) reflects a core goal of Fei-Fei Li&apos;s startup, World-Labs. Moreover, the challenges of <em>hallucinations</em> (<AbilityMention id="MR">MR</AbilityMention>) and <em>continual learning</em> (<AbilityMention id="MS">MS</AbilityMention>) will also need to be resolved. These significant barriers make an AGI Score of 100% unlikely in the next year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
