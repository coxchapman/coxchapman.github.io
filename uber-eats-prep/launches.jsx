// launches.jsx — Fourth screen per variation: brand-themed "We're launching
// packaged meals in San Diego — 20% off your first shipment" promo overlay
// sitting on top of a normal restaurant home.

// ── A · Method launch ──────────────────────────────────────────────────
function MethodLaunch() {
  return (
    <LaunchScreen
      notchBg="#1d1d1d"
      voucher={
        <PromoVoucher
          cardBg="#fff"
          iconBg={METHOD.accentSoft}
          icon={
            <span style={{
              fontFamily: METHOD.serif, fontSize: 54, color: METHOD.accent,
              fontStyle: 'italic', lineHeight: 1, paddingBottom: 4,
            }}>M</span>
          }
          eyebrow="Now in San Diego · Method"
          eyebrowStyle={{ fontFamily: METHOD.mono, color: METHOD.accent, letterSpacing: 1.2 }}
          titleNode={<>Packaged meals, <span style={{ fontStyle: 'italic', fontFamily: METHOD.serif, fontWeight: 500 }}>20% off</span> your first shipment.</>}
          titleStyle={{ fontFamily: METHOD.serif, fontWeight: 500, fontSize: 28, letterSpacing: -0.6, color: METHOD.ink }}
          body="Chef-prepared, macro-tuned weekly plans — now delivering to San Diego ZIPs. First box on us."
          meta="Launching San Diego · May 28"
          metaStyle={{ fontFamily: METHOD.mono, fontSize: 11, letterSpacing: 1, color: METHOD.ink3, textTransform: 'uppercase' }}
          ctaLabel="Claim 20% off"
          ctaBg={METHOD.ink}
        />
      }
    />
  );
}

// ── B · Hearth launch ──────────────────────────────────────────────────
function HearthLaunch() {
  return (
    <LaunchScreen
      notchBg="#1d1d1d"
      voucher={
        <PromoVoucher
          cardBg={HEARTH.card}
          iconBg={HEARTH.accentSoft}
          icon={
            <span style={{
              fontFamily: HEARTH.serif, fontSize: 60, color: HEARTH.accent,
              fontStyle: 'italic', lineHeight: 1, fontWeight: 500, paddingBottom: 4,
            }}>H</span>
          }
          eyebrow="Introducing Hearth"
          eyebrowStyle={{
            fontFamily: HEARTH.serif, fontStyle: 'italic',
            color: HEARTH.accent, letterSpacing: 0.4, textTransform: 'none',
            fontSize: 14,
          }}
          titleNode={<>A week of <span style={{ fontStyle: 'italic' }}>real meals</span>, 20% off.</>}
          titleStyle={{ fontFamily: HEARTH.serif, fontWeight: 500, fontSize: 30, letterSpacing: -0.6, color: HEARTH.ink, lineHeight: 1.05 }}
          body="Sunday-cooked, Tuesday-reheated. Now delivering to San Diego — your first box is 20% off."
          meta="Launching in San Diego · May 28"
          metaStyle={{ fontFamily: HEARTH.serif, fontStyle: 'italic', fontSize: 13, color: HEARTH.ink2 }}
          ctaLabel="Claim my 20% off"
          ctaBg={HEARTH.accent}
          ctaFg="#FFFBF4"
        />
      }
    />
  );
}

// ── C · Plate launch ───────────────────────────────────────────────────
function PlateLaunch() {
  return (
    <LaunchScreen
      notchBg="#1d1d1d"
      voucher={
        <PromoVoucher
          cardBg="#fff"
          iconBg={PLATE.accent}
          icon={
            <div style={{ position: 'relative', width: 60, height: 56 }}>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 28, borderRadius: '0 0 30px 30px', background: '#fff',
              }} />
              <div style={{
                position: 'absolute', top: 10, left: 18, width: 24, height: 24,
                borderRadius: '50%', background: PLATE.yellow,
              }} />
            </div>
          }
          eyebrow={
            <>
              <span style={{
                display: 'inline-block', padding: '3px 8px', borderRadius: 999,
                background: PLATE.yellow, color: PLATE.ink, fontFamily: PLATE.display,
                fontWeight: 900, fontSize: 10, letterSpacing: 0.8,
              }}>NEW IN SAN DIEGO</span>
            </>
          }
          eyebrowStyle={{ letterSpacing: 0, textTransform: 'none', color: PLATE.ink2 }}
          titleNode={<>Packaged meals just dropped. <span style={{ color: PLATE.accentDeep }}>20% off</span> your first box.</>}
          titleStyle={{ fontFamily: PLATE.display, fontWeight: 900, fontSize: 28, letterSpacing: -0.9, color: PLATE.ink, lineHeight: 0.98 }}
          body="5 chef-made meals every Tuesday. Now delivering to San Diego — first shipment is 20% off."
          meta="Code applied at checkout · ends June 4"
          metaStyle={{ fontFamily: PLATE.display, fontSize: 11, fontWeight: 700, letterSpacing: 0.4, color: PLATE.ink2, textTransform: 'uppercase' }}
          ctaLabel="Start my first box →"
          ctaBg={PLATE.ink}
          ctaFg={PLATE.yellow}
        />
      }
    />
  );
}

// ── D · Method × Hearth launch ────────────────────────────────────────
function HybridLaunch() {
  return (
    <LaunchScreen
      notchBg="#1d1d1d"
      voucher={
        <PromoVoucher
          cardBg="#fff"
          iconBg={METHOD.accentSoft}
          icon={
            <span style={{
              fontFamily: METHOD.serif, fontSize: 54, color: METHOD.accent,
              fontStyle: 'italic', lineHeight: 1, paddingBottom: 4,
            }}>M</span>
          }
          eyebrow="Now in San Diego"
          eyebrowStyle={{ fontFamily: METHOD.mono, color: METHOD.accent, letterSpacing: 1.2 }}
          titleNode={<>Your week of meals, <span style={{ fontStyle: 'italic' }}>20% off</span>.</>}
          titleStyle={{ fontFamily: METHOD.serif, fontWeight: 500, fontSize: 30, letterSpacing: -0.6, color: METHOD.ink, lineHeight: 1.05 }}
          body="Pick the days you need covered. We cook Sunday, drop Tuesday. First shipment is 20% off."
          meta="Launching in San Diego · May 28"
          metaStyle={{ fontFamily: METHOD.mono, fontSize: 11, letterSpacing: 1, color: METHOD.ink3, textTransform: 'uppercase' }}
          ctaLabel="Plan my first week"
          ctaBg={METHOD.ink}
        />
      }
    />
  );
}

Object.assign(window, { MethodLaunch, HearthLaunch, PlateLaunch, HybridLaunch });
