import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { CandidatureForm } from '@/components/CandidatureForm'
import { Pub } from '@/components/Pub'
import { getPublications } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/medecins',
  'Médecins : rejoindre TeleDok',
  'Exercer la télémédecine sans renoncer à la qualité du soin ni à votre indépendance : conditions d’exercice, formation gratuite et candidature.',
)

export default async function Page() {
  const publications = await getPublications('showOnMedecins', 2)

  return (
    <PageShell current="medecins" joinHref="#candidature" footerCta="partenaires">
      <section className="wrap" aria-labelledby="hero-t" style={{ paddingTop: 32, paddingBottom: 'clamp(56px, 7vw, 96px)' }}>
        <Crumb label="Médecins : rejoindre TeleDok" />
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56 }}>
          <div style={{ flex: '1 1 520px', minWidth: '0' }}>
            <p
              className="hero-in"
              style={{
                margin: '0 0 24px',
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--blue)',
              }}
            >
              Médecins généralistes et spécialistes
            </p>
            <h1
              className="hero-in2"
              id="hero-t"
              style={{
                margin: '0 0 40px',
                fontSize: 'clamp(36px, 4.4vw, 56px)',
                lineHeight: 1.14,
                fontWeight: 700,
                color: 'var(--blue)',
                letterSpacing: '-0.01em',
              }}
            >
              Exercer la télémédecine sans renoncer à la qualité du soin ni à votre indépendance.
            </h1>
            <div className="hero-in3" style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <a className="btn btn-primary" href="#candidature">
                Déposer ma candidature
              </a>
              <a className="btn btn-secondary" href="#conditions">
                Conditions d’exercice
              </a>
            </div>
          </div>
          <div className="ph hero-in3" style={{ flex: '1 1 420px', minWidth: '0', aspectRatio: '4 / 3', borderRadius: 4 }}>
            <span className="ph-tag">Photographie réelle attendue</span>
            <span className="ph-txt">
              Un médecin de TeleDok en téléconsultation, au poste de travail ; cadrage sobre, lumière naturelle.
            </span>
          </div>
        </div>
      </section>

      <section aria-label="Chiffres clés" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div
          className="wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 40,
            paddingTop: 56,
            paddingBottom: 56,
          }}
        >
          <div className="rv">
            <div className="kpi-rule"></div>
            <p className="kpi-n">
              <span data-count data-to="100">
                100
              </span>
              <span className="kpi-u"> %</span>
            </p>
            <p className="kpi-l">des honoraires de consultation reversés au médecin</p>
          </div>
          <div className="rv">
            <div className="kpi-rule"></div>
            <p className="kpi-n">
              15–
              <span data-count data-from="15" data-to="20">
                20
              </span>
              <span className="kpi-u"> min</span>
            </p>
            <p className="kpi-l">par patient, sans obligation de rendement</p>
          </div>
          <div className="rv">
            <div className="kpi-rule"></div>
            <p className="kpi-n">
              ≈{' '}
              <span data-count data-to="50">
                50
              </span>
            </p>
            <p className="kpi-l">médecins travaillant quotidiennement avec TeleDok</p>
          </div>
        </div>
      </section>

      <section
        className="wrap"
        id="conditions"
        aria-labelledby="cond-t"
        style={{ paddingTop: 'clamp(72px, 9vw, 128px)', paddingBottom: 'clamp(72px, 9vw, 128px)' }}
      >
        <div className="rv" style={{ marginBottom: 56 }}>
          <h2 className="h2" id="cond-t">
            Conditions d’exercice
          </h2>
          <div style={{ width: 64, height: 3, background: 'var(--blue)' }}></div>
        </div>
        <div className="conditions">
          <div
            className="arg rv"
            style={{
              padding: '40px 32px 40px 0',
              borderBottom: '1px solid var(--line-strong)',
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
            }}
          >
            <svg
              className="trace"
              width="52"
              height="52"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: 'none' }}
            >
              <path pathLength="1" d="M12 16h24l-2 24H14z" />
              <path pathLength="1" d="M18 16v-3a6 6 0 0 1 12 0v3" />
              <path pathLength="1" d="M7 7l34 34" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>Aucune vente</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65 }}>
                TeleDok ne vend rien aux médecins : ni technologie, ni process, ni formation.
              </p>
            </div>
          </div>
          <div
            className="arg rv"
            style={{
              padding: '40px 32px 40px 0',
              borderBottom: '1px solid var(--line-strong)',
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
            }}
          >
            <svg
              className="trace"
              width="52"
              height="52"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: 'none' }}
            >
              <ellipse pathLength="1" cx="24" cy="12" rx="13" ry="5" />
              <path pathLength="1" d="M11 12v8c0 2.8 5.8 5 13 5s13-2.2 13-5v-8" />
              <path pathLength="1" d="M11 20v8c0 2.8 5.8 5 13 5s13-2.2 13-5v-8" />
              <path pathLength="1" d="M11 28v8c0 2.8 5.8 5 13 5s13-2.2 13-5v-8" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Rémunération intégrale
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.65 }}>
                TeleDok ne se rémunère pas sur les consultations ; l’intégralité des honoraires revient au médecin.
              </p>
            </div>
          </div>
          <div
            className="arg rv"
            style={{
              padding: '40px 32px 40px 0',
              borderBottom: '1px solid var(--line-strong)',
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
            }}
          >
            <svg
              className="trace"
              width="52"
              height="52"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: 'none' }}
            >
              <circle pathLength="1" cx="24" cy="27" r="15" />
              <path pathLength="1" d="M24 27V18" />
              <path pathLength="1" d="M24 27l6 4" />
              <path pathLength="1" d="M20 6h8M24 6v6" />
              <path pathLength="1" d="M36 14l3-3" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Qualité, pas rendement
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.65 }}>
                15 à 20 minutes par patient, sans aucune obligation de rendement (pas d’« abattage »).
              </p>
            </div>
          </div>
          <div
            className="arg rv"
            style={{
              padding: '40px 32px 40px 0',
              borderBottom: '1px solid var(--line-strong)',
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
            }}
          >
            <svg
              className="trace"
              width="52"
              height="52"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: 'none' }}
            >
              <rect pathLength="1" x="7" y="10" width="34" height="31" rx="2" />
              <path pathLength="1" d="M7 18h34" />
              <path pathLength="1" d="M16 6v8M32 6v8" />
              <path pathLength="1" d="M17 29l5 5 9-10" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>Volume garanti</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65 }}>
                Un volume d’occupation médicale garanti ; la « taxe lapin » (no-show patient) est assumée par TeleDok.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="form-t-a">
        <div
          className="wrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 64,
            alignItems: 'center',
            paddingTop: 'clamp(72px, 9vw, 120px)',
            paddingBottom: 'clamp(72px, 9vw, 120px)',
          }}
        >
          <div className="rv" style={{ flex: '1 1 440px', minWidth: '0' }}>
            <h2 className="h2" id="form-t-a">
              Une formation gratuite
            </h2>
            <div style={{ width: 64, height: 3, background: 'var(--blue)', marginBottom: 28 }}></div>
            <p style={{ margin: '0 0 40px', fontSize: 20, lineHeight: 1.65 }}>
              Dispensée par un collectif de médecins partageant leur expérience.
            </p>
            <ol style={{ listStyle: 'none', margin: '0', padding: '0', display: 'grid', gap: '0' }}>
              <li style={{ display: 'flex', gap: 24, alignItems: 'center', padding: '22px 0', borderTop: '1px solid var(--line-strong)' }}>
                <svg
                  className="trace"
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="#0D628F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: 'none' }}
                >
                  <path pathLength="1" d="M24 6l14 5v11c0 9-6 15-14 20C16 37 10 31 10 22V11z" />
                  <path pathLength="1" d="M15 25h5l3-6 4 10 3-4h4" />
                </svg>
                <span style={{ fontSize: 19, fontWeight: 400 }}>Médecine de prévention</span>
              </li>
              <li style={{ display: 'flex', gap: 24, alignItems: 'center', padding: '22px 0', borderTop: '1px solid var(--line-strong)' }}>
                <svg
                  className="trace"
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="#0D628F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: 'none' }}
                >
                  <rect pathLength="1" x="6" y="8" width="36" height="24" rx="2" />
                  <circle pathLength="1" cx="24" cy="17" r="4" />
                  <path pathLength="1" d="M17 28c1-4 4-5 7-5s6 1 7 5" />
                  <path pathLength="1" d="M18 40h12M24 32v8" />
                </svg>
                <span style={{ fontSize: 19, fontWeight: 400 }}>Méthodologies TeleDok (téléconsultation)</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  gap: 24,
                  alignItems: 'center',
                  padding: '22px 0',
                  borderTop: '1px solid var(--line-strong)',
                  borderBottom: '1px solid var(--line-strong)',
                }}
              >
                <svg
                  className="trace"
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="#0D628F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: 'none' }}
                >
                  <circle pathLength="1" cx="10" cy="10" r="4" />
                  <circle pathLength="1" cx="38" cy="38" r="4" />
                  <path pathLength="1" d="M14 10h16a6 6 0 0 1 0 12H18a6 6 0 0 0 0 12h16" />
                </svg>
                <span style={{ fontSize: 19, fontWeight: 400 }}>Outils propres à chaque parcours de soins</span>
              </li>
            </ol>
          </div>
          <div className="ph rv" style={{ flex: '1 1 420px', minWidth: '0', aspectRatio: '5 / 4', borderRadius: 4 }}>
            <span className="ph-tag">Photographie réelle attendue</span>
            <span className="ph-txt">Session de formation entre médecins TeleDok : échange de pratiques autour d’un parcours.</span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="ind-t"
        style={{ maxWidth: 1040, margin: '0 auto', padding: 'clamp(72px, 9vw, 128px) clamp(16px, 4vw, 40px)', textAlign: 'center' }}
      >
        <div className="rv">
          <svg
            className="trace"
            width="56"
            height="56"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#0D628F"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ display: 'block', margin: '0 auto 28px' }}
          >
            <path pathLength="1" d="M24 5l16 6v12c0 10-7 17-16 21C15 40 8 33 8 23V11z" />
            <path pathLength="1" d="M17 24l5 5 9-10" />
          </svg>
          <h2
            id="ind-t"
            style={{
              margin: '0 0 32px',
              fontSize: 15,
              lineHeight: 1.4,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--blue)',
            }}
          >
            Un modèle indépendant
          </h2>
          <p
            style={{
              margin: '0 auto',
              maxWidth: 880,
              fontSize: 'clamp(24px, 2.6vw, 32px)',
              lineHeight: 1.45,
              fontWeight: 300,
              color: 'var(--ink)',
            }}
          >
            TeleDok ne vend rien aux médecins et ne prélève aucune part sur leurs consultations. Son indépendance médicale et éthique est la
            condition de la confiance.
          </p>
        </div>
      </section>

      <section aria-labelledby="etu-t" style={{ borderTop: '1px solid var(--line)' }}>
        <div
          className="wrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px 64px',
            alignItems: 'flex-start',
            paddingTop: 'clamp(56px, 7vw, 96px)',
            paddingBottom: 'clamp(56px, 7vw, 96px)',
          }}
        >
          <div className="rv" style={{ flex: '1 1 320px', minWidth: '0' }}>
            <h2 id="etu-t" style={{ margin: '0 0 12px', fontSize: 26, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
              Travaux menés auprès des médecins
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 17 }}>Extraits des travaux de recherche conduits par TeleDok.</p>
            <Link className="more" href={ROUTES.recherche}>
              Recherche &amp; publications{' '}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
          <ul className="pubs pubs--tight rv" style={{ flex: '2 1 560px', minWidth: 0 }}>
            {publications.map((pub) => (
              <Pub key={pub.id} pub={pub} />
            ))}
          </ul>
        </div>
      </section>

      <section id="candidature" aria-labelledby="cand-t" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)' }}>
        <div
          className="wrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '56px 72px',
            alignItems: 'flex-start',
            paddingTop: 'clamp(72px, 9vw, 120px)',
            paddingBottom: 'clamp(72px, 9vw, 120px)',
          }}
        >
          <div className="rv" style={{ flex: '1 1 340px', minWidth: '0' }}>
            <p
              style={{
                margin: '0 0 16px',
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--blue)',
              }}
            >
              Candidature
            </p>
            <h2 className="h2" id="cand-t">
              Rejoindre TeleDok
            </h2>
            <div style={{ width: 64, height: 3, background: 'var(--blue)', marginBottom: 28 }}></div>
            <p style={{ margin: '0 0 28px', fontSize: 18, lineHeight: 1.65 }}>Tous les champs sont obligatoires.</p>
            <div style={{ borderTop: '1px solid var(--line-strong)', paddingTop: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#0D628F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: 'none' }}
              >
                <rect x="3" y="7" width="26" height="18" rx="2" />
                <circle cx="11" cy="15" r="3" />
                <path d="M7 21c.8-2 2.2-3 4-3s3.2 1 4 3M19 13h6M19 17h4" />
              </svg>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>Le numéro RPPS comporte 11 chiffres. Il figure sur votre carte CPS.</p>
            </div>
          </div>

          <div
            className="rv"
            style={{
              flex: '1.4 1 520px',
              minWidth: '0',
              background: '#fff',
              border: '1px solid var(--line-strong)',
              borderRadius: 4,
              padding: 'clamp(28px, 4vw, 48px)',
            }}
          >
            <CandidatureForm labelledBy="cand-t" />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
