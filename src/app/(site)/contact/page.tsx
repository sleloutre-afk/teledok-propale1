import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { ContactForm } from '@/components/ContactForm'
import { getCoordonnees } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/contact',
  'Contact | TeleDok',
  'Contacter TeleDok : coordonnées et formulaire de contact pour les organisations et les demandes générales.',
)

export default async function Page() {
  const coordonnees = await getCoordonnees()

  return (
    <PageShell>
      <section className="bb" aria-labelledby="hero-t">
        <div className="wrap" style={{ paddingTop: 32, paddingBottom: 'clamp(56px, 7vw, 88px)' }}>
          <Crumb label="Contact" />
          <p className="eyebrow hero-in">Contact</p>
          <h1 className="hero-in2 h1" id="hero-t">
            Nous contacter
          </h1>
          <div className="rule hero-in2"></div>
        </div>
      </section>

      <section
        className="wrap"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px 48px',
          alignItems: 'flex-start',
          paddingTop: 'clamp(64px, 8vw, 100px)',
          paddingBottom: 'clamp(72px, 9vw, 110px)',
        }}
      >
        <aside className="rv" style={{ flex: '1 1 320px', minWidth: '0', display: 'grid', gap: 20 }}>
          <div className="on-blue" style={{ background: 'var(--blue)', color: '#fff', borderRadius: 4, padding: 32 }}>
            <h2 style={{ margin: '0 0 10px', fontSize: 24, lineHeight: 1.25, fontWeight: 700 }}>Vous êtes médecin ?</h2>
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6 }}>
              La candidature se fait depuis la page dédiée, avec votre numéro RPPS.
            </p>
            <Link className="btn btn-white" href={ROUTES.medecins}>
              Rejoindre TeleDok
            </Link>
          </div>
          <div style={{ border: '1px solid var(--line-strong)', borderRadius: 4, padding: 32 }}>
            <h2 style={{ margin: '0 0 18px', fontSize: 22, lineHeight: 1.25, fontWeight: 700, color: 'var(--blue)' }}>Coordonnées</h2>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'grid', gap: 14, fontSize: 16 }}>
              <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D628F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: 'none', marginTop: 2 }}
                >
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span style={{ whiteSpace: 'pre-line' }}>{coordonnees.adresse ?? <span className="todo">[Adresse postale]</span>}</span>
              </li>
              <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D628F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: 'none', marginTop: 2 }}
                >
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
                <span>{coordonnees.telephone ?? <span className="todo">[Téléphone]</span>}</span>
              </li>
              <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D628F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: 'none', marginTop: 2 }}
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span>
                  {coordonnees.email ? (
                    <a href={`mailto:${coordonnees.email}`}>{coordonnees.email}</a>
                  ) : (
                    <span className="todo">[E-mail de contact]</span>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </aside>

        <div
          className="rv"
          style={{
            flex: '2 1 560px',
            minWidth: '0',
            background: '#fff',
            border: '1px solid var(--line-strong)',
            borderRadius: 4,
            padding: 'clamp(28px, 4vw, 48px)',
          }}
        >
          <h2
            id="cf-t"
            style={{ margin: '0 0 8px', fontSize: 'clamp(26px, 2.4vw, 30px)', lineHeight: 1.2, fontWeight: 700, color: 'var(--blue)' }}
          >
            Formulaire de contact
          </h2>
          <p style={{ margin: '0 0 28px', fontSize: 16, color: 'var(--muted)' }}>Les champs marqués d’un astérisque sont obligatoires.</p>
          <ContactForm prefix="c" labelledBy="cf-t" />
        </div>
      </section>
    </PageShell>
  )
}
