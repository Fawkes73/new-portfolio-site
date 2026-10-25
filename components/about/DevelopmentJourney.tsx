import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function ProjectFigure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-10 overflow-hidden rounded-3xl border border-border bg-surface">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
      <figcaption className="px-4 py-3 text-sm text-muted sm:px-5">{caption}</figcaption>
    </figure>
  );
}

function StorySection({
  number,
  title,
  children,
  id,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border py-12 sm:py-16">
      <div className="grid gap-5 sm:grid-cols-[5rem_1fr] sm:gap-8">
        <p className="font-mono text-sm tracking-widest text-accent">{number}</p>
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-muted">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function DevelopmentJourney() {
  return (
    <article className="container-page py-12 sm:py-20">
      <header className="mx-auto max-w-4xl pb-12 sm:pb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Game Development · Unity · Real-Time VFX
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
          From Playing Games to Building Them
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">
          A journey from curiosity about the games I played to building gameplay systems, collaborating on game jams,
          and learning how real-time visual effects shape the way an action feels.
        </p>
        <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a className="text-muted underline decoration-border underline-offset-4 hover:text-foreground" href="#gaming-timeline">Gaming timeline</a>
          <a className="text-muted underline decoration-border underline-offset-4 hover:text-foreground" href="#foundations">Foundations</a>
          <a className="text-muted underline decoration-border underline-offset-4 hover:text-foreground" href="#vfx">Real-time VFX</a>
          <a className="text-muted underline decoration-border underline-offset-4 hover:text-foreground" href="#launchbox">LaunchBox</a>
          <a className="text-muted underline decoration-border underline-offset-4 hover:text-foreground" href="#crab-soup">Crab Soup Chaos</a>
          <a className="text-muted underline decoration-border underline-offset-4 hover:text-foreground" href="#godot">Godot</a>
        </nav>
      </header>

      <div className="mx-auto max-w-4xl">
        <div className="space-y-5 pb-14 text-lg leading-8 text-muted">
          <p>
            My journey into game development began with playing games on old phones. At first, I was interested in
            the experience itself: the mechanics, the interactions, and the small details that made a game enjoyable
            enough to return to. I was simply a player, not yet thinking about the systems behind the screen.
          </p>
          <p>
            That interest gradually turned into questions. How does a character know where to move? How does a game
            respond to an action? How do code, visuals, sound, and interaction come together to make an experience
            feel complete? Eventually, I wanted to move beyond playing games and understand how to build them.
          </p>
        </div>

        <StorySection number="01" title="A life around games: 2000–2026" id="gaming-timeline">
          <p>
            My gaming history spans old phones, handhelds, arcade machines, PCs, and consoles. The timeline below
            groups titles by their original release era where that is identifiable; it does not claim that I first
            played each game in its release year. Long-running series are grouped across eras rather than assigned
            one date.
          </p>

          <ol className="mt-8 space-y-0">
            <li className="grid gap-3 border-l border-border pb-9 pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-sm text-accent">Before 2000</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">The classics</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Arcade, Nintendo, and handheld beginnings</h3>
                <p className="mt-2">
                  Classic Nintendo games such as <em>Super Mario Bros.</em> and <em>Duck Hunt</em>, Game Boy
                  <em> Dragon Ball Z</em> titles, and arcade machines introduced me to direct controls and immediate
                  feedback. Even simple arcade challenges and sports mini-games such as javelin throw made the link
                  between an input and its result easy to understand.
                </p>
              </div>
            </li>

            <li className="grid gap-3 border-l border-border pb-9 pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-sm text-accent">2000–2005</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">Expanding worlds</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">From arcade loops to open worlds</h3>
                <p className="mt-2">
                  Early PC experiences and titles from the era broadened the kinds of worlds I could explore.
                  <em> Grand Theft Auto: San Andreas</em> (2004; PC release 2005) stands out as an example of a
                  larger world built around movement, exploration, and player choice.
                </p>
              </div>
            </li>

            <li className="grid gap-3 border-l border-border pb-9 pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-sm text-accent">2006–2010</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">Console generations</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Characters, competition, and sport</h3>
                <p className="mt-2">
                  PlayStation-era <em>WWE</em>, <em>Dragon Ball Z</em> fighting games, Mario platformers, and
                  sports titles shaped this part of my gaming interests. Fighting games made timing, animation,
                  and impact especially noticeable; sports games brought their own rhythm and rules.
                </p>
              </div>
            </li>

            <li className="grid gap-3 border-l border-border pb-9 pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-sm text-accent">2011–2015</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">Mobile changes</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Feature phones to touchscreens</h3>
                <p className="mt-2">
                  Gameloft games sat alongside simple mobile staples such as <em>Snake</em>, <em>Bouncing Ball</em>,
                  and <em>Ludo</em>. Later, touchscreen devices brought mobile sports experiences such as
                  <em> Real Cricket</em>, NBA, and NFL games. Moving between phone interfaces made controls and
                  screen constraints part of the experience itself.
                </p>
              </div>
            </li>

            <li className="grid gap-3 border-l border-border pb-9 pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-sm text-accent">2016–2019</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">PC and simulation</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Precision, driving, and football</h3>
                <p className="mt-2">
                  Competitive PC games, racing, and football became a bigger part of my play. <em>Counter-Strike:
                  Global Offensive</em> (2012), <em>Forza Horizon 4</em> (2018), <em>Jump Force</em> (2019), and
                  <em> PES 2020</em> (2019) represent different kinds of feedback: precision and positioning,
                  speed and handling, character combat, and sports simulation.
                </p>
              </div>
            </li>

            <li className="grid gap-3 border-l border-border pb-9 pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-sm text-accent">2020–2022</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">Connected play</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Online multiplayer and evolving series</h3>
                <p className="mt-2">
                  <em>VALORANT</em> (2020), <em>PUBG Mobile</em> and the Indian transition to <em>BGMI</em> (2021),
                  <em> eFootball</em> (from 2021), and <em>FIFA 23</em> (2022) reflect a period where connected
                  play, competitive systems, and ongoing sports franchises were increasingly central to my
                  experience.
                </p>
              </div>
            </li>

            <li className="grid gap-3 border-l border-border pb-9 pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-sm text-accent">2023–2026</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">Playing and analysing</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">A player&apos;s questions become a developer&apos;s questions</h3>
                <p className="mt-2">
                  <em>EA Sports FC 24</em> (2023), <em>EA Sports FC 25</em> (2024), and
                  <em> Dragon Ball: Sparking! ZERO</em> (2024) are part of my more recent gaming history. I also
                  explore controller input in Unity and take part in small technical experiments, including a
                  13 KB game-jam project. I am increasingly curious about how controls, levels, characters, VFX,
                  sound, and systems combine to create the finished experience.
                </p>
              </div>
            </li>

            <li className="grid gap-3 border-l border-transparent pl-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="relative">
                <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
                <p className="font-mono text-sm text-accent">Now</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">Building games</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">From playing to making</h3>
                <p className="mt-2">
                  Today that curiosity leads into Unity gameplay work, real-time VFX, game-jam collaboration, and
                  exploring Godot 4. I want to understand not only what makes a game enjoyable to play, but also
                  the engineering, visual decisions, and production work needed to make one.
                </p>
              </div>
            </li>
          </ol>
        </StorySection>

        <StorySection number="02" title="Learning the foundations" id="foundations">
          <p>
            My education in Information Technology gave me a foundation in programming and computer science. I
            studied programming through my Diploma in IT and Bachelor of Engineering in Information Technology,
            working with languages including C, C++, and Java. Game development gave me a different way to apply
            those fundamentals: code has to respond continuously to player input and work alongside visuals,
            animation, physics, and sound.
          </p>
          <p>
            I began learning Unity through structured learning and experimentation. The Unity Essentials, Junior
            Programmer, and Creative Core pathways helped me progress from editor fundamentals and programming
            workflows toward building interactive experiences. I supplemented that study with documentation and
            tutorials, then used project work to test whether I understood the concepts beyond following an example.
          </p>
          <p>
            In a game, a mechanic can work in isolation and still feel wrong in play. I learned to look beyond
            whether something runs: how it responds, how it communicates with the player, and how it fits into the
            surrounding experience all matter.
          </p>
          <p>
            When something did not work, I had to investigate the setup, understand the error, and test possible
            solutions. Learning a technique was only the beginning; applying it, debugging it, and understanding
            its limitations made the learning stick.
          </p>
        </StorySection>

        <StorySection number="03" title="Exploring real-time visual effects" id="vfx">
          <p>
            As I continued learning Unity, I became interested in how visual effects communicate impact, motion,
            and feedback. A hit can feel weak or powerful depending on its timing, shape, contrast, and secondary
            motion. Effects are not just decoration; they influence how players read an action.
          </p>
          <div className="rounded-2xl border-l-2 border-accent bg-surface/70 px-5 py-4">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Ongoing professional experience</p>
            <p className="mt-2 text-foreground">VFX Artist Intern · ABC Studio · 2026–Present</p>
          </div>
          <p>
            At ABC Studio, I work on visual effects and the assets and technical steps that support them. My work
            includes developing particle systems and shaders, creating textures and masks in Krita, and using
            Material Maker to create masks. I also make small code changes when adapting HDRP shaders to URP and
            work with visual shaders.
          </p>
          <p>
            Working across these tasks has me consider both how an effect is assembled and how it behaves in the
            project. Moving a shader between rendering pipelines is not simply a matter of copying it; the target
            pipeline and its supported features affect how the result must be approached.
          </p>
          <p>
            Alongside the internship, I use personal experiments to explore effect shape, timing, contrast, and
            motion. I keep those experiments distinct from my studio responsibilities, while applying the broader
            VFX knowledge in personal game projects when it fits the gameplay.
          </p>
          <p>
            This is an ongoing area of development for me. I am building technical familiarity and visual judgment
            through practice, iteration, and understanding why an effect works—not just reproducing its appearance.
          </p>
        </StorySection>

        <StorySection number="04" title="LaunchBox — interactive NPC systems in a team" id="launchbox">
          <p>
            LaunchBox was a game-jam project built by an eight-person team working across different time zones.
            Ideas were brainstormed together, and the team worked intensively toward a shared submission deadline.
            My responsibility was the NPC system.
          </p>
          <ProjectFigure
            src="/images/Game/LaunchBox_gameplay.png"
            alt="LaunchBox gameplay scene with NPCs moving through the environment"
            caption="LaunchBox gameplay — my project contribution focused on NPC behaviour."
            width={1920}
            height={1080}
          />
          <h3 className="pt-2 font-display text-xl font-semibold text-foreground">Roaming and dialogue</h3>
          <p>
            I implemented NPC roaming using Unity&apos;s NavMesh navigation system, so NPC movement could use the
            navigable areas of the environment. I also connected player proximity to a dialogue UI popup. The
            interaction linked movement through the level, detecting that the player was near an NPC, and presenting
            dialogue as part of the encounter.
          </p>
          <p className="rounded-2xl bg-surface px-5 py-4 font-mono text-sm leading-7 text-foreground">
            NPC NavMesh roaming → player approaches → proximity detection → dialogue UI
          </p>
          <h3 className="pt-2 font-display text-xl font-semibold text-foreground">Exploring data approaches</h3>
          <p>
            I experimented with JSON and ScriptableObjects while investigating ways to represent and manage data.
            This was exploration rather than a completed production save system. JSON is a serialization format
            that needs suitable data structures and file handling; ScriptableObjects are Unity assets useful for
            authoring and sharing structured project data. Comparing them helped me understand that the right
            approach depends on what data is needed and how the game uses it.
          </p>
          <p>
            I encountered implementation errors while learning unfamiliar parts of the workflow. I used error
            messages, documentation, and tutorials to investigate what was happening, test possible fixes, and
            verify the result in the project.
          </p>
          <p>
            Working with a larger team taught me that a contribution has to fit into shared work. I had to
            communicate, coordinate across time zones, solve problems with teammates, and keep my assigned work
            moving without losing sight of the submission deadline.
          </p>
          <Link
            href="/work/launchbox"
            className="inline-flex items-center gap-1 font-medium text-foreground hover:text-accent-hover"
          >
            Read the LaunchBox case study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </StorySection>

        <StorySection number="05" title="Crab Soup Chaos — making a playable slicing game" id="crab-soup">
          <p>
            Crab Soup Chao Slicer3, also referred to as Crab Soup Chaos, is a 2D slicing game built in Unity. Players
            slice food—including onions, crabs, okra, and eggs—while avoiding chilli hazards. I handled the game
            development in a two-person team, collaborating with one 2D artist.
          </p>
          <ProjectFigure
            src="/images/Game/CrabSoupChaos_GamePlayeScreen.png"
            alt="Crab Soup Chao Slicer3 gameplay screen showing the slicing game interface"
            caption="Crab Soup Chao Slicer3 — gameplay screenshot from the project."
            width={1365}
            height={768}
          />
          <p>
            I worked on connecting the gameplay loop: spawning food objects, slicing interactions, hazards, scoring,
            player lives, and UI feedback. The game depends on these systems working together so the player can
            understand what can be sliced, what should be avoided, and how an action affects the run.
          </p>
          <p>
            I also created blade VFX, applying techniques from my VFX learning to make the slicing action more
            immediate and readable. This was a personal game-jam contribution, separate from my internship work.
            The two-person workflow meant coordinating gameplay implementation with the 2D artist&apos;s visual assets
            while keeping the core experience on track for the jam.
          </p>
          <h3 className="pt-2 font-display text-xl font-semibold text-foreground">From editor to browser</h3>
          <p>
            The project also pushed me to investigate the WebGL delivery environment. The game could run while
            still appearing constrained by the itch.io embed dimensions. I had to think beyond the Unity Editor and
            investigate how canvas configuration, the WebGL player, and the surrounding browser page each
            contribute to presentation.
          </p>
          <p>
            A playable browser build is not the same as a finished release on every platform. I am continuing to
            work toward a Google Play release, which means there is still a gap between the current playable
            experience and a release-ready mobile build.
          </p>
          <Link
            href="/work/crab-soup-chao-slicer3"
            className="inline-flex items-center gap-1 font-medium text-foreground hover:text-accent-hover"
          >
            Read the Crab Soup Chaos case study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </StorySection>

        <StorySection number="06" title="Adapting to a different engine: Godot 4" id="godot">
          <p>
            After building experience in Unity, I spent a week learning Godot 4 with GDQuest&apos;s
            <em> Your First 2D Game With Godot 4: START</em>. I explored the editor and an existing project, then
            used the edit-run-observe cycle to understand how its scenes, nodes, resources, and scripts fit together.
          </p>
          <ProjectFigure
            src="/images/Game/Godot/starterQuest1.png"
            alt="A 2D game running in the Godot 4 editor"
            caption="Godot 4 learning sprint — running the GDQuest starter project."
            width={978}
            height={620}
          />
          <p>
            The week was a focused introduction, not a claim of mastery. It gave me practice navigating a different
            engine and using my existing game-development knowledge as a starting point for learning a new workflow.
          </p>
          <Link
            href="/work/godot-learning-sprint"
            className="inline-flex items-center gap-1 font-medium text-foreground hover:text-accent-hover"
          >
            View the Godot learning case study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </StorySection>

        <section className="border-t border-border py-12 sm:py-16" aria-labelledby="journey-reflection">
          <div className="grid gap-5 sm:grid-cols-[5rem_1fr] sm:gap-8">
            <p className="font-mono text-sm tracking-widest text-accent">07</p>
            <div className="max-w-3xl">
              <h2 id="journey-reflection" className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Learning through building
              </h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-muted">
                <p>
                  These experiences changed how I think about game development. A system that works in isolation
                  still has to connect with the rest of the game: navigation meets interaction, interaction meets
                  UI, gameplay meets visual feedback, and an editor build meets the runtime environment where
                  people play.
                </p>
                <p>
                  I approach unfamiliar problems by breaking them down, researching the relevant behaviour,
                  testing a solution, and checking the result. Team projects have taught me to communicate and
                  deliver within shared constraints; smaller collaborations have given me direct ownership of
                  implementation and priorities.
                </p>
                <p>
                  What began as curiosity about games on old phones has become a desire to understand how games
                  work, make deliberate decisions about how they feel, and build experiences other people can play.
                </p>
              </div>
              <p className="mt-7 text-sm font-medium tracking-wide text-foreground">
                Investigate <span className="text-accent">→</span> Build <span className="text-accent">→</span> Test{" "}
                <span className="text-accent">→</span> Debug <span className="text-accent">→</span> Refine
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
