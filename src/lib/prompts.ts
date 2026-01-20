export type Category = 'all' | 'men' | 'women' | 'couple' | 'kids' | 'landscapes' | 'scifi';

export interface Prompt {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  content: string;
  image: string;
  imageSrc: string;
  tags: string[];
  upvotes: number;
  createdAt: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'couple', label: 'Couple' },
  { id: 'kids', label: 'Kids' },
  { id: 'landscapes', label: 'Landscapes' },
  { id: 'scifi', label: 'Sci-Fi' },
];

// Import all prompt images
import prompt1 from '@/assets/prompts/prompt-1.jpg';
import prompt2 from '@/assets/prompts/prompt-2.jpg';
import prompt3 from '@/assets/prompts/prompt-3.jpg';
import prompt4 from '@/assets/prompts/prompt-4.jpg';
import prompt5 from '@/assets/prompts/prompt-5.jpg';
import prompt6 from '@/assets/prompts/prompt-6.jpg';
import prompt7 from '@/assets/prompts/prompt-7.jpg';
import prompt8 from '@/assets/prompts/prompt-8.jpg';
import prompt9 from '@/assets/prompts/prompt-9.jpg';
import prompt10 from '@/assets/prompts/prompt-10.jpg';
import prompt11 from '@/assets/prompts/prompt-11.jpg';
import prompt12 from '@/assets/prompts/prompt-12.jpg';
import prompt13 from '@/assets/prompts/prompt-13.jpg';
import prompt14 from '@/assets/prompts/prompt-14.jpg';
import prompt15 from '@/assets/prompts/prompt-15.jpg';
import prompt16 from '@/assets/prompts/prompt-16.jpg';
import prompt17 from '@/assets/prompts/prompt-17.jpg';
import prompt18 from '@/assets/prompts/prompt-18.jpg';
import prompt19 from '@/assets/prompts/prompt-19.jpg';
import prompt20 from '@/assets/prompts/prompt-20.jpg';
import prompt21 from '@/assets/prompts/prompt-21.jpg';
import prompt22 from '@/assets/prompts/prompt-22.jpg';
import prompt23 from '@/assets/prompts/prompt-23.jpg';
import prompt24 from '@/assets/prompts/prompt-24.jpg';
import prompt25 from '@/assets/prompts/prompt-25.jpg';
import prompt26 from '@/assets/prompts/prompt-26.jpg';
import prompt27 from '@/assets/prompts/prompt-27.jpg';
import prompt28 from '@/assets/prompts/prompt-28.jpg';
import prompt29 from '@/assets/prompts/prompt-29.jpg';
import prompt30 from '@/assets/prompts/prompt-30.jpg';
import prompt31 from '@/assets/prompts/prompt-31.jpg';
import prompt32 from '@/assets/prompts/prompt-32.jpg';
import prompt33 from '@/assets/prompts/prompt-33.jpg';
import prompt34 from '@/assets/prompts/prompt-34.jpg';
import prompt35 from '@/assets/prompts/prompt-35.jpg';
import prompt36 from '@/assets/prompts/prompt-36.jpg';
import prompt37 from '@/assets/prompts/prompt-37.jpg';
import prompt38 from '@/assets/prompts/prompt-38.jpg';
import prompt39 from '@/assets/prompts/prompt-39.jpg';
import prompt40 from '@/assets/prompts/prompt-40.jpg';

export const mockPrompts: Prompt[] = [
  // ========== MEN ==========
  {
    id: '1',
    title: 'Cinematic Portrait Master',
    category: 'men',
    content: 'A distinguished gentleman in his 40s, wearing a perfectly tailored charcoal wool suit, standing in a dimly lit whiskey bar. Dramatic Rembrandt lighting, shallow depth of field, shot on Hasselblad medium format camera, cinematic color grading with warm amber tones.',
    image: 'A hyper-realistic cinematic editorial portrait of a distinguished gentleman in his 40s in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt1,
    tags: ['portrait', 'cinematic', 'professional'],
    upvotes: 342,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Urban Street Style',
    category: 'men',
    content: 'A young creative director leaning against graffiti-covered walls in Brooklyn. Wearing vintage denim jacket over a crisp white tee, raw street photography style. Overcast natural lighting, Fujifilm X-T4 film simulation, gritty urban aesthetic.',
    image: 'A hyper-realistic cinematic editorial portrait of a young creative director in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt2,
    tags: ['street', 'urban', 'casual'],
    upvotes: 234,
    createdAt: '2024-01-09',
  },
  {
    id: '3',
    title: 'The Modern Maverick',
    category: 'men',
    content: 'A candid, editorial-style portrait of a man in his late 30s with a salt-and-pepper beard, dressed in a textured cashmere sweater and a vintage Barbour jacket. He is leaning against a classic Land Rover Defender in the Scottish Highlands.',
    image: 'A hyper-realistic cinematic editorial portrait of a man in his late 30s with a salt-and-pepper beard in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt3,
    tags: ['old money', 'quiet luxury', 'editorial'],
    upvotes: 567,
    createdAt: '2024-01-20',
  },
  {
    id: '4',
    title: 'The Cyber-Tech Specialist',
    category: 'men',
    content: 'A hyper-realistic close-up portrait of a tech specialist in a futuristic 2040s setting. The man has short, undercut hair and a geometric facial tattoo that faintly glows blue.',
    image: 'A hyper-realistic cinematic editorial portrait of a tech specialist in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt4,
    tags: ['cyberpunk', 'techwear', 'futuristic'],
    upvotes: 723,
    createdAt: '2024-01-19',
  },
  {
    id: '5',
    title: 'The Noir Detective',
    category: 'men',
    content: 'A gritty, black and white film noir photograph of a private detective sitting in a smoke-filled office at night. Rain streaks heavily down the window behind him.',
    image: 'A hyper-realistic cinematic editorial portrait of a noir detective in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt5,
    tags: ['noir', 'vintage', 'cinematic'],
    upvotes: 489,
    createdAt: '2024-01-18',
  },
  {
    id: '6',
    title: 'The Last Samurai',
    category: 'men',
    content: 'An epic, wide-angle cinematic shot of a lone samurai warrior standing on a rocky cliff edge during a violent thunderstorm. He is armored in traditional Japanese O-yoroi armor.',
    image: 'A hyper-realistic cinematic editorial portrait of a samurai warrior in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt6,
    tags: ['samurai', 'action', 'cinematic'],
    upvotes: 892,
    createdAt: '2024-01-17',
  },
  {
    id: '7',
    title: 'The Arctic Explorer',
    category: 'men',
    content: 'A powerful wildlife photograph of an arctic explorer making eye contact with a massive polar bear across a patch of melting sea ice.',
    image: 'A hyper-realistic cinematic editorial portrait of an arctic explorer in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt7,
    tags: ['adventure', 'wildlife', 'exploration'],
    upvotes: 634,
    createdAt: '2024-01-16',
  },

  // ========== WOMEN ==========
  {
    id: '8',
    title: 'Ethereal Fashion Editorial',
    category: 'women',
    content: 'An elegant model wearing a flowing silk gown in dusty rose, standing in an abandoned baroque palace. Golden hour light streaming through tall arched windows.',
    image: 'A hyper-realistic cinematic editorial portrait of an elegant model in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt8,
    tags: ['fashion', 'editorial', 'elegant'],
    upvotes: 528,
    createdAt: '2024-01-14',
  },
  {
    id: '9',
    title: 'Minimalist Beauty Portrait',
    category: 'women',
    content: 'A close-up beauty portrait with flawless skin and natural makeup. Clean white studio background, soft butterfly lighting setup.',
    image: 'A hyper-realistic cinematic editorial close-up portrait of a woman in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt9,
    tags: ['beauty', 'minimalist', 'studio'],
    upvotes: 445,
    createdAt: '2024-01-08',
  },
  {
    id: '10',
    title: 'The Ethereal Goddess',
    category: 'women',
    content: 'A fantastical, dreamlike portrait of a woman with flowing, waist-length hair adorned with small, glowing bioluminescent flowers and crystals.',
    image: 'A hyper-realistic cinematic editorial portrait of an ethereal goddess in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt10,
    tags: ['fantasy', 'ethereal', 'magical'],
    upvotes: 756,
    createdAt: '2024-01-20',
  },
  {
    id: '11',
    title: 'The Urban Creative',
    category: 'women',
    content: 'A vibrant, candid street style photograph of a young woman with dyed copper-orange hair in a shag cut. She is laughing naturally while walking across a busy crosswalk.',
    image: 'A hyper-realistic cinematic editorial portrait of a young creative woman in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt11,
    tags: ['street style', 'gen z', 'candid'],
    upvotes: 623,
    createdAt: '2024-01-19',
  },
  {
    id: '12',
    title: 'Dark Academia Librarian',
    category: 'women',
    content: 'A moody, atmospheric portrait of a young historian in a dusty, candelabra-lit chamber of an ancient university library.',
    image: 'A hyper-realistic cinematic editorial portrait of a young historian in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt12,
    tags: ['dark academia', 'moody', 'vintage'],
    upvotes: 534,
    createdAt: '2024-01-18',
  },
  {
    id: '13',
    title: 'High-Fashion Futuristic Nomad',
    category: 'women',
    content: 'A striking, high-fashion editorial shot of a nomadic model in a desert landscape at sunset. She wears avant-garde clothing made of layered deconstructed fabrics.',
    image: 'A hyper-realistic cinematic editorial portrait of a futuristic nomadic model in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt13,
    tags: ['high fashion', 'editorial', 'avant-garde'],
    upvotes: 678,
    createdAt: '2024-01-17',
  },
  {
    id: '14',
    title: 'Post-Apocalyptic Survivor',
    category: 'women',
    content: 'A gritty, close-up portrait of a female survivor in a post-apocalyptic wasteland. Her face is smudged with dirt and grease.',
    image: 'A hyper-realistic cinematic editorial portrait of a female survivor in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt14,
    tags: ['post-apocalyptic', 'gritty', 'survivor'],
    upvotes: 512,
    createdAt: '2024-01-16',
  },

  // ========== COUPLE ==========
  {
    id: '15',
    title: 'Romantic Garden Moment',
    category: 'couple',
    content: 'A couple dancing in a moonlit English garden surrounded by blooming roses and wisteria. Soft bokeh fairy lights in the background.',
    image: 'A hyper-realistic cinematic editorial portrait of a couple in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt15,
    tags: ['romantic', 'garden', 'dreamy'],
    upvotes: 456,
    createdAt: '2024-01-13',
  },
  {
    id: '16',
    title: 'The Cinematic Romance',
    category: 'couple',
    content: 'A romantic, cinematic photograph of a couple caught in a passionate embrace on a rainy evening in Paris. They are under a single shared umbrella.',
    image: 'A hyper-realistic cinematic editorial portrait of a couple in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt16,
    tags: ['paris', 'romantic', 'cinematic'],
    upvotes: 834,
    createdAt: '2024-01-20',
  },
  {
    id: '17',
    title: 'The Adventure Duo',
    category: 'couple',
    content: 'An adventurous lifestyle shot of a couple hiking on a mountain ridge at sunrise. Both are wearing technical outdoor gear.',
    image: 'A hyper-realistic cinematic editorial portrait of an adventurous couple in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt17,
    tags: ['adventure', 'gorpcore', 'outdoors'],
    upvotes: 745,
    createdAt: '2024-01-19',
  },

  // ========== KIDS ==========
  {
    id: '18',
    title: 'Whimsical Childhood Wonder',
    category: 'kids',
    content: 'A curious 5-year-old child exploring a sunlit meadow filled with wildflowers and butterflies. Golden hour backlighting creating a magical halo effect.',
    image: 'A hyper-realistic cinematic editorial portrait of a curious 5-year-old child in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt18,
    tags: ['whimsical', 'childhood', 'nature'],
    upvotes: 289,
    createdAt: '2024-01-12',
  },
  {
    id: '19',
    title: 'The Whimsical Explorer',
    category: 'kids',
    content: 'A 3D animated still in the style of Pixar, showing a cute 5-year-old kid with messy brown hair and oversized aviator goggles.',
    image: 'A hyper-realistic cinematic editorial portrait of a cute 5-year-old explorer in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt19,
    tags: ['pixar', '3d', 'whimsical'],
    upvotes: 678,
    createdAt: '2024-01-20',
  },
  {
    id: '20',
    title: 'The Vintage Childhood',
    category: 'kids',
    content: 'A nostalgic, film-like photo of two siblings, a boy and a girl aged roughly 6 and 8, playing in a sun-drenched field of tall grass.',
    image: 'A hyper-realistic cinematic editorial portrait of two siblings in a dark moody studio, surrounded by soft drifting smoke.',
    imageSrc: prompt20,
    tags: ['nostalgic', 'vintage', '70s'],
    upvotes: 534,
    createdAt: '2024-01-19',
  },

  // ========== LANDSCAPES ==========
  {
    id: '21',
    title: 'Majestic Mountain Vista',
    category: 'landscapes',
    content: 'Dramatic panoramic view of the Swiss Alps at sunrise, with low-hanging clouds creating a sea below the peaks.',
    image: 'A hyper-realistic cinematic editorial photograph of a majestic mountain vista in a dark moody studio setting.',
    imageSrc: prompt21,
    tags: ['mountains', 'sunrise', 'panoramic'],
    upvotes: 672,
    createdAt: '2024-01-11',
  },
  {
    id: '22',
    title: 'Nordic Winter Wonderland',
    category: 'landscapes',
    content: 'Northern Lights dancing over a frozen Norwegian fjord, snow-covered pine trees in the foreground.',
    image: 'A hyper-realistic cinematic editorial photograph of the Northern Lights in a dark moody studio setting.',
    imageSrc: prompt22,
    tags: ['aurora', 'winter', 'nordic'],
    upvotes: 723,
    createdAt: '2024-01-06',
  },
  {
    id: '23',
    title: 'The Surrealistic Dreamscape',
    category: 'landscapes',
    content: 'A surreal, breathtaking landscape showing a desert where the sand dunes are made of swirling pastel colors.',
    image: 'A hyper-realistic cinematic editorial photograph of a surrealistic dreamscape with pastel-colored sand dunes.',
    imageSrc: prompt23,
    tags: ['surreal', 'dreamscape', 'abstract'],
    upvotes: 867,
    createdAt: '2024-01-20',
  },
  {
    id: '24',
    title: 'The Bioluminescent Cove',
    category: 'landscapes',
    content: 'A fantastical landscape photograph of a secret ocean cove at night where the water glows an intense electric blue.',
    image: 'A hyper-realistic cinematic editorial photograph of a bioluminescent cove with electric blue glowing water.',
    imageSrc: prompt24,
    tags: ['bioluminescent', 'fantasy', 'magical'],
    upvotes: 945,
    createdAt: '2024-01-19',
  },
  {
    id: '25',
    title: 'Brutalist Jungle Home',
    category: 'landscapes',
    content: 'An architectural photograph of a brutalist concrete house embedded deep within a lush tropical jungle.',
    image: 'A hyper-realistic cinematic editorial photograph of a brutalist jungle home with raw concrete structures.',
    imageSrc: prompt25,
    tags: ['brutalist', 'architecture', 'jungle'],
    upvotes: 712,
    createdAt: '2024-01-18',
  },
  {
    id: '26',
    title: 'Cottagecore Bakery',
    category: 'landscapes',
    content: 'Inside a rustic, warm cottagecore bakery kitchen bathed in morning light. Wooden counters are piled high with freshly baked sourdough loaves.',
    image: 'A hyper-realistic cinematic editorial photograph of a cottagecore bakery interior.',
    imageSrc: prompt26,
    tags: ['cottagecore', 'cozy', 'bakery'],
    upvotes: 623,
    createdAt: '2024-01-17',
  },
  {
    id: '27',
    title: 'Minimalist Zen Garden',
    category: 'landscapes',
    content: 'An ultra-minimalist architectural photograph of a modern Japanese Zen garden. A single, perfectly shaped bonsai tree sits on a moss island.',
    image: 'A hyper-realistic cinematic editorial photograph of a minimalist Zen garden.',
    imageSrc: prompt27,
    tags: ['zen', 'minimalist', 'japanese'],
    upvotes: 534,
    createdAt: '2024-01-16',
  },
  {
    id: '28',
    title: 'Abstract Fluid Art',
    category: 'landscapes',
    content: 'A mesmerizing abstract photograph of swirling colored liquids and ferrofluid reacting to magnets.',
    image: 'A hyper-realistic cinematic editorial photograph of abstract fluid art with deep blues and metallic golds.',
    imageSrc: prompt28,
    tags: ['abstract', 'fluid art', 'macro'],
    upvotes: 456,
    createdAt: '2024-01-15',
  },
  {
    id: '29',
    title: 'Macro Insect Kingdom',
    category: 'landscapes',
    content: 'An incredible macro photograph of a jewel beetle sitting on a dew-covered moss spore.',
    image: 'A hyper-realistic cinematic editorial photograph of a jewel beetle with iridescent scales.',
    imageSrc: prompt29,
    tags: ['macro', 'nature', 'wildlife'],
    upvotes: 678,
    createdAt: '2024-01-14',
  },
  {
    id: '30',
    title: '1980s Mall Madness',
    category: 'landscapes',
    content: 'A vibrant, chaotic photograph inside an American shopping mall in 1985. Teenagers with big hair crowd around an arcade.',
    image: 'A hyper-realistic cinematic editorial photograph of an 80s shopping mall interior.',
    imageSrc: prompt30,
    tags: ['80s', 'nostalgic', 'retro'],
    upvotes: 589,
    createdAt: '2024-01-13',
  },

  // ========== SCI-FI ==========
  {
    id: '31',
    title: 'Cyberpunk Metropolis',
    category: 'scifi',
    content: 'A sprawling neon-lit cyberpunk cityscape in 2087, holographic advertisements floating between impossibly tall skyscrapers.',
    image: 'A hyper-realistic cinematic editorial photograph of a cyberpunk metropolis with neon-lit skyscrapers.',
    imageSrc: prompt31,
    tags: ['cyberpunk', 'futuristic', 'neon'],
    upvotes: 891,
    createdAt: '2024-01-10',
  },
  {
    id: '32',
    title: 'Space Station Observatory',
    category: 'scifi',
    content: 'Interior of a futuristic space station observation deck, with a massive curved window showing Earth and the Milky Way.',
    image: 'A hyper-realistic cinematic editorial photograph of a space station observatory.',
    imageSrc: prompt32,
    tags: ['space', 'futuristic', 'minimal'],
    upvotes: 567,
    createdAt: '2024-01-07',
  },
  {
    id: '33',
    title: 'The Neo-Terra City',
    category: 'scifi',
    content: 'A wide-angle landscape of a futuristic "solarpunk" city built in harmony with nature.',
    image: 'A hyper-realistic cinematic editorial photograph of a solarpunk city.',
    imageSrc: prompt33,
    tags: ['solarpunk', 'utopian', 'futuristic'],
    upvotes: 923,
    createdAt: '2024-01-20',
  },
  {
    id: '34',
    title: 'Cyberpunk Street Market',
    category: 'scifi',
    content: 'A bustling, chaotic street market in a futuristic cyberpunk mega-city at night.',
    image: 'A hyper-realistic cinematic editorial photograph of a cyberpunk street market.',
    imageSrc: prompt34,
    tags: ['cyberpunk', 'market', 'neon'],
    upvotes: 856,
    createdAt: '2024-01-19',
  },
  {
    id: '35',
    title: 'The Deep Space Hauler',
    category: 'scifi',
    content: 'A highly detailed exterior shot of a massive, industrial deep-space mining vessel drifting past the rings of Saturn.',
    image: 'A hyper-realistic cinematic editorial photograph of a deep space hauler vessel.',
    imageSrc: prompt35,
    tags: ['space', 'hard sci-fi', 'industrial'],
    upvotes: 789,
    createdAt: '2024-01-18',
  },
  {
    id: '36',
    title: 'Retro-Futuristic Diner',
    category: 'scifi',
    content: 'A stylized photo of a 1950s-style American diner with a retro-futuristic twist. Chrome robot servers on wheels.',
    image: 'A hyper-realistic cinematic editorial photograph of a retro-futuristic diner.',
    imageSrc: prompt36,
    tags: ['retro-futuristic', 'diner', 'atomic age'],
    upvotes: 678,
    createdAt: '2024-01-17',
  },
  {
    id: '37',
    title: 'Neon Tokyo Rain',
    category: 'scifi',
    content: 'A candid street photograph taken through the rain-streaked windshield of a taxi in Shinjuku, Tokyo at night.',
    image: 'A hyper-realistic cinematic editorial photograph of neon Tokyo rain.',
    imageSrc: prompt37,
    tags: ['tokyo', 'cyberpunk', 'urban'],
    upvotes: 723,
    createdAt: '2024-01-16',
  },
  {
    id: '38',
    title: 'Isometric Cozy Gaming Room',
    category: 'scifi',
    content: 'A cute, highly detailed isometric 3D render of a cozy gaming room at night.',
    image: 'A hyper-realistic cinematic editorial 3D render of an isometric cozy gaming room.',
    imageSrc: prompt38,
    tags: ['isometric', '3d', 'cozy'],
    upvotes: 645,
    createdAt: '2024-01-15',
  },
  {
    id: '39',
    title: 'Steampunk Inventor\'s Workshop',
    category: 'scifi',
    content: 'Inside a cluttered steampunk workshop filled with brass gears, copper piping, and bubbling glass vials.',
    image: 'A hyper-realistic cinematic editorial photograph of a steampunk inventor\'s workshop.',
    imageSrc: prompt39,
    tags: ['steampunk', 'workshop', 'vintage'],
    upvotes: 567,
    createdAt: '2024-01-14',
  },
  {
    id: '40',
    title: 'The Crystal Dragon',
    category: 'scifi',
    content: 'A majestic full-body shot of a massive dragon made entirely of jagged, translucent quartz and amethyst crystals.',
    image: 'A hyper-realistic cinematic editorial photograph of a crystal dragon.',
    imageSrc: prompt40,
    tags: ['fantasy', 'dragon', 'crystal'],
    upvotes: 934,
    createdAt: '2024-01-13',
  },
];
