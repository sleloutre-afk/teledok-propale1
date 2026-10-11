import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import { pictos } from '@/data/pictos'
import { getValeurs } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/teledok',
  'Qui sommes-nous | TeleDok',
  'TeleDok est un regroupement de médecins généralistes et spécialistes, associés à des professionnels paramédicaux, au service de parcours de soins innovants.',
)

export default async function Page() {
  const valeurs = await getValeurs()

  return (
    <PageShell current="teledok">
      <section className="bb" aria-labelledby="hero-t">
        <div className="wrap phero">
          <Crumb label="TeleDok" />
          <p className="eyebrow hero-in">Qui sommes-nous</p>
          <h1
            className="hero-in2"
            id="hero-t"
            style={{
              margin: '0 0 28px',
              maxWidth: 980,
              fontSize: 'clamp(32px, 3.8vw, 50px)',
              lineHeight: 1.2,
              fontWeight: 700,
              color: 'var(--blue)',
              letterSpacing: '-0.01em',
            }}
          >
            TeleDok est né d’une conviction : la télémédecine n’a de valeur que si elle préserve la qualité du soin et l’indépendance de
            ceux qui l’exercent.
          </h1>
          <div className="rule hero-in3"></div>
        </div>
      </section>

      <section
        className="wrap"
        aria-labelledby="qui-t"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 64,
          paddingTop: 'clamp(72px, 9vw, 128px)',
          paddingBottom: 'clamp(72px, 9vw, 128px)',
        }}
      >
        <div className="rv" style={{ flex: '1 1 460px', minWidth: '0' }}>
          <h2 className="h2" id="qui-t">
            Un regroupement de praticiens
          </h2>
          <div className="rule" style={{ marginBottom: 32 }}></div>
          <p style={{ margin: '0 0 32px', fontSize: 20, lineHeight: 1.7 }}>
            TeleDok est un regroupement de médecins généralistes et spécialistes, associés à des professionnels paramédicaux, au service de
            parcours de soins innovants. Son modèle repose sur l’indépendance médicale et l’exigence de qualité.
          </p>
          <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <li className="tag">Médecins généralistes</li>
            <li className="tag">Médecins spécialistes</li>
            <li className="tag">Infirmier·e·s et paramédicaux</li>
          </ul>
        </div>
        <div className="ph rv" style={{ flex: '1 1 420px', minWidth: '0', aspectRatio: '5 / 4', borderRadius: 4 }}>
          <span className="ph-tag">Photographie réelle attendue</span>
          <span className="ph-txt">Équipe médicale et paramédicale de TeleDok : portrait de groupe en situation.</span>
        </div>
      </section>

      <section className="band" id="valeurs" aria-labelledby="val-t">
        <div className="wrap sec">
          <div className="rv" style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2
              id="val-t"
              style={{ margin: '0 0 20px', fontSize: 'clamp(30px, 3vw, 38px)', lineHeight: 1.2, fontWeight: 700, color: 'var(--blue)' }}
            >
              Nos valeurs
            </h2>
            <div style={{ width: 96, height: 3, background: 'var(--blue)', margin: '0 auto' }}></div>
          </div>
          <ul
            style={{
              listStyle: 'none',
              margin: '0',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {valeurs.map((v, i) => (
              <li key={v.titre} className="box rv valeur">
                <svg
                  className="valeur-pic"
                  viewBox="0 0 120 120"
                  fill="none"
                  stroke="#0D628F"
                  strokeWidth={pictos[i].strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: pictos[i].body }}
                />
                <h3>{v.titre}</h3>
                <p>{v.texte ?? <span className="todo">[1 à 2 lignes à rédiger avec TeleDok]</span>}</p>
              </li>
            ))}
          </ul>
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
          <h2 className="eyebrow" id="ind-t" style={{ fontWeight: 700, marginBottom: 32 }}>
            Un modèle indépendant
          </h2>
          <p style={{ margin: '0 auto 40px', maxWidth: 880, fontSize: 'clamp(24px, 2.6vw, 32px)', lineHeight: 1.45, fontWeight: 300 }}>
            TeleDok ne vend rien aux médecins et ne prélève aucune part sur leurs consultations. Son indépendance médicale et éthique est la
            condition de la confiance.
          </p>
          <Link className="btn btn-secondary" href={ROUTES.medecins}>
            Conditions d’exercice des médecins
          </Link>
        </div>
      </section>

      <section aria-labelledby="gov-t" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap sec">
          <div className="rv" style={{ marginBottom: 48 }}>
            <p className="eyebrow">Gouvernance</p>
            <h2 className="h2" id="gov-t">
              Direction
            </h2>
            <div className="rule"></div>
          </div>
          <ul
            style={{
              listStyle: 'none',
              margin: '0',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            <li className="box rv" style={{ padding: '16px 16px 28px' }}>
              <div className="ph" style={{ aspectRatio: '1 / 1', borderRadius: 3, marginBottom: 22 }}>
                <span className="ph-tag">Portrait réel</span>
              </div>
              <h3 style={{ margin: '0 0 4px 8px', fontSize: 22, fontWeight: 700, color: 'var(--blue)' }}>Dr Stéphane Illouz</h3>
              <p style={{ margin: '0 0 0 8px', fontSize: 16 }}>Co-fondateur</p>
            </li>
            <li className="box rv" style={{ padding: '16px 16px 28px' }}>
              <div className="ph" style={{ aspectRatio: '1 / 1', borderRadius: 3, marginBottom: 22 }}>
                <span className="ph-tag">Portrait réel</span>
              </div>
              <h3 style={{ margin: '0 0 4px 8px', fontSize: 22, fontWeight: 700, color: 'var(--blue)' }}>Matthieu Guillotin</h3>
              <p style={{ margin: '0 0 0 8px', fontSize: 16 }}>Directeur général</p>
            </li>
            <li className="box rv" style={{ padding: '16px 16px 28px', borderStyle: 'dashed' }}>
              <div className="ph" style={{ aspectRatio: '1 / 1', borderRadius: 3, marginBottom: 22 }}>
                <span className="ph-tag">Portrait réel</span>
              </div>
              <h3 style={{ margin: '0 0 4px 8px', fontSize: 22, fontWeight: 700, color: 'var(--blue)' }}>[Nom à préciser]</h3>
              <p style={{ margin: '0 0 0 8px', fontSize: 16 }}>[Second co-fondateur, à confirmer]</p>
            </li>
          </ul>
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
          <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 32px)', lineHeight: 1.2, fontWeight: 700 }}>Vous êtes médecin ?</h2>
          <p style={{ margin: '0 0 8px', fontSize: 18, lineHeight: 1.6, maxWidth: 440 }}>
            Exercer la télémédecine sans renoncer à la qualité du soin ni à votre indépendance.
          </p>
          <Link className="btn btn-white" href={ROUTES.medecins}>
            Rejoindre TeleDok
          </Link>
        </div>
        <div
          className="rv"
          style={{
            background: '#fff',
            border: '1px solid var(--line-strong)',
            borderRadius: 4,
            padding: 'clamp(36px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 18,
          }}
        >
          <h2 style={{ fontSize: 'clamp(26px, 2.4vw, 32px)', lineHeight: 1.2, fontWeight: 700, color: 'var(--blue)' }}>
            Vous êtes une organisation ?
          </h2>
          <p style={{ margin: '0 0 8px', fontSize: 18, lineHeight: 1.6, maxWidth: 440 }}>
            Déployer des parcours de téléconsultation rigoureux et évalués, au service de vos publics.
          </p>
          <Link className="btn btn-secondary" href={ROUTES.partenaires}>
            Devenir partenaire
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
