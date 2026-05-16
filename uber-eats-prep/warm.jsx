// warm.jsx — Variation B: "Hearth" sub-brand
// Audience: busy professionals who want to eat better without thinking.
// Visual: warm earthy palette (terracotta, cream, deep green), italic serif accents,
// rounded shapes, lifestyle-warm feel.
// Onboarding angle: schedule-first ("Tell us your week").

const HEARTH = {
  bg: '#F4EFE6',          // warm cream
  ink: '#1F1B14',
  ink2: '#5B5346',
  ink3: '#958A78',
  accent: '#C24A26',      // terracotta
  accentSoft: '#F6DDD0',
  green: '#37503A',
  greenSoft: '#DFE6D7',
  card: '#FFFBF4',
  line: '#E4DCCB',
  serif: '"Newsreader", "Cormorant Garamond", Georgia, serif',
  sans: '-apple-system, system-ui',
};

// ── B1: Home with new entry point ────────────────────────────────────────
function HearthHome() {
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: PANTRY.bg, minHeight: '100%', paddingTop: 54 }}>
        <HomeHeader />
        <div style={{ height: 4 }} />
        <ModePills active="All" highlight="Prep" accent={HEARTH.accent} />

        <div style={{ display: 'flex', gap: 8, padding: '16px 16px 6px', overflowX: 'auto' }}>
          <CategoryTile label="Dine Out" bg="#EEEBE2">
            <span style={{ fontSize: 28 }}>🍽️</span>
          </CategoryTile>
          {/* Hearth tile — terracotta with serif H */}
          <CategoryTile label="Hearth" bg={HEARTH.accent} active>
            <span style={{
              fontFamily: HEARTH.serif, fontSize: 32, color: '#FFFBF4',
              fontStyle: 'italic', lineHeight: 1, fontWeight: 500, paddingBottom: 2,
            }}>H</span>
          </CategoryTile>
          <CategoryTile label="Pizza" bg="#FDE2C2">
            <span style={{ fontSize: 28 }}>🍕</span>
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

        {/* Hearth entry banner — warmer, photo-led, full-bleed feel */}
        <div style={{ padding: '12px 16px 6px' }}>
          <div style={{
            background: HEARTH.green, borderRadius: 22, overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Decorative warm photo strip on the right */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0, right: 0, width: '38%',
              background: HEARTH.accent,
              backgroundImage: 'repeating-linear-gradient(115deg, transparent 0 10px, rgba(0,0,0,0.06) 10px 11px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 6, padding: 14,
            }}>
              <div style={{
                fontFamily: 'ui-monospace, "SF Mono", monospace',
                fontSize: 9, color: '#FFFBF4', opacity: 0.7,
                textAlign: 'center', letterSpacing: 0.6,
              }}>[ Sunday<br/>roast bowl ]</div>
            </div>

            <div style={{ padding: '22px 22px', maxWidth: '64%' }}>
              <div style={{
                fontFamily: HEARTH.serif, fontStyle: 'italic',
                fontSize: 13, color: HEARTH.accentSoft, marginBottom: 8,
              }}>Introducing</div>
              <div style={{
                fontFamily: HEARTH.serif, fontSize: 32, lineHeight: 1.0,
                color: '#FFFBF4', letterSpacing: -0.6, marginBottom: 6,
              }}>
                <span style={{ fontStyle: 'italic' }}>Hearth</span>
              </div>
              <div style={{
                fontSize: 13, lineHeight: 1.4, color: '#E7E3D4', marginBottom: 14,
              }}>
                Real meals, cooked Sunday. Heated by you, Tuesday.
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 14px 10px 16px', borderRadius: 999,
                background: '#FFFBF4', color: HEARTH.ink,
                fontSize: 13, fontWeight: 600,
              }}>
                Plan my week
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={HEARTH.ink} strokeWidth="2"><path d="M2 6h8M7 3l3 3-3 3"/></svg>
              </div>
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

// ── B2: Promo / onboarding hero ─────────────────────────────────────────
// Schedule-first onboarding: "Tell us your week".
function HearthPromo() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const meals = { M: 'Dinner', T: 'Lunch + Dinner', W: 'Dinner', T2: '—', F: 'Dinner', S: 'Lunch', S2: '—' };
  const slots = ['Dinner', 'Lunch + Dinner', 'Dinner', '', 'Dinner', 'Lunch', ''];

  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: HEARTH.bg, minHeight: '100%', paddingTop: 54 }}>
        {/* Top strip */}
        <div style={{
          padding: '10px 16px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 14, background: HEARTH.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: HEARTH.serif, fontSize: 18, fontStyle: 'italic',
                color: '#FFFBF4', lineHeight: 1, paddingBottom: 2,
              }}>H</span>
            </div>
            <div style={{
              fontFamily: HEARTH.serif, fontSize: 22, color: HEARTH.ink,
              fontStyle: 'italic',
            }}>Hearth</div>
          </div>
          <div style={{
            padding: '6px 10px', borderRadius: 999, background: '#fff',
            border: `1px solid ${HEARTH.line}`, fontSize: 12, fontWeight: 600,
            color: HEARTH.ink2,
          }}>Step 1 of 3</div>
        </div>

        {/* Hero */}
        <div style={{ padding: '32px 24px 16px' }}>
          <div style={{
            fontFamily: HEARTH.serif, fontSize: 38, lineHeight: 1.02,
            color: HEARTH.ink, letterSpacing: -0.6,
          }}>
            Tell us about<br/>
            <span style={{ fontStyle: 'italic', color: HEARTH.accent }}>your week.</span>
          </div>
          <div style={{
            fontSize: 14, lineHeight: 1.5, color: HEARTH.ink2, marginTop: 12, maxWidth: 320,
          }}>
            Tap the meals you'd like covered. We'll cook them Sunday and drop them in your fridge Tuesday afternoon.
          </div>
        </div>

        {/* Calendar — 7 day strip */}
        <div style={{ padding: '8px 16px 4px' }}>
          <div style={{
            background: HEARTH.card, borderRadius: 18, padding: '14px 12px',
            border: `1px solid ${HEARTH.line}`,
          }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {days.map((d, i) => {
                const has = slots[i];
                return (
                  <div key={i} style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 6,
                  }}>
                    <div style={{
                      fontSize: 11, color: HEARTH.ink3, fontWeight: 600,
                      letterSpacing: 0.4,
                    }}>{d}</div>
                    <div style={{
                      width: 36, height: 50, borderRadius: 10,
                      background: has ? HEARTH.accent : HEARTH.bg,
                      color: has ? '#FFFBF4' : HEARTH.ink3,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: HEARTH.serif, fontSize: 22, fontWeight: 500,
                      lineHeight: 1,
                    }}>{20 + i}</div>
                  </div>
                );
              })}
            </div>
            {/* Slot summary */}
            <div style={{
              marginTop: 14, paddingTop: 14, borderTop: `1px solid ${HEARTH.line}`,
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              {[
                { d: 'Mon · May 20', s: 'Dinner', count: 1 },
                { d: 'Tue · May 21', s: 'Lunch + Dinner', count: 2 },
                { d: 'Wed · May 22', s: 'Dinner', count: 1 },
                { d: 'Fri · May 24', s: 'Dinner', count: 1 },
              ].map((r, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: HEARTH.ink }}>{r.d}</div>
                    <div style={{ fontSize: 12, color: HEARTH.ink2, fontFamily: HEARTH.serif, fontStyle: 'italic' }}>{r.s}</div>
                  </div>
                  <div style={{
                    padding: '4px 10px', borderRadius: 999,
                    background: HEARTH.greenSoft, color: HEARTH.green,
                    fontSize: 12, fontWeight: 700,
                  }}>{r.count} meal{r.count > 1 ? 's' : ''}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total + CTA */}
        <div style={{ padding: '16px 24px 0' }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            paddingBottom: 14,
          }}>
            <div>
              <div style={{ fontFamily: HEARTH.serif, fontSize: 26, color: HEARTH.ink, fontStyle: 'italic' }}>
                5 meals
              </div>
              <div style={{ fontSize: 12, color: HEARTH.ink3, marginTop: 2 }}>
                this week · skip anytime
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: HEARTH.serif, fontSize: 26, color: HEARTH.ink }}>$59</div>
              <div style={{ fontSize: 11, color: HEARTH.ink3 }}>~$11.80 / meal</div>
            </div>
          </div>
          <div style={{
            background: HEARTH.ink, color: '#FFFBF4', borderRadius: 999,
            padding: '15px 20px', textAlign: 'center',
            fontSize: 15, fontWeight: 600,
          }}>
            Next: pick your meals
          </div>
        </div>
      </div>
      <BottomBar active="browse" />
    </IOSDevice>
  );
}

// ── B3: Meal-prep landing ────────────────────────────────────────────────
function HearthLanding({ cadence = 5 }) {
  const PRICE = 11.80;
  const meals = [
    { n: 'Slow-braised pork shoulder', sub: 'with apple slaw', tag: 'Sunday classic', hue: 30 },
    { n: 'Lemon-garlic roast chicken', sub: 'with farro and greens', tag: 'Most-loved', hue: 50 },
    { n: 'White bean & kale stew', sub: 'with sourdough', tag: 'Plant-forward', hue: 95 },
    { n: 'Miso salmon', sub: 'over coconut rice', tag: 'New', hue: 200 },
  ];
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: HEARTH.bg, minHeight: '100%', paddingTop: 54 }}>
        {/* Hero strip with date and pick count */}
        <div style={{
          padding: '8px 16px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 16, background: HEARTH.card,
              border: `1px solid ${HEARTH.line}`, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke={HEARTH.ink} strokeWidth="2"><path d="M8 1L1 7l7 6"/></svg>
            </div>
            <div style={{
              fontFamily: HEARTH.serif, fontSize: 22, color: HEARTH.ink,
              fontStyle: 'italic',
            }}>Hearth</div>
          </div>
          <div style={{
            fontSize: 12, color: HEARTH.ink2,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke={HEARTH.ink2} strokeWidth="1.6"><rect x="1" y="2.5" width="9" height="7.5" rx="1"/><path d="M3 1v2M8 1v2"/></svg>
            Drops Tue · May 21
          </div>
        </div>

        {/* Big editorial title */}
        <div style={{ padding: '24px 24px 12px' }}>
          <div style={{
            fontFamily: HEARTH.serif, fontSize: 38, lineHeight: 0.98,
            color: HEARTH.ink, letterSpacing: -0.6,
          }}>
            This week's<br/>
            <span style={{ fontStyle: 'italic', color: HEARTH.accent }}>menu</span>
          </div>
          <div style={{ fontSize: 13, color: HEARTH.ink2, marginTop: 8 }}>
            Pick <b>{cadence}</b> · {PANTRY.fmt(cadence * PRICE)}/wk · skip anytime
          </div>
        </div>

        {/* Picked counter */}
        <div style={{ padding: '0 16px 8px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
            background: HEARTH.card, border: `1px solid ${HEARTH.line}`,
            borderRadius: 14,
          }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {Array.from({ length: cadence }).map((_, i) => (
                <div key={i} style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: i < 2 ? HEARTH.accent : 'transparent',
                  border: i < 2 ? 'none' : `1.5px dashed ${HEARTH.line}`,
                }} />
              ))}
            </div>
            <div style={{ flex: 1, fontSize: 12, color: HEARTH.ink2 }}>
              <b style={{ color: HEARTH.ink }}>2 of {cadence}</b> picked
            </div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: HEARTH.accent,
            }}>Auto-pick rest</div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 6, padding: '4px 16px', overflowX: 'auto' }}>
          {['Everything', 'Meat', 'Fish', 'Plant-forward', 'Comfort'].map((c, i) => (
            <div key={c} style={{
              flex: '0 0 auto', padding: '6px 12px', borderRadius: 999,
              fontSize: 12, fontWeight: 600,
              background: i === 0 ? HEARTH.ink : 'transparent',
              color: i === 0 ? '#FFFBF4' : HEARTH.ink2,
              border: i === 0 ? 'none' : `1px solid ${HEARTH.line}`,
            }}>{c}</div>
          ))}
        </div>

        {/* Meal list — full-width rows, editorial feel */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 14,
          padding: '12px 16px 100px',
        }}>
          {meals.map((m, i) => (
            <div key={m.n} style={{
              background: HEARTH.card, borderRadius: 18, overflow: 'hidden',
              border: `1px solid ${HEARTH.line}`, display: 'flex',
            }}>
              <div style={{ width: 130, flexShrink: 0 }}>
                <PhotoBlock caption={`[ photo ]`} hue={m.hue} sat={22} ratio={1} radius={0} />
              </div>
              <div style={{
                flex: 1, padding: '14px 14px', display: 'flex',
                flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontFamily: HEARTH.serif, fontStyle: 'italic',
                    fontSize: 11, color: HEARTH.accent, marginBottom: 4,
                  }}>{m.tag}</div>
                  <div style={{
                    fontFamily: HEARTH.serif, fontSize: 18, lineHeight: 1.15,
                    color: HEARTH.ink, marginBottom: 4,
                  }}>{m.n}</div>
                  <div style={{ fontSize: 12, color: HEARTH.ink2 }}>{m.sub}</div>
                </div>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginTop: 10,
                }}>
                  <div style={{ fontSize: 11, color: HEARTH.ink3, fontStyle: 'italic' }}>
                    {i < 2 ? '✓ in your week' : '12 min reheat'}
                  </div>
                  <div style={{
                    padding: '6px 12px', borderRadius: 999,
                    background: i < 2 ? HEARTH.accent : HEARTH.ink,
                    color: '#FFFBF4', fontSize: 12, fontWeight: 700,
                  }}>{i < 2 ? 'Added' : 'Add'}</div>
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

Object.assign(window, { HearthHome, HearthPromo, HearthLanding, HEARTH });
