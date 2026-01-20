export type Category = 'all' | 'men' | 'women' | 'couple' | 'kids' | 'landscapes' | 'scifi';

export interface Prompt {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  content: string;
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

export const mockPrompts: Prompt[] = [
  {
    id: '1',
    title: 'Cinematic Portrait Master',
    category: 'men',
    content: 'A distinguished gentleman in his 40s, wearing a perfectly tailored charcoal wool suit, standing in a dimly lit whiskey bar. Dramatic Rembrandt lighting, shallow depth of field, shot on Hasselblad medium format camera, cinematic color grading with warm amber tones.',
    tags: ['portrait', 'cinematic', 'professional'],
    upvotes: 342,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Ethereal Fashion Editorial',
    category: 'women',
    content: 'An elegant model wearing a flowing silk gown in dusty rose, standing in an abandoned baroque palace. Golden hour light streaming through tall arched windows, particles of dust visible in the air. Shot in the style of Annie Leibovitz, 85mm lens, f/1.4 aperture.',
    tags: ['fashion', 'editorial', 'elegant'],
    upvotes: 528,
    createdAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'Romantic Garden Moment',
    category: 'couple',
    content: 'A couple dancing in a moonlit English garden surrounded by blooming roses and wisteria. Soft bokeh fairy lights in the background, romantic dreamy atmosphere. Shot on analog film with natural light leaks, pastel color palette.',
    tags: ['romantic', 'garden', 'dreamy'],
    upvotes: 456,
    createdAt: '2024-01-13',
  },
  {
    id: '4',
    title: 'Whimsical Childhood Wonder',
    category: 'kids',
    content: 'A curious 5-year-old child exploring a sunlit meadow filled with wildflowers and butterflies. Golden hour backlighting creating a magical halo effect. Shot in the style of Elena Shumilova, soft focus, warm nostalgic color grading.',
    tags: ['whimsical', 'childhood', 'nature'],
    upvotes: 289,
    createdAt: '2024-01-12',
  },
  {
    id: '5',
    title: 'Majestic Mountain Vista',
    category: 'landscapes',
    content: 'Dramatic panoramic view of the Swiss Alps at sunrise, with low-hanging clouds creating a sea below the peaks. Snow-capped mountains reflecting pink and orange light, ultra-wide angle shot, HDR photography, National Geographic style.',
    tags: ['mountains', 'sunrise', 'panoramic'],
    upvotes: 672,
    createdAt: '2024-01-11',
  },
  {
    id: '6',
    title: 'Cyberpunk Metropolis',
    category: 'scifi',
    content: 'A sprawling neon-lit cyberpunk cityscape in 2087, holographic advertisements floating between impossibly tall skyscrapers. Flying vehicles leaving light trails, rain-slicked streets reflecting countless colors. Blade Runner meets Ghost in the Shell aesthetic.',
    tags: ['cyberpunk', 'futuristic', 'neon'],
    upvotes: 891,
    createdAt: '2024-01-10',
  },
  {
    id: '7',
    title: 'Urban Street Style',
    category: 'men',
    content: 'A young creative director leaning against graffiti-covered walls in Brooklyn. Wearing vintage denim jacket over a crisp white tee, raw street photography style. Overcast natural lighting, Fujifilm X-T4 film simulation, gritty urban aesthetic.',
    tags: ['street', 'urban', 'casual'],
    upvotes: 234,
    createdAt: '2024-01-09',
  },
  {
    id: '8',
    title: 'Minimalist Beauty Portrait',
    category: 'women',
    content: 'A close-up beauty portrait with flawless skin and natural makeup. Clean white studio background, soft butterfly lighting setup. Emphasis on skin texture and natural beauty, shot on Phase One IQ4 150MP, beauty retouching in style of Mario Testino.',
    tags: ['beauty', 'minimalist', 'studio'],
    upvotes: 445,
    createdAt: '2024-01-08',
  },
  {
    id: '9',
    title: 'Space Station Observatory',
    category: 'scifi',
    content: 'Interior of a futuristic space station observation deck, with a massive curved window showing Earth and the Milky Way. Astronaut floating weightlessly, bioluminescent plant installations, clean minimalist design inspired by Apple and SpaceX aesthetics.',
    tags: ['space', 'futuristic', 'minimal'],
    upvotes: 567,
    createdAt: '2024-01-07',
  },
  {
    id: '10',
    title: 'Nordic Winter Wonderland',
    category: 'landscapes',
    content: 'Northern Lights dancing over a frozen Norwegian fjord, snow-covered pine trees in the foreground. Long exposure capturing aurora movement, midnight blue and emerald green colors, pristine untouched snow. Shot in -20°C conditions.',
    tags: ['aurora', 'winter', 'nordic'],
    upvotes: 723,
    createdAt: '2024-01-06',
  },
];
