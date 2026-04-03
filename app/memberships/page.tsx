
      export default function MembershipsPage() {
        return (
          <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        <div  class="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
          

<nav class="fixed top-0 w-full z-50 bg-[#0e0e0e]/70 backdrop-blur-xl bg-gradient-to-b from-[#131313] to-transparent">
<div class="flex justify-between items-center px-8 py-4 max-w-none w-full">
<div class="flex items-center gap-2">
<svg viewBox="0 0 160 50" class="h-10 w-auto object-contain"><text x="0" y="38" font-family="sans-serif" font-weight="900" font-size="34" fill="#cafd00" letter-spacing="-1">OH<tspan fill="#ffffff">GYM</tspan></text></svg>
<div class="text-2xl font-black italic text-[#cafd00] tracking-tighter font-headline uppercase">OH GYM</div>
</div>
<div class="hidden md:flex items-center gap-8">
<a class="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#cafd00] transition-all duration-300" href="/">Home</a>
<a class="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#cafd00] transition-all duration-300" href="/classes">Classes</a>
<a class="font-headline font-bold uppercase tracking-tighter text-[#cafd00] border-b-2 border-[#cafd00] pb-1 scale-105 active:scale-95 transition-transform" href="/memberships">Memberships</a>
<a class="font-headline font-bold uppercase tracking-tighter text-white/70 hover:text-[#cafd00] transition-all duration-300" href="/trainers">Trainers</a>
</div>
<button class="bg-primary-fixed text-on-primary-fixed px-6 py-2 font-headline font-black uppercase tracking-tighter scale-105 active:scale-95 transition-transform rounded-sm">
                Join Now
            </button>
</div>
</nav>
<main class="pt-32 pb-20">

<section class="px-8 mb-24 relative overflow-hidden">
<div class="hidden lg:block absolute -right-20 top-0 opacity-10 pointer-events-none">
<h2 class="text-[20rem] font-black font-headline leading-none tracking-tighter uppercase select-none">LEVEL</h2>
</div>
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-8">
<div class="flex-1">
<span class="text-primary-fixed font-label font-bold tracking-[0.3em] uppercase mb-4 block">SELECT YOUR TIER</span><div class="flex items-center gap-2 mt-2">
<span class="material-symbols-outlined text-primary-fixed text-sm" style="font-variation-settings: 'FILL' 1;">groups</span>
<span class="text-on-surface-variant font-label text-xs font-bold tracking-widest uppercase">2+ ELITE COACHES</span>
</div>
<h1 class="text-7xl md:text-9xl font-headline font-black uppercase leading-[0.85] tracking-tighter">
                        UNLEASH<br/><span class="text-primary-fixed">APEX</span> POWER
                    </h1>
</div>
<div class="max-w-md pb-4 border-l border-outline-variant/30 pl-8">
<p class="text-on-surface-variant font-body text-lg leading-relaxed">
                        High-performance infrastructure for those who demand more from their training. No fluff. Just results.
                    </p>
</div>
</div>
</section>

<section class="px-8 max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

<div class="bg-surface-container-low group relative flex flex-col p-8 transition-all duration-500 hover:bg-surface-container-high">
<div class="mb-12">
<h3 class="font-headline font-black text-4xl uppercase tracking-tighter mb-2">Monthly</h3>
<p class="text-on-surface-variant font-label text-xs uppercase tracking-widest">Foundation Level</p>
</div>
<div class="mb-12 flex items-baseline gap-1">
<span class="font-headline font-black text-6xl italic text-primary-fixed tracking-tighter">₹1,000</span>
<span class="text-on-surface-variant font-label font-medium">/MO</span>
</div>
<div class="flex-1 space-y-6 mb-12">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-fixed text-xl" data-icon="check_circle">check_circle</span>
<span class="font-body text-sm tracking-wide">24/7 Global Access</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-fixed text-xl" data-icon="check_circle">check_circle</span>
<span class="font-body text-sm tracking-wide">Standard Locker Access</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-fixed text-xl" data-icon="check_circle">check_circle</span>
<span class="font-body text-sm tracking-wide">App Progress Tracking</span>
</div>
<div class="flex items-center gap-4 opacity-30">
<span class="material-symbols-outlined text-xl" data-icon="cancel">cancel</span>
<span class="font-body text-sm tracking-wide">Group Classes</span>
</div>
</div>
<button class="w-full border border-outline-variant/30 py-4 font-headline font-bold uppercase tracking-widest text-on-surface hover:bg-on-surface hover:text-background transition-all">Select Monthly</button>
</div>

<div class="bg-primary-fixed relative flex flex-col p-10 transform md:-translate-y-4 shadow-2xl overflow-hidden">

<div class="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
<img class="w-full h-full object-cover grayscale" data-alt="close up of heavy duty carbon fiber texture with subtle diagonal lines and industrial feel" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&auto=format&fit=crop"/>
</div>
            <div class="relative z-10">
            <div class="flex justify-between items-start mb-12">
            <div>
            <h3 class="font-headline font-black text-5xl uppercase tracking-tighter mb-2 text-on-primary-fixed">Quarterly</h3>
            <div class="bg-on-primary-fixed text-primary-fixed text-[0.625rem] font-black uppercase px-2 py-0.5 inline-block tracking-tighter">Most Popular</div>
            </div>
<span class="material-symbols-outlined text-on-primary-fixed text-4xl" data-icon="bolt" style="font-variation-settings: 'FILL' 1;">bolt</span>
</div>
<div class="mb-12 flex items-baseline gap-1">
<span class="font-headline font-black text-8xl italic text-on-primary-fixed tracking-tighter">₹2,500</span>
<span class="text-on-primary-fixed/70 font-label font-black text-sm">/3 MONTHS</span>
</div>
<div class="flex-1 space-y-6 mb-12">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-primary-fixed text-xl" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-headline font-extrabold text-sm uppercase tracking-tight text-on-primary-fixed">All Basic Features</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-primary-fixed text-xl" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-headline font-extrabold text-sm uppercase tracking-tight text-on-primary-fixed">Unlimited Classes</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-primary-fixed text-xl" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-headline font-extrabold text-sm uppercase tracking-tight text-on-primary-fixed">1PT Session / Month</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-primary-fixed text-xl" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="font-headline font-extrabold text-sm uppercase tracking-tight text-on-primary-fixed">Recovery Lounge</span>
</div>
</div>
<button class="w-full bg-on-primary-fixed text-primary-fixed py-5 font-headline font-black uppercase tracking-tighter text-lg hover:scale-[1.02] transition-transform">Go Quarterly Now</button>
</div>
</div>

<div class="bg-surface-container-low group relative flex flex-col p-8 transition-all duration-500 hover:bg-surface-container-high">
<div class="mb-12">
<h3 class="font-headline font-black text-4xl uppercase tracking-tighter mb-2">Yearly</h3>
<p class="text-on-surface-variant font-label text-xs uppercase tracking-widest">Peak Performance</p>
</div>
<div class="mb-12 flex items-baseline gap-1">
<span class="font-headline font-black text-6xl italic text-primary-fixed tracking-tighter">₹7,500</span>
<span class="text-on-surface-variant font-label font-medium">/YEAR</span>
</div>
<div class="flex-1 space-y-6 mb-12">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-fixed text-xl" data-icon="check_circle">check_circle</span>
<span class="font-body text-sm tracking-wide">All Pro Features</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-fixed text-xl" data-icon="check_circle">check_circle</span>
<span class="font-body text-sm tracking-wide">Unlimited PT Sessions</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-fixed text-xl" data-icon="check_circle">check_circle</span>
<span class="font-body text-sm tracking-wide">Nutrition Coaching</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-fixed text-xl" data-icon="check_circle">check_circle</span>
<span class="font-body text-sm tracking-wide">Premium Gear Kit</span>
</div>
</div>
<button class="w-full border border-outline-variant/30 py-4 font-headline font-bold uppercase tracking-widest text-on-surface hover:bg-on-surface hover:text-background transition-all">Select Yearly</button>
</div>
</div>
</section>

<section class="mt-40 overflow-hidden bg-surface-container-low py-20 relative">
<div class="flex whitespace-nowrap gap-12 items-center opacity-20">
<span class="font-headline font-black text-[12rem] uppercase leading-none tracking-tighter">ELITE ATHLETICS</span>
<span class="font-headline font-black text-[12rem] uppercase leading-none tracking-tighter text-primary-fixed">OH GYM</span>
<span class="font-headline font-black text-[12rem] uppercase leading-none tracking-tighter">ELITE ATHLETICS</span>
</div>
<div class="absolute inset-0 flex items-center justify-center px-8">
<div class="max-w-4xl text-center">
<h2 class="font-headline font-black text-5xl uppercase tracking-tighter mb-8 leading-none">Ready to break your limits?</h2>
<p class="font-body text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">
                        Join 5,000+ athletes who have redefined their potential with OH GYM's high-intensity training protocols.
                    </p>
<div class="flex flex-col md:flex-row gap-4 justify-center">
<button class="bg-primary-fixed text-on-primary-fixed font-headline font-black uppercase tracking-tighter px-10 py-4 scale-105 transition-transform hover:scale-110">Book a Free Tour</button>
<button class="border border-outline-variant/30 font-headline font-black uppercase tracking-tighter px-10 py-4 hover:bg-on-surface hover:text-background transition-colors">Compare Plans</button>
</div>
</div>
</div>
</section>
</main>

<footer class="bg-[#131313] w-full border-t border-[#484848]/15">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 w-full">
<div class="flex flex-col gap-6">
<div class="flex items-center gap-2">
<svg viewBox="0 0 160 50" class="h-10 w-auto object-contain"><text x="0" y="38" font-family="sans-serif" font-weight="900" font-size="34" fill="#cafd00" letter-spacing="-1">OH<tspan fill="#ffffff">GYM</tspan></text></svg>
<div class="text-xl font-black text-[#cafd00] font-headline uppercase italic">OH GYM</div>
</div>
<p class="font-manrope text-sm tracking-wide text-white/50 max-w-xs">
                    The ultimate performance arena. Engineered for those who refuse to settle for average.
                </p>
</div>
<div class="grid grid-cols-2 gap-8">
<div class="flex flex-col gap-4">
<span class="font-headline font-black uppercase text-[0.625rem] tracking-[0.2em] text-[#cafd00]">Explore</span>
<a class="font-manrope text-sm tracking-wide text-white/50 hover:text-[#cafd00] transition-colors" href="/">Locations</a>
<a class="font-manrope text-sm tracking-wide text-white/50 hover:text-[#cafd00] transition-colors" href="/">Instagram</a>
</div>
<div class="flex flex-col gap-4">
<span class="font-headline font-black uppercase text-[0.625rem] tracking-[0.2em] text-[#cafd00]">Support</span>
<a class="font-manrope text-sm tracking-wide text-white/50 hover:text-[#cafd00] transition-colors" href="/">TikTok</a>
<a class="font-manrope text-sm tracking-wide text-white/50 hover:text-[#cafd00] transition-colors" href="/">Newsletter</a>
</div>
</div>
<div class="flex flex-col gap-6">
<span class="font-headline font-black uppercase text-[0.625rem] tracking-[0.2em] text-[#cafd00]">Stay Kinetic</span>
<div class="relative">
<input class="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary-fixed py-4 px-6 font-label text-xs tracking-widest text-on-surface uppercase outline-none" placeholder="ENTER EMAIL" type="email"/>
<button class="absolute right-4 top-1/2 -translate-y-1/2 text-[#cafd00]">
<span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<p class="font-manrope text-[0.625rem] tracking-widest text-white/30 uppercase italic">© 2024 OH GYM. ALL RIGHTS RESERVED.</p>
</div>
</div>
</footer>

        </div>
      ` }} />
        );
      }
      