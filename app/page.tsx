"use client";
import { useEffect, useState, useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Dumbbell, Users, TrendingDown, Zap, UserCheck, HeartPulse,
  MapPin, Phone, Clock, MessageCircle, Star, Check,
  Menu, X, ArrowRight, ChevronRight, Play,
} from "lucide-react";

/* ─── Icons ─── */
const IgIcon = ({ s = 16 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

/* ─── Data ─── */
const WA = "https://wa.me/919633008768?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20know%20more";
const IG = "https://www.instagram.com/old_harbour_fitness/";
const NAV = [{ l: "Home", id: "home" }, { l: "Programs", id: "programs" }, { l: "Pricing", id: "pricing" }, { l: "Contact", id: "contact" }];

const PROGRAMS = [
  { Icon: Dumbbell, title: "Strength Training", desc: "Build raw power with compound lifts and progressive overload.", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80&auto=format&fit=crop", span: "sm:col-span-2" },
  { Icon: UserCheck, title: "Personal Training", desc: "One-on-one expert coaching tailored to your unique goals.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop", span: "" },
  { Icon: TrendingDown, title: "Weight Loss", desc: "Science-backed fat loss with nutrition and training.", img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80&auto=format&fit=crop", span: "" },
  { Icon: Zap, title: "Muscle Building", desc: "Hypertrophy programs to maximize lean muscle.", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80&auto=format&fit=crop", span: "" },
  { Icon: Users, title: "Group Classes", desc: "High-energy sessions with community energy.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80&auto=format&fit=crop", span: "" },
  { Icon: HeartPulse, title: "Cardio & HIIT", desc: "Intense conditioning to build endurance.", img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=800&q=80&auto=format&fit=crop", span: "sm:col-span-2" },
];

const PLANS = [
  { name: "Basic", price: "₹1,000", period: "/month", tag: "Start Here", features: ["Gym floor access", "Standard equipment", "Locker facility", "Open gym hours"], hl: false },
  { name: "Premium", price: "₹2,500", period: "/month", tag: "Most Popular", features: ["Full gym access", "Group classes", "Personal training 2x/mo", "Diet consultation", "Priority support"], hl: true },
  { name: "Elite", price: "₹7,500", period: "/year", tag: "Best Value", features: ["Everything in Premium", "Unlimited PT sessions", "Nutrition planning", "Body composition tracking", "Guest passes 2/mo"], hl: false },
];

const MARQUEE_TEXT = "STRENGTH • DISCIPLINE • POWER • TRANSFORMATION • COMMUNITY • LEGACY • ";

/* ─── Animated Reveal ─── */
function Reveal({ children, className = "", delay = 0, direction = "up" }: { children: ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const initial = direction === "up" ? { opacity: 0, y: 60 } : direction === "left" ? { opacity: 0, x: -60 } : { opacity: 0, x: 60 };
  const animate = inView ? { opacity: 1, y: 0, x: 0 } : initial;
  return <motion.div ref={ref} initial={initial} animate={animate} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

/* ─── Animated Counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => { start += step; if (start >= target) { setCount(target); clearInterval(timer); } else setCount(start); }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Section Label ─── */
function Tag({ text }: { text: string }) {
  return <span className="inline-block font-body text-[10px] font-bold uppercase tracking-[0.4em] text-primary border border-primary/20 px-4 py-1.5 mb-6">{text}</span>;
}

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.15], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      {/* ══ NOISE OVERLAY ══ */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.02] bg-noise" />

      {/* ══ NAVBAR ══ */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#060606]/90 backdrop-blur-2xl border-b border-white/[0.04] shadow-2xl shadow-black/50" : ""}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3">
          <button onClick={() => go("home")} aria-label="Home" className="flex items-center gap-3 group">
            <img src="/logo.jpg" alt="OH GYM" className="h-10 w-10 object-contain rounded" />
            <div className="hidden sm:block leading-none">
              <p className="font-display text-xs font-black tracking-wider text-white group-hover:text-primary transition-colors">OLD HARBOUR</p>
              <p className="font-display text-[9px] font-bold tracking-[0.3em] text-primary/70">FITNESS</p>
            </div>
          </button>
          <div className="hidden md:flex items-center gap-10">
            {NAV.map(({ l, id }) => (
              <button key={id} onClick={() => go(id)} className="relative font-body text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300">{l}</button>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="relative bg-primary text-[#060606] font-display font-bold text-[11px] uppercase tracking-wider px-6 py-2.5 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/60"><Menu size={22} /></button>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-[#060606]/98 backdrop-blur-2xl border-t border-white/[0.04] px-6 pb-6 pt-3">
            <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 text-white/40"><X size={20} /></button>
            {NAV.map(({ l, id }) => (
              <button key={id} onClick={() => go(id)} className="block w-full text-left py-4 font-body text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors border-b border-white/[0.03]">{l}</button>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block mt-4 bg-primary text-[#060606] font-display font-bold text-xs text-center uppercase tracking-wider py-3.5">Join Now</a>
          </motion.div>
        )}
      </motion.nav>

      {/* ══ HERO ══ */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-end pb-28 md:items-center md:pb-0 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85&auto=format&fit=crop" alt="" className="w-full h-full object-cover scale-110" />
        </motion.div>
        <div className="absolute inset-0 bg-[#060606]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/30 to-transparent" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
          <h2 className="text-stroke font-display font-black text-[22vw] leading-none tracking-tighter uppercase whitespace-nowrap">OH GYM</h2>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <Reveal><Tag text="Est. 2022 · Kochi, Kerala" /></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.82] tracking-tighter uppercase">
              <span className="text-primary">OH</span> GYM
            </h1>
          </Reveal>
          <Reveal delay={0.15}><p className="font-body text-sm md:text-base text-white/30 mt-3 tracking-widest uppercase">Old Harbour Fitness</p></Reveal>
          <Reveal delay={0.2}><p className="font-display text-lg md:text-2xl font-bold text-white/80 mt-3 max-w-lg">Built for Strength. Designed for You.</p></Reveal>
          <Reveal delay={0.25}>
            <div className="flex items-center gap-1.5 text-primary mt-4 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
              <span className="ml-2 text-white/30 font-body text-[11px] tracking-wider">4.8 Rated Gym in Kochi</span>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 bg-primary text-[#060606] font-display font-bold text-sm uppercase tracking-wider px-8 py-4 overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <span className="relative z-10 flex items-center gap-2"><MessageCircle size={18} /> Chat on WhatsApp <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </a>
              <button onClick={() => go("programs")} className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/50 font-display font-bold text-sm uppercase tracking-wider px-8 py-4 hover:border-primary/30 hover:text-primary transition-all duration-300">
                Explore Programs <ChevronRight size={15} />
              </button>
            </div>
          </Reveal>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.04]">
            {[{ v: 500, s: "+", l: "Active Members" }, { v: 10, s: "+", l: "Expert Trainers" }, { v: 4, s: ".8★", l: "Google Rating" }, { v: 3, s: "+", l: "Years Strong" }].map(({ v, s, l }) => (
              <div key={l} className="text-center py-5 bg-[#060606]/60 backdrop-blur-sm">
                <p className="font-display font-black text-xl md:text-2xl text-primary"><Counter target={v} suffix={s} /></p>
                <p className="font-body text-[8px] uppercase tracking-[0.3em] text-white/25 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="py-5 bg-primary overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[0, 1].map(i => <span key={i} className="font-display font-black text-sm md:text-base uppercase tracking-[0.3em] text-[#060606] mx-2">{MARQUEE_TEXT}{MARQUEE_TEXT}</span>)}
        </div>
      </div>

      {/* ══ PROGRAMS ══ */}
      <section id="programs" className="py-32 px-6 lg:px-10 relative">
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal><div className="text-center mb-20"><Tag text="What We Offer" /><h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Our Programs</h2></div></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[320px]">
            {PROGRAMS.map(({ Icon, title, desc, img, span }, i) => (
              <Reveal key={title} delay={i * 0.08} className={span}>
                <div className="group relative w-full h-full overflow-hidden cursor-pointer gradient-border">
                  <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="absolute top-4 right-5 font-display font-black text-4xl text-white/[0.03] group-hover:text-primary/10 transition-colors">0{i + 1}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="w-9 h-9 glass flex items-center justify-center mb-3"><Icon size={16} className="text-primary" /></div>
                    <h3 className="font-display font-bold text-sm md:text-base uppercase tracking-wider mb-1">{title}</h3>
                    <p className="font-body text-[11px] text-white/30 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="py-32 px-6 lg:px-10 border-y border-white/[0.03] relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal direction="left">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&auto=format&fit=crop" alt="OH GYM Interior" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute bottom-0 right-0 bg-primary p-6 md:p-8">
                <p className="font-display font-black text-3xl md:text-4xl text-[#060606] leading-none">SINCE<br/>2022</p>
              </div>
              <div className="absolute top-8 left-8 w-16 h-16 border border-primary/20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary/[0.06] -z-10" />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <Tag text="Why OH GYM" />
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight leading-[0.9] mb-6">Not Just A Gym.<br /><span className="text-primary">A Movement.</span></h2>
              <p className="font-body text-sm text-white/35 leading-relaxed mb-8 max-w-md">We&apos;re a community built on discipline, results, and relentless self-improvement. Located in the heart of Kochi, we combine premium equipment with expert coaching to deliver transformative results you can see and feel.</p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {["Premium Equipment", "Expert Coaches", "Proven Results", "Community Driven", "Nutrition Support", "Flexible Hours"].map(t => (
                  <div key={t} className="flex items-center gap-2.5"><div className="w-1.5 h-1.5 bg-primary flex-shrink-0" /><span className="font-body text-[11px] text-white/40 uppercase tracking-wider">{t}</span></div>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 bg-primary text-[#060606] font-display font-bold text-xs uppercase tracking-wider px-7 py-3.5 overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all">
                <span className="relative z-10 flex items-center gap-2">Start Your Journey <ArrowRight size={14} /></span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing" className="py-32 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal><div className="text-center mb-20"><Tag text="Membership Plans" /><h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Invest In<br className="sm:hidden" /> Yourself</h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch max-w-5xl mx-auto">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.12}>
                <div className={`relative flex flex-col h-full p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 gradient-border ${p.hl ? "bg-white/[0.04] animate-shimmer" : "bg-white/[0.02]"}`}>
                  <span className={`self-start font-body text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1 mb-5 ${p.hl ? "bg-primary text-[#060606]" : "border border-white/10 text-white/25"}`}>{p.tag}</span>
                  <h3 className="font-display font-bold text-lg uppercase tracking-wider mb-1">{p.name}</h3>
                  <div className="mb-6"><span className="font-display font-black text-4xl md:text-5xl text-primary">{p.price}</span><span className="text-white/25 font-body text-sm ml-1">{p.period}</span></div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {p.features.map(f => <li key={f} className="flex items-start gap-2.5 text-[12px] font-body text-white/45"><Check size={13} className="text-primary mt-0.5 flex-shrink-0" />{f}</li>)}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className={`group relative block text-center font-display font-bold text-[11px] uppercase tracking-wider py-3.5 overflow-hidden transition-all ${p.hl ? "bg-primary text-[#060606] hover:shadow-lg hover:shadow-primary/20" : "border border-white/10 text-white/40 hover:border-primary/30 hover:text-primary"}`}>
                    <span className="relative z-10">Get Started →</span>
                    {p.hl && <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-32 px-6 lg:px-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <Reveal><div className="text-center mb-20"><Tag text="Get In Touch" /><h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Visit Us Today</h2></div></Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal direction="left">
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", val: "Tagore Rd, Karuvelipady, Thoppumpady, Kochi, Kerala 682005" },
                  { icon: Phone, label: "Phone", val: "+91 9633008768", href: "tel:+919633008768" },
                  { icon: Clock, label: "Hours", val: "6:00 AM – 10:30 PM · Mon–Sat" },
                ].map(({ icon: Ic, label, val, href }) => (
                  <div key={label} className="flex items-start gap-4 group p-4 glass glass-hover rounded-sm">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0"><Ic size={18} className="text-primary" /></div>
                    <div>
                      <p className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-white/25 mb-0.5">{label}</p>
                      {href ? <a href={href} className="font-body text-sm text-white/50 hover:text-primary transition-colors">{val}</a> : <p className="font-body text-sm text-white/50">{val}</p>}
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 pt-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-[#060606] font-display font-bold text-[11px] uppercase tracking-wider px-6 py-3 hover:shadow-lg hover:shadow-primary/20 transition-all"><MessageCircle size={14} /> WhatsApp</a>
                  <a href={IG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass glass-hover text-white/40 font-display font-bold text-[11px] uppercase tracking-wider px-6 py-3 hover:text-primary"><IgIcon s={14} /> Instagram</a>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="w-full h-[420px] overflow-hidden gradient-border rounded-sm">
                <iframe src="https://maps.google.com/maps?q=Old+Harbour+Fitness+Kochi+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-white/[0.03] pt-16 pb-8 px-6 lg:px-10 bg-[#040404]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="OH GYM" className="h-12 w-12 object-contain rounded" />
                <div className="leading-none"><p className="font-display text-sm font-black tracking-wider text-white">OLD HARBOUR</p><p className="font-display text-[9px] font-bold tracking-[0.3em] text-primary/70">FITNESS</p></div>
              </div>
              <p className="font-body text-xs text-white/25 leading-relaxed max-w-sm">A premium fitness space in Kochi focused on strength, discipline, and transformation. Join 500+ members who chose to level up.</p>
              <div className="flex gap-2.5 pt-1">
                <a href={IG} target="_blank" rel="noopener noreferrer" className="w-9 h-9 glass glass-hover flex items-center justify-center text-white/30 hover:text-primary"><IgIcon s={15} /></a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="w-9 h-9 glass glass-hover flex items-center justify-center text-white/30 hover:text-primary"><MessageCircle size={15} /></a>
              </div>
            </div>
            <div>
              <h5 className="font-display font-bold text-[9px] uppercase tracking-[0.3em] text-white/15 mb-4">Navigate</h5>
              <ul className="space-y-2.5">{NAV.map(({ l, id }) => <li key={id}><button onClick={() => go(id)} className="font-body text-xs text-white/30 hover:text-primary transition-colors tracking-wider">{l}</button></li>)}</ul>
            </div>
            <div>
              <h5 className="font-display font-bold text-[9px] uppercase tracking-[0.3em] text-white/15 mb-4">Contact</h5>
              <div className="space-y-2.5">
                <a href="tel:+919633008768" className="block font-body text-xs text-white/30 hover:text-primary transition-colors tracking-wider">+91 9633008768</a>
                <p className="font-body text-xs text-white/30 tracking-wider">6 AM – 10:30 PM</p>
                <p className="font-body text-xs text-white/30 tracking-wider leading-relaxed">Tagore Rd, Thoppumpady<br />Kochi 682005</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/[0.03] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-body text-[9px] text-white/10 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Old Harbour Fitness. All Rights Reserved.</p>
            <p className="font-body text-[9px] text-white/10 tracking-[0.3em]">ESTD 2022 · KOCHI</p>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WHATSAPP ══ */}
      <motion.a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/25 hover:scale-110 transition-transform duration-200 animate-pulse-ring">
        <MessageCircle size={24} className="text-white" fill="white" />
      </motion.a>
    </>
  );
}