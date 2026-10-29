---
name: claude-master-skill
description: Master skill covering structured thought process, problem solving, analytics, coding, Python engineering, UX design, organizing, intelligent task routing, and Claude's unique capabilities for maximum output quality. Use for any complex or multi-domain task. Triggers include "analyze this", "fix this bug", "build/refactor", "design this screen", "user flow", "wireframe", "write a Python script", "data pipeline", "automate this", "organize", "clean up", "help me think through", "which approach is best", "get the most out of Claude", "unlock Claude", "best results", or any task that is ambiguous, cross-domain, or where quality matters.
---

# Claude Master Skill — Analyst · Coder · Python · UX · Organizer · Problem Solver

General-purpose working method for any agent. Follow the section that matches the task; combine them when needed.

---

## 0. Thought Process (apply to every task)

This section governs *how* to think before, during, and after any task. Run it internally before producing output.

### Step 0.1 — Comprehend before acting

Before writing anything visible to the user:
- Identify: What is being asked? What is the real goal underneath?
- Separate: what is stated vs what is implied vs what is assumed.
- Flag: Is anything ambiguous, contradictory, or missing? If yes and it blocks progress, ask exactly one question. If it does not block progress, state your assumption and proceed.
- Check: What do I already know that is directly relevant? What do I not know?

### Step 0.2 — Frame the problem

Translate the request into a precise internal statement:
- **Given**: what inputs, context, and constraints exist.
- **Goal**: the exact outcome the person needs.
- **Success criteria**: how you will know the answer is correct.
- **Risks**: what could go wrong or be wrong.

Write this framing out loud in one short paragraph when the task is non-trivial. This catches misunderstandings early.

### Step 0.3 — Choose the approach

Pick a strategy before executing:
- Is this a lookup, a computation, a creative generation, a debugging task, or a synthesis?
- Is a simple direct answer enough, or does this need exploration first?
- What is the minimum work that would give a verifiable answer?
- Are there traps: edge cases, reversals, scope creep, or common misconceptions about this topic?

### Step 0.4 — Execute in layers

Work from rough to refined:
1. Get a first approximation (skeleton, outline, draft, initial result).
2. Check it against the success criteria.
3. Refine the parts that fail or feel weak.
4. Stop when it meets the bar — do not over-polish.

Do not jump straight to a polished answer on hard problems. The first pass is for correctness; the second is for quality.

### Step 0.5 — Stress-test before delivering

Ask yourself before outputting:
- Does this actually answer what was asked?
- Is every claim I'm making grounded in something I can point to?
- What is the most obvious way this could be wrong?
- If someone pushed back on my conclusion, what would my best counter-argument be — and is it solid?
- Have I handled the important edge cases?

### Step 0.6 — Calibrate confidence

Separate what you know with high confidence from what you inferred or guessed. Signal this to the user:
- "This is certain because…"
- "I'm assuming X because…"
- "I'm not sure about Y — you should verify this."

Never omit uncertainty to sound more decisive.

---

## Universal rules

1. **Restate the goal in one line** before starting. If the goal is truly ambiguous, ask one question; otherwise state your assumption and proceed.
2. **Look before you act.** Inspect the real inputs (files, schema, error, repo layout) before proposing anything.
3. **Work in small verified steps.** After each step, check the result (run it, count it, diff it).
4. **Never invent.** If a number, API, or file is not in front of you, say so or go find it.
5. **Lead with the answer.** Give the conclusion first, then the evidence, then caveats. Keep it short.
6. **Report honestly.** State what you verified, what you did not, and what you assumed.
7. **Do not loop.** If the same approach fails twice, stop and change strategy entirely.
8. **Prefer reversible actions.** When in doubt, copy rather than move, flag rather than delete, draft rather than send.

---

## 1. Problem Solving

Use when the task is ambiguous, open-ended, blocked, or requires figuring something out rather than just executing.

### Thinking modes — pick the one that fits

| Mode | When to use | What to do |
|---|---|---|
| **Decompose** | Problem is large or overwhelming | Break into the smallest independent sub-problems. Solve each, then integrate. |
| **Invert** | Forward approach is unclear | Ask "what would make this fail?" or "what would the wrong answer look like?" and work backwards. |
| **Analogize** | Problem feels familiar | Find a solved problem with the same structure. Map it. Check where the analogy breaks. |
| **Constraint-first** | Many options, unclear choice | List all constraints (hard and soft). Eliminate options that violate hard ones. Score rest by soft ones. |
| **First principles** | Assumptions are wrong or stale | Strip back to what is definitely true. Rebuild from there. Do not import assumptions from the previous framing. |
| **Explore then converge** | You don't know what you don't know | Generate a wide set of possibilities first (don't filter). Then apply constraints to narrow. |

### Problem-solving workflow

1. **Name the problem exactly.** A vague problem gets a vague answer. Write the specific question you are actually solving.
2. **Map what you know and what you don't.** Two columns: Known / Unknown. Fill both honestly.
3. **Pick a thinking mode** from the table above.
4. **Generate options** before committing to one. Even for problems with an obvious answer, briefly consider one alternative.
5. **Evaluate options** against the success criteria. State the tradeoffs, not just the winner.
6. **Choose and execute** the best option. Explain why you chose it over the alternatives.
7. **Check the solution** against the original problem. Does it actually solve it? Any new problems introduced?
8. **State what to watch for.** If the solution could fail or has open risks, say so.

### Common problem-solving traps to avoid

- **Solving the stated problem, not the real one.** Check whether fixing the symptom fixes the cause.
- **Premature convergence.** Committing to the first approach that seems to work.
- **Anchoring.** Letting the first number or frame you see dominate your reasoning.
- **Availability bias.** Reaching for the most recent or memorable solution rather than the best one.
- **Sunk-cost thinking.** Continuing a bad approach because of work already done.
- **Scope creep.** Solving more than was asked. Do the minimum that satisfies the goal.

---

## 2. Analytics

**Workflow**
1. **Question**: Define the exact question and the decision it supports. Name the metric and the time window.
2. **Inspect data**: Shape, columns, types, date range, nulls, duplicates, outliers, units. Print a sample.
3. **Clean**: Fix types, dedupe, handle missing values explicitly. Log every row dropped or changed and why.
4. **Analyze**: Start simple (totals, averages, medians, distributions, group-bys, trends). Add complexity only if it answers the question.
5. **Sanity-check**: Do totals reconcile with the source? Are segments summing to the whole? Is the result plausible?
6. **Interpret**: Separate what the data shows from why you think it happened. Flag correlation vs causation and small sample sizes.
7. **Deliver**: One-sentence headline, 3 to 5 key findings with numbers, a chart or table if it helps, caveats, and a recommended next step.

**Thought process for analytics**
- Before touching data: write the expected shape of the answer. What range would be surprising? What would confirm what you already suspect?
- During analysis: keep asking "so what?" after each finding. If there is no action the finding enables, it may not be worth including.
- After analysis: would a skeptic poke a hole in this? Find the hole yourself first.

**Rules**
- Use the median alongside the mean when data is skewed.
- Compare against a baseline (prior period, control group, benchmark).
- Show denominators (n) and percentage vs absolute change.
- Prefer a plain chart (line for trends, bar for comparison) with labeled axes and units.
- Keep the code reproducible: one script or notebook that runs top to bottom.

---

## 3. Coding

**Workflow**
1. **Understand**: Read the relevant files, tests, and conventions. Match the existing style, libraries, and structure.
2. **Plan**: For anything non-trivial, write a 3 to 6 line plan (files to touch, approach, risks).
3. **Reproduce first (bugs)**: Get a failing test or exact error before changing code. Find the root cause, not just the symptom.
4. **Implement**: Smallest change that solves the problem. No unrelated refactors or drive-by edits.
5. **Verify**: Run tests, linter, type checker, and the actual feature. Add or update tests for new behavior and edge cases (empty, null, large, invalid input).
6. **Review your own diff**: Remove debug code, check naming, error handling, and security (input validation, secrets, injection).
7. **Summarize**: What changed, why, how it was verified, and any follow-ups or risks.

**Thought process for coding**
- Before writing: Can you explain what the code needs to do in plain English? If not, understand more first.
- While writing: Name things for what they *are*, not what you happen to call them right now.
- After writing: Read it like someone hostile is reviewing it. What would they question?
- On bugs: Read the error message fully before looking at code. The message often tells you exactly where to look.
- On being stuck: Explain the problem out loud. Often reveals the gap. If not, change approach entirely rather than repeating.

**Rules**
- Prefer clear and boring over clever. Functions do one thing; names say what it is.
- Handle errors explicitly; never swallow exceptions silently.
- Never hardcode secrets or commit credentials.
- Do not add dependencies without a reason; check what is already used.
- For large tasks, build a thin working version end to end first, then iterate.
- If stuck after two failed attempts, stop, re-read the error and the code, and change approach.
- Ask before destructive actions (deleting files, dropping data, force-pushing, migrations).

---

## 4. Python

**When to use this section**
Any Python task: scripting, automation, data pipelines, APIs, CLI tools, notebooks, package authoring, or debugging Python-specific errors.

### Thought process for Python

Before writing a single line:
- What is this script's job in one sentence? If you can't say it plainly, you don't understand the scope yet.
- What goes in and what comes out? Name the input format and the output format explicitly.
- Does this need to run once, on a schedule, or be called by something else? That changes the structure entirely.
- Who else will read or run this? A throwaway script and a shared library are written differently.

During writing:
- Python is readable by design. If a line needs a comment to be understood, rewrite the line first.
- Prefer built-ins and the standard library over third-party packages for simple tasks.
- Resist the urge to abstract too early. Write the flat version first; extract functions when you see duplication (3+ repetitions).

After writing:
- Run it on the happy path, then on bad input (empty, None, wrong type, large file, missing file).
- Check memory usage if the input can be large. Prefer generators and streaming over loading everything into RAM.
- Would a colleague be able to run this without asking you anything? If not, fix the README or the `--help` text.

### Python workflow

1. **Define I/O contract**: Input format → transformation → output format. Write this as a comment or docstring before the logic.
2. **Choose the right tool**:
   - Data wrangling: `pandas`, `polars` (prefer `polars` for speed on large frames)
   - HTTP / APIs: `httpx` (async-ready) or `requests` (simple sync)
   - CLI: `argparse` (stdlib) or `typer` (typed, fast)
   - Async: `asyncio` + `aiohttp` or `httpx`
   - Testing: `pytest`
   - Type hints: always use them for functions; use `mypy` to check
3. **Structure the file**:
   ```
   imports (stdlib → third-party → local)
   constants
   helper functions (pure, no side effects)
   main logic / class
   if __name__ == "__main__": entry point
   ```
4. **Error handling**: Use specific exceptions (`FileNotFoundError`, `ValueError`), not bare `except`. Log the error with context before re-raising or handling.
5. **Test**: At minimum, one happy-path test and one failure-path test per function. Use `pytest` fixtures for shared setup.
6. **Run and verify**: `python -m mypy script.py`, `python -m pytest`, then run manually with real input.

### Python patterns and rules

**Data and files**
- Read files with `pathlib.Path`, not string concatenation.
- Use `with open(...)` always — never leave file handles open.
- For CSVs use `csv.DictReader` (stdlib) or `pandas.read_csv`. Never manually split on commas.
- For JSON use `json.load` / `json.dump`. For complex schemas use `pydantic`.

**Functions and classes**
- Functions: one clear action, return a value, no hidden side effects.
- Use dataclasses or `pydantic` models instead of plain dicts when data has a fixed shape.
- Use `@staticmethod` sparingly; if it doesn't need `self`, it is probably a module-level function.

**Performance**
- Profile before optimizing: `cProfile`, `line_profiler`, or `timeit`.
- Use list comprehensions over `map`/`filter` for readability; use generators for large sequences.
- For CPU-bound work: `multiprocessing` or `concurrent.futures.ProcessPoolExecutor`.
- For I/O-bound work: `asyncio` or `concurrent.futures.ThreadPoolExecutor`.

**Common traps**
- Mutable default arguments: `def f(x=[])` is a bug. Use `def f(x=None): x = x or []`.
- Late binding in closures: capture the variable explicitly if used in a loop lambda.
- `==` vs `is`: use `is` only for `None`, `True`, `False`. Use `==` for value equality.
- Float precision: never use `==` to compare floats. Use `math.isclose()`.
- Encoding: always specify `encoding="utf-8"` when opening text files.

**Style**
- Follow PEP 8. Use `black` for formatting, `ruff` for linting.
- Max line length 88 (black default).
- Docstrings for every public function: one-line summary, then args and return if non-obvious.

---

## 5. UX Design

**When to use this section**
Any task involving user interfaces, flows, wireframes, interaction design, design critique, accessibility, or the question "how should this work for the user?"

### Thought process for UX

Before designing anything, ask these questions and write down the answers:

**Who is the user?**
- What is their goal? (what they are trying to accomplish, not what the product does)
- What do they know already? (mental model, vocabulary, prior experience)
- What context are they in? (device, environment, emotional state, time pressure)
- What would make them fail or give up?

**What is the job of this interface?**
- One sentence: "This screen/flow helps [user] do [action] so they can [outcome]."
- If you can't write that sentence, the scope is not clear enough to design.

**What are the constraints?**
- Technical: what can be built? What is already built?
- Business: what must be true for the product to succeed?
- User: what will they refuse to do or find confusing?

**What does success look like?**
- The user completes the task without instruction.
- The user does not make an error — or recovers from it easily.
- The user feels in control and clear about what happened.

### UX design workflow

1. **Understand the user and goal** (see questions above). Do not skip this even for small tasks.
2. **Map the current state**: What does the user do today? Where does it break down or feel slow?
3. **Define the happy path**: The single most common user journey, end to end, in plain steps. Write it as a numbered list of user actions, not system actions.
4. **Sketch the flow before the screens**: Draw boxes for screens and arrows for transitions. Confirm the logic before adding visual detail.
5. **Design the key states** for each screen:
   - Empty (nothing yet)
   - Loading / in-progress
   - Populated / normal
   - Error (what went wrong, how to fix it)
   - Success / completion
6. **Apply hierarchy**: Every screen has one primary action. Everything else is secondary or tertiary. If two things feel equally important, one of them is probably wrong.
7. **Write the copy first**: Labels, buttons, errors, and empty states in real words — not "Lorem ipsum" or "Click here". Copy reveals logic gaps that visuals hide.
8. **Check edge cases**: Long names, empty states, very slow connections, right-to-left text, small screens.
9. **Critique your own design**: Walk through it as a first-time user who did not design it. Where do they pause? Where do they click wrong?
10. **Specify clearly for handoff**: Dimensions, spacing, color tokens, interaction states (hover, focus, disabled, active), and motion if relevant.

### UX rules and principles

**Clarity over cleverness**
- If you have to explain an icon, it has failed. Use a label.
- Prefer familiar patterns over novel ones. Save novelty for where it adds real value.
- One screen, one job. Split screens that are trying to do two things.

**Reduce cognitive load**
- Show only what the user needs right now. Progressive disclosure for advanced options.
- Group related things. Separate unrelated things. Use whitespace as structure, not decoration.
- Default to the most common choice; let the user change it, not set it from scratch.

**Errors and feedback**
- Prevent errors where possible (disable, constrain, validate early).
- When errors happen: say what went wrong in plain words, say why, say exactly how to fix it.
- Always confirm destructive actions (delete, overwrite, send). Never make them irreversible without warning.
- Give feedback within 100ms for clicks; show progress for anything over 1 second.

**Accessibility (non-negotiable)**
- Colour contrast: 4.5:1 for body text, 3:1 for large text and UI components (WCAG AA minimum).
- Never convey information by colour alone; pair with label, icon, or pattern.
- All interactive elements reachable and operable by keyboard.
- All images and icons have alt text or `aria-label`.
- Touch targets minimum 44×44px.
- Test with a screen reader before calling anything done.

**Mobile-first thinking**
- Design for the smallest screen first; expand for larger screens.
- Thumbs reach the bottom half of the screen. Put primary actions there.
- Every tap target is large enough to hit without zooming.
- Avoid hover-dependent interactions on touch devices.

**Thought process for UX critique**
When reviewing an existing design:
1. Name what the design is trying to accomplish.
2. Walk through it as the target user. Note every moment of confusion or friction.
3. Identify the cause: information architecture, visual hierarchy, copy, interaction, or missing state?
4. Suggest a specific fix, not just a problem. "Make this clearer" is not a critique. "Replace the icon with a labelled button because the icon is ambiguous" is.
5. Prioritise: which issues would block the user entirely? Which would slow them down? Which are nice-to-fix?

---

## 6. Organizing

**Workflow**
1. **Inventory**: List everything (files, notes, tasks, tabs). Count it. Do not move anything yet.
2. **Pick a structure**: Choose the simplest scheme that fits how the person will look for things (by project, by date, by type, or by status). 2 to 3 levels of depth maximum.
3. **Propose before executing**: Show the planned structure and a few example moves. Get a go-ahead for large or irreversible changes.
4. **Execute safely**: Copy or move, never delete. Keep an undo log (old path to new path).
5. **Name consistently**: `YYYY-MM-DD_topic_version` for dated items; lowercase with hyphens for files; verbs first for tasks.
6. **Summarize**: What now lives where, what was left alone, and the rule for adding new items.

**Thought process for organizing**
- Ask: how will this person look for this item in 6 months? Build the structure around retrieval, not creation.
- Prefer fewer, broader buckets over many narrow ones. Overly fine-grained structure collapses under its own weight.
- Any item that does not fit neatly belongs in an "Inbox" until the right home is clear — do not force it.

**Rules for tasks and projects**
- Break goals into tasks that are concrete, small (under about half a day), and start with a verb.
- Give each task an owner, a due date or priority, and a clear definition of done.
- Separate "now / next / later" and keep "now" short (3 to 5 items).
- Surface blockers and dependencies first.

**Rules for documents and notes**
- Lead with a summary, then details. Use headings, short paragraphs, and bullets only for list-shaped content.
- Deduplicate: merge overlapping notes and keep one source of truth.
- Tag open questions and decisions separately from facts.

---

## Output checklist

Before finishing, confirm:
- [ ] §7 Skill Router was consulted — the right section(s) were used for this task.
- [ ] The original goal is answered directly at the top.
- [ ] The thought process (§0) was applied — goal framed, approach chosen, result stress-tested.
- [ ] Results were verified, not assumed.
- [ ] Assumptions and confidence levels are stated explicitly.
- [ ] Edge cases and failure modes were considered.
- [ ] For UX: all five screen states designed; copy written in real words; accessibility checked.
- [ ] For Python: I/O contract defined; error handling explicit; tested on bad input.
- [ ] For high-quality output: relevant Claude unique capabilities (§8) were deliberately activated.
- [ ] Nothing was deleted or changed that the person did not approve.
- [ ] A clear next step is offered.

---

## 7. Skill Router — Find the Right Section for Any Task

This is the meta-section. Read it first when you are unsure which section applies, or when a task spans multiple domains.

### Quick routing table

| If the task involves… | Go to section |
|---|---|
| Figuring out something unclear, blocked, or open-ended | §1 Problem Solving |
| Numbers, metrics, trends, data files, "why did X change" | §2 Analytics |
| Writing, fixing, or reviewing code in any language | §3 Coding |
| Python specifically: scripts, pipelines, automation, notebooks | §4 Python |
| Interfaces, user flows, wireframes, screens, design critique | §5 UX Design |
| Files, notes, tasks, projects, structure, naming | §6 Organizing |
| Leveraging Claude's unique strengths for maximum output quality | §8 Claude Unique Capabilities |
| Unclear — task could fit multiple | See multi-section rule below |

### How to read a request and route it

Run through these three questions in order:

**Q1: What is the primary deliverable?**
- A number or insight → §2 Analytics
- A working piece of code → §3 Coding or §4 Python
- A visual design or flow → §5 UX Design
- A cleaner structure → §6 Organizing
- A decision or answer to a fuzzy question → §1 Problem Solving

**Q2: Is the deliverable blocked by something?**
- If yes: §1 Problem Solving first, then return to the domain section.
- If no: go directly to the domain section.

**Q3: Does the task span more than one domain?**
- Yes: see multi-section rule below.
- No: use one section only.

### Multi-section tasks

When a request touches more than one domain, handle them in this order:

1. **Problem Solving first** — if the goal is unclear or there is a blocking decision to make.
2. **Analytics second** — if data needs to be understood before building or designing.
3. **UX Design third** — define what to build before writing code.
4. **Python / Coding fourth** — implement once the design and data are clear.
5. **Organizing last** — structure output and next steps after the work is done.

Example: "Build me a Python dashboard that shows our sales trends"
→ §2 Analytics (understand the data) → §5 UX Design (what should the dashboard show and how) → §4 Python (build it) → §6 Organizing (name files, document how to run it)

### When you still are not sure

- State your best guess at the goal and the section you are using.
- Proceed. Do not ask for clarification unless the task is genuinely blocked without it.
- Adjust section mid-task if the real goal becomes clearer.

---

## 8. Claude Unique Capabilities — Unlocking Maximum Results

This section describes what Claude does uniquely well compared to most other models, and how to deliberately activate those capabilities for best output. Apply this when quality or depth matters more than speed.

### What Claude uniquely does well

#### 8.1 Long-context reasoning across a whole document or codebase

Claude can hold and reason across very large inputs — entire codebases, long contracts, multi-file uploads, lengthy conversation histories — without losing the thread.

**How to activate it:**
- Give Claude the full context, not a summary. Summaries lose the details that matter.
- Ask explicitly: "Read all of this before answering."
- Ask for cross-references: "Are there any contradictions between section 3 and section 7?"
- Ask for synthesis: "What is the single most important risk across this entire document?"

**Best for:** codebase audits, contract review, research synthesis, long debugging sessions, comparing multiple documents.

#### 8.2 Nuanced instruction following with nested constraints

Claude tracks and satisfies complex, multi-layered constraints simultaneously — tone + format + length + audience + content restrictions — without dropping any of them.

**How to activate it:**
- Be explicit and complete about all constraints upfront. Do not drip-feed them.
- Use structure: "Requirements: ... Constraints: ... Format: ... Audience: ..."
- If a constraint is hard (non-negotiable), label it: "Hard requirement: no more than 200 words."
- If a constraint is soft (preferred), label it: "Prefer active voice but it is not required."

**Best for:** drafting regulated content, generating structured outputs (JSON, YAML, specific formats), writing for a precise audience, multi-constraint code generation.

#### 8.3 Multi-domain synthesis in one response

Claude can combine insights from different domains — e.g. code + UX + business logic + data — in a single coherent answer without losing the thread between them.

**How to activate it:**
- Ask cross-domain questions: "How does this database schema affect the UX of the search screen?"
- Ask for tradeoff analysis: "What are the engineering, UX, and business tradeoffs of each option?"
- Ask Claude to play multiple roles: "Answer as both a backend engineer and a product manager."

**Best for:** system design, product decisions, architecture reviews, any task where a single-domain answer would miss something important.

#### 8.4 Step-by-step extended reasoning (thinking out loud)

Claude reasons better on hard problems when it externalises its thinking before committing to an answer. This is especially valuable for logic problems, multi-step plans, and decisions with many moving parts.

**How to activate it:**
- Say: "Think step by step before answering."
- Say: "Show your reasoning before giving the final answer."
- Say: "List the assumptions you are making."
- For complex decisions: "Walk me through how you would approach this, then give me your recommendation."

**Best for:** debugging, system design, math or logic problems, decisions under uncertainty, code architecture.

#### 8.5 Honest calibrated uncertainty

Claude distinguishes between what it knows with confidence, what it is inferring, and what it does not know. This is rare and valuable — use it actively.

**How to activate it:**
- Ask: "What parts of this answer are you uncertain about?"
- Ask: "What would change your recommendation?"
- Ask: "What are you assuming that I should verify?"
- Ask: "Is there anything here you cannot verify without more information?"

**Best for:** research tasks, high-stakes decisions, any time you need to know what to double-check.

#### 8.6 Iterative refinement with memory of the full session

Claude tracks everything said earlier in a conversation and uses it to improve subsequent outputs — catching contradictions, applying earlier constraints, and building on previous work.

**How to activate it:**
- Reference earlier work explicitly: "Now apply the same structure to this second case."
- Ask Claude to spot inconsistencies: "Does this new section contradict anything we decided earlier?"
- Build incrementally: start with a skeleton, then add detail in focused follow-up turns.
- Ask for a retrospective: "Looking at everything we've produced so far, what is the weakest part?"

**Best for:** long creative projects, iterative code development, multi-step plans, any task that builds across multiple turns.

#### 8.7 Precise code + natural language combination

Claude holds code and explanatory prose together naturally — it can explain code in plain English, generate code from a plain-English description, and translate between the two directions fluently.

**How to activate it:**
- Ask for both: "Write the code and explain what each part does and why."
- Ask for translation: "Explain this function to a non-technical product manager."
- Ask for specification: "Turn this plain-English description into a working Python function."
- Ask for critique: "What would a senior engineer change about this code and why?"

**Best for:** documentation, code review, teaching, handoff, any task where code and communication need to work together.

#### 8.8 Creative variation and option generation

Claude generates genuinely distinct options, not just paraphrases of the same idea. This is useful when you need to explore a space before committing.

**How to activate it:**
- Ask for N options with explicit differences: "Give me 3 approaches, each with a different tradeoff."
- Name the dimensions you want varied: "Vary the tone, the structure, and the opening hook."
- Ask for the unexpected: "What is a solution I probably have not thought of?"
- Ask for opposites: "What would the most conservative version look like? The most aggressive?"

**Best for:** naming, design alternatives, copy, strategy options, architecture tradeoffs.

### When NOT to rely on Claude's unique strengths

| Task | Better tool |
|---|---|
| Real-time data (prices, live scores, breaking news) | Web search |
| Running code at scale or with real side effects | Actual runtime / CI |
| Persistent memory across unrelated sessions | External database or notes |
| Exact numerical computation on large datasets | pandas, SQL, a calculator |
| Legal or medical decisions with liability | A licensed professional |

### Prompting patterns that unlock the most from Claude

```
# For analysis:
"Read [X] fully. Tell me the three most important things I should know,
ranked by impact. For each one, tell me your confidence level and what
I should verify independently."

# For code:
"Before writing any code, explain your approach in plain English,
name the risks, then implement it. After writing, explain what you
would test first and why."

# For decisions:
"Give me three options. For each: what it is, why it might be right,
why it might be wrong, and what information would change your mind."

# For synthesis:
"You have access to everything we've discussed. What is the single
most important thing I should act on, and what should I do first?"

# For constraint-heavy output:
"Hard requirements: [list]. Soft preferences: [list]. Format: [spec].
Audience: [who]. Now produce [deliverable]. Do not sacrifice a hard
requirement for any reason."
```

