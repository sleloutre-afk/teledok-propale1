import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { ContactForm } from '@/components/ContactForm'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/partenaires',
  'Partenaires | TeleDok',
  'Déployer des parcours de téléconsultation rigoureux et évalués, au service de vos publics : mutuelles, grands groupes, professionnels de santé, collectivités et institutionnels.',
)

export default function Page() {
  return (
    <PageShell current="partenaires">
      <section className="bb" aria-labelledby="hero-t">
        <div className="wrap phero">
          <Crumb label="Partenaires" />
          <p className="eyebrow hero-in">Partenaires</p>
          <h1
            className="hero-in2"
            id="hero-t"
            style={{
              margin: '0 0 28px',
              maxWidth: 920,
              fontSize: 'clamp(34px, 4vw, 52px)',
              lineHeight: 1.16,
              fontWeight: 700,
              color: 'var(--blue)',
              letterSpacing: '-0.01em',
            }}
          >
            Déployer des parcours de téléconsultation rigoureux et évalués, au service de vos publics.
          </h1>
          <div className="rule hero-in2" style={{ marginBottom: 36 }}></div>
          <div className="hero-in3" style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <a className="btn btn-primary" href="#contact-part">
              Nous contacter
            </a>
            <Link className="btn btn-secondary" href={ROUTES.methode}>
              Notre méthode
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="pub-t">
        <div className="rv" style={{ marginBottom: 48 }}>
          <h2 className="h2" id="pub-t">
            Les organisations que nous accompagnons
          </h2>
          <div className="rule"></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: 24 }}>
          <article className="box rv" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
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
              <path pathLength="1" d="M24 5l16 6v12c0 10-7 17-16 21C15 40 8 33 8 23V11z" />
              <path pathLength="1" d="M24 33s-8-5-8-10a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5-8 10-8 10z" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 23, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>Mutuelles</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65 }}>Proposer des bilans de prévention santé (BPS) aux entreprises clientes.</p>
            </div>
          </article>
          <article className="box rv" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
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
              <rect pathLength="1" x="8" y="10" width="20" height="32" rx="1" />
              <path pathLength="1" d="M28 20h12v22H28" />
              <path pathLength="1" d="M14 17h2M20 17h2M14 24h2M20 24h2M14 31h2M20 31h2M33 27h2M33 34h2" />
              <path pathLength="1" d="M4 42h40" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 23, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>Grands groupes</h3>
              <ul className="blist">
                <li>
                  <span>
                    <strong style={{ fontWeight: 700 }}>Groupes hôteliers</strong> : téléconsultations pour leurs clients francophones à
                    l’international
                  </span>
                </li>
                <li>
                  <span>
                    <strong style={{ fontWeight: 700 }}>Entreprises</strong> : prévention santé pour leurs salariés
                  </span>
                </li>
              </ul>
            </div>
          </article>
          <article className="box rv" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
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
              <path pathLength="1" d="M14 6v12a8 8 0 0 0 16 0V6" />
              <path pathLength="1" d="M22 26v6a8 8 0 0 0 16 0v-4" />
              <circle pathLength="1" cx="38" cy="24" r="4" />
              <path pathLength="1" d="M11 6h6M27 6h6" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 23, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Professionnels de santé
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.65 }}>CPTS, MSP, groupes médicaux.</p>
            </div>
          </article>
          <article className="box rv" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
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
              <path pathLength="1" d="M6 18l18-10 18 10" />
              <path pathLength="1" d="M10 18v20M18 18v20M30 18v20M38 18v20" />
              <path pathLength="1" d="M4 42h40M6 38h36" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 23, lineHeight: 1.3, fontWeight: 700, color: 'var(--blue)' }}>
                Collectivités &amp; institutionnels
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.65 }}>Mairies, communautés de communes, établissements pénitentiaires, etc.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="band" aria-labelledby="app-t">
        <div className="wrap" style={{ paddingTop: 'clamp(72px, 9vw, 110px)', paddingBottom: 'clamp(72px, 9vw, 110px)' }}>
          <div
            className="rv"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 24,
              marginBottom: 40,
            }}
          >
            <div style={{ maxWidth: 680 }}>
              <h2 className="h2" id="app-t">
                Une méthode en quatre étapes
              </h2>
              <div className="rule" style={{ marginBottom: 20 }}></div>
              <p style={{ fontSize: 19, lineHeight: 1.6 }}>
                De la conception à l’évaluation, chaque parcours est documenté, mesuré et amélioré.
              </p>
            </div>
            <Link className="btn btn-secondary" href={ROUTES.methode}>
              Détail de la méthode
            </Link>
          </div>
          <ol
            className="rv"
            style={{
              listStyle: 'none',
              margin: '0',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            <li style={{ background: '#fff', border: '1px solid var(--line-strong)', borderRadius: 4, padding: 24 }}>
              <span
                style={{
                  display: 'inline-flex',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '2px solid var(--blue)',
                  boxSizing: 'border-box',
                  color: 'var(--blue)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                1
              </span>
              <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--blue)' }}>Conception sur-mesure du parcours</p>
            </li>
            <li style={{ background: '#fff', border: '1px solid var(--line-strong)', borderRadius: 4, padding: 24 }}>
              <span
                style={{
                  display: 'inline-flex',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '2px solid var(--blue)',
                  boxSizing: 'border-box',
                  color: 'var(--blue)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                2
              </span>
              <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--blue)' }}>Mise en œuvre &amp; ressources humaines</p>
            </li>
            <li style={{ background: '#fff', border: '1px solid var(--line-strong)', borderRadius: 4, padding: 24 }}>
              <span
                style={{
                  display: 'inline-flex',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '2px solid var(--blue)',
                  boxSizing: 'border-box',
                  color: 'var(--blue)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                3
              </span>
              <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--blue)' }}>Évaluation systématique</p>
            </li>
            <li style={{ background: '#fff', border: '1px solid var(--line-strong)', borderRadius: 4, padding: 24 }}>
              <span
                style={{
                  display: 'inline-flex',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '2px solid var(--blue)',
                  boxSizing: 'border-box',
                  color: 'var(--blue)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                4
              </span>
              <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--blue)' }}>Amélioration itérative &amp; recherche</p>
            </li>
          </ol>
          <p className="rv" style={{ margin: '28px 0 0', fontSize: 17 }}>
            <strong style={{ fontWeight: 700, color: 'var(--blue)' }}>Agnosticisme technologique :</strong> TeleDok adopte la technologie du
            client.
          </p>
        </div>
      </section>

      <section
        className="wrap"
        id="contact-part"
        aria-labelledby="cf-t"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px 72px',
          alignItems: 'flex-start',
          paddingTop: 'clamp(72px, 9vw, 120px)',
          paddingBottom: 'clamp(72px, 9vw, 120px)',
        }}
      >
        <div className="rv" style={{ flex: '1 1 320px', minWidth: '0' }}>
          <p className="eyebrow">Contact</p>
          <h2 className="h2" id="cf-t">
            Échanger sur votre projet
          </h2>
          <div className="rule" style={{ marginBottom: 28 }}></div>
          <p style={{ fontSize: 18, lineHeight: 1.65 }}>Les champs marqués d’un astérisque sont obligatoires.</p>
        </div>
        <div
          className="rv"
          style={{
            flex: '1.5 1 560px',
            minWidth: '0',
            background: '#fff',
            border: '1px solid var(--line-strong)',
            borderRadius: 4,
            padding: 'clamp(28px, 4vw, 48px)',
          }}
        >
          <ContactForm prefix="p" labelledBy="cf-t" />
        </div>
      </section>
    </PageShell>
  )
}
