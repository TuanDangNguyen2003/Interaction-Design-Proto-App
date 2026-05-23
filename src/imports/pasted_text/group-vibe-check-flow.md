Add a complete second key path scenario to the existing TripFit mobile prototype.

Create a full clickable path called “Group Vibe Check”.

Do not create a chatbot.
Do not create a prompt box.
Do not show “Ask AI”.
Do not show one single generated recommendation.
The flow must feel like a structured decision board for group travel decisions.

Scenario content:
Lina is traveling in Barcelona with 3 friends.
They have 3 hours before dinner.
They are slightly tired.
They have a moderate budget.
They want something social, casual, and not too far.
They already have too many scattered ideas:
- saved TikToks
- Instagram posts
- screenshots
- Google Maps pins
- group chat suggestions

TripFit should help them sort existing and nearby ideas into a small justified shortlist, compare trade-offs, choose one option, save a backup, and share the decision with the group.

Keep the same visual style as the current TripFit prototype:
- mobile portrait screens
- clean modern design
- white / very light gray background
- dark navy text
- one teal or blue accent color
- rounded cards
- consistent chips
- consistent buttons
- consistent top bar
- no desktop scrollbars
- no login or sign-up
- one clear main action per screen

Create these screens and interactions:

SCREEN L1 — Dashboard with two clear paths
Title: TripFit
Subtitle: What fits now?
Show two main cards:
1. Low-Effort Nearby
Description: “Sort nearby options for a quick decision.”
2. Group Vibe Check
Description: “Turn everyone’s saved ideas into one group decision.”
Make “Group Vibe Check” visually prominent or equally prominent.
Button on Group Vibe Check: “Start group decision”

Interaction:
Tap “Start group decision” → Screen L2.

SCREEN L2 — Group decision setup
Top stepper:
1 Context / 2 Sources / 3 Decision Board / 4 Vote / 5 Confirm
Highlight step 1.
Title: What does the group need now?
Show selected context cards:
- People: 4
- Time left: 3 hours
- Budget: Moderate
- Energy: Medium-low
- Weather: Uncertain / prefer covered
- Desired vibe: Social and casual
- Location: Barcelona center
Each value appears as a selected chip with a check mark.
Primary button: “Continue”
Secondary link: “Edit”

Interaction:
Tap “Continue” → Screen L3.
Tap “Edit” → Screen L3A.

SCREEN L3A — Edit group context
Title: Adjust group context
Use grouped chips, not text input.

Group size:
2 / 3 / 4 / 5+

Time left:
1 hour / 2 hours / 3 hours / Half day

Budget:
Low / Moderate / Flexible

Energy:
Low / Medium-low / Medium / High

Weather preference:
Indoor / Covered / Outdoor ok

Vibe:
Calm / Social / Food / Scenic / Unique

Selected values:
4, 3 hours, Moderate, Medium-low, Covered, Social + Food.

Primary button: “Use this context”
Secondary button: “Cancel”

Interaction:
Tap “Use this context” → Screen L3.

SCREEN L3 — Bring in group options
Top stepper highlights step 2.
Title: Bring in everyone’s ideas
Subtitle: TripFit sorts what the group already saved and what is realistically nearby.
Show source cards:
1. Lina’s saved places
Text: “8 saved ideas”
Status: included

2. Friends’ suggestions
Text: “6 ideas from group chat”
Status: included

3. Nearby realistic options
Text: “14 nearby candidates”
Status: available now

4. Google Maps pins
Text: “5 pinned places”
Status: included

At the bottom, show context summary:
4 people • 3 hours • Moderate budget • Covered preferred • Social food vibe

Primary button: “Build group decision board”
Secondary link: “Edit context”

Interaction:
Tap “Build group decision board” → Screen L4.

SCREEN L4 — Sorting feedback
Title: Sorting group ideas
Subtitle: Checking what works for everyone right now.
Show progress checklist:
- Combining saved places, pins, and group chat ideas
- Removing places too far before dinner
- Removing options above the group budget
- Removing outdoor-only options because weather is uncertain
- Prioritizing social places good for 4 people
- Keeping one backup if the first choice is crowded

Include top-right Cancel button.

After checklist, show primary button:
“View group decision board”

Interaction:
Tap “View group decision board” → Screen L5.
Tap “Cancel” → Screen L3.

SCREEN L5 — Group decision board
Top stepper highlights step 3.
Title: 3 realistic fits for your group
Subtitle: Ranked for 4 people, 3 hours, moderate budget.
At top, show persistent context summary:
4 people • 3 hours • Medium-low energy • Moderate budget • Covered/social

Show feedback banner:
“11 options filtered out: too far, outdoor-only, too expensive, or poor group fit.”

Show three option cards.

Card 1:
Name: Covered Food Market
Fit label: Best group compromise
Distance: 15 min transit
Price: $$
Effort: Low
Weather fit: Covered
Group fit: Strong
Strength: Food choices for everyone
Trade-off: Can be busy
Button: Compare

Card 2:
Name: Indoor Arcade Café
Fit label: Most playful option
Distance: 12 min walk
Price: $
Effort: Low
Weather fit: Indoor
Group fit: Strong
Strength: Easy shared activity
Trade-off: Less local feeling
Button: Compare

Card 3:
Name: Rooftop Tapas Bar
Fit label: Best atmosphere
Distance: 20 min transit
Price: $$$
Effort: Medium
Weather fit: Covered terrace
Group fit: Medium
Strength: Memorable view and social vibe
Trade-off: More expensive
Button: Compare

Bottom sticky buttons:
Primary: “Compare all”
Secondary: “Edit context”

Interaction:
Tap “Compare all” → Screen L6.
Tap any “Compare” → Screen L6.
Tap “Edit context” → Screen L3A.
Tap filtered-out banner → Screen L5A.

SCREEN L5A — Filtered-out options explanation
Title: Why options were filtered out
Show examples:
- Beach viewpoint: removed because outdoor-only and weather uncertain
- Famous restaurant: removed because too expensive for group budget
- Museum across town: removed because 40 min away
- Cocktail bar: removed because not suitable before dinner
Button: “Back to decision board”

Interaction:
Tap “Back to decision board” → Screen L5.

SCREEN L6 — Compare group trade-offs
Top stepper highlights step 4.
Title: Compare trade-offs
Subtitle: Choose the best compromise, not the most random recommendation.
Use vertical comparison cards, not a wide table.

Comparison card 1:
Covered Food Market
Time fit: Strong
Budget fit: Strong
Energy fit: Strong
Weather fit: Strong
Group fit: Strong
Risk: Medium crowd risk
Main trade-off: Can be busy
Button: “View details”

Comparison card 2:
Indoor Arcade Café
Time fit: Strong
Budget fit: Strong
Energy fit: Strong
Weather fit: Strong
Group fit: Strong
Risk: Low
Main trade-off: Less local feeling
Button: “View details”

Comparison card 3:
Rooftop Tapas Bar
Time fit: Medium
Budget fit: Weak
Energy fit: Medium
Weather fit: Medium
Group fit: Medium
Risk: Higher cost
Main trade-off: More expensive
Button: “View details”

At bottom, show recommendation banner:
“Best compromise: Covered Food Market”
Reason: “Best balance of group fit, budget, weather safety, and food variety.”

Primary button: “Continue with Covered Food Market”
Secondary link: “Back to board”

Interaction:
Tap “Continue with Covered Food Market” → Screen L7.
Tap “Back to board” → Screen L5.
Tap any “View details” → Screen L7, adjusted to that option.

SCREEN L7 — Option detail
Title: Covered Food Market
Show image placeholder.
Show quick facts:
15 min transit • Covered • $$ • Low effort • Good for 4 people

Section: Why this fits now
Highlighted card text:
“Best match for your group of 4: covered, low effort, moderate budget, casual food choices, and realistic within your 3-hour window.”

Section: Fit breakdown
Use fit bars:
- Group fit: Strong
- Time fit: Strong
- Budget fit: Strong
- Weather fit: Strong
- Energy fit: Strong
- Novelty: Medium

Section: Trade-off
Text:
“It may be busy, so TripFit recommends keeping a backup option.”

Buttons:
Primary: “Choose this”
Secondary: “Keep as backup”
Tertiary link: “Back to comparison”

Interaction:
Tap “Choose this” → Screen L8.
Tap “Keep as backup” → Screen L8A.
Tap “Back to comparison” → Screen L6.

SCREEN L8A — Backup saved only
Title: Added to backup
Text: “Covered Food Market is saved as a backup.”
Buttons:
Primary: “Return to board”
Secondary: “Choose this instead”

Interaction:
Tap “Return to board” → Screen L5.
Tap “Choose this instead” → Screen L8.

SCREEN L8 — Group agreement / quick vote
Title: Quick group check
Subtitle: Make sure everyone is okay with the choice.
Show selected option:
Covered Food Market

Show four small avatar rows:
- Lina: Yes
- Friend 1: Yes
- Friend 2: Maybe
- Friend 3: Yes

Show one concern chip:
“Could be crowded”

Show prompt:
“Save a backup in case it is full?”

Buttons:
Primary: “Save backup and confirm”
Secondary: “Change choice”

Interaction:
Tap “Save backup and confirm” → Screen L9.
Tap “Change choice” → Screen L5.

SCREEN L9 — Backup selection
Title: Backup option
Subtitle: Travel plans can change.
Main choice card:
Covered Food Market
Reason: Best group compromise.

Backup suggestion card:
Indoor Arcade Café
Reason: Indoor, low effort, playful, and cheaper if the market is crowded.

Buttons:
Primary: “Save backup”
Secondary: “Skip backup”
Link: “Change main choice”

Interaction:
Tap “Save backup” → Screen L10.
Tap “Skip backup” → Screen L10.
Tap “Change main choice” → Screen L5.

SCREEN L10 — Decision confirmation
Top stepper highlights step 5.
Use clean celebratory style.
Title: Decision made!
Subtitle: You’re heading to Covered Food Market.

Show decision card:
- 15 min transit
- Covered
- Moderate budget
- Low effort
- Good for 4 people
- Backup saved: Indoor Arcade Café

Positive message:
“Good choice — this fits your group, budget, energy, and weather.”

Primary button: “Get directions”
Secondary button: “Share with group”
Small link: “Undo choice”
Small link: “Use backup instead”
Small link: “Back to dashboard”

Interaction:
Tap “Get directions” → Screen L11.
Tap “Share with group” → Screen L12.
Tap “Undo choice” → Screen L5.
Tap “Use backup instead” → Screen L13.
Tap “Back to dashboard” → Screen L14.

SCREEN L11 — Directions placeholder
Title: On the way
Route card:
Covered Food Market
15 min transit
Leave now to stay within your 3-hour window.
Backup card:
Indoor Arcade Café
Buttons:
Primary: “Done”
Secondary: “Use backup instead”

Interaction:
Tap “Done” → Screen L14.
Tap “Use backup instead” → Screen L13.

SCREEN L12 — Share with group
Title: Share with group
Message preview:
“Let’s go to Covered Food Market. It fits our 3-hour window, moderate budget, medium-low energy, and covered/social vibe. Backup: Indoor Arcade Café.”
Buttons:
Primary: “Copy message”
Secondary: “Done”
Link: “Back”

Interaction:
Tap “Copy message” → show toast: “Copied.”
Tap “Done” → Screen L14.
Tap “Back” → Screen L10.

SCREEN L13 — Use backup
Title: Switch to backup?
Text:
“If Covered Food Market is too crowded, Indoor Arcade Café is ready.”
Backup card:
Indoor Arcade Café
12 min walk • Indoor • Low effort • $
Buttons:
Primary: “Use backup”
Secondary: “Keep original”

Interaction:
Tap “Use backup” → Screen L10 with updated title: “You’re heading to Indoor Arcade Café.”
Tap “Keep original” → Screen L10.

SCREEN L14 — Dashboard return
Title: TripFit
Subtitle: What fits now?
Show recent decision card:
Covered Food Market
Chosen because: group fit, covered, low effort, moderate budget.
Show backup:
Indoor Arcade Café
Button:
Primary: “Start another decision”

Interaction:
Tap “Start another decision” → Screen L2.

Important interaction principles to make visible:
- Show selected context chips on all decision/recommendation screens.
- Use chips and cards only, no free text prompt.
- Show sorting feedback and filtered-out reasons.
- Use a stepper to break the task into smaller pieces.
- Show final task closure with “Decision made!”
- Congratulate the user with “Good choice.”
- Provide clear exits: Back, Edit context, Back to dashboard.
- Provide emergency exits: Undo choice, Change choice, Use backup instead.

Important visual principles:
- One clear main action per screen.
- Related items grouped in cards.
- Controls placed close to the items they affect.
- Same card structure for all options.
- Same chip style for all context values.
- Same primary button style across all screens.
- Calm small color palette.
- Strong hierarchy: title, context summary, main card, primary button.
- No visual clutter.
- No desktop-style scrollbars.