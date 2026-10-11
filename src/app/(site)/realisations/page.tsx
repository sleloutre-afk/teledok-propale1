import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Crumb } from '@/components/Crumb'
import Image from 'next/image'
import { More } from '@/components/More'
import { Ph } from '@/components/Ph'
import { getRealisations } from '@/lib/content'
import { cx } from '@/lib/cx'
import { pageMetadata } from '@/lib/seo'
import { ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/realisations',
  'Réalisations | TeleDok',
  'Parcours de bilan de prévention, téléconsultation de soins primaires assistée : pour chaque opération, le contexte, le rôle de TeleDok et les résultats de l’évaluation.',
)

export default async function Page() {
  const realisations = await getRealisations()

  return (
    <PageShell current="realisations">
      <section className="bb" aria-labelledby="hero-t">
        <div className="wrap phero">
          <Crumb label="Réalisations" />
          <p className="eyebrow hero-in">Réalisations</p>
          <h1 className="hero-in2 h1" id="hero-t">
            Des parcours conçus, déployés et évalués
          </h1>
          <div className="rule hero-in2" style={{ marginBottom: 28 }}></div>
          <p className="hero-in3" style={{ maxWidth: 760, fontSize: 'clamp(19px, 1.8vw, 22px)', lineHeight: 1.6 }}>
            Pour chaque opération : le contexte, le rôle de TeleDok et les résultats de l’évaluation.
          </p>
        </div>
      </section>

      <div className="wrap cas-list">
        {realisations.map((cas, i) => (
          <section key={cas.id} aria-labelledby={`cas-${cas.id}-t`}>
            <article className={cx('cas rv', { 'cas--rev': i % 2 === 1 })}>
              {cas.image ? (
                <Image
                  className="cas-ph cas-img"
                  src={cas.image.src}
                  alt={cas.image.alt}
                  width={cas.image.width ?? 1200}
                  height={cas.image.height ?? 900}
                  sizes="(min-width: 1000px) 560px, 100vw"
                />
              ) : (
                <Ph className="cas-ph" tag="Photographie ou vidéo réelle attendue" text={cas.imageBrief} />
              )}
              <div className="cas-b">
                <p className="eyebrow" style={{ marginBottom: 14 }}>
                  {cas.theme}
                </p>
                <h2 id={`cas-${cas.id}-t`} className="cas-t">
                  {cas.title}
                </h2>
                {cas.tags.length > 0 && (
                  <ul className="cas-tags" aria-label={cas.tagsLabel}>
                    {cas.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                <dl>
                  {(
                    [
                      ['Contexte', cas.contexte],
                      ['Rôle de TeleDok', cas.role],
                      ['Résultat et évaluation', cas.resultat],
                    ] as const
                  ).map(([label, texte]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{texte ?? <span className="todo">[À rédiger avec TeleDok]</span>}</dd>
                    </div>
                  ))}
                </dl>
                {cas.linkToRecherche && <More href={ROUTES.recherche}>Travaux de recherche associés</More>}
              </div>
            </article>
          </section>
        ))}
      </div>

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
              Vous êtes une organisation ?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6 }}>
              Déployer des parcours de téléconsultation rigoureux et évalués, au service de vos publics.
            </p>
          </div>
          <Link className="btn btn-white" href={ROUTES.partenaires}>
            Devenir partenaire
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
