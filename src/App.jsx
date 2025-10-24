import React, { useState } from 'react';
import { AlertCircle, Sparkles, Lightbulb, Search, CheckCircle, Loader } from 'lucide-react';
import ProgressiveContent from './ProgressiveContent';

const PhModule = () => {
  const [userExplanation, setUserExplanation] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showExpert, setShowExpert] = useState(false);
  const [hintsRequested, setHintsRequested] = useState(0);
  const [currentHint, setCurrentHint] = useState(null);
  const [showProgressiveContent, setShowProgressiveContent] = useState(true);

  const contentData = {
    title: "Why pH Matters: The Narrow Window of Life",
    progressiveScreens: [
      "Your blood pH is normally maintained between <strong>7.35 and 7.45</strong>—a remarkably narrow range considering the constant metabolic activity occurring in your body. <br><br><strong>Why is this tight control so critical?</strong>",
      
      "<h3 class='text-xl font-bold text-purple-900 mb-4'>The Protein Problem</h3>Proteins are the workhorses of your body. Enzymes catalyze reactions, hemoglobin carries oxygen, membrane channels transport ions—but all of these proteins depend on their <strong>precise three-dimensional shape</strong> to function. That shape is maintained by weak chemical bonds, including hydrogen bonds and ionic interactions, which are exquisitely sensitive to pH changes.",
      
      "When pH shifts outside the normal range, these bonds break or form inappropriately, causing proteins to <strong>change shape (denature)</strong>. An enzyme that loses its shape loses its function. <br><br>Imagine trying to use a key that has been slightly melted—it won't fit the lock properly. Similarly, a denatured enzyme can't bind its substrate effectively.",
      
      "<h3 class='text-xl font-bold text-purple-900 mb-4'>Daily Acid Production</h3>Your body produces approximately <strong>15,000-20,000 mmol of CO₂ daily</strong> from cellular metabolism. This CO₂ combines with water to form carbonic acid (H₂CO₃), which can donate hydrogen ions (H⁺) and lower pH. <br><br>Additionally, metabolism of proteins and phospholipids generates <strong>50-100 mmol of non-volatile acids daily</strong>—acids that can't simply be breathed out like CO₂.",
      
      "<h3 class='text-xl font-bold text-purple-900 mb-4'>Three Lines of Defense</h3>To handle this constant acid load while maintaining stable pH, your body employs a three-tiered defense system:<br><br><div class='space-y-3 mt-4'><div class='bg-white p-4 rounded-lg border-l-4 border-blue-500'><strong>1. Chemical buffers</strong><br>Immediate response - within seconds</div><div class='bg-white p-4 rounded-lg border-l-4 border-green-500'><strong>2. Respiratory compensation</strong><br>Rapid response - minutes to hours</div><div class='bg-white p-4 rounded-lg border-l-4 border-purple-500'><strong>3. Renal compensation</strong><br>Slow but powerful - days</div></div>",
      
      "Think of these as your body's emergency response team: <br><br><strong>Buffers are the immediate first responders</strong>, the respiratory system is the backup that arrives within minutes, and the kidneys are the definitive solution that takes longer but can solve the problem completely.",
      
      "<h3 class='text-xl font-bold text-purple-900 mb-4'>Watch: Physiologic pH and Buffers</h3><div class='bg-gray-100 p-6 rounded-lg text-center'><p class='mb-4'>Watch this 2-3 minute video showing what happens at the cellular level when pH shifts:</p><a href='https://www.osmosis.org/learn/Physiologic_pH_and_buffers' target='_blank' class='inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700'>Watch Video on Osmosis.org ↗</a></div><p class='text-sm text-gray-600 mt-3 text-center'>Note: Video will open in a new tab</p>"
    ],
    text: `Blood pH is maintained between 7.35-7.45. Proteins depend on their precise 3D shape, maintained by pH-sensitive bonds. When pH shifts, proteins denature and lose function. The body produces 15,000-20,000 mmol CO₂ and 50-100 mmol non-volatile acids daily. Three defense systems manage this: chemical buffers (seconds), respiratory compensation (minutes-hours), and renal compensation (days).`,
    prompt: "In your own words, explain why the body needs such tight control over blood pH. What would happen to proteins and enzymes if pH shifted significantly?",
    expertExplanation: "The body maintains blood pH in a narrow range (7.35-7.45) because proteins depend on their precise three-dimensional shape to function, and this shape is maintained by pH-sensitive bonds like hydrogen bonds and ionic interactions. When pH shifts, these bonds break or form inappropriately, causing proteins to denature and lose function. Enzymes can't catalyze reactions properly, hemoglobin can't carry oxygen efficiently, and ion channels malfunction. This is critical because the body constantly produces acids from metabolism—15,000-20,000 mmol of CO₂ daily plus 50-100 mmol of non-volatile acids. Without tight pH control through chemical buffers (immediate), respiratory compensation (minutes to hours), and renal regulation (days), these metabolic acids would rapidly denature essential proteins and cause life-threatening dysfunction.",
    keyConceptsToCheck: {
      critical: [
        "Proteins depend on precise 3D shape for function",
        "pH affects weak bonds that maintain protein structure",
        "pH shifts cause protein denaturation",
        "Body constantly produces acids from metabolism",
        "Three defense systems work at different timescales"
      ],
      advanced: [
        "Mentions specific protein examples (enzymes, hemoglobin, channels)",
        "Discusses hydrogen bonds and ionic interactions",
        "Quantifies acid production (CO2 and non-volatile acids)",
        "Explains why CO2 is different from non-volatile acids"
      ],
      commonMisconceptions: [
        "Thinking only respiratory system controls pH",
        "Not understanding that CO₂ becomes acid when it combines with water",
        "Believing proteins can function in any pH environment",
        "Thinking buffers solve the problem permanently"
      ]
    }
  };

  const generateFeedbackPrompt = () => {
    return `You are an expert medical educator providing feedback on a student's self-explanation about pH homeostasis and protein function.

LEARNING CONTENT:
${contentData.text}

PROMPT GIVEN TO STUDENT:
${contentData.prompt}

STUDENT'S SELF-EXPLANATION:
"${userExplanation}"

CRITICAL CONCEPTS TO ASSESS:
${JSON.stringify(contentData.keyConceptsToCheck.critical)}

COMMON MISCONCEPTIONS TO CHECK:
${JSON.stringify(contentData.keyConceptsToCheck.commonMisconceptions)}

Analyze the student's explanation and provide feedback in JSON format with NO markdown formatting, no code blocks, just pure JSON:

{
  "strengths": [
    {
      "type": "mechanistic_reasoning",
      "content": "Specific praise referencing what they wrote"
    }
  ],
  "misconceptions": [
    {
      "studentStatement": "Quote their exact misconception",
      "correction": "Explain the correct concept",
      "reasoning": "Why this matters clinically"
    }
  ],
  "gaps": [
    {
      "missing": "What concept they didn't address",
      "suggestion": "Gentle prompt to consider this",
      "optional": true
    }
  ],
  "extensionQuestions": [
    {
      "question": "Thought-provoking follow-up"
    }
  ],
  "overallAssessment": {
    "understandingLevel": "strong",
    "encouragement": "Personalized encouraging message"
  }
}

FEEDBACK GUIDELINES:
1. Quote their specific words when praising or correcting
2. Be encouraging but honest about misconceptions
3. If they wrote very little, encourage more elaboration
4. If they're wrong about core concepts, prioritize correcting those
5. If they show strong understanding, push them to deeper insights
6. Be specific and reference their actual explanation

YOUR RESPONSE MUST BE ONLY VALID JSON. DO NOT include markdown code blocks or any other formatting.`;
  };

  const generateHintPrompt = () => {
    const hintLevel = hintsRequested + 1;
    return `The student is working on this self-explanation prompt about pH and proteins:
"${contentData.prompt}"

Learning content: ${contentData.text}

They've requested hint ${hintLevel} of 3.

Provide a hint in JSON format with NO markdown:

{
  "hint": "your hint text here"
}

Guidelines based on hint level:
- Hint 1: Ask a guiding question about why protein shape matters
- Hint 2: Provide an analogy about bonds and pH
- Hint 3: Give more direct guidance about the three defense systems

YOUR RESPONSE MUST BE ONLY VALID JSON.`;
  };

  const requestHint = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          messages: [{
            role: "user",
            content: generateHintPrompt()
          }]
        })
      });

      const data = await response.json();
      let responseText = data.content[0].text;
      
      responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      
      const hintData = JSON.parse(responseText);
      setCurrentHint(hintData.hint);
      setHintsRequested(prev => prev + 1);
    } catch (error) {
      console.error("Error getting hint:", error);
      setCurrentHint("Think about what maintains protein shape at the molecular level. What types of bonds are involved, and why would they be sensitive to pH?");
    }
    setLoading(false);
  };

  const submitExplanation = async () => {
    if (!userExplanation.trim()) {
      alert("Please write your explanation first!");
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          messages: [{
            role: "user",
            content: generateFeedbackPrompt()
          }]
        })
      });

      const data = await response.json();
      let responseText = data.content[0].text;
      
      responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      
      const feedbackJSON = JSON.parse(responseText);
      setFeedback(feedbackJSON);
    } catch (error) {
      console.error("Error getting feedback:", error);
      alert("Error getting feedback. Please try again.");
    }

    setLoading(false);
  };

  const FeedbackTypeIcon = ({ type }) => {
    const icons = {
      mechanistic_reasoning: Sparkles,
      clinical_application: CheckCircle,
      integration: CheckCircle,
      quantitative: CheckCircle
    };
    const Icon = icons[type] || Sparkles;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            🧬 {contentData.title}
          </h1>
          <p className="text-gray-600">Learn through self-explanation with AI feedback</p>
        </div>

        {showProgressiveContent ? (
          <ProgressiveContent 
            screens={contentData.progressiveScreens}
            onComplete={() => setShowProgressiveContent(false)}
          />
        ) : (
          <>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-6">
              <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                <p className="font-semibold text-purple-800 mb-2">📝 Your Task:</p>
                <p className="text-gray-700">{contentData.prompt}</p>
              </div>
            </div>

            {hintsRequested < 3 && !feedback && (
              <div className="mb-4">
                <button
                  onClick={requestHint}
                  disabled={loading}
                  className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                >
                  <Lightbulb className="w-5 h-5" />
                  {loading ? "Getting hint..." : `Need a hint? (${hintsRequested}/3 used)`}
                </button>
              </div>
            )}

            {currentHint && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Hint {hintsRequested}:</p>
                    <p className="text-gray-700">{currentHint}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Your Explanation:
              </label>
              <textarea
                value={userExplanation}
                onChange={(e) => setUserExplanation(e.target.value)}
                placeholder="Write your explanation here. Take your time to think through the concepts and explain them in your own words..."
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-h-[200px] text-gray-800"
                disabled={loading}
              />
              <p className="text-sm text-gray-500 mt-2">
                Tip: Aim for 3-5 sentences. Explain the mechanism, not just facts.
              </p>
            </div>

            <button
              onClick={submitExplanation}
              disabled={loading || !userExplanation.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Analyzing your explanation...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Get AI Feedback
                </>
              )}
            </button>
          </>
        )}
      </div>

      {feedback && !showProgressiveContent && (
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">
            📊 Your Personalized Feedback
          </h2>

          {feedback.strengths && feedback.strengths.length > 0 && (
            <div className="space-y-3">
              {feedback.strengths.map((strength, i) => (
                <div key={i} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FeedbackTypeIcon type={strength.type} />
                    <div>
                      <p className="font-semibold text-blue-900 mb-1">
                        {strength.type === 'mechanistic_reasoning' && '✨ Excellent mechanistic reasoning!'}
                        {strength.type === 'clinical_application' && '🏥 Strong clinical application!'}
                        {strength.type === 'integration' && '🔗 Great integration!'}
                        {strength.type === 'quantitative' && '📊 Solid quantitative thinking!'}
                      </p>
                      <p className="text-gray-700">{strength.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {feedback.misconceptions && feedback.misconceptions.length > 0 && (
            <div className="space-y-3">
              {feedback.misconceptions.map((misc, i) => (
                <div key={i} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-900 mb-2">⚠️ Let's refine this:</p>
                      <p className="text-gray-700 mb-2">
                        You said: <em>"{misc.studentStatement}"</em>
                      </p>
                      <p className="text-gray-800 mb-2">{misc.correction}</p>
                      {misc.reasoning && (
                        <p className="text-gray-700">
                          <strong>Why this matters:</strong> {misc.reasoning}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {feedback.gaps && feedback.gaps.length > 0 && (
            <div className="space-y-3">
              {feedback.gaps.map((gap, i) => (
                <div key={i} className={`border-l-4 p-4 rounded-lg ${
                  gap.optional 
                    ? 'bg-purple-50 border-purple-500' 
                    : 'bg-amber-50 border-amber-500'
                }`}>
                  <div className="flex items-start gap-3">
                    {gap.optional ? (
                      <Search className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    ) : (
                      <Lightbulb className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-semibold mb-1" style={{color: gap.optional ? '#7c3aed' : '#d97706'}}>
                        {gap.optional ? '🔍 Extension:' : '💡 Consider:'}
                      </p>
                      <p className="text-gray-700">{gap.suggestion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {feedback.extensionQuestions && feedback.extensionQuestions.length > 0 && (
            <div className="space-y-3">
              {feedback.extensionQuestions.map((ext, i) => (
                <div key={i} className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-900 mb-1">🔍 Extension question:</p>
                      <p className="text-gray-700">{ext.question}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {feedback.overallAssessment && (
            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
              <p className="text-gray-800 text-lg">{feedback.overallAssessment.encouragement}</p>
            </div>
          )}

          <div className="pt-4 border-t-2 border-gray-200">
            <button
              onClick={() => setShowExpert(!showExpert)}
              className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              {showExpert ? 'Hide' : 'Compare with'} Expert Explanation
            </button>

            {showExpert && (
              <div className="mt-4 bg-gray-50 border-2 border-gray-300 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Expert Explanation:</h4>
                <p className="text-gray-700 leading-relaxed mb-4">{contentData.expertExplanation}</p>
                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-2">Notice how the expert:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Connects protein structure to function explicitly</li>
                    <li>Quantifies acid production with specific values</li>
                    <li>Explains all three defense systems with timescales</li>
                    <li>Addresses clinical consequences of pH imbalance</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setFeedback(null);
              setShowExpert(false);
              setCurrentHint(null);
              setHintsRequested(0);
            }}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
          >
            ✏️ Revise Your Explanation
          </button>
        </div>
      )}
    </div>
  );
};

export default PhModule;
