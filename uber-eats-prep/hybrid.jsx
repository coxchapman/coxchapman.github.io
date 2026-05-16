// hybrid.jsx — Variation D: Method visual language + Hearth flow.
// Audience and onboarding mirror Hearth (busy professional, schedule-first),
// but the typographic system, palette, and density come from Method.
// Sub-brand kept as "Method" since the brand identity is Method's.

// ── D1: Home with new entry point — Method visual, Hearth-style banner ──
function HybridHome() {
  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: PANTRY.bg, minHeight: '100%', paddingTop: 54 }}>
        <HomeHeader />
        <div style={{ opacity: "1", height: "4px" }} />
        <ModePills active="All" highlight="Prep" accent={METHOD.accent} />

        <div style={{ display: 'flex', overflowX: 'auto', height: "80px", padding: "16px 16px 6px", margin: "0px", borderStyle: "solid", borderWidth: "0px", opacity: "1", gap: "2px", flexDirection: "row", alignItems: "center" }}>
          <CategoryTile label="Dine Out" bg="#EEEBE2">
            <span style={{ fontSize: 28 }}>🍽️</span>
          </CategoryTile>
          <CategoryTile label="Pizza" bg="#FDE2C2">
            <span style={{ fontSize: 28 }}>🍕</span>
          </CategoryTile>
          <CategoryTile label="Method" bg={METHOD.accent} active>
            <span style={{
              fontFamily: METHOD.serif, fontSize: 30, color: '#fff',
              fontStyle: 'italic', lineHeight: 1, paddingBottom: 3
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

        {/* Method-styled banner, but UX = "plan your week" with a calendar peek */}
        <div style={{ padding: '12px 16px 6px' }}>
          <div style={{
            background: METHOD.card, borderRadius: 18, padding: '20px 18px',
            border: `1px solid ${PANTRY.line}`, position: 'relative'
          }}>
            <div style={{
              display: 'inline-block', fontFamily: METHOD.mono, fontSize: 10,
              letterSpacing: 1.2, color: METHOD.accent, marginBottom: 10,
              textTransform: 'uppercase'
            }}>NEW · WEEKLY PLAN</div>
            <div style={{
              fontFamily: METHOD.serif, fontSize: 28, lineHeight: 1.04,
              color: METHOD.ink, letterSpacing: -0.4,
              marginBottom: 12
            }}>
              Your week,<br />
              <span style={{ fontStyle: 'italic' }}>scheduled.</span>
            </div>
            <div style={{
              fontSize: 13, lineHeight: 1.45, color: METHOD.ink2,
              maxWidth: 260, marginBottom: 14
            }}>
              Pick the days you need covered. Chef-cooked meals arrive Tuesday afternoon.
            </div>

            {/* 7-day strip preview — Method styling */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => {
                const has = [true, true, true, false, true, false, false][i];
                return (
                  <div key={i} style={{
                    flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
                  }}>
                    <div style={{
                      fontFamily: METHOD.mono, fontSize: 9, color: METHOD.ink3,
                      letterSpacing: 0.6
                    }}>{d}</div>
                    <div style={{
                      width: 28, height: 32, borderRadius: 6,
                      background: has ? METHOD.accent : METHOD.accentSoft,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: METHOD.serif, fontSize: 14,
                      color: has ? '#fff' : METHOD.ink3,
                      fontStyle: has ? 'italic' : 'normal'
                    }}>{has ? '·' : ''}</div>
                  </div>);

              })}
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 16px', borderRadius: 999, background: METHOD.ink,
              color: '#fff', fontSize: 13, fontWeight: 600
            }}>
              Plan your week
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="1.6"><path d="M2 6h8M7 3l3 3-3 3" /></svg>
            </div>
          </div>
        </div>

        {/* Featured restaurants */}
        <div style={{ padding: '14px 16px 4px' }}>
          <div style={{
            fontFamily: '-apple-system, system-ui', fontSize: 22, fontWeight: 700,
            color: PANTRY.ink, letterSpacing: -0.4
          }}>Featured on Pantry</div>
        </div>
        <div style={{ display: 'flex', gap: 12, padding: '8px 16px 100px', overflowX: 'auto' }}>
          {[
          { name: 'Mamahuhu', tag: 'Buy 1, get 1', hue: 160 },
          { name: 'Papalote', tag: '$8 off $40+', hue: 25 }].
          map((r) =>
          <div key={r.name} style={{ flex: '0 0 240px' }}>
              <PhotoBlock caption={`[ ${r.name.toLowerCase()} photo ]`} hue={r.hue} sat={20} ratio={1.4} badge={r.tag} />
              <div style={{ paddingTop: 8 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: PANTRY.ink }}>{r.name}</div>
                <div style={{ fontSize: 12, color: PANTRY.ink2, marginTop: 2 }}>Lowest delivery fee · 10 min</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomBar active="home" />
    </IOSDevice>);

}

// ── D2: Promo — Hearth's "tell us your week" calendar quiz, Method-styled ──
function HybridPromo() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const slots = ['Dinner', 'Lunch + Dinner', 'Dinner', '', 'Dinner', 'Lunch', ''];

  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: METHOD.bg, minHeight: '100%', paddingTop: 54 }}>
        <div style={{
          padding: '10px 16px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{
            fontFamily: METHOD.serif, fontSize: 22, color: METHOD.ink,
            fontStyle: 'italic', letterSpacing: -0.3
          }}>Method</div>
          <div style={{
            padding: '6px 10px', borderRadius: 999, background: '#fff',
            border: `1px solid ${PANTRY.line}`, fontFamily: METHOD.mono,
            fontSize: 10, letterSpacing: 0.8, color: METHOD.ink2,
            textTransform: 'uppercase'
          }}>Step 1 / 3</div>
        </div>

        {/* Hero — Method's serif voice */}
        <div style={{ padding: '32px 24px 12px' }}>
          <div style={{
            fontFamily: METHOD.mono, fontSize: 11, letterSpacing: 1.4,
            color: METHOD.accent, textTransform: 'uppercase', marginBottom: 14
          }}>Plan your week</div>
          <div style={{
            fontFamily: METHOD.serif, fontSize: 44, lineHeight: 0.98,
            color: METHOD.ink, letterSpacing: -1.1
          }}>
            Tell us about<br />
            <span style={{ fontStyle: 'italic' }}>your week.</span>
          </div>
          <div style={{
            fontSize: 14, lineHeight: 1.5, color: METHOD.ink2,
            marginTop: 14, maxWidth: 320
          }}>
            Tap the meals you'd like covered. We cook Sunday, deliver Tuesday afternoon.
          </div>
        </div>

        {/* Calendar card — Hearth's UX, Method's styling */}
        <div style={{ padding: '4px 16px' }}>
          <div style={{
            background: '#fff', borderRadius: 16, padding: '14px 12px',
            border: `1px solid ${PANTRY.line}`
          }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {days.map((d, i) => {
                const has = slots[i];
                return (
                  <div key={i} style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 6
                  }}>
                    <div style={{
                      fontFamily: METHOD.mono, fontSize: 9, color: METHOD.ink3,
                      letterSpacing: 0.6
                    }}>{d}</div>
                    <div style={{
                      width: 36, height: 50, borderRadius: 8,
                      background: has ? METHOD.accent : METHOD.bg,
                      color: has ? '#fff' : METHOD.ink3,
                      border: has ? 'none' : `1px solid ${PANTRY.line}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: METHOD.serif, fontSize: 22,
                      fontStyle: has ? 'italic' : 'normal', lineHeight: 1
                    }}>{20 + i}</div>
                  </div>);

              })}
            </div>

            <div style={{
              marginTop: 14, paddingTop: 14, borderTop: `1px solid ${PANTRY.line}`,
              display: 'flex', flexDirection: 'column', gap: 10
            }}>
              {[
              { d: 'Mon · May 20', s: 'Dinner', count: 1 },
              { d: 'Tue · May 21', s: 'Lunch + Dinner', count: 2 },
              { d: 'Wed · May 22', s: 'Dinner', count: 1 },
              { d: 'Fri · May 24', s: 'Dinner', count: 1 }].
              map((r, i) =>
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: METHOD.ink }}>{r.d}</div>
                    <div style={{
                    fontFamily: METHOD.serif, fontStyle: 'italic',
                    fontSize: 12, color: METHOD.ink2, marginTop: 1
                  }}>{r.s}</div>
                  </div>
                  <div style={{
                  padding: '4px 10px', borderRadius: 999,
                  background: METHOD.accentSoft, color: METHOD.accent,
                  fontFamily: METHOD.mono, fontSize: 10, fontWeight: 700,
                  letterSpacing: 0.4
                }}>{r.count} MEAL{r.count > 1 ? 'S' : ''}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Total + CTA — Method's quiet currency block */}
        <div style={{ padding: '20px 24px 0' }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            paddingBottom: 14, borderBottom: `1px solid ${PANTRY.line}`
          }}>
            <div>
              <div style={{ fontFamily: METHOD.mono, fontSize: 10, color: METHOD.ink3, letterSpacing: 0.8, textTransform: 'uppercase' }}>This week</div>
              <div style={{ fontFamily: METHOD.serif, fontSize: 24, color: METHOD.ink, marginTop: 2 }}>
                5 meals<span style={{ fontStyle: 'italic', color: METHOD.accent }}>/wk</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: METHOD.serif, fontSize: 24, color: METHOD.ink }}>$59.75</div>
              <div style={{ fontFamily: METHOD.mono, fontSize: 10, color: METHOD.ink3, letterSpacing: 0.4 }}>$11.95 / meal</div>
            </div>
          </div>
          <div style={{
            marginTop: 16, background: METHOD.ink, color: '#fff', borderRadius: 999,
            padding: '15px 20px', textAlign: 'center',
            fontSize: 15, fontWeight: 600, letterSpacing: -0.2
          }}>
            Next: pick your meals
          </div>
        </div>
      </div>
      <BottomBar active="browse" />
    </IOSDevice>);

}

// ── D3: Landing — Hearth's editorial row list, Method's typography ──
function HybridLanding({ cadence = 5 }) {
  const PRICE = 11.95;
  const meals = [
  { n: 'Cedar-plank salmon', sub: 'with farro and dill', tag: 'High protein', kcal: 540, p: 42, hue: 30 },
  { n: 'Lemon-herb roast chicken', sub: 'with greens', tag: 'Most loved', kcal: 510, p: 44, hue: 50 },
  { n: 'White bean & kale stew', sub: 'with sourdough', tag: 'Plant-based', kcal: 470, p: 22, hue: 95 },
  { n: 'Miso-glazed cod', sub: 'with coconut rice', tag: 'Lean', kcal: 460, p: 38, hue: 200 }];

  return (
    <IOSDevice width={402} height={874}>
      <div style={{ background: METHOD.bg, minHeight: '100%', paddingTop: 54 }}>
        <div style={{
          padding: '6px 14px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 16, background: '#fff',
              border: `1px solid ${PANTRY.line}`, display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke={METHOD.ink} strokeWidth="2"><path d="M8 1L1 7l7 6" /></svg>
            </div>
            <div style={{
              fontFamily: METHOD.serif, fontSize: 22, color: METHOD.ink,
              fontStyle: 'italic'
            }}>Method</div>
          </div>
          <div style={{
            fontFamily: METHOD.mono, fontSize: 10, letterSpacing: 1,
            color: METHOD.ink3, textTransform: 'uppercase'
          }}>Drops Tue · May 21</div>
        </div>

        {/* Editorial title */}
        <div style={{ padding: '20px 24px 10px' }}>
          <div style={{
            fontFamily: METHOD.serif, fontSize: 36, lineHeight: 0.98,
            color: METHOD.ink, letterSpacing: -0.8
          }}>
            This week's<br />
            <span style={{ fontStyle: 'italic' }}>menu.</span>
          </div>
          <div style={{
            fontFamily: METHOD.mono, fontSize: 10, color: METHOD.ink3,
            letterSpacing: 1, marginTop: 8, textTransform: 'uppercase'
          }}>Pick {cadence} · {PANTRY.fmt(cadence * PRICE)}/wk · skip anytime</div>
        </div>

        {/* Pick counter — Method's quiet style */}
        <div style={{ padding: '0 16px 8px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
            background: '#fff', border: `1px solid ${PANTRY.line}`,
            borderRadius: 14
          }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {Array.from({ length: cadence }).map((_, i) =>
              <div key={i} style={{
                width: 20, height: 20, borderRadius: 5,
                background: i < 2 ? METHOD.accent : 'transparent',
                border: i < 2 ? 'none' : `1.5px dashed ${PANTRY.line}`
              }} />
              )}
            </div>
            <div style={{ flex: 1, fontFamily: METHOD.mono, fontSize: 11, letterSpacing: 0.5, color: METHOD.ink2 }}>
              <span style={{ color: METHOD.ink, fontWeight: 700 }}>2</span> OF {cadence} PICKED
            </div>
            <div style={{
              fontFamily: METHOD.serif, fontStyle: 'italic',
              fontSize: 13, color: METHOD.accent
            }}>Auto-pick rest</div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 6, padding: '4px 16px', overflowX: 'auto' }}>
          {['All', 'High protein', 'Under 500 cal', 'Plant-based', 'Quick reheat'].map((c, i) =>
          <div key={c} style={{
            flex: '0 0 auto', padding: '6px 12px', borderRadius: 999,
            fontSize: 12, fontWeight: 600,
            background: i === 0 ? METHOD.ink : 'transparent',
            color: i === 0 ? '#fff' : METHOD.ink2,
            border: i === 0 ? 'none' : `1px solid ${PANTRY.line}`
          }}>{c}</div>
          )}
        </div>

        {/* Full-bleed meal rows — Hearth's layout, Method's voice */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 12,
          padding: '12px 16px 100px'
        }}>
          {meals.map((m, i) =>
          <div key={m.n} style={{
            background: '#fff', borderRadius: 16, overflow: 'hidden',
            border: `1px solid ${PANTRY.line}`, display: 'flex'
          }}>
              <div style={{ width: 130, flexShrink: 0 }}>
                <PhotoBlock caption={`[ photo ]`} hue={m.hue} sat={18} ratio={1} radius={0} />
              </div>
              <div style={{
              flex: 1, padding: '16px 16px 16px 18px', display: 'flex',
              flexDirection: 'column', justifyContent: 'space-between',
              minWidth: 0, gap: "0px"
            }}>
                <div>
                  <div style={{
                  fontFamily: METHOD.mono, fontSize: 9, color: METHOD.accent,
                  letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 4
                }}>{m.tag}</div>
                  <div style={{
                  fontFamily: METHOD.serif, fontSize: 18, lineHeight: 1.15,
                  color: METHOD.ink, marginBottom: 3, letterSpacing: -0.2
                }}>{m.n}</div>
                  <div style={{
                  fontFamily: METHOD.serif, fontStyle: 'italic',
                  fontSize: 12, color: METHOD.ink2
                }}>{m.sub}</div>
                </div>
                <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: 10
              }}>
                  <div style={{
                  fontFamily: METHOD.mono, fontSize: 10, color: METHOD.ink3,
                  letterSpacing: 0.5
                }}>{m.p}G PRO · {m.kcal} KCAL</div>
                  <div style={{
                  padding: '6px 12px', borderRadius: 999,
                  background: i < 2 ? METHOD.accent : METHOD.ink,
                  color: '#fff', fontSize: 12, fontWeight: 700,
                  display: 'inline-flex', alignItems: 'center', gap: 5
                }}>
                    {i < 2 &&
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M2 5l2 2 4-5" /></svg>
                  }
                    {i < 2 ? 'Added' : 'Add'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomBar active="browse" />
    </IOSDevice>);

}

Object.assign(window, { HybridHome, HybridPromo, HybridLanding });