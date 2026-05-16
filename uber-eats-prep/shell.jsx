// shell.jsx — Pantry app shell: shared tokens, bottom nav, home-screen chrome.
// Pantry is a fictional food-delivery brand used as the host app.

const PANTRY = {
  // app chrome
  bg: '#FAFAF7',
  ink: '#15140F',
  ink2: '#5C5A52',
  ink3: '#9B988F',
  line: '#E8E5DE',
  card: '#FFFFFF',
  // signature accent — warm coral
  accent: '#E8482B',
  accentTint: '#FDECE7',
  // restaurant mode (the "old" thing)
  restoTile: '#FFE7C2',
  // currency
  fmt: (n) => '$' + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, '')
};

// ── Pantry wordmark (original) ───────────────────────────────────────────
// Lowercase chunky display word; the dot of the i sits as a small filled
// circle. No real-brand resemblance.
function PantryMark({ color = PANTRY.ink, size = 22 }) {
  return (
    <span style={{
      fontFamily: '"Söhne Breit", "DM Sans", -apple-system, system-ui',
      fontWeight: 800, fontSize: size, letterSpacing: -0.8,
      color, lineHeight: 1, display: 'inline-flex', alignItems: 'center'
    }}>
      pantry<span style={{
        width: size * 0.22, height: size * 0.22, borderRadius: '50%',
        background: PANTRY.accent, marginLeft: size * 0.08, marginBottom: size * 0.55
      }} />
    </span>);

}

// ── Mode pills row ───────────────────────────────────────────────────────
function ModePills({ active = 'All', highlight, accent = PANTRY.accent }) {
  // Adding a NEW pill for meal-prep ("Prep") as one of the entry points.
  // `highlight` makes the new pill stand out (subtle dot or fill).
  const pills = [
  { id: 'All', icon: <BagIcon /> },
  { id: 'Rides', icon: <CarIcon /> },
  { id: 'Grocery', icon: <BananaIcon /> },
  { id: 'Prep', icon: <LeafIcon color={accent} />, isNew: true },
  { id: 'Conv.', icon: <SnackIcon /> }];

  return (
    <div style={{
      display: 'flex', gap: 8, padding: '3px 16px', overflowX: 'auto',
      scrollbarWidth: 'none'
    }}>
      {pills.map((p) => {
        const isActive = p.id === active;
        const isHi = p.id === highlight;
        return (
          <div key={p.id} style={{
            flex: '0 0 auto', display: 'flex', alignItems: 'center',

            background: isActive ? '#F1EFE8' : '#fff',
            border: `2px solid ${isHi ? accent : (isActive ? 'transparent' : '#EAE7DF')}`,
            fontFamily: '-apple-system, system-ui', fontSize: 15,
            fontWeight: isActive ? 600 : 500, color: PANTRY.ink,
            position: 'relative', padding: "7px 13px 7px 9px", gap: "6px", flexDirection: "row", lineHeight: "1", textAlign: "left", borderRadius: "999px"
          }}>
            {p.icon}
            <span>{p.id}</span>
            {p.isNew && !isHi &&
            <span style={{
              position: 'absolute', top: 6, right: 8,
              width: 7, height: 7, borderRadius: '50%', background: accent
            }} />
            }
          </div>);

      })}
    </div>);

}

// Glyph icons — minimal flat shapes, original
function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 7h12l-1 9.5a1.5 1.5 0 0 1-1.5 1.4h-7a1.5 1.5 0 0 1-1.5-1.4L4 7z" fill="#F7C04A" />
      <path d="M7 7V5.5a3 3 0 0 1 6 0V7" stroke="#15140F" strokeWidth="1.5" fill="none" />
    </svg>);

}
function CarIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
      <rect x="2" y="6" width="18" height="7" rx="2" fill="#D9D5C8" />
      <path d="M5 6l2-3h8l2 3" stroke="#15140F" strokeWidth="1.4" fill="#fff" />
      <circle cx="6.5" cy="14" r="2" fill="#15140F" /><circle cx="15.5" cy="14" r="2" fill="#15140F" />
    </svg>);

}
function BananaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 4c0 8 3 13 12 13-2-1-3-3-3-5 4 0 4-6 1-6 0 2-2 3-4 3-4 0-6-1-6-5z" fill="#FFD23F" stroke="#15140F" strokeWidth="1.2" />
    </svg>);

}
function LeafIcon({ color = '#1F8A5B' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M16 3c-7 0-13 4-13 11 0 1.5.5 3 1.5 4 1-7 7-11 11-12-1 5-5 9-9 10 7 1 11-4 12-9 1-2 0-4-2.5-4z" fill={color} />
    </svg>);

}
function SnackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 6l4-2 5 1 5-1-2 5 1 5-5-1-4 2-2-4 1-5z" fill="#E8482B" />
      <path d="M7 9l1 1m4-2l1 1m-3 2l1 1" stroke="#fff" strokeWidth="1.2" />
    </svg>);

}

// ── Bottom tab bar ───────────────────────────────────────────────────────
function BottomBar({ active = 'home' }) {
  const tab = (id, icon, label) => {
    const on = id === active;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flex: 1 }}>
        <div style={{
          width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: on ? PANTRY.ink : PANTRY.ink3
        }}>{icon}</div>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: 0.2,
          color: on ? PANTRY.ink : PANTRY.ink3
        }}>{label}</div>
      </div>);

  };
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      paddingBottom: 22, paddingTop: 8, background: 'rgba(255,255,255,0.94)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderTop: `1px solid ${PANTRY.line}`, display: 'flex'
    }}>
      {tab('home',
      <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor"><path d="M11 2L2 10v10h6v-7h6v7h6V10L11 2z" /></svg>,
      'Home')}
      {tab('browse',
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="3" /><circle cx="11" cy="11" r="8" /><path d="M11 1v3M11 18v3M1 11h3M18 11h3" /></svg>,
      'Browse')}
      {tab('search',
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="6" /><path d="M15 15l5 5" /></svg>,
      'Search')}
      {tab('cart',
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 4h3l2 12h11l2-8H7" /><circle cx="9" cy="20" r="1.5" fill="currentColor" /><circle cx="18" cy="20" r="1.5" fill="currentColor" /></svg>,
      'Cart')}
      {tab('me',
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="8" r="4" /><path d="M3 20c1-4 5-6 8-6s7 2 8 6" /></svg>,
      'You')}
    </div>);

}

// ── Top bar (address + bell) ─────────────────────────────────────────────
function HomeHeader({ address = '1669 Jerrold Ave' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 16px 10px', height: "22.5px", gap: "0px"
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{
          fontFamily: '-apple-system, system-ui', fontSize: 19, fontWeight: 700,
          color: PANTRY.ink, letterSpacing: -0.3
        }}>{address}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={PANTRY.ink} strokeWidth="2"><path d="M3 5l4 4 4-4" /></svg>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={PANTRY.ink} strokeWidth="1.6"><path d="M11 3a6 6 0 0 0-6 6v4l-2 2v1h16v-1l-2-2V9a6 6 0 0 0-6-6z" /><path d="M9 19a2 2 0 0 0 4 0" /></svg>
      </div>
    </div>);

}

// ── Filter chip row ──────────────────────────────────────────────────────
function FilterChips({ chips = ['Pickup', 'Offers', 'Under 30 min', 'Free delivery'] }) {
  return (
    <div style={{ display: 'flex', gap: 8, padding: '8px 16px 4px', overflowX: 'auto' }}>
      {chips.map((c) =>
      <div key={c} style={{
        flex: '0 0 auto', padding: '7px 14px', borderRadius: 999,
        background: '#F1EFE8', fontSize: 14, fontWeight: 500, color: PANTRY.ink
      }}>{c}</div>
      )}
    </div>);

}

// ── Category tile (emoji-style with custom illustrations) ────────────────
function CategoryTile({ label, children, bg, active }) {
  return (
    <div style={{
      flex: '0 0 auto', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 6, width: 78
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 16, background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: active ? `2px solid ${PANTRY.ink}` : 'none'
      }}>{children}</div>
      <div style={{
        fontSize: 12, fontWeight: 600, color: PANTRY.ink, textAlign: 'center'
      }}>{label}</div>
    </div>);

}

// Generic placeholder-photo block — striped subtle pattern + caption
function PhotoBlock({ caption, hue = 30, sat = 12, ratio = 1, radius = 14, badge }) {
  return (
    <div style={{ ...{
        position: 'relative', width: '100%', aspectRatio: ratio,
        borderRadius: radius, overflow: 'hidden',
        background: `oklch(${85 - sat * 0.2}% ${sat * 0.005} ${hue})`,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 8px, rgba(0,0,0,0.04) 8px 9px)`,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
        padding: 8
      }, background: "repeating-linear-gradient(135deg, transparent 0px, transparent 8px, rgba(0, 0, 0, 0.04) 8px, rgba(0, 0, 0, 0.04) 9px) 0% 0% / cover oklch(0.814 0.09 30)", width: "110px" }}>
      {badge && <div style={{
        position: 'absolute', top: 8, left: 8, padding: '4px 8px',
        background: '#fff', borderRadius: 8, fontSize: 11, fontWeight: 700
      }}>{badge}</div>}
      <div style={{
        fontFamily: 'ui-monospace, "SF Mono", monospace',
        fontSize: 9, color: 'rgba(0,0,0,0.45)', letterSpacing: 0.4
      }}>{caption}</div>
    </div>);

}

Object.assign(window, {
  PANTRY, PantryMark, ModePills, BottomBar, HomeHeader,
  FilterChips, CategoryTile, PhotoBlock,
  BagIcon, CarIcon, BananaIcon, LeafIcon, SnackIcon,
  BaseRestaurantHome, PromoVoucher, LaunchScreen,
});

// ── BaseRestaurantHome ─────────────────────────────────────────────────
// The "before" home — normal restaurant-ordering view with NO meal-prep
// banner. Used as the dimmed background behind the launch promo modal so
// the promo reads as the first announcement of the new feature.
function BaseRestaurantHome() {
  return (
    <div style={{ background: PANTRY.bg, minHeight: '100%', paddingTop: 54 }}>
      <HomeHeader />
      <div style={{ height: 4 }} />
      <ModePills active="All" />

      <div style={{ display: 'flex', gap: 8, padding: '16px 16px 6px', overflowX: 'auto' }}>
        <CategoryTile label="Dine Out" bg="#EEEBE2"><span style={{ fontSize: 28 }}>🍽️</span></CategoryTile>
        <CategoryTile label="Pizza" bg="#FDE2C2"><span style={{ fontSize: 28 }}>🍕</span></CategoryTile>
        <CategoryTile label="Sushi" bg="#FDD9D2"><span style={{ fontSize: 28 }}>🍣</span></CategoryTile>
        <CategoryTile label="Grocery" bg="#FFF4C6"><span style={{ fontSize: 28 }}>🥬</span></CategoryTile>
        <CategoryTile label="Healthy" bg="#D7EBD8"><span style={{ fontSize: 28 }}>🥗</span></CategoryTile>
        <CategoryTile label="Ice Cream" bg="#FFD9CC"><span style={{ fontSize: 28 }}>🍨</span></CategoryTile>
      </div>

      <FilterChips />

      <div style={{ padding: '14px 16px 4px' }}>
        <div style={{
          fontFamily: '-apple-system, system-ui', fontSize: 22, fontWeight: 700,
          color: PANTRY.ink, letterSpacing: -0.4,
        }}>Featured on Pantry</div>
      </div>
      <div style={{ display: 'flex', gap: 12, padding: '8px 16px 14px', overflowX: 'auto' }}>
        {[
          { name: 'Mamahuhu', tag: 'Buy 1, get 1', hue: 160 },
          { name: 'Papalote', tag: '$8 off $40+', hue: 25 },
          { name: 'Souvla',   tag: 'New',          hue: 50 },
        ].map(r => (
          <div key={r.name} style={{ flex: '0 0 240px' }}>
            <PhotoBlock caption={`[ ${r.name.toLowerCase()} photo ]`} hue={r.hue} sat={20} ratio={1.4} badge={r.tag} />
            <div style={{ paddingTop: 8 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: PANTRY.ink }}>{r.name}</div>
              <div style={{ fontSize: 12, color: PANTRY.ink2, marginTop: 2 }}>Lowest delivery fee · 10 min</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '6px 16px 4px' }}>
        <div style={{
          fontFamily: '-apple-system, system-ui', fontSize: 22, fontWeight: 700,
          color: PANTRY.ink, letterSpacing: -0.4,
        }}>Places you might like</div>
      </div>
      <div style={{ display: 'flex', gap: 12, padding: '8px 16px 100px', overflowX: 'auto' }}>
        {[
          { name: 'Total Wine', tag: '100+ items on sale', hue: 200 },
          { name: 'Dianda',     tag: '$5 off',             hue: 18 },
        ].map(r => (
          <div key={r.name} style={{ flex: '0 0 200px' }}>
            <PhotoBlock caption={`[ ${r.name.toLowerCase()} ]`} hue={r.hue} sat={20} ratio={1.2} badge={r.tag} />
            <div style={{ paddingTop: 8 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: PANTRY.ink }}>{r.name}</div>
              <div style={{ fontSize: 12, color: PANTRY.ink2, marginTop: 2 }}>Lowest delivery fee · 15 min</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PromoVoucher ───────────────────────────────────────────────────────
// Ticket-style modal card. Each variation passes brand-themed props.
function PromoVoucher({
  icon, iconBg, eyebrow, titleNode, body, meta, ctaLabel,
  ctaBg, ctaFg = '#fff', titleStyle, eyebrowStyle, metaStyle,
  bodyFont = '-apple-system, system-ui',
  cardBg = '#fff', notchBg = 'rgba(0,0,0,0.55)',
}) {
  return (
    <div style={{
      position: 'relative', width: '88%', maxWidth: 340,
      borderRadius: 22, background: cardBg, overflow: 'visible',
      boxShadow: '0 24px 60px rgba(0,0,0,0.25), 0 4px 14px rgba(0,0,0,0.12)',
      fontFamily: bodyFont,
    }}>
      {/* close chevron */}
      <div style={{
        position: 'absolute', top: 14, right: 14,
        width: 28, height: 28, borderRadius: 14,
        background: 'rgba(0,0,0,0.04)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2,
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#000" strokeWidth="1.6"><path d="M3 4l3 3 3-3"/></svg>
      </div>

      <div style={{ padding: '26px 22px 22px' }}>
        <div style={{
          width: 92, height: 92, borderRadius: '50%',
          background: iconBg, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          margin: '4px auto 22px',
        }}>{icon}</div>

        {eyebrow && (
          <div style={{
            fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase',
            marginBottom: 10, color: 'rgba(0,0,0,0.5)', ...eyebrowStyle,
          }}>{eyebrow}</div>
        )}

        <div style={{
          fontSize: 26, fontWeight: 800, lineHeight: 1.1,
          letterSpacing: -0.6, color: '#15140F', marginBottom: 14,
          ...titleStyle,
        }}>{titleNode}</div>

        <div style={{
          fontSize: 14, lineHeight: 1.5, color: '#5C5A52',
        }}>{body}</div>
      </div>

      {/* ticket notches + dashed divider */}
      <div style={{ position: 'relative', height: 1 }}>
        <div style={{
          position: 'absolute', left: -10, top: -10,
          width: 20, height: 20, borderRadius: 10, background: notchBg,
        }} />
        <div style={{
          position: 'absolute', right: -10, top: -10,
          width: 20, height: 20, borderRadius: 10, background: notchBg,
        }} />
        <div style={{
          position: 'absolute', left: 14, right: 14, top: 0,
          borderTop: `1.5px dashed rgba(0,0,0,0.2)`,
        }} />
      </div>

      <div style={{ padding: '18px 22px 22px' }}>
        {meta && (
          <div style={{
            textAlign: 'center', fontSize: 13, color: 'rgba(0,0,0,0.6)',
            marginBottom: 14, ...metaStyle,
          }}>{meta}</div>
        )}
        <div style={{
          background: ctaBg, color: ctaFg, borderRadius: 999,
          padding: '15px 20px', textAlign: 'center',
          fontSize: 15, fontWeight: 700, letterSpacing: -0.2,
        }}>{ctaLabel}</div>
      </div>
    </div>
  );
}

// ── LaunchScreen ───────────────────────────────────────────────────────
function LaunchScreen({ voucher, notchBg = '#1d1d1d' }) {
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ position: 'relative', minHeight: '100%' }}>
        <BaseRestaurantHome />
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)',
          zIndex: 5,
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '40px 0',
        }}>
          {voucher}
        </div>
      </div>
      <BottomBar active="home" />
    </IOSDevice>
  );
}