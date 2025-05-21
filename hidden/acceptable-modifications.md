### In Scope Changes

_(Enhance or customize the classic quiz-game experience while preserving the core concept of answering questions to test knowledge)_

1. **View question & answer list** – add a screen to display all questions from the game along with their correct answers for review.
2. **Category selection** – allow players to choose from various topics (e.g., Math, History, Science) before starting the quiz.
3. **Player name input & leaderboard** – prompt players to enter their names, track individual scores, and display a leaderboard at the end of each game.
4. **LLM integration for question generation** – connect to a Large Language Model (e.g., GPT) to generate new quiz questions and answers at the beginning of each session.
5. **Difficulty level selection** – let users pick a grade level (e.g., 1st Grade through 12th Grade) to tailor the difficulty of generated questions.
6. **Non-multiple choice questions** – support open-ended question formats where players type in answers instead of selecting from options.
7. **End-of-game answer evaluation** – collect player answers and send them to the LLM for evaluation after the game ends, returning a list of correct answers, player’s answers, and a score percentage.
8. **Real-time answer feedback** – after each answer is submitted, immediately send it to the LLM and return feedback indicating if it’s correct or incorrect.
9. **Responsive/mobile-friendly design** – ensure the UI works well on phones, tablets, and desktops.
10. **Sound FX & animations** – add audio cues for correct/incorrect answers and transitions between questions.
11. **Tutorial & help system** – explain the rules and interface for first-time players.
12. **Timer per question** – introduce a countdown to answer each question to add challenge and urgency.
13. **Accessibility improvements** – support screen readers, keyboard navigation, and colorblind-friendly themes.
14. **Persist player stats** – store past scores and game history in `localStorage` or a backend for long-term tracking.

---

### Out of Scope Changes

_(Would change the quiz format beyond recognition or violate assignment constraints)_

- Turning the app into **a board game, arcade game, or shooter**.
- **Adding gambling or wagers** on quiz outcomes.
- **Turning the game into a multiplayer battle royale** format.
- **Changing core gameplay into flashcards, hangman, or memory games**.
- **Using AR/VR or 3D avatars** that replace the simple Q&A interface.
- **Adding cartoonish power-ups or attacks** to disrupt other players.
- **Making the app primarily a social platform** with messaging or profiles.
- **Fully outsourcing evaluation to a human** rather than the AI or system logic.
