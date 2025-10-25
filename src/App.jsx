import React, { useState } from 'react';
import { AlertCircle, Sparkles, Search, CheckCircle, Loader, User } from 'lucide-react';
import ProgressiveContent from './ProgressiveContent';

const BloodPhScale = () => {
  return (
    <div className="my-8">
      <svg viewBox="0 0 700 300" className="w-full max-w-4xl mx-auto">
        {/* Background */}
        <rect width="700" height="300" fill="#f8fafc"/>
        
        {/* Title */}
        <text x="350" y="30" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e293b">
          The Narrow Window of Blood pH
        </text>
        
        {/* pH Scale Bar - Gradient from red to blue */}
        <defs>
          <linearGradient id="phGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="35%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="65%" stopColor="#84cc16" />
            <stop offset="85%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        
        <rect x="50" y="80" width="600" height="60" fill="url(#phGradient)" rx="8" stroke="#475569" strokeWidth="2"/>
        
        {/* pH Numbers */}
        <text x="50" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">0</text>
        <text x="135" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">2</text>
        <text x="221" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">4</text>
        <text x="307" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">6</text>
        <text x="393" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">8</text>
        <text x="479" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">10</text>
        <text x="565" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">12</text>
        <text x="650" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">14</text>
        
        {/* Labels */}
        <text x="150" y="195" textAnchor="middle" fontSize="14" fill="#dc2626" fontWeight="bold">ACIDIC</text>
        <text x="350" y="195" textAnchor="middle" fontSize="14" fill="#059669" fontWeight="bold">NEUTRAL</text>
        <text x="550" y="195" textAnchor="middle" fontSize="14" fill="#3b82f6" fontWeight="bold">BASIC</text>
        
        {/* Blood pH Range - Highlighted box */}
        <g>
          <rect x="365" y="75" width="7" height="70" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="3" rx="3"/>
          
          {/* Callout box */}
          <rect x="280" y="210" width="180" height="70" fill="#10b981" opacity="0.95" rx="8" stroke="#059669" strokeWidth="2"/>
          <text x="370" y="235" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">
            Blood pH Range
          </text>
          <text x="370" y="258" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">
            7.35 - 7.45
          </text>
          <text x="370" y="275" textAnchor="middle" fontSize="11" fill="white">
            Only 0.1 pH units!
          </text>
          
          {/* Arrow pointing to the range */}
          <path d="M 368 210 L 368 145" stroke="#059669" strokeWidth="3" markerEnd="url(#arrowhead-green2)"/>
          <defs>
            <marker id="arrowhead-green2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#059669"/>
            </marker>
          </defs>
        </g>
        
        {/* Example substances for context */}
<g opacity="1">
  <text x="92" y="55" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">Stomach</text>
  <text x="92" y="68" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">acid (2)</text>
  
  <text x="350" y="55" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">Pure</text>
  <text x="350" y="68" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">water (7)</text>
  
  <text x="608" y="55" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">Bleach</text>
  <text x="608" y="68" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">(13)</text>
</g>
      </svg>
      
      <p className="text-sm text-gray-600 text-center mt-4 italic max-w-3xl mx-auto">
        Blood pH must stay within an incredibly narrow range (7.35-7.45) despite the body's constant metabolic production of acids and bases.
      </p>
    </div>
  );
};

const ProteinDenaturationDiagram = () => {
  return (
    <div className="my-8">
      <svg viewBox="0 0 800 400" className="w-full max-w-4xl mx-auto">
        {/* Background */}
        <rect width="800" height="400" fill="#f8fafc"/>
        
        {/* Title */}
        <text x="400" y="30" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e293b">
          How pH Changes Denature Proteins
        </text>
        
        {/* Left side - Normal pH */}
        <g>
          {/* Label */}
          <rect x="50" y="60" width="280" height="40" fill="#10b981" opacity="0.2" rx="8"/>
          <text x="190" y="85" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#059669">
            Normal pH (7.4)
          </text>
          
          {/* Functional protein - complex folded shape */}
          <g transform="translate(190, 180)">
            {/* Main protein body - stylized folded structure */}
            <path d="M -60,-40 Q -40,-60 -20,-50 T 20,-40 T 60,-20 Q 70,0 60,20 T 20,40 T -20,50 Q -40,60 -60,40 T -60,-40" 
                  fill="#3b82f6" opacity="0.8" stroke="#1e40af" strokeWidth="3"/>
            
            {/* Active site pocket - shown as indentation */}
            <ellipse cx="0" cy="-15" rx="18" ry="12" fill="#ef4444" opacity="0.9" stroke="#dc2626" strokeWidth="2"/>
            <text x="0" y="-10" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
              Active Site
            </text>
            
            {/* Weak bonds represented as dashed lines */}
            <line x1="-40" y1="-30" x2="-40" y2="30" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
            <line x1="0" y1="-40" x2="0" y2="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
            <line x1="40" y1="-20" x2="40" y2="20" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,4" opacity="0.6"/>
          </g>
          
          {/* Substrate molecule */}
          <g transform="translate(190, 100)">
            <circle cx="0" cy="0" r="15" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
            <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">
              S
            </text>
          </g>
          
          {/* Arrow showing substrate fits */}
          <path d="M 190 125 L 190 150" stroke="#059669" strokeWidth="3" markerEnd="url(#arrowgreen)"/>
          <defs>
            <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#059669"/>
            </marker>
          </defs>
          
          {/* Label */}
          <text x="190" y="300" textAnchor="middle" fontSize="14" fill="#059669" fontWeight="600">
            ✓ Substrate binds perfectly
          </text>
          <text x="190" y="320" textAnchor="middle" fontSize="12" fill="#64748b">
            Weak bonds maintain shape
          </text>
        </g>
        
        {/* Dividing line */}
        <line x1="400" y1="50" x2="400" y2="350" stroke="#cbd5e1" strokeWidth="3"/>
        
        {/* Right side - Abnormal pH */}
        <g>
          {/* Label */}
          <rect x="470" y="60" width="280" height="40" fill="#ef4444" opacity="0.2" rx="8"/>
          <text x="610" y="85" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#dc2626">
            Abnormal pH (7.2)
          </text>
          
          {/* Denatured protein - unfolded/misshapen */}
          <g transform="translate(610, 180)">
            {/* Unfolded protein - irregular shape */}
            <path d="M -70,-20 Q -50,-40 -30,-35 Q -10,-30 10,-40 Q 30,-50 50,-35 Q 65,-25 70,-5 Q 72,15 65,30 Q 55,45 35,50 Q 15,52 -5,48 Q -25,44 -45,35 Q -60,25 -70,5 Z" 
                  fill="#94a3b8" opacity="0.7" stroke="#64748b" strokeWidth="3"/>
            
            {/* Distorted active site - no longer functional */}
            <ellipse cx="15" cy="-25" rx="20" ry="8" fill="#64748b" opacity="0.5" stroke="#475569" strokeWidth="2"/>
            <text x="15" y="-20" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="bold">
              Distorted
            </text>
            
            {/* Broken bonds shown as disconnected lines */}
            <line x1="-40" y1="-20" x2="-35" y2="5" stroke="#ef4444" strokeWidth="2.5" opacity="0.8"/>
            <circle cx="-40" cy="-20" r="3" fill="#ef4444"/>
            <circle cx="-35" cy="5" r="3" fill="#ef4444"/>
            
            <line x1="10" y1="-30" x2="15" y2="10" stroke="#ef4444" strokeWidth="2.5" opacity="0.8"/>
            <circle cx="10" cy="-30" r="3" fill="#ef4444"/>
            <circle cx="15" cy="10" r="3" fill="#ef4444"/>
          </g>
          
          {/* Substrate molecule - same as left */}
          <g transform="translate(610, 100)">
            <circle cx="0" cy="0" r="15" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
            <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">
              S
            </text>
          </g>
          
          {/* X showing substrate doesn't fit */}
          <line x1="600" y1="130" x2="620" y2="150" stroke="#dc2626" strokeWidth="4"/>
          <line x1="620" y1="130" x2="600" y2="150" stroke="#dc2626" strokeWidth="4"/>
          
          {/* Label */}
          <text x="610" y="300" textAnchor="middle" fontSize="14" fill="#dc2626" fontWeight="600">
            ✗ Substrate cannot bind
          </text>
          <text x="610" y="320" textAnchor="middle" fontSize="12" fill="#64748b">
            Weak bonds broken
          </text>
        </g>
        
        {/* Bottom explanation */}
        <text x="400" y="370" textAnchor="middle" fontSize="13" fill="#475569" fontStyle="italic">
          Even a small pH change disrupts the hydrogen bonds and ionic interactions that maintain protein structure
        </text>
      </svg>
    </div>
  );
};

const PhModule = () => {
  const [learnerName, setLearnerName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [userExplanation, setUserExplanation] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showExpert, setShowExpert] = useState(false);
  const [showProgressiveContent, setShowProgressiveContent] = useState(true);

  // **REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL**
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwfQ-79kvUpkA3SjJg847tS6Kay9GXb_CMfQpvKgXIY8tB4VDMYQtHKW1toHbv8J6j5/exec';

  const contentData = {
    title: "Why pH Matters: The Narrow Window of Life",
progressiveScreens: [
  "Your blood pH is normally maintained between <strong>7.35 and 7.45</strong>—a remarkably narrow range considering the constant metabolic activity occurring in your body.__SHOW_DIAGRAM__",
"<strong>Why is this tight control so critical?</strong><br><br>Even a small shift of just 0.2 pH units - from 7.4 to 7.2 - for example, represents a <strong>60% increase in hydrogen ion concentration</strong>. This may not sound dramatic, but your cells and the proteins within them are exquisitely sensitive to such changes.<br><br>To understand why, we need to consider what makes proteins work in the first place.",
      "<h3 class='text-xl font-bold text-purple-900 mb-4'>The Protein Problem</h3>Proteins are the workhorses of your body. Enzymes catalyze reactions, hemoglobin carries oxygen, membrane channels transport ions—but all of these proteins depend on their <strong>precise three-dimensional shape</strong> to function. That shape is maintained by weak chemical bonds, including hydrogen bonds and ionic interactions, which are exquisitely sensitive to pH changes.__SHOW_PROTEIN_DIAGRAM__",
      
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

  const sendToGoogleSheets = async (data) => {
  try {
    // Format feedback in a simple, readable way
    let feedbackText = '';
    
    if (data.feedback?.strengths && data.feedback.strengths.length > 0) {
      feedbackText += 'STRENGTHS: ' + data.feedback.strengths.map(s => s.content).join(' | ') + '  ';
    }
    
    if (data.feedback?.misconceptions && data.feedback.misconceptions.length > 0) {
      feedbackText += 'MISCONCEPTIONS: ' + data.feedback.misconceptions.map(m => m.correction).join(' | ') + '  ';
    }
    
    if (data.feedback?.gaps && data.feedback.gaps.length > 0) {
      feedbackText += 'GAPS: ' + data.feedback.gaps.map(g => g.suggestion).join(' | ') + '  ';
    }
    
    if (data.feedback?.extensionQuestions && data.feedback.extensionQuestions.length > 0) {
      feedbackText += 'EXTENSION QUESTIONS: ' + data.feedback.extensionQuestions.map(q => q.question).join(' | ');
    }

    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        explanation: data.explanation,
        feedback: feedbackText,
        viewedExpert: data.viewedExpert,
        understandingLevel: data.understandingLevel
      })
    });
    console.log('Data sent to Google Sheets');
  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
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
    "understandingLevel": 3,
    "encouragement": "Personalized encouraging message"
  }
}

UNDERSTANDING LEVEL SCALE (1-5):
Rate the student's understanding on this scale:

5 - Excellent: Addresses all critical concepts with accurate mechanisms, quantitative details, and sophisticated integration. No misconceptions. Shows advanced understanding with clinical connections.

4 - Strong: Addresses most critical concepts correctly with good mechanistic reasoning. May have minor gaps in detail but no major misconceptions. Shows solid foundational understanding.

3 - Developing: Grasps basic concepts but lacks detail or has 1-2 misconceptions. Missing some critical concepts. Shows reasoning ability but needs refinement and deeper understanding.

2 - Needs Improvement: Multiple misconceptions or significant gaps in understanding. Addresses only 1-2 critical concepts. Fundamental misunderstandings of mechanisms that require correction.

1 - Needs Major Review: Severe misconceptions or completely off-target. Missing nearly all critical concepts. Response too brief or shows fundamental lack of understanding that requires starting over.

FEEDBACK GUIDELINES:
1. Quote their specific words when praising or correcting
2. Be encouraging but honest about misconceptions
3. If they wrote very little, encourage more elaboration
4. If they're wrong about core concepts, prioritize correcting those
5. If they show strong understanding, push them to deeper insights
6. Be specific and reference their actual explanation
7. Assign the understanding level (1-5) based on the scale above

YOUR RESPONSE MUST BE ONLY VALID JSON. DO NOT include markdown code blocks or any other formatting.`;
};

  const submitName = () => {
    if (learnerName.trim().length < 2) {
      alert("Please enter your name");
      return;
    }
    setNameSubmitted(true);
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

      const rawText = await response.text();
      const data = JSON.parse(rawText);
      
      let responseText = data.content[0].text;
      responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      
      const feedbackJSON = JSON.parse(responseText);
      setFeedback(feedbackJSON);

      // Send data to Google Sheets
      await sendToGoogleSheets({
        name: learnerName,
        explanation: userExplanation,
        feedback: feedbackJSON,
        viewedExpert: false,
        understandingLevel: feedbackJSON.overallAssessment?.understandingLevel || 'unknown'
      });

    } catch (error) {
      console.error("Error getting feedback:", error);
      alert("Error getting feedback. Please try again.");
    }

    setLoading(false);
  };

  const handleViewExpert = async () => {
    const newShowExpert = !showExpert;
    setShowExpert(newShowExpert);
    
    // Log when they view expert explanation
    if (newShowExpert && feedback) {
      await sendToGoogleSheets({
        name: learnerName,
        explanation: userExplanation,
        feedback: feedback,
        viewedExpert: true,
        understandingLevel: feedback.overallAssessment?.understandingLevel || 'unknown'
      });
    }
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
          <p className="text-gray-600">How your body maintains acid-base balance</p>
        </div>

        {/* Name Collection */}
        {!nameSubmitted && (
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-8 text-center">
            <User className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Welcome!</h2>
            <p className="text-gray-700 mb-6">Before we begin, please enter your name:</p>
            <input
              type="text"
              value={learnerName}
              onChange={(e) => setLearnerName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && submitName()}
              placeholder="Enter your full name"
              className="w-full max-w-md mx-auto p-4 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none text-gray-800 text-lg mb-4"
              autoFocus
            />
            <button
              onClick={submitName}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
            >
              Continue to Module
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Your responses will be used for research purposes to improve medical education.
            </p>
          </div>
        )}

        {/* Progressive Content and Self-Explanation */}
        {nameSubmitted && (
          <>
            {showProgressiveContent ? (
<ProgressiveContent 
  screens={contentData.progressiveScreens}
  onComplete={() => setShowProgressiveContent(false)}
  DiagramComponent={BloodPhScale}
/>
            ) : (
              <>
                {!feedback && (
                  <>
                    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-6">
                      <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                        <p className="font-semibold text-purple-800 mb-2">📝 Your Task:</p>
                        <p className="text-gray-700">{contentData.prompt}</p>
                      </div>
                    </div>

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
                          Get personalized feedback about your explanation
                        </>
                      )}
                    </button>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>

      {feedback && !showProgressiveContent && nameSubmitted && (
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-purple-900">
              📊 Your Personalized Feedback
            </h2>
            <p className="text-sm text-gray-500">Learner: {learnerName}</p>
          </div>

          {/* Your Explanation Display */}
          <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Your Explanation:</h3>
            <p className="text-gray-700 leading-relaxed italic">"{userExplanation}"</p>
          </div>

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
                    <Search className={`w-5 h-5 mt-1 flex-shrink-0 ${gap.optional ? 'text-purple-600' : 'text-amber-600'}`} />
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
              onClick={handleViewExpert}
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

          <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
            <p className="text-gray-700 font-semibold">✅ Thank you for trying out personalized feedback!</p>
            <p className="text-sm text-gray-600 mt-2">Your responses have been recorded and will help improve medical eductaion.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhModule;
