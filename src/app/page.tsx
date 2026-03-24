import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-[#0e0e0e]/80 backdrop-blur-xl docked full-width top-0 z-50 fixed w-full shadow-[0_0_20px_rgba(0,229,255,0.3)]">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#00E5FF] active:scale-90 duration-100">bolt</span>
            <h1 className="font-headline font-black uppercase tracking-tighter text-3xl text-[#00E5FF] italic hover:skew-x-12 transition-transform">VOTE_NOW</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#484847] hover:text-[#ff51fa] hover:scale-110 transition-all cursor-pointer">sensors</span>
          </div>
        </div>
        <div className="bg-[#131313] h-[2px] w-full"></div>
      </header>

      <main className="pt-24 pb-32 px-4 md:px-8 max-w-4xl mx-auto relative overflow-hidden">
        {/* Abstract Background Flourishes */}
        <div className="absolute top-20 right-[-5%] w-64 h-64 bg-tertiary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-40 left-[-10%] w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        
        {/* Progress Header Section */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs font-bold">Live Challenge</span>
              <h2 className="font-headline font-extrabold text-4xl mt-1 tracking-tight">NEXT GEN ECO-SYSTEM</h2>
            </div>
            <div className="text-right">
              <span className="font-label text-primary-fixed uppercase tracking-widest text-sm font-bold">Votes Remaining: 3/3</span>
            </div>
          </div>
          <div className="w-full h-4 bg-surface-container-highest rounded-full overflow-hidden p-1 border border-outline-variant/20">
            <div className="h-full w-full bg-gradient-to-r from-primary to-primary-fixed rounded-full shadow-[0_0_10px_rgba(129,236,255,0.5)]"></div>
          </div>
        </section>

        {/* Dynamic Voting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* GLITCH ELEMENT OVERLAY */}
          <div className="absolute -top-4 -left-4 w-8 h-8 pointer-events-none opacity-50">
            <svg className="text-secondary-fixed stroke-current stroke-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L22 22M22 2L2 22" />
            </svg>
          </div>
          
          {/* Card 1: Eco-Friendly Packaging */}
          <div className="group relative bg-surface-container-high p-6 rounded-xl border-2 border-outline-variant/20 hover:border-primary transition-all duration-300 kinetic-glow-primary cursor-pointer overflow-hidden min-h-[220px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-8 h-8 bg-secondary-dim transform translate-x-4 -translate-y-4 rotate-45"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/30 group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl">eco</span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant/30">
                  <span className="material-symbols-outlined text-xs text-primary">trending_up</span>
                  <span className="font-label text-[10px] font-bold">428 VOTES</span>
                </div>
              </div>
              <h3 className="font-headline font-bold text-2xl mb-2 text-on-surface group-hover:text-primary transition-colors">Eco-Friendly Packaging</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Biodegradable materials that transform into virtual rewards when recycled.</p>
            </div>
            <button className="w-full mt-6 py-4 bg-surface-container-highest rounded-lg border-b-4 border-outline-variant font-label font-black text-sm uppercase tracking-widest group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary-dim transition-all active:translate-y-1 active:border-b-0">
              CAST VOTE
            </button>
          </div>

          {/* Card 2: Subscription Model */}
          <div className="group relative bg-surface-container-high p-6 rounded-xl border-2 border-outline-variant/20 hover:border-tertiary transition-all duration-300 kinetic-glow-tertiary cursor-pointer overflow-hidden min-h-[220px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-8 h-8 bg-primary transform translate-x-4 -translate-y-4 rotate-45"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/30 group-hover:bg-tertiary-container transition-colors">
                  <span className="material-symbols-outlined text-tertiary group-hover:text-on-tertiary-container text-3xl">card_membership</span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant/30">
                  <span className="material-symbols-outlined text-xs text-tertiary">stars</span>
                  <span className="font-label text-[10px] font-bold">312 VOTES</span>
                </div>
              </div>
              <h3 className="font-headline font-bold text-2xl mb-2 text-on-surface group-hover:text-tertiary transition-colors">Subscription Model</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Tiered access with seasonal drops and exclusive community lounge invites.</p>
            </div>
            <button className="w-full mt-6 py-4 bg-surface-container-highest rounded-lg border-b-4 border-outline-variant font-label font-black text-sm uppercase tracking-widest group-hover:bg-tertiary group-hover:text-on-tertiary group-hover:border-tertiary-fixed transition-all active:translate-y-1 active:border-b-0">
              CAST VOTE
            </button>
          </div>

          {/* Card 3: In-App Tokens */}
          <div className="group relative bg-surface-container-high p-6 rounded-xl border-2 border-outline-variant/20 hover:border-secondary transition-all duration-300 shadow-[0_0_20px_rgba(253,139,0,0.2)] cursor-pointer overflow-hidden min-h-[220px] flex flex-col justify-between md:col-span-2">
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">toll</span>
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/30 group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary-container text-3xl">token</span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant/30">
                  <span className="material-symbols-outlined text-xs text-secondary">bolt</span>
                  <span className="font-label text-[10px] font-bold">1.2K VOTES</span>
                </div>
              </div>
              <div className="max-w-md">
                <h3 className="font-headline font-bold text-2xl mb-2 text-on-surface group-hover:text-secondary transition-colors">In-App Tokens</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">A decentralized currency system for trading custom skins and priority access features within the app ecosystem.</p>
              </div>
            </div>
            <button className="w-full mt-8 py-4 bg-surface-container-highest rounded-lg border-b-4 border-outline-variant font-label font-black text-sm uppercase tracking-widest group-hover:bg-secondary group-hover:text-on-secondary group-hover:border-secondary-dim transition-all active:translate-y-1 active:border-b-0">
              CAST VOTE
            </button>
          </div>
        </div>

        {/* Section: Crowd Favorites */}
        <section className="mt-16 bg-surface-container-low rounded-3xl p-8 relative overflow-hidden border border-outline-variant/10">
          <div className="bg-grid-pattern absolute inset-0 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-tertiary"></div>
              <h3 className="font-label uppercase font-black tracking-widest text-on-surface">Crowd Favorites</h3>
            </div>
            <div className="space-y-4">
              {/* List Item 1 */}
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border-l-4 border-primary group hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-label font-bold text-primary">#1</div>
                  <span className="font-body font-bold text-on-surface">Augmented Reality Filters</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-label text-xs text-outline font-bold">892 VOTES</span>
                  <button className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              
              {/* List Item 2 */}
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border-l-4 border-tertiary group hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-label font-bold text-tertiary">#2</div>
                  <span className="font-body font-bold text-on-surface">Voice-Controlled UI</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-label text-xs text-outline font-bold">654 VOTES</span>
                  <button className="w-10 h-10 rounded-full bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              
              {/* List Item 3 */}
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border-l-4 border-secondary group hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-label font-bold text-secondary">#3</div>
                  <span className="font-body font-bold text-on-surface">Haptic Feedback Pro</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-label text-xs text-outline font-bold">521 VOTES</span>
                  <button className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informational Footer Callout */}
        <div className="mt-12 p-8 border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col md:flex-row items-center gap-6">
          <div className="flex -space-x-3">
            {/* ESLint config disablesimg tag warning, but good to use next/image in the future. Kept as img for exact HTML translation. */}
            <img className="w-12 h-12 rounded-full border-2 border-surface" alt="profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb-a_oDCxt7fOvGrVGSQi8inkg4u7bOfXWurUSPsv5myzD7Wo5x3PgoL1vhtqHXI-8d-0lbYeX-ZFXKnsoHe7fPCoU8fOhBa6Ic6c9aoZ3qQYMHq-ZPuf3Qc6PIAAbkqcoVsI0adoldIhjw6nUJqa5NHRRG_dByMOcVOLF_4Yy5U-KqQbjkZ3oOpN-ze3JudYuIV8lqG2DiU6yA5lGJFbJD_85xrD_-NsV2_Fczko4f2OWx31mI-vo8RKRSQbCtR_EDoM2iG4evql0"/>
            <img className="w-12 h-12 rounded-full border-2 border-surface" alt="profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABoGMWuDP0k6AYZ9VKjYUqf91O0uhIjNrtDRiyNoQ3KXZ3gEPx5yB_9-fMZ2HnOm0Vy4TtMVcYPgeaAnvR5WXXaPPFlqySMx7G340vsrsjVpdng7AL_ZzBOS09ltsS-N-QCz9zJ6HQ7TZVDrzeqsEIuDtlN3ZP5m8bd78HbCqneBEDlOecUrtSz1nWvgLvm9Zky-Djb7sJ7nD_bIo_m1mgsBAjJoTzF90gOq4LlUMKoEMPKkPJWXkXQ1uG7vCAJlUXFS7lYWDxcWFi"/>
            <img className="w-12 h-12 rounded-full border-2 border-surface" alt="profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7_QiSkkIfbJpG0BWdiIQ324lBnSvaLBy2e2pf8LEgFODI7WQOyYwCbm5qTF4A0Onm-kOrmKOcL6oIsY_dPZQZzWkN3wgymFWS6kkLOZEjyyctBMXNbVQNC2xM_tdWBNGl-C2uPcxQFGw3ZXmF8_153T7BG9O0h_u08OYHNN82YvICgBlz2UD4-bUhZPI5n60la1lPYjOWVPC3npJRXTCeAs-4EnsBKS3LKnMCpSxMWwpNWdHKWYs7gxGgGlsMRHZhPZUV948VTZl4"/>
          </div>
          <p className="text-on-surface-variant text-sm font-medium text-center md:text-left">
            Join <span className="text-on-surface font-bold">12,482 others</span> who have already submitted their votes this season. Next round starts in <span className="text-primary font-label font-bold">14:22:05</span>.
          </p>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-8 px-4 bg-[#0e0e0e]/90 backdrop-blur-lg rounded-t-[2rem] border-t-2 border-[#484847]/20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a className="flex flex-col items-center justify-center text-[#484847] px-6 py-2 hover:text-[#81ecff] transition-colors active:scale-95 duration-200 ease-out" href="#">
          <span className="material-symbols-outlined mb-1">sensors</span>
          <span className="font-label font-bold text-[10px] tracking-[0.2em] uppercase">JOIN</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#20201f] text-[#ff51fa] rounded-2xl px-6 py-2 shadow-[0_0_15px_rgba(255,81,250,0.4)] active:scale-95 duration-200 ease-out" href="#">
          <span className="material-symbols-outlined mb-1">how_to_vote</span>
          <span className="font-label font-bold text-[10px] tracking-[0.2em] uppercase">VOTE</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#484847] px-6 py-2 hover:text-[#81ecff] transition-colors active:scale-95 duration-200 ease-out" href="#">
          <span className="material-symbols-outlined mb-1">leaderboard</span>
          <span className="font-label font-bold text-[10px] tracking-[0.2em] uppercase">RESULTS</span>
        </a>
      </nav>
    </>
  );
}
