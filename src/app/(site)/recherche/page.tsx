import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { Travaux } from '@/components/Travaux'
import { getPublications } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/recherche',
  'Recherche & publications | TeleDok',
  'Rapports épidémiologiques, publications scientifiques et thèses : chaque opération de TeleDok contribue, par ses retours d’expérience et ses données agrégées, à la connaissance scientifique.',
)

export default async function Page() {
  const publications = await getPublications()

  return (
    <PageShell current="recherche">
      <section className="bb" aria-labelledby="hero-t">
        <div className="wrap phero">
          <Crumb label="Recherche & publications" />
          <p className="eyebrow hero-in">Recherche &amp; publications</p>
          <h1 className="hero-in2 h1" id="hero-t">
            Contribution à la recherche
          </h1>
          <div className="rule hero-in2" style={{ marginBottom: 32 }}></div>
          <p className="hero-in3" style={{ maxWidth: 860, fontSize: 'clamp(19px, 1.8vw, 22px)', lineHeight: 1.65 }}>
            TeleDok n’est pas seulement une structure opérationnelle : chaque opération, par ses retours d’expérience et ses données
            agrégées, contribue à la connaissance scientifique, pour apporter sa pierre à l’édifice d’une santé globale.
          </p>
        </div>
      </section>

      <section className="wrap" aria-labelledby="formes-t" style={{ paddingTop: 'clamp(64px, 8vw, 100px)' }}>
        <h2
          className="rv"
          id="formes-t"
          style={{ margin: '0 0 32px', fontSize: 'clamp(24px, 2.4vw, 30px)', lineHeight: 1.2, fontWeight: 700, color: 'var(--blue)' }}
        >
          Formes de contribution
        </h2>
        <ul
          style={{
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          <li className="box rv" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px 26px' }}>
            <svg
              className="trace"
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: 'none' }}
            >
              <path pathLength="1" d="M8 40V8" />
              <path pathLength="1" d="M8 40h32" />
              <path pathLength="1" d="M14 32l8-10 7 6 11-14" />
            </svg>
            <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--blue)' }}>Rapports épidémiologiques</span>
          </li>
          <li className="box rv" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px 26px' }}>
            <svg
              className="trace"
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: 'none' }}
            >
              <path pathLength="1" d="M12 6h18l8 8v28H12z" />
              <path pathLength="1" d="M30 6v8h8" />
              <path pathLength="1" d="M18 24h14M18 30h14M18 36h9" />
            </svg>
            <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--blue)' }}>Publications scientifiques</span>
          </li>
          <li className="box rv" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px 26px' }}>
            <svg
              className="trace"
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#0D628F"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: 'none' }}
            >
              <path pathLength="1" d="M4 18l20-10 20 10-20 10z" />
              <path pathLength="1" d="M12 22v10c0 3 5 6 12 6s12-3 12-6V22" />
              <path pathLength="1" d="M44 18v12" />
            </svg>
            <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--blue)' }}>Thèses</span>
          </li>
        </ul>
      </section>

      <Travaux publications={publications} />

      <section
        className="wrap"
        aria-label="Orientation"
        style={{ paddingTop: 'clamp(72px, 9vw, 110px)', paddingBottom: 'clamp(72px, 9vw, 110px)' }}
      >
        <div
          className="rv on-blue"
          style={{
            background: 'var(--blue)',
            color: '#fff',
            borderRadius: 4,
            padding: 'clamp(36px, 5vw, 56px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px 40px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(26px, 2.4vw, 32px)', lineHeight: 1.2, fontWeight: 700 }}>
              De l’évaluation à la recherche
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6 }}>
              Les enseignements de chaque opération nourrissent l’amélioration des parcours futurs et alimentent la recherche scientifique.
            </p>
          </div>
          <Link className="btn btn-white" href={ROUTES.methode}>
            Notre méthode
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
