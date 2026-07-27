export type Book = {
  title: string
  author: string
  genre: string
  description: string
}

export type FlavorIconName =
  | 'vanilla'
  | 'chocolate'
  | 'strawberry'
  | 'neapolitan'
  | 'chocolate-chip'
  | 'butter-pecan'
  | 'rocky-road'
  | 'mint-chocolate-chip'
  | 'cookie-dough'
  | 'salted-caramel'
  | 'double-fudge'
  | 'cookies-and-cream'
  | 'pistachio'
  | 'mango'
  | 'matcha'
  | 'lavender-honey'
  | 'hazelnut'
  | 'kulfi'
  | 'ube'
  | 'coffee'
  | 'cinnamon'
  | 'coconut'
  | 'raspberry-swirl'
  | 'caramel-apple'

export type Flavor = {
  id: string
  name: string
  tagline: string
  icon: FlavorIconName
  books: Book[]
}

export type MenuSection = {
  id: string
  title: string
  subtitle: string
  flavors: Flavor[]
}

export const classicsFlavors: Flavor[] = [
  {
    id: 'vanilla',
    name: 'Vanilla',
    tagline: 'Timeless, comforting, quietly profound',
    icon: 'vanilla',
    books: [
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Classic Romance',
        description:
          "The foundational text of an entire genre, still the gold standard 200+ years later — like vanilla, it's the flavour everyone measures other things against, yet it never stops being genuinely satisfying.",
      },
      {
        title: 'The Remains of the Day',
        author: 'Kazuo Ishiguro',
        genre: 'Literary Fiction',
        description:
          "Quiet, restrained, deceptively simple prose hiding immense emotional depth — exactly like vanilla's understated profile concealing real complexity underneath.",
      },
      {
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Memoir',
        description:
          'A warm, grounding, universally human story — vanilla is the flavour of comfort and memory, and this memoir hits that same deeply personal, foundational note.',
      },
    ],
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    tagline: 'Rich, indulgent, impossible to put down',
    icon: 'chocolate',
    books: [
      {
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        genre: 'Gothic Romance',
        description:
          "Dark, intense, all-consuming passion with real emotional weight — chocolate's richness mirrored in a story that refuses to be subtle.",
      },
      {
        title: 'Beloved',
        author: 'Toni Morrison',
        genre: 'Literary Fiction',
        description:
          "Profound, dense, demands to be sat with slowly — like a rich dark chocolate, this isn't a book you rush through, and the depth is the entire point.",
      },
      {
        title: 'The Night Circus',
        author: 'Erin Morgenstern',
        genre: 'Fantasy',
        description:
          'Lush, sensory, indulgent prose dripping in atmosphere — pure decadence on the page.',
      },
    ],
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    tagline: 'Bright, fresh, quietly joyful',
    icon: 'strawberry',
    books: [
      {
        title: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        genre: 'Contemporary Fiction',
        description:
          'Glamorous, emotionally bright, propulsive but never heavy — the literary equivalent of a perfect summer day.',
      },
      {
        title: 'Anne of Green Gables',
        author: 'L.M. Montgomery',
        genre: 'Classic',
        description:
          'Genuinely sweet without being saccharine, full of light and warmth — brightness without artificiality.',
      },
      {
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        genre: 'Literary Mystery',
        description:
          'A gentle tartness running underneath a beautiful, accessible story — real depth without losing its lightness.',
      },
    ],
  },
  {
    id: 'neapolitan',
    name: 'Neapolitan',
    tagline: 'Three flavours, endless range',
    icon: 'neapolitan',
    books: [
      {
        title: 'Cloud Atlas',
        author: 'David Mitchell',
        genre: 'Speculative Fiction',
        description:
          "Literally structured as multiple distinct stories woven into one whole — the most direct match possible for 'three flavours, one container.'",
      },
      {
        title: "The Time Traveler's Wife",
        author: 'Audrey Niffenegger',
        genre: 'Romance/Sci-Fi',
        description:
          'Blends romance, science fiction, and tragedy seamlessly — multiple emotional registers in one cohesive read.',
      },
      {
        title: 'American Gods',
        author: 'Neil Gaiman',
        genre: 'Fantasy',
        description:
          'Mixes mythology, road-trip Americana, and dark fantasy into one sprawling, varied experience.',
      },
    ],
  },
  {
    id: 'chocolate-chip',
    name: 'Chocolate Chip',
    tagline: 'Comfort, punctuated with delight',
    icon: 'chocolate-chip',
    books: [
      {
        title: 'The House in the Cerulean Sea',
        author: 'TJ Klune',
        genre: 'Cosy Fantasy',
        description:
          'A gentle, comforting core story dotted with genuinely delightful, surprising moments of warmth.',
      },
      {
        title: 'A Man Called Ove',
        author: 'Fredrik Backman',
        genre: 'Literary Fiction',
        description:
          'Warm and approachable with sharp little bursts of humour and unexpected emotional punches scattered throughout.',
      },
      {
        title: 'Beach Read',
        author: 'Emily Henry',
        genre: 'Romance',
        description:
          'A reliably enjoyable, crowd-pleasing read with satisfying small surprises along the way.',
      },
    ],
  },
  {
    id: 'butter-pecan',
    name: 'Butter Pecan',
    tagline: 'Refined, nutty, rewards patience',
    icon: 'butter-pecan',
    books: [
      {
        title: 'A Gentleman in Moscow',
        author: 'Amor Towles',
        genre: 'Historical Fiction',
        description:
          'Elegant, unhurried, sophisticated prose that rewards patience — not the loudest flavour in the case, but the most refined.',
      },
      {
        title: 'The Goldfinch',
        author: 'Donna Tartt',
        genre: 'Literary Fiction',
        description:
          'Dense, richly layered, deliberately paced with real complexity beneath an accessible surface.',
      },
      {
        title: 'Olive Kitteridge',
        author: 'Elizabeth Strout',
        genre: 'Literary Fiction',
        description:
          'A character study with real bite and depth beneath its quiet New England warmth.',
      },
    ],
  },
]

export const wildAndBoldFlavors: Flavor[] = [
  {
    id: 'rocky-road',
    name: 'Rocky Road',
    tagline: 'Chaotic, unpredictable, thrillingly textured',
    icon: 'rocky-road',
    books: [
      {
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        genre: 'Psychological Thriller',
        description:
          'Built entirely on jarring tonal shifts and twists you genuinely cannot predict — the literary equivalent of biting into something different every single time.',
      },
      {
        title: 'The Sympathizer',
        author: 'Viet Thanh Nguyen',
        genre: 'Literary Satire',
        description:
          'Darkly comic, structurally unconventional, refuses to settle into one register — chunky and unpredictable in voice and form alike.',
      },
      {
        title: 'Catch-22',
        author: 'Joseph Heller',
        genre: 'Satire',
        description:
          'Deliberately disorienting, circular, absurdist — chaos as the actual architecture of the book.',
      },
    ],
  },
  {
    id: 'mint-chocolate-chip',
    name: 'Mint Chocolate Chip',
    tagline: 'Sharp, cool, polarising by nature',
    icon: 'mint-chocolate-chip',
    books: [
      {
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        genre: 'Psychological Thriller',
        description:
          'Clinical, cool-toned prose concealing something genuinely dark and rich underneath — the controlled exterior with intensity hidden beneath.',
      },
      {
        title: 'We Need to Talk About Kevin',
        author: 'Lionel Shriver',
        genre: 'Psychological Drama',
        description:
          'Sharp, unsettling, deliberately polarising — a book people have visceral, divided reactions to, same as the flavour itself.',
      },
      {
        title: 'Sharp Objects',
        author: 'Gillian Flynn',
        genre: 'Crime Thriller',
        description:
          'Cutting, cold, precise prose with real darkness running underneath the controlled surface — the title alone earns its place.',
      },
    ],
  },
  {
    id: 'cookie-dough',
    name: 'Cookie Dough',
    tagline: 'Playful, mischievous, gloriously indulgent',
    icon: 'cookie-dough',
    books: [
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        genre: 'Sci-Fi Comedy',
        description:
          'Gleefully irreverent, breaks every rule of how a story should behave — pure mischievous fun without ever taking itself seriously.',
      },
      {
        title: 'Good Omens',
        author: 'Terry Pratchett & Neil Gaiman',
        genre: 'Fantasy Comedy',
        description:
          'Playful, a little chaotic, built on the joy of bending expectations — indulgent nostalgic fun without losing genuine craft.',
      },
      {
        title: 'Eleanor Oliphant Is Completely Fine',
        author: 'Gail Honeyman',
        genre: 'Contemporary Fiction',
        description:
          'Surprising warmth wrapped in unconventional, slightly off-kilter charm — comfort with a delightfully unexpected texture.',
      },
    ],
  },
  {
    id: 'salted-caramel',
    name: 'Salted Caramel',
    tagline: 'Sweet with a genuinely dangerous edge',
    icon: 'salted-caramel',
    books: [
      {
        title: 'My Sister, the Serial Killer',
        author: 'Oyinkan Braithwaite',
        genre: 'Dark Comedy',
        description:
          'Sharp, darkly funny, genuinely unsettling underneath its smooth surface — sweetness with real danger laced through it.',
      },
      {
        title: 'The Talented Mr. Ripley',
        author: 'Patricia Highsmith',
        genre: 'Psychological Thriller',
        description:
          'Charming, seductive prose wrapped around a genuinely amoral core — exactly the sweet-with-an-edge sophistication of this flavour.',
      },
      {
        title: 'Circe',
        author: 'Madeline Miller',
        genre: 'Mythology/Literary Fiction',
        description:
          'Gorgeous prose with real teeth — a protagonist who is sympathetic and dangerous in equal measure.',
      },
    ],
  },
  {
    id: 'double-fudge',
    name: 'Double Fudge',
    tagline: 'Dense, intense, unapologetically heavy',
    icon: 'double-fudge',
    books: [
      {
        title: 'A Little Life',
        author: 'Hanya Yanagihara',
        genre: 'Literary Fiction',
        description:
          "Devastatingly intense, emotionally dense, demands real commitment — the single most direct match possible for this flavour's profile.",
      },
      {
        title: 'Blood Meridian',
        author: 'Cormac McCarthy',
        genre: 'Literary Western',
        description:
          'Brutal, dense, unflinchingly dark prose that refuses any sweetness — the 100% cacao of literature.',
      },
      {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        genre: 'Classic/Philosophical Fiction',
        description:
          'Vast, philosophically heavy, demands patience and real intellectual commitment — depth and density as the entire reading experience.',
      },
    ],
  },
  {
    id: 'cookies-and-cream',
    name: 'Cookies and Cream',
    tagline: 'Smooth base, consistent surprise',
    icon: 'cookies-and-cream',
    books: [
      {
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: 'Speculative Fiction',
        description:
          'A gentle, accessible core narrative punctuated by sharply different alternate-life vignettes throughout — smooth base, consistent textural surprise.',
      },
      {
        title: 'Convenience Store Woman',
        author: 'Sayaka Murata',
        genre: 'Literary Fiction',
        description:
          'Quiet, easy-to-read prose with genuinely sharp, unexpected observations scattered consistently throughout — crunch within the smoothness.',
      },
      {
        title: 'The Lovely Bones',
        author: 'Alice Sebold',
        genre: 'Literary Fiction',
        description:
          'A gentle narrative voice carrying real darkness and sharp emotional moments throughout — contrast as the consistent rhythm of the book.',
      },
    ],
  },
]

export const refinedAndExoticFlavors: Flavor[] = [
  {
    id: 'pistachio',
    name: 'Pistachio',
    tagline: 'Subtle, distinctive, an acquired appreciation',
    icon: 'pistachio',
    books: [
      {
        title: 'Norwegian Wood',
        author: 'Haruki Murakami',
        genre: 'Literary Fiction',
        description:
          'Quietly distinctive, melancholic in an understated way that rewards patience — a flavour you grow into, not one that announces itself.',
      },
      {
        title: 'The Elegance of the Hedgehog',
        author: 'Muriel Barbery',
        genre: 'Literary Fiction',
        description:
          'Subtle, intellectually rich, deliberately restrained in its pleasures — sophistication that reveals itself slowly rather than all at once.',
      },
      {
        title: 'Pachinko',
        author: 'Min Jin Lee',
        genre: 'Historical Fiction',
        description:
          'Earthy, grounded, generationally rich storytelling with real depth beneath a deceptively calm surface.',
      },
    ],
  },
  {
    id: 'mango',
    name: 'Mango',
    tagline: 'Vibrant, sun-kissed, alive with colour',
    icon: 'mango',
    books: [
      {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        genre: 'Magical Realism',
        description:
          'Vivid, sun-drenched, alive with colour and sensory richness — the literary equivalent of biting into perfectly ripe tropical fruit.',
      },
      {
        title: 'Like Water for Chocolate',
        author: 'Laura Esquivel',
        genre: 'Magical Realism',
        description:
          "Sensory, vibrant, deeply tied to taste and indulgence as a narrative device — mango's vividness translated directly onto the page.",
      },
      {
        title: 'The God of Small Things',
        author: 'Arundhati Roy',
        genre: 'Literary Fiction',
        description:
          'Lush, tropical prose as rich and alive as the landscape it describes — vibrant sweetness with real emotional depth underneath.',
      },
    ],
  },
  {
    id: 'matcha',
    name: 'Matcha',
    tagline: 'Earthy, mindful, quietly intentional',
    icon: 'matcha',
    books: [
      {
        title: 'The Housekeeper and the Professor',
        author: 'Yoko Ogawa',
        genre: 'Literary Fiction',
        description:
          "Quiet, contemplative, built around ritual and patient attention — matcha's mindfulness translated into narrative pacing.",
      },
      {
        title: 'Kitchen',
        author: 'Banana Yoshimoto',
        genre: 'Literary Fiction',
        description:
          'Gentle, meditative, finds profundity in stillness and small daily rituals — calm intentionality as the entire emotional register.',
      },
      {
        title: 'Klara and the Sun',
        author: 'Kazuo Ishiguro',
        genre: 'Literary Science Fiction',
        description:
          'Restrained, contemplative prose with quiet depth beneath its calm surface — bitterness and sweetness held in careful, intentional balance.',
      },
    ],
  },
  {
    id: 'lavender-honey',
    name: 'Lavender Honey',
    tagline: 'Dreamlike, gentle, unexpectedly deep',
    icon: 'lavender-honey',
    books: [
      {
        title: 'Piranesi',
        author: 'Susanna Clarke',
        genre: 'Fantasy/Literary Fiction',
        description:
          'Dreamlike, hypnotic, gentle in tone even as it explores strange territory — floral strangeness handled with genuine tenderness.',
      },
      {
        title: 'The Ocean at the End of the Lane',
        author: 'Neil Gaiman',
        genre: 'Fantasy',
        description:
          "Soothing yet eerie, soft prose carrying genuine emotional weight underneath — gentleness with unexpected depth, exactly lavender honey's character.",
      },
      {
        title: "Howl's Moving Castle",
        author: 'Diana Wynne Jones',
        genre: 'Fantasy',
        description:
          'Whimsical, warm, gently unconventional without ever losing its comfort — botanical sweetness with real charm.',
      },
    ],
  },
  {
    id: 'hazelnut',
    name: 'Hazelnut',
    tagline: "Fragrant, artisanal, a connoisseur's choice",
    icon: 'hazelnut',
    books: [
      {
        title: 'A Tale for the Time Being',
        author: 'Ruth Ozeki',
        genre: 'Literary Fiction',
        description:
          'Carefully crafted, layered with genuine warmth and patience — an artisanal, slow-built reading experience that rewards real attention.',
      },
      {
        title: 'The Particular Sadness of Lemon Cake',
        author: 'Aimee Bender',
        genre: 'Magical Realism',
        description:
          'Delicate, sensory-focused prose built around subtle emotional resonance — fragrance and nuance over boldness.',
      },
      {
        title: 'Stoner',
        author: 'John Williams',
        genre: 'Literary Fiction',
        description:
          "Quiet, understated, deeply crafted prose whose power comes from precision rather than spectacle — the connoisseur's choice, just like this flavour.",
      },
    ],
  },
  {
    id: 'kulfi',
    name: 'Kulfi',
    tagline: 'Rich, spiced, deeply cultural',
    icon: 'kulfi',
    books: [
      {
        title: 'A Suitable Boy',
        author: 'Vikram Seth',
        genre: 'Literary Fiction',
        description:
          'Dense, sweeping, richly textured with deep cultural specificity — a slow, deliberate richness that rewards real time investment.',
      },
      {
        title: 'The Inheritance of Loss',
        author: 'Kiran Desai',
        genre: 'Literary Fiction',
        description:
          'Spice-complex in its emotional register, layered with cultural and historical depth — distinctive, traditional, and rich all at once.',
      },
      {
        title: 'Interpreter of Maladies',
        author: 'Jhumpa Lahiri',
        genre: 'Short Stories',
        description:
          'Carefully crafted, culturally rich stories with real depth packed into each — distinctive flavour delivered in perfectly measured portions.',
      },
    ],
  },
]

export const curiousAndComfortingFlavors: Flavor[] = [
  {
    id: 'ube',
    name: 'Ube',
    tagline: 'Striking, heritage-rich, sweetly distinctive',
    icon: 'ube',
    books: [
      {
        title: 'Crying in H Mart',
        author: 'Michelle Zauner',
        genre: 'Memoir',
        description:
          'Deeply tied to food, heritage, and identity as inseparable threads — a memoir where flavour itself carries emotional and cultural weight, exactly as ube does.',
      },
      {
        title: "On Earth We're Briefly Gorgeous",
        author: 'Ocean Vuong',
        genre: 'Literary Fiction',
        description:
          'Vivid, sensory, visually striking prose carrying real cultural specificity and tenderness — beauty and heritage rendered in vibrant colour.',
      },
      {
        title: 'America Is Not the Heart',
        author: 'Elaine Castillo',
        genre: 'Literary Fiction',
        description:
          'Rich with cultural identity and family history, distinctive and proud rather than blending in — heritage as the central flavour, not a footnote.',
      },
    ],
  },
  {
    id: 'coffee',
    name: 'Coffee / Espresso',
    tagline: 'Bold, bracing, intellectually electric',
    icon: 'coffee',
    books: [
      {
        title: 'The Girl on the Train',
        author: 'Paula Hawkins',
        genre: 'Psychological Thriller',
        description:
          'Propulsive, jittery pacing that keeps you alert and unsettled from page one — caffeine translated directly into narrative rhythm.',
      },
      {
        title: 'Bunny',
        author: 'Mona Awad',
        genre: 'Dark Academia/Satire',
        description:
          'Sharp, strange, deliberately disorienting in the best way — bitter wit with real bite, refusing to let you settle in.',
      },
      {
        title: 'The Secret History',
        author: 'Donna Tartt',
        genre: 'Dark Academia',
        description:
          'Intellectually intense, sophisticated, demands real alertness and attention — the espresso shot of literary fiction.',
      },
    ],
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    tagline: 'Warm, spiced, evocatively nostalgic',
    icon: 'cinnamon',
    books: [
      {
        title: 'Comfort Me with Apples',
        author: 'Ruth Reichl',
        genre: 'Memoir',
        description:
          'Warm, sensory, deeply tied to food as memory and home — spiced nostalgia rendered in real, vivid detail.',
      },
      {
        title: 'Salt, Fat, Acid, Heat',
        author: 'Samin Nosrat',
        genre: 'Food Writing',
        description:
          "Warm, instructive, deeply rooted in tradition and the comfort of mastering something familiar — cinnamon's homeyness with genuine craft underneath.",
      },
      {
        title: 'Kitchen Confidential',
        author: 'Anthony Bourdain',
        genre: 'Memoir',
        description:
          'Has real heat and edge beneath its warmth — comfort that still carries a kick, never purely sweet.',
      },
    ],
  },
  {
    id: 'coconut',
    name: 'Coconut',
    tagline: 'Tropical, transportive, light but textured',
    icon: 'coconut',
    books: [
      {
        title: 'The Island of Sea Women',
        author: 'Lisa See',
        genre: 'Historical Fiction',
        description:
          "Deeply tied to a specific coastal place and way of life, transportive and richly textured — coconut's sense of elsewhere with real substance underneath.",
      },
      {
        title: 'State of Wonder',
        author: 'Ann Patchett',
        genre: 'Literary Fiction',
        description:
          'Genuinely transportive, immersive sense of place in a remote, distinctive setting — escape with real narrative weight.',
      },
      {
        title: 'In the Time of the Butterflies',
        author: 'Julia Alvarez',
        genre: 'Historical Fiction',
        description:
          'Vivid Caribbean setting carrying real historical and emotional depth — tropical escape grounded in something substantial.',
      },
    ],
  },
  {
    id: 'raspberry-swirl',
    name: 'Raspberry / Berry Swirl',
    tagline: 'Tart, bright, winding with intensity',
    icon: 'raspberry-swirl',
    books: [
      {
        title: 'Conversations with Friends',
        author: 'Sally Rooney',
        genre: 'Literary Fiction',
        description:
          'Smooth, contemporary prose with real tart, sharp emotional moments winding throughout — sweetness cut consistently by something sharper underneath.',
      },
      {
        title: 'Daisy Jones & The Six',
        author: 'Taylor Jenkins Reid',
        genre: 'Contemporary Fiction',
        description:
          'A vibrant, easy-reading structure with real bursts of intensity and conflict swirled throughout — texture and bite woven through accessibility.',
      },
      {
        title: 'The Vanishing Half',
        author: 'Brit Bennett',
        genre: 'Literary Fiction',
        description:
          'Layered, with sharp emotional turns running consistently through an otherwise smooth, propulsive narrative — tartness as a throughline, not an interruption.',
      },
    ],
  },
  {
    id: 'caramel-apple',
    name: 'Caramel Apple',
    tagline: 'Autumnal, nostalgic, sweet with a tart bite',
    icon: 'caramel-apple',
    books: [
      {
        title: 'Practical Magic',
        author: 'Alice Hoffman',
        genre: 'Magical Realism',
        description:
          "Autumnal, nostalgic, cosy with real depth and a little bite of darkness underneath the warmth — caramel sweetness with apple's tartness intact.",
      },
      {
        title: 'The Witch of Blackbird Pond',
        author: 'Elizabeth George Speare',
        genre: 'Historical Fiction',
        description:
          'Carries genuine nostalgic, seasonal charm with real substance and a little edge beneath the comfort — classic Americana with real character.',
      },
      {
        title: 'Garden Spells',
        author: 'Sarah Addison Allen',
        genre: 'Magical Realism',
        description:
          "Warm, sweet, distinctly tied to ritual and tradition with a little magic and tartness running through — caramel apple's exact emotional register.",
      },
    ],
  },
]

export const menuSections: MenuSection[] = [
  {
    id: 'classics',
    title: 'The Classics',
    subtitle: 'Timeless flavours, timeless stories.',
    flavors: classicsFlavors,
  },
  {
    id: 'wild-and-bold',
    title: 'The Wild & Bold',
    subtitle: 'Flavours with edge, books with bite.',
    flavors: wildAndBoldFlavors,
  },
  {
    id: 'refined-and-exotic',
    title: 'The Refined & Exotic',
    subtitle: 'Rare flavours, extraordinary stories.',
    flavors: refinedAndExoticFlavors,
  },
  {
    id: 'curious-and-comforting',
    title: 'The Curious & Comforting',
    subtitle: 'Nostalgic flavours, stories that stay with you.',
    flavors: curiousAndComfortingFlavors,
  },
]
