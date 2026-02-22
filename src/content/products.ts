export interface Feature {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  domain: string;
  description: string;
  color: string;
  icon: string;
  heroImage: string;
  heroPosition: string;
  highlight?: boolean;
  problem: string;
  insight: string;
  features: Feature[];
  stat?: { value: string; label: string };
  humanStory: string;
}

export const products: Product[] = [
  {
    slug: "caresync",
    name: "CareSync",
    tagline: "Where Every Caregiver Sees the Full Picture",
    domain: "Platform & Care Coordination",
    description:
      "RBAC-powered collaborative intelligence connecting parents, therapists, teachers, and doctors into one seamless care loop.",
    color: "--caresync",
    icon: "heart",
    heroImage: "/images/ecosystem/products/caresync/vision.jpg",
    heroPosition: "center 5%",
    problem:
      "A child with autism may see a therapist on Monday, a teacher on Tuesday, and a doctor on Friday — none of whom know what the others observed. Parents carry the burden of being the sole thread connecting fragmented care.",
    insight:
      "CareSync replaces scattered WhatsApp messages and paper reports with role-based dashboards where each stakeholder sees exactly what they need. The therapist sees session progress. The parent sees daily summaries. The doctor sees clinical trends. One child, one record, many perspectives.",
    features: [
      { title: "Role-Based Access Control", description: "Each caregiver sees a tailored view — therapists see session data, parents see daily summaries, doctors see clinical trends." },
      { title: "Unified Child Profile", description: "A single longitudinal record that follows the child across therapists, schools, and clinics." },
      { title: "Smart Alerts", description: "Automated notifications when a child shows regression, milestone achievement, or needs attention." },
      { title: "Multi-Language Support", description: "Interfaces in English, Tamil, and Hindi to reach caregivers across India." },
    ],
    stat: { value: "6M+", label: "children with ASD in India who lack coordinated care" },
    humanStory:
      "Priya is 7. Her mother drives 40 km twice a week for therapy. Each time, she explains from scratch what happened since the last visit. With CareSync, the therapist already knows — because the teacher's notes, the home observations, and the previous session data are all there.",
  },
  {
    slug: "smart-care-vision",
    name: "Smart Care Vision",
    tagline: "AI That Understands What It Sees",
    domain: "Contextual Sensing for Care",
    description:
      "A camera system that comprehends, not just records. Guardian mode for elderly, Ally mode for neurodiverse individuals.",
    color: "--smartcare",
    icon: "eye",
    heroImage: "/images/ecosystem/products/smart-care-vision/breakthrough.jpg",
    heroPosition: "center 18%",
    problem:
      "Standard surveillance cameras see everything but understand nothing. They cannot tell if an elderly person has fallen or if a child with autism is in distress. Families hire human watchers — expensive, inconsistent, and not scalable.",
    insight:
      "Smart Care Vision uses contextual AI to interpret scenes, not just capture them. In Guardian Mode, it detects falls, wandering, and medication adherence for elderly care. In Ally Mode, it recognizes meltdown precursors, self-stimulatory patterns, and engagement levels in neurodiverse children.",
    features: [
      { title: "Guardian Mode", description: "Fall detection, wandering alerts, and medication reminders for elderly individuals living alone." },
      { title: "Ally Mode", description: "Recognizes stress signals, meltdown precursors, and engagement levels in neurodiverse children." },
      { title: "Privacy-First Architecture", description: "Edge processing with no cloud dependency. What the camera sees stays in the home." },
      { title: "Caregiver Dashboard", description: "Real-time status and historical patterns accessible from anywhere via phone." },
    ],
    stat: { value: "140M+", label: "elderly Indians who live with limited or no daily assistance" },
    humanStory:
      "Lakshmi lives alone at 78. Her son works in Chennai. One evening, she slips in the kitchen. Smart Care Vision detects the fall within seconds and sends an alert with a live view to her son's phone. Help arrives in 12 minutes. Without the system, she might have lain there all night.",
  },
  {
    slug: "neurosense",
    name: "NeuroSense",
    tagline: "Where the Body Becomes the Controller",
    domain: "Neurodiverse Interaction",
    description:
      "13 input modalities from sensory mats to EMG. The child's body IS the controller. No headsets required.",
    color: "--neurosense",
    icon: "brain",
    heroImage: "/images/ecosystem/products/neurosense/sensory-mat.jpg",
    heroPosition: "18% 42%",
    highlight: true,
    problem:
      "Traditional VR therapy requires children to wear headsets and hold controllers — devices that many children with autism, cerebral palsy, or sensory processing disorders cannot tolerate. The technology designed to help them becomes the first barrier.",
    insight:
      "NeuroSense removes the controller entirely. The child's own body becomes the interface. Pressure-sensitive floor mats detect stepping and jumping. EMG sensors read muscle intention. Gaze tracking follows eye movement. The system adapts to whatever the child CAN do, not what we wish they could do.",
    features: [
      { title: "13 Input Modalities", description: "Sensory mats, EMG, gaze tracking, gesture recognition, voice, touch screens, and more — the system meets each child where they are." },
      { title: "Adaptive Difficulty", description: "AI adjusts task complexity in real-time based on the child's performance, frustration signals, and engagement." },
      { title: "Therapist Co-Pilot", description: "Real-time analytics dashboard for therapists to observe, annotate, and guide sessions." },
      { title: "Compare & Contrast", description: "Patented methodology that presents real vs. virtual scenarios to build cognitive transfer skills." },
    ],
    stat: { value: "18M", label: "children in India with neurodevelopmental conditions" },
    humanStory:
      "Arjun is 5 and has cerebral palsy. He cannot grip a controller. He cannot wear a headset. But he can step. When his foot touches the sensory mat in the Virtual Fishing game, a fish bites. He laughs. He steps again. In 8 weeks, his bilateral coordination improves by 40%. His body was always the controller — NeuroSense simply listened.",
  },
  {
    slug: "echo-hear",
    name: "ECHO Hear",
    tagline: "Not Louder. Clearer.",
    domain: "Hearing & Communication",
    description:
      "Semantic comprehension accelerator that works at the meaning layer, not just the sound layer. For 63 million Indians with hearing impairment.",
    color: "--echo",
    icon: "ear",
    heroImage: "/images/ecosystem/products/echo-hear/semantic-noise.jpg",
    heroPosition: "center 42%",
    problem:
      "Hearing aids amplify sound. Cochlear implants restore signal. But neither helps with comprehension — understanding spoken language in noisy classrooms, crowded markets, or family gatherings where multiple people speak at once.",
    insight:
      "ECHO Hear works at the meaning layer. Instead of making sound louder, it makes meaning clearer. Using semantic processing, it identifies the primary speaker, filters noise contextually, and presents simplified, structured audio that the brain can process more easily.",
    features: [
      { title: "Semantic Noise Filtering", description: "AI identifies the primary speaker and filters background noise based on contextual meaning, not just frequency." },
      { title: "Classroom Mode", description: "Optimized for educational settings — isolates teacher's voice, adds visual captions on connected devices." },
      { title: "Multi-Speaker Separation", description: "Distinguishes up to 4 simultaneous speakers in family or group settings." },
      { title: "Regional Language Support", description: "Trained on Indian English, Tamil, Hindi, and Telugu speech patterns." },
    ],
    stat: { value: "63M", label: "Indians with hearing impairment — only 0.5% have access to hearing aids" },
    humanStory:
      "Meena sits in the third row of her class. She has moderate hearing loss. Even with her hearing aid, the classroom is a blur of echoes. ECHO Hear isolates her teacher's voice and sends it directly to her aided ear. For the first time, she raises her hand to answer a question. She heard it clearly.",
  },
  {
    slug: "echo-voice",
    name: "ECHO Voice",
    tagline: "Adaptive Communication Accelerator for the Deaf",
    domain: "Deaf Communication",
    description:
      "The world's first ISL-to-Tamil speech system. Wrist-mounted sonar + AR glasses. Dramatically more affordable than camera-based alternatives.",
    color: "--echo",
    icon: "hand",
    heroImage: "/images/ecosystem/products/echo-voice/two-way.jpg",
    heroPosition: "center 40%",
    problem:
      "There are no certified ISL (Indian Sign Language) interpreters in most hospitals, banks, and government offices. Deaf individuals are forced to rely on family members — often children — to interpret in critical situations. Existing sign-to-speech systems only support ASL, not ISL.",
    insight:
      "ECHO Voice is the world's first ISL-to-Tamil speech bridge. A wrist-mounted sonar sensor captures hand geometry in 3D. AR glasses overlay context. The system translates signs to spoken Tamil, Hindi, or English in real time — at a fraction of the cost of camera-based alternatives like BrightSign.",
    features: [
      { title: "ISL-to-Speech", description: "First-of-its-kind Indian Sign Language recognition that outputs spoken Tamil, Hindi, or English." },
      { title: "Wrist Sonar + AR", description: "Wrist-mounted sonar captures hand shapes without cameras. AR glasses add visual context and captions." },
      { title: "Radically Affordable", description: "At Rs.29,400 vs Rs.2.6L+ for camera-based systems like BrightSign, ECHO Voice is accessible for community deployment." },
      { title: "Offline Capable", description: "Core translation runs on-device — works in rural areas without internet." },
    ],
    stat: { value: "6M+", label: "ISL users in India who lack accessible communication tools" },
    humanStory:
      "Ravi is deaf. He signs fluently. But at the hospital, no one understands ISL. His 12-year-old daughter interprets — explaining his chest pain, answering personal health questions. With ECHO Voice, Ravi speaks for himself. His signs become Tamil words. The doctor hears him clearly. His daughter can just be his daughter.",
  },
  {
    slug: "emboss",
    name: "EMBOSS",
    tagline: "Engrave, Don't Encode",
    domain: "Tactile STEM Learning (Vision)",
    description:
      "AI-powered tactile display that renders actual math shapes as raised surfaces. Dramatically more affordable than imported alternatives.",
    color: "--emboss",
    icon: "grid",
    heroImage: "/images/ecosystem/products/emboss/hero.jpg",
    heroPosition: "center 32%",
    problem:
      "Blind students cannot learn geometry, graphs, or spatial math from Braille alone. Braille encodes math as text — but a triangle is not a word, it is a shape. Existing tactile displays cost Rs.12-15L for imported pin-array systems and are unavailable in Indian schools.",
    insight:
      "EMBOSS renders actual geometric shapes as raised surfaces on an affordable tactile display. A triangle feels like a triangle. A sine wave feels like a wave. The AI converts any digital math content into tactile form instantly — at a fraction of the cost of imported alternatives.",
    features: [
      { title: "Shape-First Learning", description: "Renders geometric shapes, graphs, and diagrams as raised tactile surfaces — not Braille descriptions." },
      { title: "AI Content Conversion", description: "Instantly converts digital math textbooks, PDFs, and worksheets into tactile format." },
      { title: "Radically Affordable", description: "At Rs.22,500 vs Rs.12-15L for imported pin-array displays, EMBOSS is school-affordable." },
      { title: "Curriculum Aligned", description: "Content mapped to CBSE and state board math syllabi from Class 6 to Class 12." },
    ],
    stat: { value: "5M", label: "blind Indians — most never access STEM education beyond basic Braille literacy" },
    humanStory:
      "Kavitha is 14 and blind. She is brilliant at mental math but has never 'seen' a triangle. Her teacher places her hands on EMBOSS. The pins rise to form a triangle. Then a square. Then a circle inscribed in the square. Kavitha traces the edges and smiles — she finally understands what 'pi' means.",
  },
  {
    slug: "sightline",
    name: "SIGHTLINE",
    tagline: "AI Vision Companion for the Visually Impaired",
    domain: "Vision Independence",
    description:
      "A robotic companion that navigates, sees, understands, and communicates. Built for Indian roads from the ground up.",
    color: "--sightline",
    icon: "robot",
    heroImage: "/images/ecosystem/products/sightline/hero.jpg",
    heroPosition: "82% 18%",
    problem:
      "White canes detect obstacles at knee height. Guide dogs are expensive, require years of training, and are culturally unfamiliar in India. No existing navigation aid handles India's unpredictable roads — open manholes, uneven footpaths, stray animals, and missing curb cuts.",
    insight:
      "SIGHTLINE is not a navigation app or a smart cane — it is a robotic companion. It walks beside the user, sees the full environment at human height, understands context (a pothole is different from a puddle), and communicates through bone-conduction audio and haptic feedback. Built for Indian roads, not adapted from Western designs.",
    features: [
      { title: "360° Environmental Awareness", description: "LIDAR + camera fusion provides complete situational awareness at human height — not cane height." },
      { title: "Indian Road Intelligence", description: "Trained on Indian road conditions: open manholes, missing curb cuts, auto-rickshaws, stray animals." },
      { title: "Contextual Navigation", description: "Understands destinations, not just directions. 'Take me to the pharmacy' works with local landmark knowledge." },
      { title: "Multi-Modal Feedback", description: "Bone-conduction audio for voice guidance. Haptic belt for directional cues. Both hands stay free." },
    ],
    stat: { value: "12M", label: "blind Indians — 90% navigate without any assistive device" },
    humanStory:
      "Kumar walks to work every day. He uses a white cane. It finds the curb, but not the open manhole ahead. SIGHTLINE walks beside him, gently steering him left with a haptic buzz. 'Manhole ahead, 3 steps. Moving left.' Kumar doesn't break stride. He arrives at work, on time, unafraid.",
  },
  {
    slug: "smart-wheelchair",
    name: "Smart Wheelchair",
    tagline: "Don't Build a New Wheelchair. Retrofit 7 Million Existing Ones.",
    domain: "Mobility & ADAS",
    description:
      "ADAS-powered retrofit platform for autonomous indoor and outdoor mobility. Three tiers from Rs.30K to Rs.1.8L.",
    color: "--wheelchair",
    icon: "wheelchair",
    heroImage: "/images/ecosystem/products/smart-wheelchair/hero.jpg",
    heroPosition: "center 52%",
    problem:
      "India has 7 million wheelchair users. Smart wheelchairs cost Rs.5-15L — affordable to almost none. Meanwhile, millions of manual wheelchairs sit unused or underused because they cannot navigate independently. The problem is not wheelchair design — it is intelligence retrofit.",
    insight:
      "Instead of building expensive new wheelchairs, Smart Wheelchair retrofits existing ones with ADAS (Advanced Driver Assistance Systems). Three tiers — Basic (collision avoidance, Rs.30K), Standard (indoor autonomy, Rs.80K), Premium (full outdoor navigation, Rs.1.8L) — mean that any wheelchair can become smart.",
    features: [
      { title: "Retrofit Architecture", description: "Bolt-on modules that attach to any standard wheelchair — no replacement needed." },
      { title: "Three Tiers", description: "Basic (Rs.30K) for collision avoidance, Standard (Rs.80K) for indoor navigation, Premium (Rs.1.8L) for full autonomy." },
      { title: "ADAS Intelligence", description: "LiDAR + camera sensors for obstacle detection, path planning, and autonomous navigation." },
      { title: "Voice + Gaze Control", description: "Multiple control inputs: joystick, voice command, gaze tracking, and head movement for users with limited hand function." },
    ],
    stat: { value: "7M", label: "wheelchair users in India — less than 1% have powered chairs" },
    humanStory:
      "Deepa has used the same manual wheelchair for 8 years. Her father pushes her. With the Smart Wheelchair Basic kit retrofitted to her chair for Rs.30K, she can now drive herself through the house. She moves to the kitchen. She wheels to the window. For the first time, she goes where she wants, when she wants.",
  },
  {
    slug: "exoforce",
    name: "ExoForce",
    tagline: "Restoring Mobility. Rebuilding Strength. Reclaiming Independence.",
    domain: "Wearable Rehabilitation",
    description:
      "Intelligent wearable exoskeleton with hybrid actuation: assist, resist, and gamify rehabilitation at a fraction of the cost of imports.",
    color: "--exoforce",
    icon: "muscle",
    heroImage: "/images/ecosystem/products/exoforce/hero.jpg",
    heroPosition: "center 18%",
    problem:
      "Post-stroke rehabilitation requires months of repetitive physical therapy. Most patients stop too early because sessions are expensive, boring, and require travel to specialized centers. Rehabilitation exoskeletons exist but cost Rs.29L-1.65Cr for imported systems — exclusively for elite hospitals.",
    insight:
      "ExoForce is a lightweight, affordable exoskeleton that brings rehabilitation home. It has three modes: Assist (helps weak limbs complete movements), Resist (provides progressive challenge as strength returns), and Game (turns exercises into interactive games for motivation). From Rs.30K-60K — a fraction of the cost of imported exoskeletons — it makes rehab accessible and engaging.",
    features: [
      { title: "Hybrid Actuation", description: "Three modes — Assist, Resist, Game — that adapt from acute recovery to strength building to maintenance." },
      { title: "Home Rehabilitation", description: "Lightweight enough for daily home use. No hospital visits needed for routine therapy." },
      { title: "Gamified Recovery", description: "Interactive games that turn repetitive exercises into engaging activities — increasing compliance from 30% to 85%." },
      { title: "Radically Affordable", description: "From Rs.30K-60K vs Rs.29L-1.65Cr for imported systems, ExoForce brings exoskeleton therapy within reach." },
    ],
    stat: { value: "1.5M", label: "new stroke cases in India annually — 70% need rehabilitation they never complete" },
    humanStory:
      "Suresh had a stroke at 52. He regained partial use of his right arm but stopped therapy after 6 weeks — he could not afford to keep going. ExoForce arrives at his home. He puts it on. The Assist mode helps him lift his arm to touch his head — something he has not done in months. The Game mode turns his daily exercises into a fishing game his grandson plays alongside him. He does not skip a single day.",
  },
];
