
      export default function TrainersPage() {
        return (
          <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        <div  class="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-fixed">
          

<nav class="fixed top-0 w-full z-50 bg-[#0e0e0e]/70 backdrop-blur-xl bg-gradient-to-b from-[#131313] to-transparent">
<div class="flex justify-between items-center px-8 py-4 max-w-none w-full">
<div class="flex items-center gap-2">
<svg viewBox="0 0 160 50" class="h-10 w-auto object-contain"><text x="0" y="38" font-family="sans-serif" font-weight="900" font-size="34" fill="#cafd00" letter-spacing="-1">OH<tspan fill="#ffffff">GYM</tspan></text></svg>
<div class="text-2xl font-black italic text-[#cafd00] tracking-tighter font-headline uppercase">
                    OH GYM
                </div>
</div>
<div class="hidden md:flex items-center gap-10 font-headline font-bold uppercase tracking-tighter">
<a class="text-white/70 hover:text-white transition-colors" href="/">Home</a>
<a class="text-white/70 hover:text-white transition-colors" href="/classes">Classes</a>
<a class="text-white/70 hover:text-white transition-colors" href="/memberships">Memberships</a>
<a class="text-[#cafd00] border-b-2 border-[#cafd00] pb-1" href="/trainers">Trainers</a>
</div>
<div class="flex items-center gap-6">
<button class="hidden md:block bg-primary-container text-on-primary-fixed px-6 py-2 font-headline font-bold uppercase tracking-tight scale-105 active:scale-95 transition-all duration-300 hover:bg-primary-dim">
                    Join Now
                </button>
<span class="material-symbols-outlined text-on-background md:hidden" data-icon="menu">menu</span>
</div>
</div>
</nav>
<main class="pt-32 pb-24 px-8 max-w-7xl mx-auto">

<header class="mb-24 flex flex-col md:flex-row items-end justify-between gap-8 border-l-4 border-primary-container pl-8">
<div class="max-w-3xl">
<h2 class="font-headline text-on-surface-variant text-sm font-bold uppercase tracking-[0.3em] mb-4">Elite Performance Team</h2>
<h1 class="font-headline text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                    Architects of <span class="text-primary-container kinetic-text-shadow">Human Potential</span>
</h1>
</div>
<div class="flex flex-col gap-2 items-end">
<p class="font-body text-on-surface-variant text-right max-w-xs leading-relaxed">
                    Our trainers are more than coaches. They are specialists in the science of motion, recovery, and peak performance.
                </p>
<div class="w-24 h-1 bg-primary-container"></div>
</div>
</header>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">

<div class="group relative flex flex-col">
<div class="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-container-low">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" data-alt="Intense professional fitness trainer with focused expression, high contrast lighting on sweat and muscle texture, dark editorial aesthetic" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&auto=format&fit=crop"/>
<div class="absolute top-4 left-4 flex flex-col gap-2">
<span class="bg-primary-container text-on-primary-fixed font-label text-[0.625rem] font-black uppercase px-2 py-1 tracking-widest">Master Coach</span>
</div>
<div class="absolute bottom-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<span class="material-symbols-outlined text-primary-container text-4xl" data-icon="arrow_outward">arrow_outward</span>
</div>
</div>
<div class="flex items-start justify-between">
<div>
<h3 class="font-headline text-3xl font-bold uppercase tracking-tight mb-1">Marcus Thorne</h3>
<p class="font-headline text-primary-container font-bold text-xs uppercase tracking-[0.2em] mb-4">Strength &amp; Conditioning</p>
</div>
<span class="font-headline text-on-surface-variant/20 text-5xl font-black italic">01</span>
</div>
<p class="font-body text-on-surface-variant text-sm leading-relaxed pr-8 border-l border-outline-variant/15 pl-4">
                    Former Olympic weightlifting coach specializing in explosive power development and neuromuscular efficiency. Marcus builds resilient athletes from the ground up.
                </p>
</div>

<div class="group relative flex flex-col md:mt-24">
<div class="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-container-low">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" data-alt="Female high performance athlete trainer in motion, dramatic shadows, vibrant kinetic energy, cinematic lighting in a dark gym setting" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1400&auto=format&fit=crop"/>
<div class="absolute top-4 left-4 flex flex-col gap-2">
<span class="bg-primary-container text-on-primary-fixed font-label text-[0.625rem] font-black uppercase px-2 py-1 tracking-widest">Performance Lead</span>
</div>
<div class="absolute bottom-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<span class="material-symbols-outlined text-primary-container text-4xl" data-icon="arrow_outward">arrow_outward</span>
</div>
</div>
<div class="flex items-start justify-between">
<div>
<h3 class="font-headline text-3xl font-bold uppercase tracking-tight mb-1">Sasha Vane</h3>
<p class="font-headline text-primary-container font-bold text-xs uppercase tracking-[0.2em] mb-4">High Intensity Interval Training</p>
</div>
<span class="font-headline text-on-surface-variant/20 text-5xl font-black italic">02</span>
</div>
<p class="font-body text-on-surface-variant text-sm leading-relaxed pr-8 border-l border-outline-variant/15 pl-4">
                    Expert in metabolic conditioning and oxygen-capacity scaling. Sasha's methodology focuses on fat oxidation and high-velocity cardiovascular adaptation.
                </p>
</div>

<div class="group relative flex flex-col">
<div class="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-container-low">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" data-alt="Male fitness trainer holding a kettlebell, sharp focus on muscular detail, low-key lighting, professional sports editorial style" src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=1400&auto=format&fit=crop"/>
<div class="absolute top-4 left-4 flex flex-col gap-2">
<span class="bg-primary-container text-on-primary-fixed font-label text-[0.625rem] font-black uppercase px-2 py-1 tracking-widest">Nutrition Specialist</span>
</div>
<div class="absolute bottom-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<span class="material-symbols-outlined text-primary-container text-4xl" data-icon="arrow_outward">arrow_outward</span>
</div>
</div>
<div class="flex items-start justify-between">
<div>
<h3 class="font-headline text-3xl font-bold uppercase tracking-tight mb-1">Elias Thorne</h3>
<p class="font-headline text-primary-container font-bold text-xs uppercase tracking-[0.2em] mb-4">Performance Nutrition</p>
</div>
<span class="font-headline text-on-surface-variant/20 text-5xl font-black italic">03</span>
</div>
<p class="font-body text-on-surface-variant text-sm leading-relaxed pr-8 border-l border-outline-variant/15 pl-4">
                    Bridging the gap between cellular fuel and peak physical output. Elias optimizes biological systems to ensure maximum recovery and muscle hypertrophy.
                </p>
</div>

<div class="lg:col-span-2 group relative grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low p-8 border-l border-primary-container">
<div class="relative overflow-hidden aspect-square bg-surface-container-high">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Professional yoga and mobility instructor in a deep stretch, minimalist aesthetic, warm spotlighting against a dark textured wall" src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=1400&auto=format&fit=crop"/>
</div>
<div class="flex flex-col justify-center">
<h3 class="font-headline text-5xl font-black uppercase tracking-tighter mb-2">Elena Rossi</h3>
<p class="font-headline text-primary-container font-bold text-sm uppercase tracking-[0.3em] mb-6">Mobility &amp; Restoration</p>
<p class="font-body text-on-surface-variant text-lg leading-relaxed mb-8">
                        The silence within the storm. Elena integrates advanced mobility protocols with restorative breathwork to expand functional range of motion and mental focus.
                    </p>
<div class="flex gap-4">
<div class="px-4 py-2 border border-outline-variant/20 font-label text-[0.625rem] uppercase font-bold tracking-widest text-on-surface">Flexibility</div>
<div class="px-4 py-2 border border-outline-variant/20 font-label text-[0.625rem] uppercase font-bold tracking-widest text-on-surface">Yoga Flow</div>
<div class="px-4 py-2 border border-outline-variant/20 font-label text-[0.625rem] uppercase font-bold tracking-widest text-on-surface">Longevity</div>
</div>
</div>
</div>

<div class="bg-primary-container p-8 flex flex-col justify-between items-start min-h-[25rem]">
<div>
<span class="material-symbols-outlined text-on-primary-fixed text-6xl mb-6" data-icon="bolt" style="font-variation-settings: 'FILL' 1;">bolt</span>
<h3 class="font-headline text-4xl font-black text-on-primary-fixed uppercase tracking-tighter leading-none mb-4">Train With The Best.</h3>
</div>
<button class="w-full py-4 border-2 border-on-primary-fixed text-on-primary-fixed font-headline font-black uppercase tracking-widest hover:bg-on-primary-fixed hover:text-primary-container transition-all duration-300">
                    Book A Session
                </button>
</div>
</div>
</main>

<footer class="bg-[#131313] w-full border-t border-[#484848]/15">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 w-full">
<div class="flex flex-col gap-6">
<div class="flex items-center gap-3">
<div class="mt-4 text-[0.625rem] text-white/30 uppercase tracking-[0.2em]">© 2022 OH GYM. ALL RIGHTS RESERVED.</div>
<div class="text-xl font-black text-[#cafd00] font-headline uppercase tracking-tighter">OH GYM</div>
</div>
<p class="font-manrope text-white/50 text-sm leading-relaxed max-w-xs">
                    Pushing the boundaries of physical excellence through science and raw grit. Join the elite.
                </p>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-headline font-bold uppercase text-[#cafd00] tracking-widest text-xs mb-2">Connect</h4>
<div class="flex flex-col gap-2 font-manrope text-sm tracking-wide">
<a class="text-white/50 hover:text-[#cafd00] transition-colors" href="/">Instagram</a>
<a class="text-white/50 hover:text-[#cafd00] transition-colors" href="/">TikTok</a>
<a class="text-white/50 hover:text-[#cafd00] transition-colors" href="/">Twitter</a>
<a class="text-white/50 hover:text-[#cafd00] transition-colors" href="/">Newsletter</a>
</div>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-headline font-bold uppercase text-[#cafd00] tracking-widest text-xs mb-2">Legal</h4>
<div class="flex flex-col gap-2 font-manrope text-sm tracking-wide">
<a class="text-white/50 hover:text-[#cafd00] transition-colors" href="/">Privacy Policy</a>
<a class="text-white/50 hover:text-[#cafd00] transition-colors" href="/">Terms of Service</a>
<a class="text-white/50 hover:text-[#cafd00] transition-colors" href="/">Contact Support</a>
<div class="mt-4 text-[0.625rem] text-white/30 uppercase tracking-[0.2em]">© 2022 OH GYM. ALL RIGHTS RESERVED.</div>
</div>
</div>
</div>
</footer>

        </div>
      ` }} />
        );
      }
      