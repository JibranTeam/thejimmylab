export interface JournalSection {
  heading: string;
  paragraphs: string[];
}

export interface JournalPost {
  id: string;
  featured: boolean;
  category: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  image: string;
  sections: JournalSection[];
  takeaway: string;
  /** Slug of the service this post links to (rendered as a related-service card). */
  relatedService?: string;
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'scroll-animation-techniques',
    relatedService: 'web-animation',
    featured: true,
    category: 'Motion',
    date: 'May 28, 2026',
    read: '4 min read',
    title: 'Modern Scroll-Linked Animation Techniques',
    excerpt: 'A deep dive into building performant, responsive scroll animations with the vanilla Motion library in Astro.',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Why scroll animation is a performance problem first',
        paragraphs: [
          'The short answer: animate only transform and opacity, keep the work off the main thread, and never read a layout value and write one back in the same scroll handler. Scroll-linked animation looks simple on the surface: an element moves as the page moves. Underneath, it is one of the easiest places to break a site, because every scroll event can trigger layout work. The moment animation code reads a layout value and then writes one back, the browser is forced to recalculate the page, and a smooth scroll turns into a stutter.',
          'The fix is boring in the best way. Animate only transform and opacity, never width, height, top or left. Keep the work off the main thread where the browser allows it, and let the browser know what is about to change before it changes.',
        ],
      },
      {
        heading: 'A small, honest toolkit',
        paragraphs: [
          'The vanilla Motion library is a good fit here because it is small and it does one job well: it maps scroll progress to animation progress without dragging a whole framework along. You define a range, you define what happens across that range, and the library handles the rest.',
          'The pattern we return to is always the same: one scroll container, one progress value, and several elements listening to that value at different speeds. Parallax, reveals and progress indicators are all the same technique with different numbers.',
        ],
      },
      {
        heading: 'Responsive by default, not by patch',
        paragraphs: [
          'Scroll animations that only work on a desktop monitor are not finished. On a phone, the viewport is shorter, scroll distances are smaller, and the same animation can feel either invisible or exhausting. Test ranges on a real phone, shorten distances on small screens, and respect reduced-motion settings.',
          'If a visitor has asked their device for less motion, honour it. A static version of the page is not a lesser version; it is the same content, delivered with respect.',
        ],
      },
    ],
    takeaway: 'Scroll animation should feel like the page itself is moving, not like an effect pasted on top of it. When it is built on transform and opacity alone, it usually does.',
  },
  {
    id: 'astro-for-portfolios',
    relatedService: 'web-development',
    featured: false,
    category: 'Engineering',
    date: 'May 20, 2026',
    read: '4 min read',
    title: 'Why Astro is the Ultimate Framework for Portfolios',
    excerpt: "How Astro's island architecture and zero-JS output by default make it the perfect tool for fast creative portfolios.",
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'A portfolio is mostly content',
        paragraphs: [
          'The short answer: Astro fits a portfolio because a portfolio is mostly content — pages that need to load fast, not JavaScript to exist. A portfolio site is, at its heart, a set of pages: work, writing, an about page and a way to get in touch. Very little of that needs JavaScript to exist. What it needs is to load fast, look sharp and be easy to update when new work ships.',
          'That is exactly the shape Astro is built for. Pages are rendered to plain HTML at build time, and JavaScript is only shipped for the parts of the page that actually need to be interactive.',
        ],
      },
      {
        heading: 'Islands, in plain English',
        paragraphs: [
          'Astro calls its interactive parts islands. A contact form, a filter, or a small animation can be an island, while everything around it stays static HTML. The result is a page that feels instant on first load, because the browser is not downloading and running a whole application just to show text and images.',
          'For a creative portfolio, that matters more than any framework feature list. Visitors judge the work in the first seconds, and a fast first paint is part of that judgement.',
        ],
      },
      {
        heading: 'When Astro is not the answer',
        paragraphs: [
          'Astro is not the right tool for everything. A heavily interactive product, a real-time dashboard, or an app with complex client-side state will be happier in a framework built for that job. Choosing Astro for a portfolio is not a claim that it fits everywhere; it is a claim that it fits this shape of site unusually well.',
          'The test we use is simple: if most of the site could be a document, build it as documents, and add interactivity only where it earns its place.',
        ],
      },
    ],
    takeaway: 'A portfolio should load like a document and behave like an app only where it needs to. Astro makes that the default, not a special effort.',
  },
  {
    id: 'motion-design-principles',
    relatedService: 'web-animation',
    featured: false,
    category: 'Motion',
    date: 'May 15, 2026',
    read: '4 min read',
    title: 'Core Principles of Functional Motion Design',
    excerpt: 'Why animation in web design is a functional tool, not just an aesthetic embellishment, and how to apply it.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Motion should explain something',
        paragraphs: [
          'The short answer: every animation should answer a question for the visitor — where something came from, where it went, what changed, what happens next. If it does not, it is decoration. Every animation on a page should answer a question for the visitor: where did that panel come from, where did it go, what just changed, what happens next. If an animation does not answer one of those questions, it is decoration, and decoration at scale becomes noise.',
          'The best motion is often the quietest. A panel that slides from the button that opened it tells the visitor how to close it. A list item that fades out instead of vanishing tells them it was removed, not that the page broke.',
        ],
      },
      {
        heading: 'Timing is the message',
        paragraphs: [
          'Duration and easing carry meaning. Short, snappy motion reads as responsive. Slow, heavy motion reads as important or dramatic. Use the same timing for the same kind of action across a site, and visitors will learn the language without being told.',
          'A practical starting point: keep most interface motion between 200 and 400 milliseconds, use a gentle ease-out for things entering the screen, and reserve anything longer than half a second for moments that genuinely deserve attention.',
        ],
      },
      {
        heading: 'Less, but consistent',
        paragraphs: [
          'A site with three well-chosen animations feels more polished than a site with thirty. Pick a small set of motions, use them everywhere they apply, and cut the rest. Consistency is what makes motion feel designed rather than accidental.',
          'And always offer an off-ramp: reduced-motion support is not an edge case, it is a basic courtesy to visitors who need it.',
        ],
      },
    ],
    takeaway: 'Animation is a functional tool. Give it a job, give it consistent timing, and cut it when it has no job to do.',
  },
  {
    id: 'ai-assisted-development-2026',
    relatedService: 'ai-solutions',
    featured: true,
    category: 'AI',
    date: 'Oct 22, 2026',
    read: '6 min read',
    title: 'AI-Assisted Development in 2026: Speed Without Losing Craft',
    excerpt: 'AI tools now write a large share of first drafts. The craft has moved from typing code to reviewing it, and that changes how a good team works.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'What actually changed',
        paragraphs: [
          'The short answer: AI has made the first draft of almost anything cheap, so the expensive part of development has moved to deciding what is right — reviewing, not typing. The biggest change in development this year is not that AI writes code. It is that the first draft of almost anything is now cheap, and the expensive part has moved to deciding whether that draft is correct, secure and maintainable.',
          'That shift rewards a different skill set. Reading code carefully, writing precise requirements, and testing edge cases matter more than they did when every line had to be typed by hand. Teams that treat AI output as a suggestion to review, rather than a result to ship, are the ones getting real value from it.',
        ],
      },
      {
        heading: 'Where AI helps most',
        paragraphs: [
          'AI is strongest on well-understood work: boilerplate, repetitive patterns, test scaffolding, migrations between known formats, and explaining unfamiliar code. It is weakest where judgement lives: architecture choices, security boundaries, and anything where the requirements themselves are unclear.',
          'A useful rule: let AI draft the parts you could already write yourself, and keep human attention for the parts you could not. If you cannot tell whether the output is right, that is the part that needs a human, not a faster model.',
        ],
      },
      {
        heading: 'A workflow that holds up',
        paragraphs: [
          'The workflow we recommend is simple. Start with a clear, written brief for the piece of work, even if it is short. Generate a draft, review it line by line, run the tests, and only then move on. Keep changes small so a bad draft is cheap to throw away.',
          'And keep the human in the loop on the boring parts too: dependency changes, database migrations and authentication code deserve a second pair of eyes precisely because they look routine.',
        ],
      },
    ],
    takeaway: 'AI makes the first draft fast. Craft now lives in the review, the brief and the tests — and that is where a good team should spend its time.',
  },
  {
    id: 'core-web-vitals-2026',
    relatedService: 'seo-website-optimization',
    featured: false,
    category: 'Performance',
    date: 'Oct 20, 2026',
    read: '5 min read',
    title: 'Core Web Vitals in 2026: What Actually Moves the Score',
    excerpt: 'Most sites fail the same few checks for the same few reasons. Here is the short list of fixes that move the score, in order.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Start with the largest contentful paint',
        paragraphs: [
          'The short answer: most sites fail the same few checks for the same few reasons — start with the largest contentful paint, and on most sites that means the hero image. Largest Contentful Paint measures how long it takes for the main content to appear. On most marketing and portfolio sites, the culprit is the same: a large hero image or a heavy font blocking the first paint, or a bundle of JavaScript that has to run before anything shows.',
          'The fixes, in order, are unglamorous: serve images at the size they are displayed, use modern formats, preload the hero image, and stop shipping JavaScript the first screen does not need. Each of these is small on its own; together they are usually the whole improvement.',
        ],
      },
      {
        heading: 'Layout shift is a design problem',
        paragraphs: [
          'Cumulative Layout Shift measures how much the page jumps around while it loads. Images without dimensions, fonts that swap late, and content injected above existing content are the usual causes.',
          'The fix is mostly discipline: reserve space for images and embeds, choose fonts with matching fallbacks, and never insert content above what the visitor is already reading. A page that stays still feels fast even before it is fast.',
        ],
      },
      {
        heading: 'Interaction is the newest bar',
        paragraphs: [
          'Interaction to Next Paint looks at how quickly the page responds when a visitor clicks, taps or types. Long tasks on the main thread are the enemy here: heavy scripts, unthrottled work and third-party widgets that all compete for the same moment.',
          'Split work into smaller pieces, defer what can wait, and audit third-party scripts regularly. A widget that nobody uses is not a feature; it is a tax on every interaction.',
        ],
      },
    ],
    takeaway: 'Web Vitals are not a mystery score. They are three questions: does the main content appear quickly, does the page stay still, and does it respond when touched. Fix them in that order.',
  },
  {
    id: 'interactive-3d-without-slowing-down',
    relatedService: 'threejs-3d-websites',
    featured: false,
    category: 'Interactive',
    date: 'Oct 18, 2026',
    read: '6 min read',
    title: 'Interactive 3D on the Web Without Killing Performance',
    excerpt: '3D on a website grabs attention, but it is also the fastest way to drain a phone battery. Here is how to keep the wow and lose the cost.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop&q=80',
    sections: [
      {
        heading: 'Decide what the 3D is for',
        paragraphs: [
          'The short answer: 3D only earns its place when it has a job — a configurator a visitor needs to rotate, or a scene that explains the product. Atmosphere alone is not worth the cost. Before adding 3D to a page, decide its job. Is it the product itself, like a configurator a visitor needs to rotate? Or is it atmosphere, a background that sets a mood? The answer decides the budget.',
          'Atmosphere should be cheap: low polygon counts, simple materials, no shadows, and a frame rate cap. A product view can spend more, because the visitor asked for it by interacting. Spending a product budget on a background is how sites end up slow.',
        ],
      },
      {
        heading: 'The phone is the test device',
        paragraphs: [
          '3D that runs beautifully on a desktop graphics card can struggle on a mid-range phone, and most visitors will arrive on a phone. Test on a real device early, not at the end, and set a fallback: if the device cannot hold a steady frame rate, drop to a static image or a lighter scene automatically.',
          'A graceful fallback is not a failure. It is the difference between a visitor who sees a beautiful image and a visitor who sees a stuttering page.',
        ],
      },
      {
        heading: 'Load it only when it is needed',
        paragraphs: [
          'The simplest performance win is also the most overlooked: do not load the 3D scene until the visitor can see it, or until they ask for it. Lazy-load the scene, the textures and the library behind it, and keep the first paint free of all of it.',
          'Combined with a capped frame rate and a static fallback, this is usually enough to keep interactive 3D feeling premium instead of punishing.',
        ],
      },
    ],
    takeaway: 'Interactive 3D works when it has a job, a budget and a fallback. Give it all three, and it stays an experience instead of becoming a cost.',
  },
  {
    id: 'how-much-nextjs-website-costs',
    featured: true,
    category: 'Guides',
    date: 'Nov 21, 2026',
    read: '5 min read',
    title: 'How Much Does a Next.js Website Cost?',
    excerpt: 'There is no single price for a Next.js website — but there is a short list of things that decide it. Here is what drives the cost, and what to ask before you get a quote.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    relatedService: 'nextjs-development',
    sections: [
      {
        heading: 'There is no single price — and that is honest',
        paragraphs: [
          'The short answer: there is no single price — a five-page marketing site and a full web application share a framework and almost nothing else, so the cost comes down to scope. A Next.js website can be a five-page marketing site or a full web application with accounts, payments and a content team behind it. Those two things share a framework and almost nothing else, so any agency quoting one flat price for "a Next.js website" is either guessing or selling you the simple one at the complex price.',
          'What you can do instead is learn the drivers. Once you know what moves the price, you can read any quote — including ours — and tell whether it matches the job.',
        ],
      },
      {
        heading: 'The five things that decide the cost',
        paragraphs: [
          'First, pages and content: a five-page site costs less than a fifty-page one, and content you supply costs less than content the agency has to write. Second, design: a custom design costs more than a template, and it should — it is the part your visitors actually judge. Third, integrations: payments, bookings, a CRM, a CMS, analytics — each one is real work, and each one adds to the quote.',
          'Fourth, the application behind the site: logins, dashboards, search, and anything with state cost more than pages that just show information. Fifth, timeline: a normal schedule costs less than a rush job, because rush work means overtime and dropped priorities elsewhere.',
        ],
      },
      {
        heading: 'How we price it',
        paragraphs: [
          'We price Next.js work per project, with a custom quote after a short scoping call. That is not a way to avoid giving a number — it is the only honest way to give one, because the scope is the price. Tell us the pages, the design, the integrations and the deadline, and we will quote it plainly, with what is included and what would cost extra.',
          'One thing to ask any agency, including us: what happens after launch. Hosting, updates and support are either in the quote or they are not, and finding out afterwards is the most expensive way to learn.',
        ],
      },
    ],
    takeaway: 'A Next.js website costs what its scope costs. Learn the five drivers, get a quote against a written scope, and check what happens after launch before you sign.',
  },
  {
    id: 'website-redesign-cost-2026',
    featured: false,
    category: 'Guides',
    date: 'Nov 20, 2026',
    read: '5 min read',
    title: 'Website Redesign Cost in 2026: What Actually Drives the Price',
    excerpt: 'A redesign is not one job — it is design, rebuild, migration and SEO protection bundled together. Here is where the money actually goes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    relatedService: 'website-redesign-migration',
    sections: [
      {
        heading: 'A redesign is four jobs, not one',
        paragraphs: [
          'The short answer: a redesign is four jobs bundled together — new design, rebuild, migration and SEO protection — and that is where the money actually goes. When people ask what a redesign costs, they are usually picturing the visible part: a new design. But a proper redesign is four jobs bundled together — new design, rebuild on a modern stack, migration of everything the old site had, and protection of the search rankings the old site earned.',
          'Skip any one of those and the price drops — and so does the result. A cheap redesign that loses your Google rankings is the most expensive kind there is.',
        ],
      },
      {
        heading: 'Where the money goes',
        paragraphs: [
          'Design is the largest share for most redesigns: research, wireframes, visual design and a design system your team can keep using. The rebuild follows: pages recreated on a modern stack, faster and easier to maintain than what they replace.',
          'Migration is the quiet cost people forget: every page, post, product, image and form moved intact, with a redirect map so old links keep working. And SEO protection — checks before, during and after launch — is what keeps the traffic you already have.',
        ],
      },
      {
        heading: 'What to ask before you pay',
        paragraphs: [
          'Ask whether redirects are included, and whether anyone checks rankings after launch. Ask who owns the design files and the code. Ask what happens to the old site — is it archived, or just switched off?',
          'And ask for the quote against a written scope: page count, platform move or not, content migration included or not. Two quotes for "a redesign" are not comparable until the scopes match.',
        ],
      },
    ],
    takeaway: 'A redesign costs what its four parts cost: design, rebuild, migration and SEO protection. The cheapest quote is usually the one that skipped the last two.',
  },
  {
    id: 'how-long-website-redesign-takes',
    featured: false,
    category: 'Guides',
    date: 'Nov 19, 2026',
    read: '4 min read',
    title: 'How Long Does a Website Redesign Take?',
    excerpt: 'Most redesigns take 3–6 weeks. Here is what fills those weeks, and what usually makes them longer.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop&q=80',
    relatedService: 'website-redesign-migration',
    sections: [
      {
        heading: 'The short answer: 3–6 weeks for most sites',
        paragraphs: [
          'A typical redesign — new design, rebuild, content migration and launch — takes 3–6 weeks for a small to medium site. A five-page marketing site can be faster; a large site with a platform move, an online store or a lot of content will take longer.',
          'Those weeks are not all building. Roughly a third is design and decisions, a third is the build, and a third is content, migration and checks. The build is rarely the slow part.',
        ],
      },
      {
        heading: 'What makes it take longer',
        paragraphs: [
          'Content is the usual delay. If the new copy, photos and product details are not ready, the build waits — a designed page with placeholder text is not a finished page. Decisions are the second delay: every round of "let me check with the team" adds days, and redesigns have many decisions.',
          'The third is scope discovered late: pages nobody mentioned in the first meeting, integrations the old site had that nobody remembered, and a platform move that turns out to be bigger than it looked. A short audit before the quote catches most of this.',
        ],
      },
      {
        heading: 'How to keep it on schedule',
        paragraphs: [
          'Fix the page list before design starts, and freeze it. Appoint one decision-maker, not a committee. And get the content ready while the design is being drawn, not after the build is finished.',
          'A good agency will give you a firm timeline after a short review of your current site — not before. If someone quotes a date without looking at the site, that date is a guess.',
        ],
      },
    ],
    takeaway: 'Plan on 3–6 weeks for a typical redesign. Content, decisions and late-discovered scope are what stretch it — fix the page list early and appoint one decision-maker.',
  },
  {
    id: 'nextjs-vs-wordpress',
    featured: false,
    category: 'Engineering',
    date: 'Nov 18, 2026',
    read: '6 min read',
    title: 'Next.js vs WordPress for a Business Website',
    excerpt: 'WordPress is the safe default and Next.js is the fast one — but the right choice depends on who updates the site and what it has to do.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&q=80',
    relatedService: 'nextjs-development',
    sections: [
      {
        heading: 'The honest summary',
        paragraphs: [
          'The short answer: WordPress is the safe default and Next.js is the fast one — the right choice depends on who updates the site and what it has to do. WordPress powers a huge share of the web for good reasons: anyone can update it, plugins exist for almost everything, and finding someone to maintain it is easy. Next.js is the newer choice: faster pages, better security by default, and a codebase a developer can reason about — but it needs a developer to change things.',
          'Neither is wrong. The wrong choice is picking one for the wrong reason — WordPress because it is familiar, or Next.js because it is fashionable.',
        ],
      },
      {
        heading: 'Choose WordPress when',
        paragraphs: [
          'Choose WordPress when your team updates content often and nobody on the team writes code. A blog, a news section, or a site where marketing edits pages weekly will be happier in WordPress, where the editor is the interface.',
          'It is also the right call when the budget is small and the site is mostly pages: WordPress gets a good-looking site live quickly, and the plugin ecosystem covers bookings, forms, shops and SEO without custom work.',
        ],
      },
      {
        heading: 'Choose Next.js when',
        paragraphs: [
          'Choose Next.js when speed and custom behaviour matter more than self-service editing: a marketing site that has to load instantly, a product with logins and dashboards, a storefront with custom flows, or anything where performance is part of the product.',
          'Next.js also wins on security and maintenance: no plugin updates to chase, no login page for bots to hammer, and pages that are server-rendered, so Google sees your content immediately. The trade-off is real — changes go through a developer — so weigh it honestly against who will run the site day to day.',
        ],
      },
    ],
    takeaway: 'WordPress wins when your team edits content themselves; Next.js wins when speed, security and custom behaviour matter more. Pick by who runs the site, not by fashion.',
  },
  {
    id: 'migrate-to-nextjs',
    featured: false,
    category: 'Engineering',
    date: 'Nov 17, 2026',
    read: '6 min read',
    title: 'How to Migrate Your Website to Next.js',
    excerpt: 'Moving to Next.js is a migration, not a rewrite. Done in the right order, your visitors never notice — and your rankings hold.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&q=80',
    relatedService: 'nextjs-development',
    sections: [
      {
        heading: 'Start with an inventory, not with code',
        paragraphs: [
          'The short answer: a migration is not a rewrite — start with an inventory of everything the current site has, and move in the right order so visitors never notice and rankings hold. Before anything is rebuilt, list everything the current site has: pages, posts, products, images, forms, integrations and the URLs they live at. The inventory is the migration — everything after it is execution.',
          'The inventory also decides the order. Migrate the pages that earn traffic first, and the pages nobody visits last. If a page has no traffic and no links, consider dropping it instead of migrating it.',
        ],
      },
      {
        heading: 'Keep the URLs, or map them',
        paragraphs: [
          'The single most important rule: a URL that exists today must still work after the move, either at the same address or through a redirect to the new one. Every old URL gets a line in a redirect map, and every redirect gets checked after launch.',
          'This is also the moment to fix the URL structure if it is a mess — but only with redirects in place. A clean structure is worth it; a broken one costs rankings for months.',
        ],
      },
      {
        heading: 'Launch in slices, verify everything',
        paragraphs: [
          'Do not switch everything over in one night. Migrate in slices — a section at a time — and verify each slice: pages load, forms work, analytics fires, and the redirect map holds. Staging first, then production, then a post-launch check for broken links and speed.',
          'After launch, watch Search Console for a few weeks. A small dip is normal while Google re-crawls; a sustained drop means a redirect was missed, and the map tells you exactly where to look.',
        ],
      },
    ],
    takeaway: 'Migrate in the right order: inventory first, URLs preserved or mapped, launch in slices, verify after. Your visitors should never notice the move happened.',
  },
  {
    id: 'website-maintenance-checklist',
    featured: false,
    category: 'Guides',
    date: 'Nov 16, 2026',
    read: '4 min read',
    title: 'Website Maintenance Checklist: What to Check Every Month',
    excerpt: 'Websites break quietly. A monthly checklist — updates, backups, speed, links and security — is the difference between a small fix and a lost week.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
    relatedService: 'maintenance-support',
    sections: [
      {
        heading: 'Why monthly, and why written down',
        paragraphs: [
          'The short answer: websites break quietly, so a written monthly checklist — updates, backups, speed, links and security — is the difference between a small fix and a lost week. Websites break quietly: a plugin goes out of date, a certificate expires, a form stops sending, a page gets slow. None of these announce themselves. A monthly checklist turns "we should check the site" into a job with a list and a date.',
          'Write the list down and keep it in one place. The checklist below is the one we use — it takes about an hour a month for a typical site, and it catches almost everything before it becomes a problem.',
        ],
      },
      {
        heading: 'The monthly checks',
        paragraphs: [
          'Updates first: core, plugins, dependencies and the framework itself — tested on staging before they go live, never blindly. Then backups: confirm a recent backup exists and that it can actually be restored, not just that the backup job ran.',
          'Then the visitor-facing checks: load the homepage and two key pages on a phone, submit the contact form, click the main links, and check the site still loads fast. Broken forms and dead links are the most common silent failures we find.',
        ],
      },
      {
        heading: 'The quarterly checks',
        paragraphs: [
          'Every quarter, go deeper: review analytics for pages that lost traffic, check Search Console for errors and coverage problems, renew or confirm the domain and certificate dates, and review who has access to what — old contractor accounts are a security hole that costs nothing to close.',
          'And once a year, step back: is the content still accurate, are the prices and team pages current, and does the site still describe the business you actually run? A site that drifts from the business quietly loses enquiries.',
        ],
      },
    ],
    takeaway: 'An hour a month: updates, backups, forms, links and speed. Quarterly: analytics, Search Console, access and dates. Small checks, done regularly, beat a big rescue.',
  },
];

export function getJournalPostById(id: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((post) => post.id === id);
}
