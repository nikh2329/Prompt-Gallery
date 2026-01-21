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
import prompt41 from '@/assets/prompts/prompt-41.jpg';
import prompt42 from '@/assets/prompts/prompt-42.jpg';
import prompt43 from '@/assets/prompts/prompt-43.jpg';
import prompt44 from '@/assets/prompts/prompt-44.jpg';
import prompt45 from '@/assets/prompts/prompt-45.jpg';
import prompt46 from '@/assets/prompts/prompt-46.jpg';
import prompt47 from '@/assets/prompts/prompt-47.jpg';
import prompt48 from '@/assets/prompts/prompt-48.jpg';
import prompt49 from '@/assets/prompts/prompt-49.jpg';
import prompt50 from '@/assets/prompts/prompt-50.jpg';
import prompt51 from '@/assets/prompts/prompt-51.jpg';
import prompt52 from '@/assets/prompts/prompt-52.jpg';
import prompt53 from '@/assets/prompts/prompt-53.jpg';
import prompt54 from '@/assets/prompts/prompt-54.jpg';
import prompt55 from '@/assets/prompts/prompt-55.jpg';
import prompt56 from '@/assets/prompts/prompt-56.jpg';
import prompt57 from '@/assets/prompts/prompt-57.jpg';
import prompt58 from '@/assets/prompts/prompt-58.jpg';
import prompt59 from '@/assets/prompts/prompt-59.jpg';
import prompt60 from '@/assets/prompts/prompt-60.jpg';
import prompt61 from '@/assets/prompts/prompt-61.jpg';
import prompt62 from '@/assets/prompts/prompt-62.jpg';
import prompt63 from '@/assets/prompts/prompt-63.jpg';
import prompt64 from '@/assets/prompts/prompt-64.jpg';
import prompt65 from '@/assets/prompts/prompt-65.jpg';
import prompt66 from '@/assets/prompts/prompt-66.jpg';
import prompt67 from '@/assets/prompts/prompt-67.jpg';
import prompt68 from '@/assets/prompts/prompt-68.jpg';
import prompt69 from '@/assets/prompts/prompt-69.jpg';
import prompt70 from '@/assets/prompts/prompt-70.jpg';
import prompt71 from '@/assets/prompts/prompt-71.jpg';
import prompt72 from '@/assets/prompts/prompt-72.jpg';
import prompt73 from '@/assets/prompts/prompt-73.jpg';
import prompt74 from '@/assets/prompts/prompt-74.jpg';
import prompt75 from '@/assets/prompts/prompt-75.jpg';
import prompt76 from '@/assets/prompts/prompt-76.jpg';
import prompt77 from '@/assets/prompts/prompt-77.jpg';
import prompt78 from '@/assets/prompts/prompt-78.jpg';
import prompt79 from '@/assets/prompts/prompt-79.jpg';
import prompt80 from '@/assets/prompts/prompt-80.jpg';
import prompt81 from '@/assets/prompts/prompt-81.jpg';
import prompt82 from '@/assets/prompts/prompt-82.jpg';
import prompt83 from '@/assets/prompts/prompt-83.jpg';
import prompt84 from '@/assets/prompts/prompt-84.jpg';
import prompt85 from '@/assets/prompts/prompt-85.jpg';
import prompt86 from '@/assets/prompts/prompt-86.jpg';
import prompt87 from '@/assets/prompts/prompt-87.jpg';
import prompt88 from '@/assets/prompts/prompt-88.jpg';
import prompt89 from '@/assets/prompts/prompt-89.jpg';
import prompt90 from '@/assets/prompts/prompt-90.jpg';
import prompt91 from '@/assets/prompts/prompt-91.jpg';
import prompt92 from '@/assets/prompts/prompt-92.jpg';
import prompt93 from '@/assets/prompts/prompt-93.jpg';
import prompt94 from '@/assets/prompts/prompt-94.jpg';
import prompt95 from '@/assets/prompts/prompt-95.jpg';
import prompt96 from '@/assets/prompts/prompt-96.jpg';
import prompt97 from '@/assets/prompts/prompt-97.jpg';
import prompt98 from '@/assets/prompts/prompt-98.jpg';
import prompt99 from '@/assets/prompts/prompt-99.jpg';
import prompt100 from '@/assets/prompts/prompt-100.jpg';

// New Indian-themed prompt images
import prompt101 from '@/assets/prompts/prompt-101.jpg';
import prompt102 from '@/assets/prompts/prompt-102.jpg';
import prompt103 from '@/assets/prompts/prompt-103.jpg';
import prompt104 from '@/assets/prompts/prompt-104.jpg';
import prompt105 from '@/assets/prompts/prompt-105.jpg';
import prompt106 from '@/assets/prompts/prompt-106.jpg';
import prompt107 from '@/assets/prompts/prompt-107.jpg';
import prompt108 from '@/assets/prompts/prompt-108.jpg';
import prompt109 from '@/assets/prompts/prompt-109.jpg';
import prompt110 from '@/assets/prompts/prompt-110.jpg';
import prompt111 from '@/assets/prompts/prompt-111.jpg';
import prompt112 from '@/assets/prompts/prompt-112.jpg';
import prompt113 from '@/assets/prompts/prompt-113.jpg';
import prompt114 from '@/assets/prompts/prompt-114.jpg';
import prompt115 from '@/assets/prompts/prompt-115.jpg';
import prompt116 from '@/assets/prompts/prompt-116.jpg';
import prompt117 from '@/assets/prompts/prompt-117.jpg';
import prompt118 from '@/assets/prompts/prompt-118.jpg';
import prompt119 from '@/assets/prompts/prompt-119.jpg';
import prompt120 from '@/assets/prompts/prompt-120.jpg';
import prompt121 from '@/assets/prompts/prompt-121.jpg';
import prompt122 from '@/assets/prompts/prompt-122.jpg';
import prompt123 from '@/assets/prompts/prompt-123.jpg';
import prompt124 from '@/assets/prompts/prompt-124.jpg';
import prompt125 from '@/assets/prompts/prompt-125.jpg';
import prompt126 from '@/assets/prompts/prompt-126.jpg';
import prompt127 from '@/assets/prompts/prompt-127.jpg';
import prompt128 from '@/assets/prompts/prompt-128.jpg';
import prompt129 from '@/assets/prompts/prompt-129.jpg';
import prompt130 from '@/assets/prompts/prompt-130.jpg';
import prompt131 from '@/assets/prompts/prompt-131.jpg';
import prompt132 from '@/assets/prompts/prompt-132.jpg';
import prompt133 from '@/assets/prompts/prompt-133.jpg';
import prompt134 from '@/assets/prompts/prompt-134.jpg';
import prompt135 from '@/assets/prompts/prompt-135.jpg';
import prompt136 from '@/assets/prompts/prompt-136.jpg';
import prompt137 from '@/assets/prompts/prompt-137.jpg';
import prompt138 from '@/assets/prompts/prompt-138.jpg';
import prompt139 from '@/assets/prompts/prompt-139.jpg';
import prompt140 from '@/assets/prompts/prompt-140.jpg';

export const mockPrompts: Prompt[] = [
  // ========== MEN (1-7 existing + 41-50 existing + 101-105 Indian + 121-125 Indian) ==========
  { id: '1', title: 'Cinematic Portrait Master', category: 'men', content: 'A distinguished gentleman in his 40s, wearing a perfectly tailored charcoal wool suit, standing in a dimly lit whiskey bar. Dramatic Rembrandt lighting, shallow depth of field, shot on Hasselblad medium format camera, cinematic color grading with warm amber tones.', image: '', imageSrc: prompt1, tags: ['portrait', 'cinematic', 'professional'], upvotes: 342, createdAt: '2024-01-15' },
  { id: '2', title: 'Urban Street Style', category: 'men', content: 'A young creative director leaning against graffiti-covered walls in Brooklyn. Wearing vintage denim jacket over a crisp white tee, raw street photography style. Overcast natural lighting, Fujifilm X-T4 film simulation, gritty urban aesthetic.', image: '', imageSrc: prompt2, tags: ['street', 'urban', 'casual'], upvotes: 234, createdAt: '2024-01-09' },
  { id: '3', title: 'The Modern Maverick', category: 'men', content: 'A candid, editorial-style portrait of a man in his late 30s with a salt-and-pepper beard, dressed in a textured cashmere sweater and a vintage Barbour jacket. He is leaning against a classic Land Rover Defender in the Scottish Highlands.', image: '', imageSrc: prompt3, tags: ['old money', 'quiet luxury', 'editorial'], upvotes: 567, createdAt: '2024-01-20' },
  { id: '4', title: 'The Cyber-Tech Specialist', category: 'men', content: 'A hyper-realistic close-up portrait of a tech specialist in a futuristic 2040s setting. The man has short, undercut hair and a geometric facial tattoo that faintly glows blue.', image: '', imageSrc: prompt4, tags: ['cyberpunk', 'techwear', 'futuristic'], upvotes: 723, createdAt: '2024-01-19' },
  { id: '5', title: 'The Noir Detective', category: 'men', content: 'A gritty, black and white film noir photograph of a private detective sitting in a smoke-filled office at night. Rain streaks heavily down the window behind him.', image: '', imageSrc: prompt5, tags: ['noir', 'vintage', 'cinematic'], upvotes: 489, createdAt: '2024-01-18' },
  { id: '6', title: 'The Last Samurai', category: 'men', content: 'An epic, wide-angle cinematic shot of a lone samurai warrior standing on a rocky cliff edge during a violent thunderstorm. He is armored in traditional Japanese O-yoroi armor.', image: '', imageSrc: prompt6, tags: ['samurai', 'action', 'cinematic'], upvotes: 892, createdAt: '2024-01-17' },
  { id: '7', title: 'The Arctic Explorer', category: 'men', content: 'A powerful wildlife photograph of an arctic explorer making eye contact with a massive polar bear across a patch of melting sea ice.', image: '', imageSrc: prompt7, tags: ['adventure', 'wildlife', 'exploration'], upvotes: 634, createdAt: '2024-01-16' },
  { id: '41', title: 'The Modern Maverick Extended', category: 'men', content: 'A candid, editorial-style portrait of a man in his late 30s with a salt-and-pepper beard, dressed in a textured cashmere sweater and a vintage Barbour jacket. He is leaning against a classic Land Rover Defender in the Scottish Highlands, with rolling hills and soft, overcast daylight creating a moody atmosphere.', image: '', imageSrc: prompt41, tags: ['old money', 'quiet luxury', 'editorial'], upvotes: 856, createdAt: '2024-01-22' },
  { id: '42', title: 'The Cyber-Tech Specialist Extended', category: 'men', content: 'A hyper-realistic close-up portrait of a tech specialist in a futuristic 2040s setting. The man has short, undercut hair and a geometric facial tattoo that faintly glows blue. He wears a tactical techwear jacket with integrated LEDs.', image: '', imageSrc: prompt42, tags: ['cyberpunk', 'high-detail', 'techwear'], upvotes: 1023, createdAt: '2024-01-21' },
  { id: '43', title: 'The Urban Noir Detective', category: 'men', content: 'A gritty, black and white film noir photograph of a private detective sitting in a smoke-filled office at night. Rain streaks heavily down the window behind him, blurring neon city lights.', image: '', imageSrc: prompt43, tags: ['noir', 'vintage', 'cinematic'], upvotes: 789, createdAt: '2024-01-20' },
  { id: '44', title: 'The Last Samurai Extended', category: 'men', content: 'An epic, wide-angle cinematic shot of a lone samurai warrior standing on a rocky cliff edge during a violent thunderstorm. He is armored in traditional Japanese O-yoroi armor, ragged from battle.', image: '', imageSrc: prompt44, tags: ['samurai', 'action', 'cinematic'], upvotes: 1156, createdAt: '2024-01-19' },
  { id: '45', title: 'The Arctic Explorer Extended', category: 'men', content: 'A powerful wildlife photograph of an arctic explorer making eye contact with a massive polar bear across a patch of melting sea ice. The explorer is bundled in red technical gear.', image: '', imageSrc: prompt45, tags: ['wildlife', 'adventure', 'arctic'], upvotes: 934, createdAt: '2024-01-18' },
  { id: '46', title: 'The Retro-Futuristic Diner Patron', category: 'men', content: 'A stylized photo of a man in a retro-futuristic 1950s diner. He wears a leather jacket over a jumpsuit and a bubble helmet pushed back on his head, smiling.', image: '', imageSrc: prompt46, tags: ['retro-futuristic', 'nostalgic', 'sci-fi'], upvotes: 678, createdAt: '2024-01-17' },
  { id: '47', title: 'The High-Fashion Editorial', category: 'men', content: 'A high-fashion editorial photograph of a male model in a minimalist, brutalist concrete environment. He is wearing an oversized, avant-garde structured coat.', image: '', imageSrc: prompt47, tags: ['high-fashion', 'editorial', 'luxury'], upvotes: 812, createdAt: '2024-01-16' },
  { id: '48', title: 'The Bohemian Musician', category: 'men', content: 'A candid, warm photograph of a musician sitting on a worn velvet armchair in a sunlit, cluttered apartment, playing an acoustic guitar.', image: '', imageSrc: prompt48, tags: ['bohemian', 'indie', 'folk'], upvotes: 567, createdAt: '2024-01-15' },
  { id: '49', title: 'The Futuristic Racer', category: 'men', content: 'An action shot of a futuristic motorcycle racer speeding on a glowing neon track in a cyberpunk city at night.', image: '', imageSrc: prompt49, tags: ['cyberpunk', 'sports', 'futuristic'], upvotes: 945, createdAt: '2024-01-14' },
  { id: '50', title: 'The Dystopian Survivor', category: 'men', content: 'A gritty portrait of a male survivor in a post-apocalyptic wasteland. He wears a patched leather jacket, armored gloves, and a scarf covering his lower face.', image: '', imageSrc: prompt50, tags: ['post-apocalyptic', 'dystopian', 'survivor'], upvotes: 823, createdAt: '2024-01-13' },
  
  // Indian Men Prompts (101-105, 121-125)
  { id: '101', title: 'The Modern Royal', category: 'men', content: 'A cinematic, high-contrast portrait of a handsome Indian man in his 30s, resembling a modern royal heir. He wears a structured, deep emerald green velvet bandhgala jacket with antique gold buttons and a silk pocket square. He stands in the dimly lit corridor of a heritage Haveli in Rajasthan, with intricate sandstone carvings in the background. The lighting is moody and dramatic, highlighting his sharp jawline and warm brown skin tone. 8K resolution, regal atmosphere.', image: '', imageSrc: prompt101, tags: ['regal', 'moody', 'indian'], upvotes: 1245, createdAt: '2024-02-01' },
  { id: '102', title: 'The Urban Tech Entrepreneur', category: 'men', content: 'A candid, editorial-style shot of a young Indian tech entrepreneur sitting in a high-rise glass office in Bangalore at dusk. He wears a smart-casual outfit: a crisp navy blue linen shirt with the sleeves rolled up and beige chinos. He is looking out at the city skyline, which is glowing with purple and orange city lights. His expression is visionary and confident. The reflection of the city is visible on the glass. Shot on a 50mm lens, sharp focus, modern corporate aesthetic.', image: '', imageSrc: prompt102, tags: ['corporate', 'startup', 'modern'], upvotes: 987, createdAt: '2024-02-02' },
  { id: '103', title: 'The Kashmiri Winter', category: 'men', content: 'A powerful portrait of a rugged Indian man with a thick beard, standing in a snow-covered landscape in Gulmarg, Kashmir. He is wrapped in a traditional, textured brown Pheran (wool cloak) with intricate copper-colored embroidery. He holds a warm cup of Kahwa tea. The background is a blur of white snow and pine trees. The lighting is soft, diffused overcast daylight. The color palette is earthy browns, whites, and muted greens. National Geographic style photography.', image: '', imageSrc: prompt103, tags: ['winter', 'rugged', 'kashmir'], upvotes: 1156, createdAt: '2024-02-03' },
  { id: '104', title: 'The South Indian Wedding Groom', category: 'men', content: 'A close-up, highly detailed portrait of a South Indian groom on his wedding day. He wears a traditional cream silk shirt with gold zari borders and a heavy gold chain. He has a vermilion tilak on his forehead and a warm, nervous smile. The background is a blur of marigold flowers and temple bells. The lighting is warm and golden, simulating the glow of oil lamps (diyas). The palette is cream, gold, and warm orange.', image: '', imageSrc: prompt104, tags: ['wedding', 'traditional', 'golden'], upvotes: 1089, createdAt: '2024-02-04' },
  { id: '105', title: 'The Mumbai Street Style', category: 'men', content: 'A gritty, high-fashion street style shot of a young Indian male model leaning against a yellow and black taxi (Kaali-Peeli) in Mumbai. He wears an oversized graphic t-shirt in neon lime green, distressed black denim, and chunky sneakers. He wears dark sunglasses and silver jewelry. The background is the bustling Colaba Causeway with blurred crowds. The color palette is vibrant neon green, black, and taxi yellow. Cinematic street photography style.', image: '', imageSrc: prompt105, tags: ['street style', 'gen z', 'mumbai'], upvotes: 945, createdAt: '2024-02-05' },
  { id: '121', title: 'The Classical Maestro', category: 'men', content: 'A soulful portrait of a young Indian classical musician playing the Sitar in an ancient stone courtyard at sunrise. He wears a pristine white Kurta Pajama with a saffron-colored shawl draped over one shoulder. Incense smoke curls around him, catching the morning light. The background features blurred temple pillars and pigeons taking flight. The palette is white, saffron orange, and stone grey. Serene and spiritual atmosphere.', image: '', imageSrc: prompt121, tags: ['classical', 'music', 'spiritual'], upvotes: 1078, createdAt: '2024-02-11' },
  { id: '122', title: 'The Desert Nomad', category: 'men', content: 'A striking close-up of a Rajasthani man wearing a vibrant red turban (pagdi) and a heavy silver earring. His face is weathered and full of character, with a thick mustache. He is wrapped in a patterned camel-wool shawl. The background is the endless golden Thar desert under a deep blue sky. The lighting is harsh, high-contrast afternoon sun, emphasizing skin texture. The palette is vivid red, deep blue, and golden sand.', image: '', imageSrc: prompt122, tags: ['desert', 'rajasthan', 'raw'], upvotes: 1234, createdAt: '2024-02-12' },
  { id: '123', title: 'The Modern Monk', category: 'men', content: 'A minimalist, high-fashion shot of an Indian man with a shaved head and a long beard, meditating on a rock by the river Ganges in Rishikesh. He wears flowing, draped linen robes in earthy olive green and charcoal grey. The background is the misty river and distant Himalayan foothills. The lighting is soft and ethereal. The palette is olive green, grey, and misty blue. Calm and powerful.', image: '', imageSrc: prompt123, tags: ['minimalist', 'zen', 'spiritual'], upvotes: 967, createdAt: '2024-02-13' },
  { id: '124', title: 'The Vintage Professor', category: 'men', content: 'A moody portrait of an Indian literature professor sitting in an old library filled with leather-bound books. He wears a tweed blazer over a turtleneck sweater and round vintage spectacles. He is holding a cup of chai. Soft light streams through a window, illuminating floating dust motes. The palette is warm brown, mahogany, and forest green. Intellectual and nostalgic.', image: '', imageSrc: prompt124, tags: ['dark academia', 'intellectual', 'vintage'], upvotes: 856, createdAt: '2024-02-14' },
  { id: '125', title: 'The Mumbai Rains', category: 'men', content: 'A cinematic night shot of a man standing under a black umbrella on a rainy Mumbai street. He wears a soaked white shirt and black trousers, looking pensively at a street food stall. The reflection of neon signs (red and blue) shimmers on the wet asphalt. The rain is heavy and visible. The palette is black, white, and neon reflections. Moody and atmospheric.', image: '', imageSrc: prompt125, tags: ['noir', 'monsoon', 'cinematic'], upvotes: 1145, createdAt: '2024-02-15' },

  // ========== WOMEN (8-14 existing + 51-60 existing + 106-110 Indian + 126-130 Indian) ==========
  { id: '8', title: 'Ethereal Fashion Editorial', category: 'women', content: 'An elegant model wearing a flowing silk gown in dusty rose, standing in an abandoned baroque palace. Golden hour light streaming through tall arched windows.', image: '', imageSrc: prompt8, tags: ['fashion', 'editorial', 'elegant'], upvotes: 528, createdAt: '2024-01-14' },
  { id: '9', title: 'Minimalist Beauty Portrait', category: 'women', content: 'A close-up beauty portrait with flawless skin and natural makeup. Clean white studio background, soft butterfly lighting setup.', image: '', imageSrc: prompt9, tags: ['beauty', 'minimalist', 'studio'], upvotes: 445, createdAt: '2024-01-08' },
  { id: '10', title: 'The Ethereal Goddess', category: 'women', content: 'A fantastical, dreamlike portrait of a woman with flowing, waist-length hair adorned with small, glowing bioluminescent flowers and crystals.', image: '', imageSrc: prompt10, tags: ['fantasy', 'ethereal', 'magical'], upvotes: 756, createdAt: '2024-01-20' },
  { id: '11', title: 'The Urban Creative', category: 'women', content: 'A vibrant, candid street style photograph of a young woman with dyed copper-orange hair in a shag cut. She is laughing naturally while walking across a busy crosswalk.', image: '', imageSrc: prompt11, tags: ['street style', 'gen z', 'candid'], upvotes: 623, createdAt: '2024-01-19' },
  { id: '12', title: 'Dark Academia Librarian', category: 'women', content: 'A moody, atmospheric portrait of a young historian in a dusty, candelabra-lit chamber of an ancient university library.', image: '', imageSrc: prompt12, tags: ['dark academia', 'moody', 'vintage'], upvotes: 534, createdAt: '2024-01-18' },
  { id: '13', title: 'High-Fashion Futuristic Nomad', category: 'women', content: 'A striking, high-fashion editorial shot of a nomadic model in a desert landscape at sunset. She wears avant-garde clothing made of layered deconstructed fabrics.', image: '', imageSrc: prompt13, tags: ['high fashion', 'editorial', 'avant-garde'], upvotes: 678, createdAt: '2024-01-17' },
  { id: '14', title: 'Post-Apocalyptic Survivor', category: 'women', content: 'A gritty, close-up portrait of a female survivor in a post-apocalyptic wasteland. Her face is smudged with dirt and grease.', image: '', imageSrc: prompt14, tags: ['post-apocalyptic', 'gritty', 'survivor'], upvotes: 512, createdAt: '2024-01-16' },
  { id: '51', title: 'The Ethereal Goddess Extended', category: 'women', content: 'A fantastical, dreamlike portrait of a woman with flowing, waist-length hair adorned with small, glowing bioluminescent flowers and crystals. She wears a gown made of iridescent, translucent silk.', image: '', imageSrc: prompt51, tags: ['fantasy', 'ethereal', 'soft lighting'], upvotes: 1089, createdAt: '2024-01-22' },
  { id: '52', title: 'The Urban Creative Extended', category: 'women', content: 'A vibrant, candid street style photograph of a young woman with dyed copper-orange hair in a shag cut. She wears an oversized vintage band tee tucked into high-waisted baggy jeans.', image: '', imageSrc: prompt52, tags: ['street style', 'gen z', 'candid'], upvotes: 823, createdAt: '2024-01-21' },
  { id: '53', title: 'Dark Academia Librarian Extended', category: 'women', content: 'A moody, atmospheric portrait of a young historian in a dusty, candelabra-lit chamber of an ancient university library. She wears a tailored wool blazer over a lace-collared blouse.', image: '', imageSrc: prompt53, tags: ['dark academia', 'moody', 'intellectual'], upvotes: 756, createdAt: '2024-01-20' },
  { id: '54', title: 'High-Fashion Futuristic Nomad Extended', category: 'women', content: 'A striking, high-fashion editorial shot of a nomadic model in a desert landscape at sunset. She wears avant-garde clothing made of layered deconstructed fabrics, scarves, and textured leather.', image: '', imageSrc: prompt54, tags: ['high fashion', 'editorial', 'avant-garde'], upvotes: 945, createdAt: '2024-01-19' },
  { id: '55', title: 'Post-Apocalyptic Survivor Extended', category: 'women', content: 'A gritty, close-up portrait of a female survivor in a post-apocalyptic wasteland. Her face is smudged with dirt and grease, and her eyes are sharp and defiant.', image: '', imageSrc: prompt55, tags: ['post-apocalyptic', 'gritty', 'survivor'], upvotes: 678, createdAt: '2024-01-18' },
  { id: '56', title: 'The Cottagecore Dream', category: 'women', content: 'A soft, romantic portrait of a young woman picking wildflowers in a sun-dappled meadow during golden hour. She wears a flowing, linen dress with puff sleeves in a vintage floral print.', image: '', imageSrc: prompt56, tags: ['cottagecore', 'romantic', 'nature'], upvotes: 867, createdAt: '2024-01-17' },
  { id: '57', title: 'The Space Commander', category: 'women', content: 'An epic, cinematic portrait of a female astronaut commander standing on the bridge of her starship. She wears a sleek, form-fitting space suit with a clear, bubble-like helmet.', image: '', imageSrc: prompt57, tags: ['sci-fi', 'space', 'epic'], upvotes: 1023, createdAt: '2024-01-16' },
  { id: '58', title: 'The Jazz Lounge Singer', category: 'women', content: 'A smoky, atmospheric shot of a jazz singer performing in a dimly lit, 1940s-style speakeasy. She wears a figure-hugging, emerald green velvet dress.', image: '', imageSrc: prompt58, tags: ['jazz', 'vintage', 'glamour'], upvotes: 734, createdAt: '2024-01-15' },
  { id: '59', title: 'The Forest Ranger', category: 'women', content: 'A natural, outdoorsy portrait of a female park ranger in a redwood forest. She wears a functional ranger uniform with a weathered leather hat.', image: '', imageSrc: prompt59, tags: ['outdoor', 'nature', 'adventure'], upvotes: 612, createdAt: '2024-01-14' },
  { id: '60', title: 'The Cyberpunk Hacker', category: 'women', content: 'An intense, close-up portrait of a female hacker in a neon-lit room full of servers. She has short, asymmetrical hair with electric blue streaks.', image: '', imageSrc: prompt60, tags: ['cyberpunk', 'tech', 'hacker'], upvotes: 989, createdAt: '2024-01-13' },
  
  // Indian Women Prompts (106-110, 126-130)
  { id: '106', title: 'The Sabyasachi Bride', category: 'women', content: 'A breathtaking cinematic portrait of an Indian bride dressed in a heavy, deep maroon lehenga with intricate zardosi embroidery. She is adorned with heavy uncut diamond (Polki) jewelry and a nose ring (nath). She sits by a window in an old palace, with a sheer veil covering her head. The lighting is dramatic, Rembrandt style, casting shadows that highlight her eyes and jewelry. The palette is rich maroon, antique gold, and deep shadows.', image: '', imageSrc: prompt106, tags: ['bridal', 'opulent', 'cinematic'], upvotes: 1567, createdAt: '2024-02-06' },
  { id: '107', title: 'The Handloom Artist', category: 'women', content: 'A candid, artistic portrait of a young Indian woman in an art gallery. She wears a hand-woven indigo blue cotton saree with a silver oxidized necklace and large jhumka earrings. She has a large red bindi and curly, messy hair. She is looking intently at a painting. The background is a clean white wall with soft gallery spot lighting. The palette is indigo blue, silver, and white. Intellectual and artistic vibe.', image: '', imageSrc: prompt107, tags: ['indie', 'boho', 'artistic'], upvotes: 934, createdAt: '2024-02-07' },
  { id: '108', title: 'The Bollywood Glamour', category: 'women', content: 'A retro-inspired, high-glamour shot of an Indian actress style woman standing on a balcony at night. She wears a shimmering, sequined silver saree that drapes elegantly like liquid metal. Her hair is styled in old-Hollywood waves. The background is the blurred bokeh of city night lights. The lighting is soft and flattering, creating a glow on her skin. The palette is silver, midnight blue, and black.', image: '', imageSrc: prompt108, tags: ['high fashion', 'retro', 'glamour'], upvotes: 1234, createdAt: '2024-02-08' },
  { id: '109', title: 'The Rural Beauty', category: 'women', content: 'A striking portrait of a village woman from Rajasthan standing against a desert background. She wears a vibrant mustard yellow and hot pink Ghagra Choli with mirror work. She balances a terracotta pot on her head. Her skin is sun-kissed, and her expression is strong and proud. The background is golden sand dunes at sunset. The palette is vibrant yellow, pink, and earthy terracotta. Documentary style.', image: '', imageSrc: prompt109, tags: ['raw', 'earthy', 'documentary'], upvotes: 1089, createdAt: '2024-02-09' },
  { id: '110', title: 'The Corporate Leader', category: 'women', content: 'A confident portrait of a modern Indian CEO walking through a modern office lobby. She wears a sharp, tailored pantsuit in electric teal with a white silk blouse. She carries a leather laptop bag and checks her smartwatch. Her hair is in a sleek ponytail. The background is modern architecture with steel and glass. The lighting is bright and clean. The palette is teal, white, and cool grey.', image: '', imageSrc: prompt110, tags: ['modern', 'power', 'corporate'], upvotes: 978, createdAt: '2024-02-10' },
  { id: '126', title: 'The Kathak Dancer', category: 'women', content: 'A dynamic, freeze-frame action shot of an Indian woman performing a Kathak spin (chakkar). She wears a flowing Anarkali suit in vibrant turquoise and gold, with ghungroos (musical anklets) on her feet. Her braid whips through the air. The background is a dark stage with a single spotlight illuminating her movement. The palette is turquoise, gold, and deep black shadows. Graceful and energetic.', image: '', imageSrc: prompt126, tags: ['dance', 'dynamic', 'graceful'], upvotes: 1189, createdAt: '2024-02-16' },
  { id: '127', title: 'The Morning Puja', category: 'women', content: 'A serene portrait of a woman performing morning prayers (puja) at a home shrine. She wears a traditional red and white Bengali cotton saree. Her hair is wet and loose, and she holds a brass thali with flowers and a diya. The soft, warm glow of the lamp illuminates her face. The background is a blur of brass idols and marigolds. The palette is red, white, and warm gold.', image: '', imageSrc: prompt127, tags: ['traditional', 'pure', 'devotional'], upvotes: 956, createdAt: '2024-02-17' },
  { id: '128', title: 'The Goan Holiday', category: 'women', content: 'A vibrant, sun-drenched lifestyle shot of a young Indian woman laughing on a beach in Goa. She wears a colorful, floral-print sundress and a straw hat. She is holding a coconut. The background is the turquoise Arabian Sea and swaying palm trees. The lighting is bright, high-key sunlight. The palette is teal, bright pink (dress), and sandy beige. Joyful and breezy.', image: '', imageSrc: prompt128, tags: ['relaxed', 'vibrant', 'beach'], upvotes: 1067, createdAt: '2024-02-18' },
  { id: '129', title: 'The Corporate Powerhouse', category: 'women', content: 'A confident portrait of an Indian woman in a modern boardroom. She wears a sleek, contemporary saree in charcoal grey with a geometric print, paired with a collared blouse and a blazer. She is leaning against a glass table, holding a tablet. The city skyline is visible outside the window. The lighting is cool and professional. The palette is grey, black, and steel blue.', image: '', imageSrc: prompt129, tags: ['modern', 'chic', 'corporate'], upvotes: 889, createdAt: '2024-02-19' },
  { id: '130', title: 'The Festive Sparkle', category: 'women', content: 'A glamorous portrait of a woman on Diwali night, holding a sparkler. She wears a shimmering gold sequin saree and diamond jewelry. The sparkler illuminates her face with a warm, golden glow. The background is a bokeh of fairy lights and fireworks in the night sky. The palette is gold, warm white, and deep night blue. Magical and celebratory.', image: '', imageSrc: prompt130, tags: ['glamorous', 'night', 'festive'], upvotes: 1345, createdAt: '2024-02-20' },

  // ========== COUPLE (15-19 existing + 61-70 existing + 111-115 Indian + 131-135 Indian) ==========
  { id: '15', title: 'Golden Hour Romance', category: 'couple', content: 'A romantic couple walking hand-in-hand through a lavender field at sunset. Soft focus, warm golden tones, natural candid poses.', image: '', imageSrc: prompt15, tags: ['romance', 'golden hour', 'nature'], upvotes: 623, createdAt: '2024-01-13' },
  { id: '16', title: 'Urban Love Story', category: 'couple', content: 'A stylish couple sharing an umbrella in the rain on a busy New York street. Neon reflections, moody atmosphere.', image: '', imageSrc: prompt16, tags: ['urban', 'rain', 'mood'], upvotes: 567, createdAt: '2024-01-07' },
  { id: '17', title: 'The Vintage Sweetheart', category: 'couple', content: 'A 1950s inspired couple at a drive-in movie theater, sitting on the hood of a classic Cadillac.', image: '', imageSrc: prompt17, tags: ['retro', '1950s', 'vintage'], upvotes: 789, createdAt: '2024-01-20' },
  { id: '18', title: 'Adventure Partners', category: 'couple', content: 'A couple hiking at the edge of a dramatic cliff in the Scottish Highlands, overlooking a misty loch.', image: '', imageSrc: prompt18, tags: ['adventure', 'outdoors', 'nature'], upvotes: 645, createdAt: '2024-01-19' },
  { id: '19', title: 'Coffee Shop Meet-Cute', category: 'couple', content: 'A warm, candid moment of a couple meeting eyes and smiling at each other across a cozy coffee shop.', image: '', imageSrc: prompt19, tags: ['casual', 'cozy', 'intimate'], upvotes: 534, createdAt: '2024-01-18' },
  { id: '61', title: 'The Vintage Sweetheart Extended', category: 'couple', content: 'A 1950s inspired couple at a drive-in movie theater, sitting on the hood of a classic cherry-red Cadillac convertible. They share a bucket of popcorn.', image: '', imageSrc: prompt61, tags: ['retro', '1950s', 'romantic'], upvotes: 989, createdAt: '2024-01-22' },
  { id: '62', title: 'Adventure Partners Extended', category: 'couple', content: 'A couple hiking at the edge of a dramatic cliff in the Scottish Highlands, overlooking a misty loch at dawn. They wear matching weathered hiking gear.', image: '', imageSrc: prompt62, tags: ['adventure', 'nature', 'epic'], upvotes: 845, createdAt: '2024-01-21' },
  { id: '63', title: 'Coffee Shop Meet-Cute Extended', category: 'couple', content: 'A warm, candid moment of a couple meeting eyes and smiling at each other across a cozy, dimly-lit coffee shop. Warm light from a vintage lamp casts soft shadows.', image: '', imageSrc: prompt63, tags: ['casual', 'romantic', 'warm'], upvotes: 723, createdAt: '2024-01-20' },
  { id: '64', title: 'The Stargazers', category: 'couple', content: 'A romantic, wide-angle shot of a couple lying on a blanket under a canopy of stars in a remote desert. The Milky Way is visible above them.', image: '', imageSrc: prompt64, tags: ['romantic', 'stars', 'nature'], upvotes: 1056, createdAt: '2024-01-19' },
  { id: '65', title: 'The Winter Wonderland', category: 'couple', content: 'A couple ice skating on a frozen lake in the woods during a light snowfall. They hold hands, laughing as one nearly stumbles.', image: '', imageSrc: prompt65, tags: ['winter', 'romantic', 'playful'], upvotes: 878, createdAt: '2024-01-18' },
  { id: '66', title: 'The Rooftop Sunset', category: 'couple', content: 'A couple standing on a rooftop overlooking a city skyline at sunset. They lean against the railing, foreheads touching.', image: '', imageSrc: prompt66, tags: ['urban', 'sunset', 'intimate'], upvotes: 945, createdAt: '2024-01-17' },
  { id: '67', title: 'The Bookshop Romance', category: 'couple', content: 'A couple in a dusty, old bookshop, sitting on the floor surrounded by stacks of books. One person reads aloud to the other.', image: '', imageSrc: prompt67, tags: ['cozy', 'intellectual', 'romantic'], upvotes: 712, createdAt: '2024-01-16' },
  { id: '68', title: 'The Dance at Dawn', category: 'couple', content: 'A couple slow dancing on a pier at dawn, with the soft pink and orange light of the sunrise reflecting on calm water.', image: '', imageSrc: prompt68, tags: ['romantic', 'dance', 'dawn'], upvotes: 834, createdAt: '2024-01-15' },
  { id: '69', title: 'The Farmers Market Date', category: 'couple', content: 'A casual, candid shot of a young couple walking through a sunny farmers market, carrying bags of fresh produce and flowers.', image: '', imageSrc: prompt69, tags: ['casual', 'lifestyle', 'sunny'], upvotes: 623, createdAt: '2024-01-14' },
  { id: '70', title: 'The Cyberpunk Duo', category: 'couple', content: 'A high-concept shot of a cyberpunk couple walking through a neon-soaked alleyway in a futuristic city. Both wear techwear and have LED accents.', image: '', imageSrc: prompt70, tags: ['cyberpunk', 'futuristic', 'neon'], upvotes: 1023, createdAt: '2024-01-13' },
  
  // Indian Couple Prompts (111-115, 131-135)
  { id: '111', title: 'The Taj Mahal Silhouette', category: 'couple', content: 'A wide-angle, romantic shot of an Indian couple standing before the Taj Mahal at sunrise. They are silhouetted against the soft, pastel pink and orange sky. The woman is wearing a flowing chiffon saree in peach, and the billowing fabric catches the wind. The man wears a white Kurta Pajama. The reflection of the monument is visible in the water pool. The palette is pastel pink, orange, and white. Dreamy and iconic.', image: '', imageSrc: prompt111, tags: ['romantic', 'classic', 'iconic'], upvotes: 1456, createdAt: '2024-02-11' },
  { id: '112', title: 'The Monsoon Romance', category: 'couple', content: 'A cinematic shot of a young couple sharing a black umbrella on Marine Drive, Mumbai, during heavy rain. The woman wears a wet, red cotton kurti, and the man wears a soaked white shirt. They are laughing, looking into each other\'s eyes. The background is the gray, choppy Arabian Sea and the blurred Queen\'s Necklace streetlights. The palette is grey, steel blue, and vibrant red. Emotional and moody.', image: '', imageSrc: prompt112, tags: ['moody', 'rain', 'romantic'], upvotes: 1289, createdAt: '2024-02-12' },
  { id: '113', title: 'The Haldi Ceremony', category: 'couple', content: 'A joyful, high-energy action shot of a couple at their Haldi ceremony. They are both wearing matching yellow outfits and are covered in turmeric paste and rose petals. Family members are throwing marigold flowers at them. They are laughing uncontrollably. The background is decorated with bright orange and yellow drapes. The lighting is bright sunlight. The palette is intense yellow, orange, and skin tones.', image: '', imageSrc: prompt113, tags: ['festive', 'vibrant', 'wedding'], upvotes: 1567, createdAt: '2024-02-13' },
  { id: '114', title: 'The Kerala Backwaters', category: 'couple', content: 'A peaceful, wide shot of a couple sitting on the edge of a traditional houseboat in Kerala. The woman wears a white and gold Kasavu saree, and the man wears a Mundu. They are sipping tea and looking at the palm-lined backwaters. The water is calm and green. The lighting is soft morning mist. The palette is lush green, white, and gold.', image: '', imageSrc: prompt114, tags: ['serene', 'nature', 'peaceful'], upvotes: 1123, createdAt: '2024-02-14' },
  { id: '115', title: 'The Urban Cafe Date', category: 'couple', content: 'A cozy, intimate shot of a stylish young Indian couple in a rustic cafe in Hauz Khas Village, Delhi. The woman wears a beige oversized sweater, and the man wears a denim jacket. They are sharing a plate of dessert, illuminated by warm fairy lights hanging from the ceiling. The background is brick walls and books. The palette is warm brown, beige, and denim blue.', image: '', imageSrc: prompt115, tags: ['cozy', 'warm', 'urban'], upvotes: 978, createdAt: '2024-02-15' },
  { id: '131', title: 'The Himalayan Trek', category: 'couple', content: 'An adventurous shot of a young Indian couple standing on a mountain peak in Himachal Pradesh. They are wearing colorful winter jackets (yellow and red) and beanies, holding backpacks. They are looking at snow-capped peaks in the distance. The lighting is crisp, cold morning light. The palette is snow white, bright yellow, red, and sky blue. Inspiring and fresh.', image: '', imageSrc: prompt131, tags: ['adventure', 'nature', 'mountain'], upvotes: 1156, createdAt: '2024-02-21' },
  { id: '132', title: 'The Library Romance', category: 'couple', content: 'A quiet, intimate shot of a couple sitting on the floor of an old bookstore or library. The girl is reading a book while the boy rests his head on her shoulder, sleeping. They are wearing cozy oversized sweaters in earth tones (rust and beige). Soft afternoon light filters through the shelves. The palette is warm brown, beige, and rust. Cozy and romantic.', image: '', imageSrc: prompt132, tags: ['quiet', 'intimate', 'cozy'], upvotes: 934, createdAt: '2024-02-22' },
  { id: '133', title: 'The Royal Procession', category: 'couple', content: 'A majestic portrait of a couple dressed in royal Rajasthani attire standing in the courtyard of a palace. The man wears a Sherwani with a sword, and the woman wears a heavy lehenga with a veil. They are holding hands, looking regal. The background features intricate archways and peacocks. The palette is royal blue, ivory, and gold. Grand and timeless.', image: '', imageSrc: prompt133, tags: ['grand', 'heritage', 'royal'], upvotes: 1345, createdAt: '2024-02-23' },
  { id: '134', title: 'The Rooftop Date', category: 'couple', content: 'A romantic night shot of a couple having a candlelit dinner on a rooftop in Delhi. The table is set with flowers and wine. They are toasting glasses. The background is a blur of city lights and the India Gate in the distance. The lighting is warm candlelight against the cool night sky. The palette is warm orange (candle), dark blue, and city bokeh.', image: '', imageSrc: prompt134, tags: ['urban', 'night', 'romantic'], upvotes: 1078, createdAt: '2024-02-24' },
  { id: '135', title: 'The Village Fields', category: 'couple', content: 'A cinematic wide shot of a couple running through a field of yellow mustard flowers in Punjab. The girl\'s dupatta is flying in the wind. The boy is chasing her, laughing. It captures the classic Bollywood romance vibe but with a realistic, artistic touch. The lighting is golden hour sunset. The palette is vibrant yellow, green, and sky blue.', image: '', imageSrc: prompt135, tags: ['cinematic', 'bollywood', 'romantic'], upvotes: 1423, createdAt: '2024-02-25' },

  // ========== KIDS (20-23 existing + 71-80 existing + 116-120 Indian + 136-140 Indian) ==========
  { id: '20', title: 'Playful Summer Day', category: 'kids', content: 'A joyful child running through a sprinkler in a backyard on a sunny summer day. Natural light, motion blur, pure happiness captured.', image: '', imageSrc: prompt20, tags: ['summer', 'playful', 'outdoor'], upvotes: 445, createdAt: '2024-01-12' },
  { id: '21', title: 'Birthday Cake Smash', category: 'kids', content: 'A one-year-old covered in colorful frosting during a cake smash photoshoot. Messy, cute, milestone celebration.', image: '', imageSrc: prompt21, tags: ['milestone', 'celebration', 'cute'], upvotes: 389, createdAt: '2024-01-06' },
  { id: '22', title: 'The Young Explorer', category: 'kids', content: 'A curious toddler in a tiny explorer outfit, complete with a pith helmet and a toy magnifying glass, examining leaves in a garden.', image: '', imageSrc: prompt22, tags: ['adventure', 'curious', 'outdoor'], upvotes: 567, createdAt: '2024-01-20' },
  { id: '23', title: 'The Little Ballerina', category: 'kids', content: 'A young girl in a pink tutu practicing ballet in a sunlit studio with floor-to-ceiling windows.', image: '', imageSrc: prompt23, tags: ['ballet', 'dance', 'graceful'], upvotes: 478, createdAt: '2024-01-19' },
  { id: '71', title: 'The Young Explorer Extended', category: 'kids', content: 'A curious toddler (around 3 years old) in a tiny explorer outfit, complete with a pith helmet and a toy magnifying glass, examining leaves in a lush, overgrown garden.', image: '', imageSrc: prompt71, tags: ['adventure', 'curious', 'nature'], upvotes: 767, createdAt: '2024-01-22' },
  { id: '72', title: 'The Little Ballerina Extended', category: 'kids', content: 'A young girl (around 5 years old) in a pink tutu and ballet slippers, practicing her pliés and pirouettes in a sunlit dance studio.', image: '', imageSrc: prompt72, tags: ['ballet', 'dance', 'graceful'], upvotes: 645, createdAt: '2024-01-21' },
  { id: '73', title: 'The Sandcastle Architect', category: 'kids', content: 'A young child (around 4 years old) deeply focused on building an elaborate sandcastle on a sunny beach. They wear a sun hat and swim shorts.', image: '', imageSrc: prompt73, tags: ['beach', 'summer', 'creative'], upvotes: 534, createdAt: '2024-01-20' },
  { id: '74', title: 'The Mini Chef', category: 'kids', content: 'A toddler (around 2 years old) in an oversized chef\'s hat and apron, standing on a stool and helping to stir a bowl of batter in a sunny kitchen.', image: '', imageSrc: prompt74, tags: ['cooking', 'cute', 'lifestyle'], upvotes: 612, createdAt: '2024-01-19' },
  { id: '75', title: 'The Puddle Jumper', category: 'kids', content: 'A child (around 5 years old) in bright yellow rain boots and a red raincoat, mid-jump into a large, muddy puddle.', image: '', imageSrc: prompt75, tags: ['playful', 'rain', 'action'], upvotes: 789, createdAt: '2024-01-18' },
  { id: '76', title: 'The Fairy Tale Reader', category: 'kids', content: 'A young child (around 6 years old) sitting in a cozy reading nook built into a window seat, completely absorbed in a large, illustrated fairy tale book.', image: '', imageSrc: prompt76, tags: ['reading', 'cozy', 'imaginative'], upvotes: 534, createdAt: '2024-01-17' },
  { id: '77', title: 'The Soccer Star', category: 'kids', content: 'An action shot of a young boy (around 8 years old) in a soccer uniform, mid-kick on a grassy field.', image: '', imageSrc: prompt77, tags: ['sports', 'action', 'energy'], upvotes: 678, createdAt: '2024-01-16' },
  { id: '78', title: 'The Little Astronaut', category: 'kids', content: 'A child (around 4 years old) dressed in a homemade cardboard astronaut costume, standing in a backyard decorated with painted planets.', image: '', imageSrc: prompt78, tags: ['imaginative', 'creative', 'playful'], upvotes: 856, createdAt: '2024-01-15' },
  { id: '79', title: 'The Flower Crown Princess', category: 'kids', content: 'A young girl (around 5 years old) with a crown of wildflowers in her hair, sitting in a field of daisies.', image: '', imageSrc: prompt79, tags: ['nature', 'whimsical', 'soft'], upvotes: 723, createdAt: '2024-01-14' },
  { id: '80', title: 'The Pillow Fort Commander', category: 'kids', content: 'Two children (around 6 and 4 years old) peeking out from inside an elaborate pillow and blanket fort in a living room.', image: '', imageSrc: prompt80, tags: ['indoor', 'playful', 'siblings'], upvotes: 645, createdAt: '2024-01-13' },
  
  // Indian Kids Prompts (116-120, 136-140)
  { id: '116', title: 'The Little Krishna', category: 'kids', content: 'A stunning, fantasy-inspired portrait of a 4-year-old Indian boy dressed as Lord Krishna. He has blue body paint, a peacock feather in his hair, and holds a flute. He is standing next to a calf in a lush green meadow. The lighting is magical and ethereal, with soft glow effects. The palette is peacock blue, vibrant yellow (dhoti), and lush green.', image: '', imageSrc: prompt116, tags: ['cultural', 'fantasy', 'playful'], upvotes: 1345, createdAt: '2024-02-16' },
  { id: '117', title: 'The Holi Festival', category: 'kids', content: 'An explosion of color capturing two Indian kids (a boy and a girl, approx 7 years old) running and throwing pink and green gulal (powder) at each other. They are wearing white kurtas that are stained with multi-colored powders. Their expressions are pure joy. The background is a blur of color and dust. High shutter speed to freeze the powder in the air. The palette is white, hot pink, lime green, and purple.', image: '', imageSrc: prompt117, tags: ['colorful', 'action', 'festive'], upvotes: 1567, createdAt: '2024-02-17' },
  { id: '118', title: 'The Diwali Sparkler', category: 'kids', content: 'A heartwarming low-light photo of a little Indian girl in a red and gold Ghagra Choli holding a burning sparkler (phuljhari) on Diwali night. The warm golden sparks illuminate her fascinated face. Background contains out-of-focus clay lamps (diyas) on a balcony railing. The mood is festive and magical. The palette is deep red, gold, and warm black.', image: '', imageSrc: prompt118, tags: ['warm', 'festive', 'magical'], upvotes: 1234, createdAt: '2024-02-18' },
  { id: '119', title: 'The Street Cricket Champion', category: 'kids', content: 'A dynamic, low-angle action shot of a 10-year-old Indian boy batting in a game of street cricket (gully cricket). He wears a worn-out blue school uniform shirt and shorts. He is swinging a wooden plank as a bat, hitting a tennis ball. Dust rises from the ground. The background is a narrow, colorful street in Kolkata. The lighting is golden sunset hour. The palette is dusty brown, faded blue, and warm gold.', image: '', imageSrc: prompt119, tags: ['gritty', 'action', 'sports'], upvotes: 1156, createdAt: '2024-02-19' },
  { id: '120', title: 'The Classical Dancer', category: 'kids', content: 'A poised, elegant portrait of a young Indian girl (8 years old) dressed in a Bharatanatyam dance costume. She is striking a traditional mudra (hand gesture) with intense eye expression. She wears temple jewelry and jasmine flowers in her hair. The background is a dark, solid charcoal wall to highlight her colorful orange and violet costume. Studio lighting. The palette is orange, violet, gold, and charcoal.', image: '', imageSrc: prompt120, tags: ['artistic', 'poised', 'dance'], upvotes: 1089, createdAt: '2024-02-20' },
  { id: '136', title: 'The Little Ganesha', category: 'kids', content: 'A cute portrait of a chubby Indian baby dressed as Lord Ganesha for a fancy dress competition. He wears a yellow dhoti, a trunk mask pushed up on his forehead, and is eating a laddoo. He is sitting on a red velvet cushion. The background is simple and clean. The lighting is soft studio light. The palette is bright yellow, red, and skin tones. Adorable and festive.', image: '', imageSrc: prompt136, tags: ['cultural', 'playful', 'festive'], upvotes: 1234, createdAt: '2024-02-26' },
  { id: '137', title: 'The Monsoon Paper Boat', category: 'kids', content: 'A nostalgic shot of a young Indian boy crouching by a rain puddle on a street. He is floating a paper boat. He wears a bright yellow raincoat and gumboots. Raindrops are creating ripples in the water. The background is a blur of a wet, grey street. The palette is vibrant yellow, grey, and water reflections. Innocent and playful.', image: '', imageSrc: prompt137, tags: ['nostalgic', 'rain', 'playful'], upvotes: 1067, createdAt: '2024-02-27' },
  { id: '138', title: 'The Kite Flyer', category: 'kids', content: 'A low-angle action shot of a young Indian girl flying a colorful kite on a rooftop during Makar Sankranti. She is wearing sunglasses and a bright pink ethnic skirt-top. The sky behind her is filled with hundreds of other kites. The sun is shining bright. The palette is cyan (sky), hot pink, and multi-colored kites. Energetic and cheerful.', image: '', imageSrc: prompt138, tags: ['vibrant', 'sky', 'action'], upvotes: 1189, createdAt: '2024-02-28' },
  { id: '139', title: 'The Village Swing', category: 'kids', content: 'A joyful photo of a child swinging on a makeshift tire swing hanging from a large Banyan tree in a village. The child is laughing, hair flying in the air. They wear simple cotton clothes. The background is lush green fields and a mud house. The lighting is dappled sunlight through the leaves. The palette is lush green, earthy brown, and white.', image: '', imageSrc: prompt139, tags: ['rural', 'joy', 'nature'], upvotes: 1045, createdAt: '2024-03-01' },
  { id: '140', title: 'The Classroom Dreamer', category: 'kids', content: 'A candid portrait of a young Indian schoolgirl in a blue and white uniform, sitting at a wooden desk in a rural classroom. She is looking out the window, daydreaming, with a pencil in her hand. Sunlight streams in, illuminating her face. The background features a blackboard with chalk writing. The palette is navy blue, white, and wood brown. Thoughtful and evocative.', image: '', imageSrc: prompt140, tags: ['storytelling', 'school', 'thoughtful'], upvotes: 978, createdAt: '2024-03-02' },

  // ========== LANDSCAPES (24-28 existing + 81-90 existing) ==========
  { id: '24', title: 'Misty Mountain Sunrise', category: 'landscapes', content: 'Dramatic sunrise over misty mountain peaks in the Swiss Alps. Layers of fog rolling through valleys, golden light breaking through clouds.', image: '', imageSrc: prompt24, tags: ['mountains', 'sunrise', 'dramatic'], upvotes: 756, createdAt: '2024-01-11' },
  { id: '25', title: 'Tropical Paradise Beach', category: 'landscapes', content: 'Crystal clear turquoise waters of a secluded Maldives beach. White sand, swaying palms, perfect blue sky with fluffy clouds.', image: '', imageSrc: prompt25, tags: ['beach', 'tropical', 'paradise'], upvotes: 678, createdAt: '2024-01-05' },
  { id: '26', title: 'Aurora Borealis', category: 'landscapes', content: 'Stunning Northern Lights display over a frozen Icelandic landscape. Green and purple auroras dancing across a star-filled sky.', image: '', imageSrc: prompt26, tags: ['aurora', 'night', 'arctic'], upvotes: 889, createdAt: '2024-01-20' },
  { id: '27', title: 'Desert Dunes', category: 'landscapes', content: 'Vast expanse of rolling sand dunes in the Sahara desert at golden hour. The play of light and shadow creating abstract patterns.', image: '', imageSrc: prompt27, tags: ['desert', 'golden hour', 'minimalist'], upvotes: 645, createdAt: '2024-01-19' },
  { id: '28', title: 'Enchanted Forest', category: 'landscapes', content: 'A mystical old-growth forest with rays of light piercing through the canopy, illuminating the moss-covered ground.', image: '', imageSrc: prompt28, tags: ['forest', 'mystical', 'nature'], upvotes: 723, createdAt: '2024-01-18' },
  { id: '81', title: 'Aurora Borealis Extended', category: 'landscapes', content: 'A stunning display of the Northern Lights (Aurora Borealis) over a frozen Icelandic landscape. Vibrant green and purple auroras dance across a crystal-clear, star-filled sky.', image: '', imageSrc: prompt81, tags: ['aurora', 'night', 'arctic'], upvotes: 1089, createdAt: '2024-01-22' },
  { id: '82', title: 'Desert Dunes Extended', category: 'landscapes', content: 'A vast expanse of rolling, golden sand dunes in the Sahara desert at golden hour. The play of light and shadow creates abstract, painterly patterns on the sand.', image: '', imageSrc: prompt82, tags: ['desert', 'minimalist', 'abstract'], upvotes: 845, createdAt: '2024-01-21' },
  { id: '83', title: 'Enchanted Forest Extended', category: 'landscapes', content: 'A mystical old-growth forest with towering redwood trees. Rays of soft, golden light pierce through the dense canopy, illuminating the moss-covered ground and ferns.', image: '', imageSrc: prompt83, tags: ['forest', 'mystical', 'ethereal'], upvotes: 923, createdAt: '2024-01-20' },
  { id: '84', title: 'Japanese Cherry Blossoms', category: 'landscapes', content: 'A serene Japanese garden in full spring bloom. Pink cherry blossom trees surround a calm koi pond with a traditional red bridge.', image: '', imageSrc: prompt84, tags: ['japan', 'spring', 'serene'], upvotes: 1156, createdAt: '2024-01-19' },
  { id: '85', title: 'Volcanic Fury', category: 'landscapes', content: 'A dramatic, long-exposure shot of an active volcano erupting at night. Rivers of bright orange lava flow down its slopes into the dark sea.', image: '', imageSrc: prompt85, tags: ['volcano', 'dramatic', 'night'], upvotes: 989, createdAt: '2024-01-18' },
  { id: '86', title: 'The Lavender Fields', category: 'landscapes', content: 'Endless rows of vibrant purple lavender fields in Provence, France. A lone stone farmhouse sits in the distance under a soft, pastel sunset sky.', image: '', imageSrc: prompt86, tags: ['lavender', 'france', 'romantic'], upvotes: 867, createdAt: '2024-01-17' },
  { id: '87', title: 'Arctic Ice Cave', category: 'landscapes', content: 'The breathtaking interior of a natural ice cave in a glacier. The ice glows with an ethereal, deep blue light. Ice crystals hang from the ceiling like chandeliers.', image: '', imageSrc: prompt87, tags: ['arctic', 'ice', 'ethereal'], upvotes: 1023, createdAt: '2024-01-16' },
  { id: '88', title: 'Autumn in New England', category: 'landscapes', content: 'A quintessential New England autumn scene. A winding country road is lined with trees in peak fall foliage – vibrant reds, oranges, and yellows.', image: '', imageSrc: prompt88, tags: ['autumn', 'foliage', 'cozy'], upvotes: 756, createdAt: '2024-01-15' },
  { id: '89', title: 'The Great Barrier Reef', category: 'landscapes', content: 'An underwater seascape of the Great Barrier Reef. Vibrant coral formations in blues, purples, and oranges are surrounded by schools of colorful tropical fish.', image: '', imageSrc: prompt89, tags: ['underwater', 'ocean', 'vibrant'], upvotes: 934, createdAt: '2024-01-14' },
  { id: '90', title: 'The Rice Terraces', category: 'landscapes', content: 'The stunning green rice terraces of Bali, Indonesia, carved into steep mountain slopes. The terraces are flooded and reflect the cloudy sky like mirrors.', image: '', imageSrc: prompt90, tags: ['bali', 'terraces', 'lush'], upvotes: 878, createdAt: '2024-01-13' },

  // ========== SCI-FI (29-33 existing + 91-100 existing) ==========
  { id: '29', title: 'Cyberpunk Metropolis', category: 'scifi', content: 'A sprawling cyberpunk city at night with towering holographic advertisements, flying vehicles, and neon-lit streets.', image: '', imageSrc: prompt29, tags: ['cyberpunk', 'city', 'neon'], upvotes: 892, createdAt: '2024-01-10' },
  { id: '30', title: 'Space Station Vista', category: 'scifi', content: 'Interior view of a luxury space station with panoramic windows overlooking Earth and the Milky Way.', image: '', imageSrc: prompt30, tags: ['space', 'station', 'luxury'], upvotes: 812, createdAt: '2024-01-04' },
  { id: '31', title: 'Alien Planet Discovery', category: 'scifi', content: 'First contact scene on an alien planet with bioluminescent flora, twin suns, and strange rock formations.', image: '', imageSrc: prompt31, tags: ['alien', 'planet', 'discovery'], upvotes: 945, createdAt: '2024-01-20' },
  { id: '32', title: 'Mech Battle', category: 'scifi', content: 'Epic battle scene with giant mechs fighting in a destroyed cityscape at sunset.', image: '', imageSrc: prompt32, tags: ['mech', 'battle', 'action'], upvotes: 756, createdAt: '2024-01-19' },
  { id: '33', title: 'Underwater Colony', category: 'scifi', content: 'A futuristic underwater city with glass domes, bioluminescent sea life, and advanced submarine vehicles.', image: '', imageSrc: prompt33, tags: ['underwater', 'colony', 'futuristic'], upvotes: 823, createdAt: '2024-01-18' },
  { id: '91', title: 'Cyberpunk Metropolis Extended', category: 'scifi', content: 'A sprawling, rain-soaked cyberpunk city at night. Towering skyscrapers are covered in holographic advertisements and neon signs in Japanese and English.', image: '', imageSrc: prompt91, tags: ['cyberpunk', 'city', 'noir'], upvotes: 1156, createdAt: '2024-01-22' },
  { id: '92', title: 'Space Station Vista Extended', category: 'scifi', content: 'The interior of a luxurious, high-tech space station. Panoramic floor-to-ceiling windows offer a breathtaking view of Earth and the Milky Way galaxy.', image: '', imageSrc: prompt92, tags: ['space', 'luxury', 'futuristic'], upvotes: 1023, createdAt: '2024-01-21' },
  { id: '93', title: 'Alien Planet Discovery Extended', category: 'scifi', content: 'A breathtaking first-contact scene on an alien planet. Strange, bioluminescent flora glows in soft blues and purples. Twin suns hang low on the horizon.', image: '', imageSrc: prompt93, tags: ['alien', 'exploration', 'bioluminescent'], upvotes: 1189, createdAt: '2024-01-20' },
  { id: '94', title: 'Mech Battle Extended', category: 'scifi', content: 'An epic, large-scale battle scene featuring giant mechs fighting in the ruins of a destroyed futuristic city.', image: '', imageSrc: prompt94, tags: ['mech', 'action', 'epic'], upvotes: 989, createdAt: '2024-01-19' },
  { id: '95', title: 'Underwater Colony Extended', category: 'scifi', content: 'A sprawling futuristic underwater city, enclosed in giant transparent domes. Inside, people walk through lush parks and modern buildings.', image: '', imageSrc: prompt95, tags: ['underwater', 'utopia', 'futuristic'], upvotes: 1056, createdAt: '2024-01-18' },
  { id: '96', title: 'The Generation Ship', category: 'scifi', content: 'The interior of a massive generation ship traveling through deep space. A colossal central atrium contains a fully functional ecosystem.', image: '', imageSrc: prompt96, tags: ['space', 'generation ship', 'epic'], upvotes: 1123, createdAt: '2024-01-17' },
  { id: '97', title: 'The Robot Companion', category: 'scifi', content: 'A heartwarming scene of a child walking hand-in-hand with a friendly, humanoid robot companion through a futuristic park.', image: '', imageSrc: prompt97, tags: ['robot', 'heartwarming', 'futuristic'], upvotes: 867, createdAt: '2024-01-16' },
  { id: '98', title: 'The Terraformed Mars', category: 'scifi', content: 'A breathtaking vista of a terraformed Mars, centuries in the future. The once-red planet now has blue oceans, green continents, and fluffy white clouds.', image: '', imageSrc: prompt98, tags: ['mars', 'terraforming', 'hopeful'], upvotes: 1234, createdAt: '2024-01-15' },
  { id: '99', title: 'The Wormhole Gate', category: 'scifi', content: 'A colossal, ring-shaped wormhole gate floating in deep space, with a massive starship approaching it.', image: '', imageSrc: prompt99, tags: ['wormhole', 'space', 'epic'], upvotes: 1078, createdAt: '2024-01-14' },
  { id: '100', title: 'The Neon Marketplace', category: 'scifi', content: 'A bustling night market in a cyberpunk Asian city. Vendors sell exotic tech and street food under a canopy of glowing neon signs.', image: '', imageSrc: prompt100, tags: ['cyberpunk', 'market', 'asian'], upvotes: 945, createdAt: '2024-01-13' },
];
