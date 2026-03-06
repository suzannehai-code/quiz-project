# What's Your Coffee Personality? — Quiz Requirements

## Overview
A fun personality quiz that recommends a coffee drink based on the user's answers. Users answer 6 questions and get a single personality type + coffee recommendation at the end.

---

## Personality → Coffee Pairings (4 total)

| Personality | Coffee | Tagline | Image |
|-------------|--------|---------|-------|
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" | public/caramel-latte.jpg |
| Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." | public/black-coffee.jpg |
| Social Butterfly | Cappuccino | "Coffee is better with company" | public/cappuccino.jpg |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" | public/drip-coffee.jpg |

---

## Result Display
**Single recommendation** — show the top personality only.
Example: "You're a Social Butterfly! Your coffee: Cappuccino."

---

## Visual Style
**Style 1: Playful & Colorful**
- Warm gradient background (peach/pink tones)
- White card with large border-radius (rounded)
- Bright, emoji-forward
- Fun, bouncy font (Nunito or similar)
- Colorful answer option borders on hover/select

---

## Images & Icons
- **Images:** Yes — one photo per result (downloaded to public/)
- **Icons:** Yes — emoji icons next to each answer option

---

## Quiz Questions

### Q1: It's Friday night. What are you doing?
- 🎉 Hosting a dinner party for all my friends → Social Butterfly
- 📖 Reading with a cozy blanket and tea → Zen Minimalist
- 🍫 Treating myself to dessert and a movie → Sweet Enthusiast
- 💻 Catching up on emails — the inbox won't clear itself → Practical Pragmatist

### Q2: Pick a vacation:
- 🏝️ All-inclusive resort with a big group of friends → Social Butterfly
- 🏔️ Solo hiking trip in the mountains → Zen Minimalist
- 🍰 Food tour through Europe → Sweet Enthusiast
- 🗺️ Road trip — no plan, just go → Practical Pragmatist

### Q3: Your Hogwarts house is:
- 🦁 Gryffindor — brave and bold → Practical Pragmatist
- 🦅 Ravenclaw — wise and focused → Zen Minimalist
- 🦡 Hufflepuff — loyal and warm → Social Butterfly
- 🐍 Slytherin — ambitious and determined → Sweet Enthusiast

### Q4: Your phone lock screen is:
- 📸 A group photo with your favorite people → Social Butterfly
- 🌿 A calm nature scene or abstract art → Zen Minimalist
- 🐶 Your pet or a cute animal → Sweet Enthusiast
- 🕐 Just the default — it's a phone, not a gallery → Practical Pragmatist

### Q5: You find $50 in an old jacket. You:
- 🍹 Suggest happy hour with the whole crew → Social Butterfly
- 📚 Buy a book you've been eyeing → Zen Minimalist
- 🧁 Treat yourself to something delicious → Sweet Enthusiast
- 💰 Put it toward something useful → Practical Pragmatist

### Q6: Pick a color that speaks to you:
- ☀️ Warm yellow — sunny and inviting → Sweet Enthusiast
- 🌊 Deep blue — calm and steady → Zen Minimalist
- 🌸 Coral pink — social and vibrant → Social Butterfly
- 🌲 Forest green — grounded and practical → Practical Pragmatist

---

## Scoring Logic
- Each answer maps to one of the 4 personalities
- Tally up which personality gets the most votes
- Show that personality + its coffee recommendation + its photo
- In case of a tie, pick the first personality in the tie

---

## Tech Stack
- Next.js (React framework)
- JavaScript
- Tailwind CSS or inline styles
- No backend needed — all logic runs in the browser
