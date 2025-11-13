# Technical Interview Playbook

## Practical Information

### Whiteboard
- For office interviews, book a room with a whiteboard (SergelConferens is a good backup plan if no rooms are available at the office).
- For remote interviews, use https://miro.com/online-whiteboard/

### Laptop
If the candidate could not bring a laptop (or in case of technical difficulties), a laptop is available in the testing device locker. Login credentials are available in 1Password under `Macbook Technical ITW`.

- Make sure the assignment repository is already downloaded on the candidate's computer before starting the interview
- Also make sure that the node application starts (it should start as is) and that the tests also run and pass.

### Sharing the `nodejs-assignment` repository
- Download the `main` branch by clicking [this link](https://github.com/hemnet/nodejs-assignment/archive/refs/heads/main.zip)
- **At least 48 hours before the interview**, send the candidate the zip file, and ask them to review the README.md file inside it.

## Timeline for a 90-Minute Interview

### Introduction (10 minutes)
1. **Everyone** introduces themselves briefly, don't forget to state your team and position
2. **Interviewer** asks if candidate has reviewed the code repository in the zip file sent by HR, and if there are any questions
3. **Interviewer** explains the interview format:
   - This is a collaborative session, not an exam
   - We'll do both code review and feature implementation
   - The whiteboard is available for architecture discussion
   - Share your reasoning out loud - we want to understand how you think
   - Ask questions - that's what we do in real work
   - AI tools are allowed at your discretion, but tell us when and why you're using them

### Part 1: Code Review (20 minutes)
- **Interviewer** picks a pull request from `docs/PULL_REQUESTS`
- **Candidate** reviews the code and discusses:
  - What works well?
  - What could be improved?
  - How would you give feedback to the author?
- **Interviewer** observes:
  - How they communicate feedback (constructive vs critical)
  - What they prioritize (performance, readability, maintainability, testing)
  - Whether they understand the business context
  - Their depth of technical knowledge

### Part 2: Feature Request - Implementation (45 minutes)
- Interviewer picks one of the Feature Requests in `docs/FEATURE_REQUESTS` based on candidate level and sends it to them via Airdrop or email.
- **Candidate** reads the feature request:
  - Implement Feature Request 1 together
  - Encourage whiteboard use for planning
  - This is pair programming - they drive, you navigate

### Wrap-up (5 minutes)
**Interviewer** asks: "If you were deploying this to production tomorrow, what would you change or add?"

Listen for: monitoring, error handling, validation, documentation, database migrations, security considerations

### Candidate Questions (10 minutes)
**Candidate** has time to ask questions about the role, team, tech stack, Hemnet's culture, etc.

## Evaluation Criteria

### Technical Skills
- [ ] Writes clean, readable code
- [ ] Understands TypeScript and Node.js concepts
- [ ] Can navigate an existing codebase
- [ ] Writes and understands tests
- [ ] Considers edge cases and error handling
- [ ] Makes pragmatic decisions (doesn't over-engineer)

### Problem-Solving
- [ ] Breaks down problems systematically
- [ ] Considers multiple approaches
- [ ] Understands tradeoffs
- [ ] Asks clarifying questions
- [ ] Knows when to use tools (including AI) appropriately

### Communication & Collaboration
- [ ] Explains their thinking clearly
- [ ] Gives constructive, empathetic feedback in code review
- [ ] Listens to and incorporates feedback
- [ ] Comfortable saying "I don't know" or asking for help
- [ ] Thinks about the team impact of their decisions

### Taste & Judgment
- [ ] Writes maintainable code, not just working code
- [ ] Considers long-term implications
- [ ] Balances perfectionism with pragmatism
- [ ] Thinks about the next person who will read the code
- [ ] Demonstrates empathy for teammates and users

### AI Tool Usage (if applicable)
- [ ] Uses AI strategically, not as a crutch
- [ ] Can evaluate AI suggestions critically
- [ ] Explains why they're using AI for a specific task
- [ ] Understands the code AI generates

## Tips for Interviewers

### Do:
- Create a collaborative atmosphere - stand at the whiteboard together
- Ask "what are you thinking?" if they go quiet
- Give small hints if they're stuck, just like in real pair programming
- Take notes on specific examples of their reasoning
- Remember: we want to hire them if they're good, we're not trying to trick them

### Don't:
- Jump in to correct small syntax errors immediately
- Let them struggle in silence for more than 2-3 minutes
- Judge them for using Google or docs - we all do that
- Compare them to other candidates during the interview
- Make them feel like they're being tested rather than collaborated with