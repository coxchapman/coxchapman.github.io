// clinical.jsx — Variation A: "Method" sub-brand
// Audience: macro-tracking, goal-driven eaters.
// Visual: lots of white, sharp serif headlines, slate cool accent, big numbers.
// Onboarding angle: intake quiz (goals → preferences → schedule).

const METHOD = {
  bg: '#F6F6F4',
  ink: '#0F1310',
  ink2: '#5E665F',
  ink3: '#A6ADA6',
  accent: '#3F4D44',      // deep slate-green
  accentSoft: '#E6EAE6',
  highlight: '#D4C2A8',   // muted warm to contrast slate
  card: '#fff',
  serif: '"Instrument Serif", "Newsreader", Georgia, serif',
  sans: '-apple-system, system-ui',
  mono: 'ui-monospace, "SF Mono", monospace',
};

// ── A1: Home with new entry point ────────────────────────────────────────
function MethodHome() {
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: PANTRY.bg, minHeight: '100%', paddingTop: 54 }}>
        <HomeHeader />
        <div style={{ height: 4 }} />
        <ModePills active="All" highlight="Prep" accent={METHOD.accent} />

        {/* Category tile row — replacing one with "Method" */}
        <div style={{ display: 'flex', gap: 8, padding: '16px 16px 6px', overflowX: 'auto' }}>
          <CategoryTile label="Dine Out" bg="#EEEBE2">
            <span style={{ fontSize: 28 }}>🍽️</span>
          </CategoryTile>
          <CategoryTile label="Pizza" bg="#FDE2C2">
            <span style={{ fontSize: 28 }}>🍕</span>
          </CategoryTile>
          {/* The new tile — visually distinct: serif "M", slate fill */}
          <CategoryTile label="Method" bg={METHOD.accent} active>
            <span style={{
              fontFamily: METHOD.serif, fontSize: 30, color: '#fff',
              fontStyle: 'italic', lineHeight: 1, paddingBottom: 3,
            }}>M</span>
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

        {/* Method entry-point banner — premium card, lots of white, serif headline */}
        <div style={{ padding: '12px 16px 6px' }}>
          <div style={{
            background: METHOD.card, borderRadius: 18, padding: '20px 18px',
            border: `1px solid ${PANTRY.line}`, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              display: 'inline-block', fontFamily: METHOD.mono, fontSize: 10,
              letterSpacing: 1.2, color: METHOD.accent, marginBottom: 10,
              textTransform: 'uppercase',
            }}>NEW · WEEKLY PLAN</div>
            <div style={{
              fontFamily: METHOD.serif, fontSize: 28, lineHeight: 1.04,
              color: METHOD.ink, letterSpacing: -0.4, maxWidth: 230,
              marginBottom: 14,
            }}>
              Eat by the<br/>
              <span style={{ fontStyle: 'italic' }}>numbers.</span>
            </div>
            <div style={{
              fontSize: 13, lineHeight: 1.45, color: METHOD.ink2,
              maxWidth: 240, marginBottom: 16,
            }}>
              Chef-prepared meals built to your protein, calorie, and macro targets. Delivered weekly.
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 16px', borderRadius: 999, background: METHOD.ink,
              color: '#fff', fontSize: 13, fontWeight: 600,
            }}>
              Start your plan
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="1.6"><path d="M2 6h8M7 3l3 3-3 3"/></svg>
            </div>

            {/* Decorative numbered macro chips */}
            <div style={{
              position: 'absolute', right: -10, top: 18, display: 'flex',
              flexDirection: 'column', gap: 8, alignItems: 'flex-end',
            }}>
              {[
                { v: '42g', l: 'protein' },
                { v: '540', l: 'cal' },
                { v: '6g', l: 'fiber' },
              ].map(m => (
                <div key={m.l} style={{
                  background: METHOD.accentSoft, borderRadius: '999px 0 0 999px',
                  padding: '6px 14px 6px 12px', display: 'flex', alignItems: 'baseline', gap: 5,
                }}>
                  <span style={{ fontFamily: METHOD.serif, fontSize: 16, color: METHOD.ink, fontWeight: 600 }}>{m.v}</span>
                  <span style={{ fontFamily: METHOD.mono, fontSize: 9, color: METHOD.ink2, textTransform: 'uppercase', letterSpacing: 0.8 }}>{m.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured restaurants — to show this lives inside the broader app */}
        <div style={{ padding: '14px 16px 4px' }}>
          <div style={{
            fontFamily: '-apple-system, system-ui', fontSize: 22, fontWeight: 700,
            color: PANTRY.ink, letterSpacing: -0.4,
          }}>Featured on Pantry</div>
        </div>
        <div style={{ display: 'flex', gap: 12, padding: '8px 16px 100px', overflowX: 'auto' }}>
          {[
            { name: 'Mamahuhu', tag: 'Buy 1, get 1', hue: 160, rating: 4.6 },
            { name: 'Papalote', tag: '$8 off $40+', hue: 25, rating: 4.8 },
          ].map(r => (
            <div key={r.name} style={{ flex: '0 0 240px' }}>
              <PhotoBlock caption={`[ ${r.name.toLowerCase()} photo ]`} hue={r.hue} sat={20} ratio={1.4} badge={r.tag} />
              <div style={{ paddingTop: 8 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: PANTRY.ink }}>{r.name}</div>
                <div style={{ fontSize: 12, color: PANTRY.ink2, marginTop: 2 }}>
                  Lowest delivery fee · 10 min
                </div>
                <div style={{ fontSize: 12, color: PANTRY.ink2, marginTop: 2 }}>
                  ★ {r.rating} (440+)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomBar active="home" />
    </IOSDevice>
  );
}

// ── A2: Promo / onboarding hero ──────────────────────────────────────────
// Bottom-sheet style intro that fires the first time you tap Method.
function MethodPromo() {
  return (
    <IOSDevice width={402} height={874}>
      <div style={{
        background: METHOD.bg, minHeight: '100%', paddingTop: 54,
        position: 'relative',
      }}>
        {/* Header strip */}
        <div style={{
          padding: '10px 16px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            fontFamily: METHOD.serif, fontSize: 22, color: METHOD.ink,
            fontStyle: 'italic', letterSpacing: -0.3,
          }}>Method</div>
          <div style={{
            width: 32, height: 32, borderRadius: 16, background: '#fff',
            border: `1px solid ${PANTRY.line}`, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={METHOD.ink} strokeWidth="2"><path d="M3 3l6 6M9 3l-6 6"/></svg>
          </div>
        </div>

        {/* Hero block */}
        <div style={{ padding: '40px 24px 24px' }}>
          <div style={{
            fontFamily: METHOD.mono, fontSize: 11, letterSpacing: 1.4,
            color: METHOD.accent, textTransform: 'uppercase', marginBottom: 14,
          }}>Weekly meal plan, by you</div>
          <div style={{
            fontFamily: METHOD.serif, fontSize: 46, lineHeight: 0.98,
            color: METHOD.ink, letterSpacing: -1.2,
          }}>
            A week of meals,<br/>
            <span style={{ fontStyle: 'italic' }}>engineered</span><br/>
            to your goals.
          </div>
          <div style={{
            fontSize: 15, lineHeight: 1.5, color: METHOD.ink2,
            marginTop: 18, maxWidth: 320,
          }}>
            We start with three questions. Then we pick the menu, the macros, and the delivery day. You just eat.
          </div>
        </div>

        {/* Quiz preview cards — show the 3 questions */}
        <div style={{ padding: '8px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { n: '01', q: 'What\u2019s your goal?', a: 'Stay lean · Build muscle · Eat well', pick: 'Build muscle' },
            { n: '02', q: 'Any restrictions?', a: 'Dairy · Gluten · Pork · Shellfish', pick: 'Dairy-free' },
            { n: '03', q: 'How many meals a week?', a: '3 · 5 · 7', pick: '5 meals' },
          ].map(s => (
            <div key={s.n} style={{
              background: '#fff', borderRadius: 14, padding: 14,
              border: `1px solid ${PANTRY.line}`, display: 'flex', gap: 14,
              alignItems: 'center',
            }}>
              <div style={{
                fontFamily: METHOD.serif, fontSize: 26, color: METHOD.accent,
                fontStyle: 'italic', minWidth: 36,
              }}>{s.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: METHOD.ink, marginBottom: 2 }}>{s.q}</div>
                <div style={{ fontSize: 11, color: METHOD.ink3, fontFamily: METHOD.mono, letterSpacing: 0.3 }}>{s.a}</div>
              </div>
              <div style={{
                padding: '5px 10px', borderRadius: 999, background: METHOD.accentSoft,
                fontSize: 11, fontWeight: 600, color: METHOD.accent,
              }}>{s.pick}</div>
            </div>
          ))}
        </div>

        {/* CTA + foot */}
        <div style={{ padding: '20px 24px 0' }}>
          <div style={{
            background: METHOD.ink, color: '#fff', borderRadius: 999,
            padding: '16px 20px', textAlign: 'center',
            fontSize: 16, fontWeight: 600, letterSpacing: -0.2,
          }}>
            Take the 60-second quiz
          </div>
          <div style={{
            textAlign: 'center', marginTop: 12, fontSize: 12, color: METHOD.ink3,
          }}>
            Skip anytime · First box 30% off
          </div>
        </div>
      </div>
      <BottomBar active="browse" />
    </IOSDevice>
  );
}

// ── A3: Meal-prep landing — weekly menu browse ────────────────────────────
function MethodLanding({ cadence = 5 }) {
  const PRICE = 11.95;
  const meals = [
    { n: 'Cedar-Plank Salmon', tag: 'High protein', kcal: 540, p: 42, c: 38, f: 22, hue: 30 },
    { n: 'Miso-Glazed Cod', tag: 'Lean', kcal: 460, p: 38, c: 32, f: 16, hue: 200 },
    { n: 'Harissa Chicken Bowl', tag: 'Editor\u2019s pick', kcal: 580, p: 44, c: 48, f: 24, hue: 18 },
    { n: 'Lemon Herb Tofu', tag: 'Plant-based', kcal: 410, p: 28, c: 36, f: 18, hue: 80 },
  ];
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: METHOD.bg, minHeight: '100%', paddingTop: 54 }}>
        {/* Compact header — back chevron + section name */}
        <div style={{
          padding: '6px 14px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 16, background: '#fff',
              border: `1px solid ${PANTRY.line}`, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke={METHOD.ink} strokeWidth="2"><path d="M8 1L1 7l7 6"/></svg>
            </div>
            <div style={{
              fontFamily: METHOD.serif, fontSize: 22, color: METHOD.ink,
              fontStyle: 'italic',
            }}>Method</div>
          </div>
          <div style={{
            fontFamily: METHOD.mono, fontSize: 10, letterSpacing: 1,
            color: METHOD.ink3, textTransform: 'uppercase',
          }}>Week of May 20</div>
        </div>

        {/* Plan summary strip */}
        <div style={{ padding: '14px 16px 4px' }}>
          <div style={{
            background: '#fff', borderRadius: 16, padding: '14px 16px',
            border: `1px solid ${PANTRY.line}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 11, color: METHOD.ink3, fontFamily: METHOD.mono, letterSpacing: 0.6, textTransform: 'uppercase' }}>Your plan</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
                <div style={{ fontFamily: METHOD.serif, fontSize: 26, color: METHOD.ink }}>{cadence} meals<span style={{ fontStyle: 'italic', color: METHOD.accent }}>/wk</span></div>
                <div style={{ fontSize: 13, color: METHOD.ink2 }}>· {PANTRY.fmt(cadence * PRICE)}/wk</div>
              </div>
            </div>
            <div style={{
              padding: '6px 12px', border: `1px solid ${METHOD.ink}`,
              borderRadius: 999, fontSize: 12, fontWeight: 600, color: METHOD.ink,
            }}>Edit</div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 6, padding: '12px 16px 4px', overflowX: 'auto' }}>
          {['All', 'High protein', 'Under 500 cal', 'Plant-based', 'Quick reheat'].map((c, i) => (
            <div key={c} style={{
              flex: '0 0 auto', padding: '6px 12px', borderRadius: 999,
              fontSize: 12, fontWeight: 600,
              background: i === 0 ? METHOD.ink : 'transparent',
              color: i === 0 ? '#fff' : METHOD.ink,
              border: i === 0 ? 'none' : `1px solid ${PANTRY.line}`,
            }}>{c}</div>
          ))}
        </div>

        <div style={{
          padding: '8px 16px 4px', fontFamily: METHOD.serif,
          fontSize: 19, color: METHOD.ink, letterSpacing: -0.3,
        }}>This week's menu <span style={{ color: METHOD.ink3, fontStyle: 'italic' }}>— pick {cadence}</span></div>

        {/* Meal grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
          padding: '6px 16px 100px',
        }}>
          {meals.map((m, i) => (
            <div key={m.n} style={{
              background: '#fff', borderRadius: 14, overflow: 'hidden',
              border: `1px solid ${PANTRY.line}`,
            }}>
              <PhotoBlock caption={`[ ${m.n.toLowerCase()} ]`} hue={m.hue} sat={18} ratio={1.05} radius={0} />
              <div style={{ padding: 12 }}>
                <div style={{
                  fontFamily: METHOD.mono, fontSize: 9, color: METHOD.accent,
                  letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 4,
                }}>{m.tag}</div>
                <div style={{
                  fontFamily: METHOD.serif, fontSize: 16, lineHeight: 1.15,
                  color: METHOD.ink, marginBottom: 8, minHeight: 36,
                }}>{m.n}</div>
                {/* Macro line */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                  {[['P', m.p + 'g'], ['C', m.c + 'g'], ['F', m.f + 'g']].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ fontFamily: METHOD.mono, fontSize: 9, color: METHOD.ink3, letterSpacing: 0.4 }}>{l}</div>
                      <div style={{ fontFamily: METHOD.serif, fontSize: 13, color: METHOD.ink }}>{v}</div>
                    </div>
                  ))}
                  <div style={{ marginLeft: 'auto' }}>
                    <div style={{ fontFamily: METHOD.mono, fontSize: 9, color: METHOD.ink3, letterSpacing: 0.4 }}>kcal</div>
                    <div style={{ fontFamily: METHOD.serif, fontSize: 13, color: METHOD.ink }}>{m.kcal}</div>
                  </div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  paddingTop: 8, borderTop: `1px solid ${PANTRY.line}`,
                }}>
                  <div style={{ fontSize: 11, color: METHOD.ink3 }}>{i < 2 ? 'In plan' : 'Add'}</div>
                  <div style={{
                    width: 26, height: 26, borderRadius: 13,
                    background: i < 2 ? METHOD.accent : '#fff',
                    border: i < 2 ? 'none' : `1.5px solid ${METHOD.ink}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {i < 2
                      ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M2 6l3 3 5-6"/></svg>
                      : <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={METHOD.ink} strokeWidth="2.2"><path d="M6 2v8M2 6h8"/></svg>
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

Object.assign(window, { MethodHome, MethodPromo, MethodLanding, METHOD });
