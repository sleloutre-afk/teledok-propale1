import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/notre-methode',
  'Notre méthode | TeleDok',
  'De la conception à l’évaluation, chaque parcours est documenté, mesuré et amélioré : conception sur-mesure, mise en œuvre, évaluation systématique, amélioration itérative.',
)

export default function Page() {
  return (
    <PageShell current="methode">
      <section className="bb" aria-labelledby="hero-t">
        <div className="wrap phero">
          <Crumb label="Notre méthode" />
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56 }}>
            <div style={{ flex: '1 1 520px', minWidth: '0' }}>
              <p className="eyebrow hero-in">Notre méthode</p>
              <h1
                className="hero-in2"
                id="hero-t"
                style={{
                  margin: '0 0 28px',
                  fontSize: 'clamp(34px, 4vw, 52px)',
                  lineHeight: 1.16,
                  fontWeight: 700,
                  color: 'var(--blue)',
                  letterSpacing: '-0.01em',
                }}
              >
                De la conception à l’évaluation, chaque parcours est documenté, mesuré et amélioré.
              </h1>
              <div className="rule hero-in3"></div>
            </div>
            <div className="ph hero-in3" style={{ flex: '1 1 420px', minWidth: '0', aspectRatio: '16 / 10', borderRadius: 4 }}>
              <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="#0D628F" strokeWidth="1.5" aria-hidden="true">
                <circle cx="32" cy="32" r="30" />
                <path d="M26 21 L45 32 L26 43 Z" strokeLinejoin="round" />
              </svg>
              <span className="ph-tag">Vidéo réelle attendue</span>
              <span className="ph-txt">Déroulé d’un parcours sur le terrain ; sous-titrée, lecture à la demande.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap sec" id="etapes" data-steps aria-labelledby="et-t">
        <div
          className="rv"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 56 }}
        >
          <div>
            <h2 className="h2" id="et-t">
              Le parcours, étape par étape
            </h2>
            <div className="rule"></div>
          </div>
          <div role="group" aria-label="Choisir une étape" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <button className="chip chip-on" type="button" aria-pressed="true" data-step-chip>
              1 · Conception
            </button>
            <button className="chip" type="button" aria-pressed="false" data-step-chip>
              2 · Mise en œuvre
            </button>
            <button className="chip" type="button" aria-pressed="false" data-step-chip>
              3 · Évaluation
            </button>
            <button className="chip" type="button" aria-pressed="false" data-step-chip>
              4 · Amélioration
            </button>
          </div>
        </div>
        <div
          className="rv"
          style={{
            position: 'relative',
            border: '1px solid var(--line-strong)',
            borderRadius: 6,
            padding: '64px clamp(20px, 4vw, 48px) 40px',
          }}
        >
          <p
            style={{
              position: 'absolute',
              top: -13,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#fff',
              padding: '0 18px',
              fontSize: 14,
              lineHeight: '26px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'var(--blue)',
              whiteSpace: 'nowrap',
            }}
          >
            Direction médicale et éthique indépendante
          </p>
          <p style={{ margin: '0 0 32px', fontSize: 17, textAlign: 'center' }}>
            Elle encadre chacune des quatre étapes et garantit la sécurité du parcours, pour les médecins comme pour les patients.
          </p>
          <div className="track" aria-hidden="true" style={{ height: 2, background: '#D5E4EC', marginBottom: 32 }}>
            <div className="track-fill" style={{ height: 2, background: 'var(--blue)', width: '25%' }}></div>
          </div>
          <ol
            style={{
              listStyle: 'none',
              margin: '0',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
              gap: 24,
            }}
          >
            <li className="step on" data-step>
              <span className="step-n">1</span>
              <h3 style={{ margin: '0 0 16px', fontSize: 24, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Conception sur-mesure du parcours
              </h3>
              <ul className="blist">
                <li>Analyse initiale du contexte et des enjeux du client</li>
                <li>Rédaction des protocoles et procédures</li>
                <li>Formation des praticiens à chaque parcours et aux technologies spécifiques</li>
              </ul>
              <div
                style={{
                  marginTop: 22,
                  background: 'var(--bg-soft)',
                  border: '1px solid var(--line-strong)',
                  borderRadius: 3,
                  padding: '14px 18px',
                }}
              >
                <p
                  style={{
                    margin: '0 0 2px',
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--blue)',
                  }}
                >
                  Agnosticisme technologique
                </p>
                <p style={{ fontSize: 17, fontWeight: 700 }}>TeleDok adopte la technologie du client.</p>
              </div>
            </li>
            <li className="step" data-step>
              <span className="step-n">2</span>
              <h3 style={{ margin: '0 0 16px', fontSize: 24, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Mise en œuvre &amp; ressources humaines
              </h3>
              <ul className="blist">
                <li>Fourniture des médecins et paramédicaux nécessaires</li>
                <li>Un premier pool d’environ 50 médecins collaborant quotidiennement avec TeleDok</li>
              </ul>
              <p style={{ margin: '26px 0 0', display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ fontSize: 52, lineHeight: 1, fontWeight: 700, color: 'var(--blue)' }}>≈ 50</span>
                <span style={{ fontSize: 16 }}>médecins dans le premier pool</span>
              </p>
            </li>
            <li className="step" data-step>
              <span className="step-n">3</span>
              <h3 style={{ margin: '0 0 16px', fontSize: 24, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Évaluation systématique
              </h3>
              <ul className="blist">
                <li>Évaluation à la fois médicale et économique (apport pour la collectivité)</li>
              </ul>
              <div
                style={{
                  marginTop: 26,
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 8,
                  textAlign: 'center',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '16.6%', right: '16.6%', top: 9, height: 2, background: 'var(--line-strong)' }}
                ></div>
                <div style={{ position: 'relative' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: '#fff',
                      border: '2px solid var(--blue)',
                      margin: '0 auto 10px',
                      boxSizing: 'border-box',
                    }}
                  ></span>
                  <span style={{ fontSize: 15, fontWeight: 400 }}>Dès la conception</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <span
                    aria-hidden="true"
                    style={{ display: 'block', width: 20, height: 20, borderRadius: '50%', background: '#8FB3C8', margin: '0 auto 10px' }}
                  ></span>
                  <span style={{ fontSize: 15, fontWeight: 400 }}>Pendant le parcours</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'var(--blue)',
                      margin: '0 auto 10px',
                    }}
                  ></span>
                  <span style={{ fontSize: 15, fontWeight: 400 }}>À la fin du parcours</span>
                </div>
              </div>
            </li>
            <li className="step" data-step>
              <span className="step-n">4</span>
              <h3 style={{ margin: '0 0 16px', fontSize: 24, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Amélioration itérative &amp; recherche
              </h3>
              <ul className="blist">
                <li>Les enseignements de chaque opération nourrissent l’amélioration des parcours futurs</li>
                <li>… et alimentent la recherche scientifique</li>
              </ul>
              <Link className="more" href={ROUTES.recherche} style={{ marginTop: 18 }}>
                Recherche &amp; publications{' '}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </Link>
            </li>
          </ol>
          <p
            style={{
              margin: '36px 0 0',
              paddingTop: 24,
              borderTop: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 16,
            }}
          >
            <svg
              className="trace"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path pathLength="1" d="M26 12a11 11 0 0 0-19.5-2.5" />
              <path pathLength="1" d="M6 4v6h6" />
              <path pathLength="1" d="M6 20a11 11 0 0 0 19.5 2.5" />
              <path pathLength="1" d="M26 28v-6h-6" />
            </svg>
            Chaque cycle d’évaluation alimente la conception des parcours suivants.
          </p>
        </div>
      </section>

      <section
        className="wrap"
        aria-label="Orientation"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          paddingBottom: 'clamp(72px, 9vw, 128px)',
        }}
      >
        <div
          className="rv"
          style={{
            background: 'var(--bg-soft)',
            border: '1px solid var(--line)',
            borderRadius: 4,
            padding: 'clamp(36px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 18,
          }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 32px)', lineHeight: 1.2, fontWeight: 700, color: 'var(--blue)' }}>
            Voir la méthode appliquée
          </h2>
          <p style={{ margin: '0 0 8px', fontSize: 18, lineHeight: 1.6, maxWidth: 440 }}>
            Parcours de bilan de prévention, téléconsultation de soins primaires assistée.
          </p>
          <Link className="btn btn-secondary" href={ROUTES.realisations}>
            Nos réalisations
          </Link>
        </div>
        <div
          className="rv on-blue"
          style={{
            background: 'var(--blue)',
            color: '#fff',
            borderRadius: 4,
            padding: 'clamp(36px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 18,
          }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 32px)', lineHeight: 1.2, fontWeight: 700 }}>Vous êtes une organisation ?</h2>
          <p style={{ margin: '0 0 8px', fontSize: 18, lineHeight: 1.6, maxWidth: 440 }}>
            Déployer des parcours de téléconsultation rigoureux et évalués, au service de vos publics.
          </p>
          <Link className="btn btn-white" href={ROUTES.partenaires}>
            Devenir partenaire
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
