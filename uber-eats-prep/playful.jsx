// playful.jsx — Variation C: "Plate" sub-brand
// Audience: wellness-curious generalist, mid-twenties, time-poor.
// Visual: bold chunky display sans, bright fresh green + sun yellow,
// rounded edges, energetic and optimistic.
// Onboarding angle: persona quiz ("which eater are you?").

const PLATE = {
  bg: '#F2F4E7',          // soft pistachio cream
  ink: '#0C1A14',
  ink2: '#3F4F46',
  ink3: '#838F85',
  accent: '#2EA567',      // bright fresh green
  accentDeep: '#16633D',
  yellow: '#F4D247',
  pink: '#FFB59E',
  card: '#FFFFFF',
  line: '#E1E5D2',
  display: '"DM Sans", "Söhne Breit", -apple-system, system-ui',
  sans: '-apple-system, system-ui',
};

// ── C1: Home with new entry point ────────────────────────────────────────
function PlateHome() {
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: PANTRY.bg, minHeight: '100%', paddingTop: 54 }}>
        <HomeHeader />
        <div style={{ height: 4 }} />
        <ModePills active="All" highlight="Prep" accent={PLATE.accent} />

        <div style={{ display: 'flex', gap: 8, padding: '16px 16px 6px', overflowX: 'auto' }}>
          <CategoryTile label="Dine Out" bg="#EEEBE2">
            <span style={{ fontSize: 28 }}>🍽️</span>
          </CategoryTile>
          <CategoryTile label="Pizza" bg="#FDE2C2">
            <span style={{ fontSize: 28 }}>🍕</span>
          </CategoryTile>
          {/* Plate tile — bright green with playful bowl icon */}
          <CategoryTile label="Plate" bg={PLATE.accent} active>
            <div style={{ position: 'relative', width: 36, height: 32 }}>
              {/* Plate/bowl */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 16, borderRadius: '0 0 18px 18px',
                background: '#fff',
              }} />
              {/* Yolk dot */}
              <div style={{
                position: 'absolute', top: 6, left: 11, width: 14, height: 14,
                borderRadius: '50%', background: PLATE.yellow,
              }} />
            </div>
          </CategoryTile>
          <CategoryTile label="Grocery" bg="#FFF4C6">
            <span style={{ fontSize: 28 }}>🥬</span>
          </CategoryTile>
          <CategoryTile label="Healthy" bg="#D7EBD8">
            <span style={{ fontSize: 28 }}>🥗</span>
          </CategoryTile>
          <CategoryTile label="Ice Cream" bg="#FFD9CC">
            <span style={{ fontSize: 28 }}>🍨</span>
          </CategoryTile>
        </div>

        <FilterChips />

        {/* Plate entry banner — bold, optimistic, big number */}
        <div style={{ padding: '12px 16px 6px' }}>
          <div style={{
            background: PLATE.accent, borderRadius: 24, padding: 0,
            overflow: 'hidden', position: 'relative',
          }}>
            <div style={{ padding: '20px 20px 18px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 10px', borderRadius: 999,
                background: PLATE.yellow, color: PLATE.ink,
                fontFamily: PLATE.display, fontSize: 10, fontWeight: 800,
                letterSpacing: 0.5, textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: PLATE.ink }} />
                NEW · WEEKLY DROPS
              </div>
              <div style={{
                fontFamily: PLATE.display, fontSize: 38, lineHeight: 0.92,
                color: '#fff', letterSpacing: -1.5, fontWeight: 900,
              }}>
                Fuel<br/>
                your<br/>
                week.
              </div>
              <div style={{
                fontSize: 13, color: 'rgba(255,255,255,0.85)',
                marginTop: 12, maxWidth: 200, lineHeight: 1.4,
              }}>
                5 chef-made meals delivered every Tuesday. From $9.20.
              </div>
              <div style={{
                marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 18px', borderRadius: 999,
                background: '#fff', color: PLATE.accentDeep,
                fontFamily: PLATE.display, fontSize: 14, fontWeight: 800,
                letterSpacing: -0.2,
              }}>
                Try Plate
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={PLATE.accentDeep} strokeWidth="2.4"><path d="M2 6h8M7 3l3 3-3 3"/></svg>
              </div>
            </div>

            {/* Big decorative dish */}
            <div style={{
              position: 'absolute', right: -40, bottom: -40, width: 200, height: 200,
            }}>
              {/* Outer plate */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: '#FFFBE8', boxShadow: 'inset 0 0 0 8px #fff',
              }} />
              {/* Yellow yolk */}
              <div style={{
                position: 'absolute', top: 56, left: 70, width: 60, height: 60,
                borderRadius: '50%', background: PLATE.yellow,
              }} />
              {/* Pink "salmon" stripe */}
              <div style={{
                position: 'absolute', top: 90, left: 36, width: 80, height: 20,
                borderRadius: 10, background: PLATE.pink, transform: 'rotate(-12deg)',
              }} />
              {/* Greens */}
              <div style={{
                position: 'absolute', top: 60, left: 28, width: 18, height: 36,
                borderRadius: 9, background: PLATE.accentDeep, transform: 'rotate(20deg)',
              }} />
            </div>
          </div>
        </div>

        {/* Featured restaurants */}
        <div style={{ padding: '14px 16px 4px' }}>
          <div style={{
            fontFamily: '-apple-system, system-ui', fontSize: 22, fontWeight: 700,
            color: PANTRY.ink, letterSpacing: -0.4,
          }}>Featured on Pantry</div>
        </div>
        <div style={{ display: 'flex', gap: 12, padding: '8px 16px 100px', overflowX: 'auto' }}>
          {[
            { name: 'Mamahuhu', tag: 'Buy 1, get 1', hue: 160 },
            { name: 'Papalote', tag: '$8 off $40+', hue: 25 },
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
      </div>
      <BottomBar active="home" />
    </IOSDevice>
  );
}

// ── C2: Promo / onboarding hero — persona quiz ────────────────────────────
function PlatePromo() {
  const personas = [
    { id: 'gym', label: 'Gym rat', sub: 'High protein, lots of meat',  bg: PLATE.accent,    fg: '#fff' },
    { id: 'busy', label: 'Always-on', sub: 'Fast reheat, no thinking', bg: PLATE.yellow,    fg: PLATE.ink },
    { id: 'plant', label: 'Plant club', sub: 'Veggies, beans, grains', bg: PLATE.pink,      fg: PLATE.ink },
    { id: 'foodie', label: 'Food curious', sub: 'Variety, surprise me', bg: PLATE.ink,      fg: PLATE.yellow },
  ];
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: PLATE.bg, minHeight: '100%', paddingTop: 54 }}>
        {/* Top strip */}
        <div style={{
          padding: '10px 16px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: PLATE.display, fontWeight: 900, fontSize: 22,
            color: PLATE.ink, letterSpacing: -0.6,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: PLATE.accent, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 5, left: 5, width: 12, height: 12, borderRadius: '50%', background: PLATE.yellow }} />
            </div>
            Plate
          </div>
          <div style={{
            padding: '6px 10px', borderRadius: 999, background: '#fff',
            border: `1px solid ${PLATE.line}`, fontSize: 12, fontWeight: 700,
            color: PLATE.ink2,
          }}>1 / 3</div>
        </div>

        {/* Hero */}
        <div style={{ padding: '24px 24px 12px' }}>
          <div style={{
            fontFamily: PLATE.display, fontSize: 44, lineHeight: 0.94,
            color: PLATE.ink, letterSpacing: -1.5, fontWeight: 900,
          }}>
            Which eater<br/>are you?
          </div>
          <div style={{
            fontSize: 14, lineHeight: 1.5, color: PLATE.ink2,
            marginTop: 10, maxWidth: 320,
          }}>
            Pick one and we'll tune your first box. You can always change it later.
          </div>
        </div>

        {/* Persona grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
          padding: '12px 16px',
        }}>
          {personas.map((p, i) => (
            <div key={p.id} style={{
              background: p.bg, borderRadius: 22, padding: '16px 14px 14px',
              minHeight: 150, position: 'relative', overflow: 'hidden',
              border: i === 0 ? `3px solid ${PLATE.ink}` : '3px solid transparent',
            }}>
              {/* Big illustrative blob per persona */}
              <div style={{
                position: 'absolute', right: -16, top: -16, width: 72, height: 72,
                borderRadius: '50%',
                background: p.id === 'gym' ? PLATE.yellow : p.id === 'busy' ? PLATE.accent
                          : p.id === 'plant' ? PLATE.accentDeep : PLATE.pink,
                opacity: 0.9,
              }} />
              <div style={{
                fontFamily: PLATE.display, fontSize: 22, fontWeight: 900,
                color: p.fg, letterSpacing: -0.6, lineHeight: 1.05,
                marginBottom: 6, position: 'relative',
              }}>{p.label}</div>
              <div style={{
                fontSize: 12, lineHeight: 1.35,
                color: p.fg, opacity: 0.85, position: 'relative',
              }}>{p.sub}</div>
              {i === 0 && (
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  width: 26, height: 26, borderRadius: 13, background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={PLATE.ink} strokeWidth="2.4"><path d="M2 6l3 3 5-6"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bonus stripe + CTA */}
        <div style={{ padding: '12px 16px 0' }}>
          <div style={{
            background: PLATE.yellow, borderRadius: 14, padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              fontFamily: PLATE.display, fontSize: 18, fontWeight: 900,
              color: PLATE.ink, letterSpacing: -0.4,
            }}>🎁</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: PLATE.ink }}>$30 off your first box</div>
              <div style={{ fontSize: 11, color: PLATE.ink2 }}>Auto-applied at checkout</div>
            </div>
          </div>

          <div style={{
            marginTop: 14, background: PLATE.ink, color: '#fff', borderRadius: 999,
            padding: '16px 20px', textAlign: 'center',
            fontFamily: PLATE.display, fontWeight: 800, fontSize: 16,
            letterSpacing: -0.3,
          }}>
            Next: pick your meals →
          </div>
        </div>
      </div>
      <BottomBar active="browse" />
    </IOSDevice>
  );
}

// ── C3: Meal-prep landing — vibrant grid ────────────────────────────────
function PlateLanding({ cadence = 5 }) {
  const PRICE = 9.99;
  const meals = [
    { n: 'Power Bowl', sub: 'Steak, sweet potato, kale', kcal: 620, badge: 'TOP PICK',     hue: 28,  badgeBg: PLATE.yellow,   badgeFg: PLATE.ink },
    { n: 'Sunshine Salmon',  sub: 'Salmon, rice, mango salsa', kcal: 540, badge: 'NEW',     hue: 18,  badgeBg: PLATE.pink,     badgeFg: PLATE.ink },
    { n: 'Green Goddess',    sub: 'Chickpea, herbs, tahini', kcal: 470, badge: 'VEG',       hue: 130, badgeBg: PLATE.accent,   badgeFg: '#fff' },
    { n: 'Asado Bowl',       sub: 'Carne asada, plantain',   kcal: 690, badge: '+10g pro',  hue: 22,  badgeBg: PLATE.accentDeep, badgeFg: '#fff' },
    { n: 'Sesame Tofu',      sub: 'Crispy tofu, soba',       kcal: 480, badge: 'VEG',       hue: 90,  badgeBg: PLATE.accent,   badgeFg: '#fff' },
    { n: 'Carne Burrito Bowl', sub: 'Black beans, cilantro lime rice',  kcal: 720, badge: '🔥', hue: 12, badgeBg: PLATE.ink, badgeFg: PLATE.yellow },
  ];
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: PLATE.bg, minHeight: '100%', paddingTop: 54 }}>
        <div style={{
          padding: '8px 16px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: PLATE.display, fontWeight: 900, fontSize: 22,
            color: PLATE.ink, letterSpacing: -0.6,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: PLATE.accent, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 5, left: 5, width: 12, height: 12, borderRadius: '50%', background: PLATE.yellow }} />
            </div>
            Plate
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{
              padding: '6px 12px', borderRadius: 999,
              background: '#fff', border: `1px solid ${PLATE.line}`,
              fontSize: 12, fontWeight: 700, color: PLATE.ink,
            }}>Tue · May 21</div>
          </div>
        </div>

        {/* Plan summary */}
        <div style={{ padding: '14px 16px 6px' }}>
          <div style={{
            background: PLATE.ink, borderRadius: 22, padding: '18px 18px 16px',
            color: '#fff', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              fontFamily: PLATE.display, fontSize: 11, fontWeight: 800,
              letterSpacing: 1.2, color: PLATE.yellow, textTransform: 'uppercase',
            }}>Your box</div>
            <div style={{
              display: 'flex', alignItems: 'flex-end', gap: 10, marginTop: 6,
            }}>
              <div style={{
                fontFamily: PLATE.display, fontSize: 44, lineHeight: 0.9,
                fontWeight: 900, letterSpacing: -1.8, color: '#fff',
              }}>{cadence}</div>
              <div style={{
                paddingBottom: 6,
                fontFamily: PLATE.display, fontSize: 20, fontWeight: 700,
                letterSpacing: -0.4, color: '#fff', opacity: 0.85,
              }}>meals / week</div>
            </div>
            <div style={{
              marginTop: 6, fontSize: 13, color: 'rgba(255,255,255,0.7)',
            }}>
              {PANTRY.fmt(cadence * PRICE)} / week · {PANTRY.fmt(PRICE)} per meal
            </div>
            <div style={{
              position: 'absolute', top: 14, right: 14,
              padding: '6px 12px', borderRadius: 999,
              background: PLATE.yellow, color: PLATE.ink,
              fontFamily: PLATE.display, fontSize: 12, fontWeight: 800,
            }}>Change</div>
          </div>
        </div>

        {/* Filter pills, bold */}
        <div style={{ display: 'flex', gap: 6, padding: '8px 16px', overflowX: 'auto' }}>
          {['All', 'Meat', 'Fish', 'Veg', '<500 cal', '40g+ pro'].map((c, i) => (
            <div key={c} style={{
              flex: '0 0 auto', padding: '7px 14px', borderRadius: 999,
              fontFamily: PLATE.display, fontWeight: 800, fontSize: 12,
              background: i === 0 ? PLATE.accent : '#fff',
              color: i === 0 ? '#fff' : PLATE.ink,
              border: i === 0 ? 'none' : `1px solid ${PLATE.line}`,
            }}>{c}</div>
          ))}
        </div>

        <div style={{
          padding: '6px 16px 4px',
          fontFamily: PLATE.display, fontWeight: 900, fontSize: 22,
          letterSpacing: -0.6, color: PLATE.ink,
        }}>This week →</div>

        {/* Meal grid — 2 col */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
          padding: '4px 16px 100px',
        }}>
          {meals.map((m, i) => (
            <div key={m.n} style={{
              background: PLATE.card, borderRadius: 18, overflow: 'hidden',
              border: `1px solid ${PLATE.line}`,
            }}>
              <div style={{ position: 'relative' }}>
                <PhotoBlock caption={`[ ${m.n.toLowerCase()} ]`} hue={m.hue} sat={28} ratio={1} radius={0} />
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  padding: '4px 8px', borderRadius: 6,
                  background: m.badgeBg, color: m.badgeFg,
                  fontFamily: PLATE.display, fontSize: 9, fontWeight: 900,
                  letterSpacing: 0.5,
                }}>{m.badge}</div>
              </div>
              <div style={{ padding: 12 }}>
                <div style={{
                  fontFamily: PLATE.display, fontWeight: 800, fontSize: 14,
                  color: PLATE.ink, letterSpacing: -0.3, lineHeight: 1.1,
                  marginBottom: 4,
                }}>{m.n}</div>
                <div style={{ fontSize: 11, color: PLATE.ink2, lineHeight: 1.3, minHeight: 28 }}>{m.sub}</div>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginTop: 8,
                }}>
                  <div style={{
                    fontFamily: PLATE.display, fontWeight: 800, fontSize: 11,
                    color: PLATE.accentDeep,
                  }}>{m.kcal} cal</div>
                  <div style={{
                    width: 26, height: 26, borderRadius: 13,
                    background: i < 2 ? PLATE.accent : PLATE.ink,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {i < 2
                      ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M2 6l3 3 5-6"/></svg>
                      : <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M6 2v8M2 6h8"/></svg>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomBar active="browse" />
    </IOSDevice>
  );
}

Object.assign(window, { PlateHome, PlatePromo, PlateLanding, PLATE });
