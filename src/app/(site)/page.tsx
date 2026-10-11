import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import groupement from '@/assets/groupement.png'
import logo from '@/assets/logo-teledok.png'
import { PageShell } from '@/components/PageShell'
import { Icon } from '@/components/Icon'
import { More } from '@/components/More'
import { Pub } from '@/components/Pub'
import { pictos } from '@/data/pictos'
import { getPublications, getValeurs } from '@/lib/content'
import { cx } from '@/lib/cx'
import { pageMetadata } from '@/lib/seo'
import { HERO_VIDEO, ROUTES } from '@/lib/site'

// Régénérée au plus toutes les 60 s (une partie des contenus vient du BO).
export const revalidate = 60

export const metadata: Metadata = pageMetadata(
  '/',
  'TeleDok : téléconsultation médicale et parcours de soins',
  'TeleDok réunit des médecins et des paramédicaux autour de parcours de soins conçus, mis en œuvre et évalués avec rigueur, pour les patients comme pour les praticiens.',
)

// Rayons de l'araignée des valeurs, du logo central vers chaque picto (repère 740 × 700).
const SPOKES = [
  [370, 241, 370, 165],
  [448.4, 293.1, 570.2, 241.9],
  [448.4, 358.9, 570.2, 410.1],
  [370, 411, 370, 487],
  [291.6, 358.9, 169.8, 410.1],
  [291.6, 293.1, 169.8, 241.9],
]

const ETAPES = [
  {
    titre: 'Conception sur-mesure du parcours',
    texte: 'Analyse du contexte, rédaction des protocoles, formation des praticiens. TeleDok adopte la technologie du client.',
  },
  {
    titre: 'Mise en œuvre & ressources humaines',
    texte: 'Fourniture des médecins et paramédicaux nécessaires, au sein d’un premier pool d’environ 50 médecins.',
  },
  {
    titre: 'Évaluation systématique',
    texte: 'Évaluation médicale et économique, pensée dès la conception, déployée pendant et à la fin du parcours.',
  },
  {
    titre: 'Amélioration itérative & recherche',
    texte: 'Les enseignements de chaque opération nourrissent les parcours futurs et la recherche scientifique.',
  },
]

export default async function Page() {
  const [valeurs, publications] = await Promise.all([getValeurs(), getPublications('showOnHome', 3)])
  const hasVideo = HERO_VIDEO.src !== ''

  return (
    <PageShell page="pg-home" overlayHeader>
      <section className={cx('hero', { 'hero--video': hasVideo })} aria-labelledby="hero-t">
        {!hasVideo && <div className="hero-ph" aria-hidden="true"></div>}
        {hasVideo && (
          <video
            className="hero-video"
            src={HERO_VIDEO.src}
            poster={HERO_VIDEO.poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            data-hero-video
          />
        )}
        <div className="hero-veil" aria-hidden="true"></div>
        {!hasVideo && (
          <div className="hero-note">
            <p className="hero-note-t">Vidéo d’arrière-plan attendue</p>
            <p>Images réelles : téléconsultation en cabine connectée, Médicobus. Boucle muette de 15 à 30 s, sans texte incrusté.</p>
          </div>
        )}
        <div className="wrap hero-pad">
          <div className="hero-txt">
            <p className="hero-in hero-eyebrow">Téléconsultation médicale · Parcours de soins</p>
            <h1 id="hero-t" className="hero-in2 hero-h1">
              Une médecine de qualité, partout, en toute indépendance.
            </h1>
            <p className="hero-in3 hero-lead">
              TeleDok réunit des médecins et des paramédicaux autour de parcours de soins conçus, mis en œuvre et évalués avec rigueur, pour les patients comme pour les praticiens.
            </p>
            <div className="hero-in3 btns">
              <Link className="btn btn-white" href={ROUTES.medecins}>
                Rejoindre TeleDok
              </Link>
              <a className="btn btn-ghost" href="#methode">
                Découvrir notre méthode
              </a>
            </div>
          </div>
        </div>
        <div className="hero-cue">
          <a className="cue" href="#chiffres">
            Découvrir
            <Icon name="chevron" size={22} width={1.6} />
          </a>
        </div>
        {hasVideo && (
          <button type="button" className="vbtn" aria-label="Mettre en pause la vidéo d’arrière-plan" data-hero-toggle>
            <svg className="vbtn-pause" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <rect x="4" y="3" width="3.5" height="12" />
              <rect x="10.5" y="3" width="3.5" height="12" />
            </svg>
            <svg className="vbtn-play" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <path d="M5 3l10 6-10 6z" />
            </svg>
          </button>
        )}
      </section>

      <section id="chiffres" className="bb" style={{ scrollMarginTop: 80 }} aria-label="Chiffres clés">
        <div className="wrap kpis">
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
          <div className="rv">
            <div className="kpi-rule"></div>
            <p className="kpi-n">
              15–
              <span data-count data-from="15" data-to="20">
                20
              </span>
              <span className="kpi-u"> min</span>
            </p>
            <p className="kpi-l">de temps dédié par téléconsultation</p>
          </div>
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
            <p className="kpi-n kpi-n--txt">Évaluation systématique</p>
            <p className="kpi-l">de chaque parcours de soins</p>
          </div>
        </div>
      </section>

      <section className="wrap split" aria-labelledby="qui-t">
        <Image
          className="photo rv"
          src={groupement}
          alt="Quatre personnes en réunion de travail autour d’une table, échangeant sur un document."
          sizes="(min-width: 1000px) 560px, 100vw"
          style={{ flex: '1 1 420px', height: 'auto' }}
        />
        <div className="rv" style={{ flex: '1 1 460px' }}>
          <h2 id="qui-t" className="h2">
            Qui est TeleDok
          </h2>
          <div className="rule"></div>
          <p className="lead">
            TeleDok est un regroupement de médecins généralistes et spécialistes, associés à des professionnels paramédicaux, au service de
            parcours de soins innovants. Son modèle repose sur l’indépendance médicale et l’exigence de qualité.
          </p>
          <More href={ROUTES.teledok}>En savoir plus sur TeleDok</More>
        </div>
      </section>

      <section className="band" aria-labelledby="val-t">
        {/* Le détail de la valeur sélectionnée s'affiche à gauche de la toile (voir SiteBehaviors). */}
        <div className="wrap sec valeurs">
          <div className="valeurs-head rv">
            <h2 id="val-t" className="h2">
              Nos valeurs
            </h2>
            <div className="rule"></div>
          </div>
          <div className="web rv" data-web>
            <svg className="web-lines" width="740" height="700" viewBox="0 0 740 700" fill="none" aria-hidden="true">
              <circle cx="370" cy="326" r="105" stroke="#C9DCE7" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="370" cy="326" r="140" stroke="#DCE7EE" strokeWidth="1" strokeDasharray="3 6" />
              {SPOKES.map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B7CFDD" strokeWidth="1.2" strokeDasharray="4 5" />
              ))}
              {SPOKES.map(([x1, y1, x2, y2], i) => (
                <line key={i} className={cx('sp', { on: i === 0 })} pathLength="1" x1={x1} y1={y1} x2={x2} y2={y2} data-spoke />
              ))}
            </svg>
            <div className="web-center">
              <span className="web-ring" aria-hidden="true"></span>
              <Image src={logo} alt="TeleDok" width={118} height={Math.round((118 * logo.height) / logo.width)} style={{ height: 'auto' }} />
            </div>
            {valeurs.map((v, i) => (
              <Link key={v.titre} className={cx('node', `n${i + 1}`, { on: i === 0 })} href={`${ROUTES.teledok}#valeurs`} data-node>
                <span className="node-ic">
                  <svg
                    className="pic"
                    viewBox="0 0 120 120"
                    fill="none"
                    stroke="#0D628F"
                    strokeWidth={pictos[i].strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: pictos[i].body }}
                  />
                </span>
                <span className="node-t">{v.titre}</span>
              </Link>
            ))}
          </div>
          <div className="web-panel" aria-live="polite" data-web-panel>
            {valeurs.map((v, i) => (
              <div key={v.titre} className="web-detail" hidden={i !== 0}>
                <span className="web-detail-ic" aria-hidden="true">
                  <svg
                    viewBox="0 0 120 120"
                    width="56"
                    height="56"
                    fill="none"
                    stroke="#0D628F"
                    // Trait épaissi : le picto est affiché deux fois plus petit que sur la toile.
                    strokeWidth={pictos[i].strokeWidth * 1.7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: pictos[i].body }}
                  />
                </span>
                <div>
                  <p className="web-detail-t">{v.titre}</p>
                  <p>{v.texte ?? '[Texte explicatif de la valeur : 1 à 2 lignes, à rédiger avec TeleDok]'}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="valeurs-more">
            <More href={ROUTES.teledok}>Découvrir TeleDok et ses valeurs</More>
          </div>
        </div>
      </section>

      <section id="methode" className="wrap" style={{ paddingBlock: 'clamp(72px, 9vw, 128px)' }} aria-labelledby="met-t" data-steps>
        <div className="rv" style={{ maxWidth: 760, marginBottom: 72 }}>
          <h2 id="met-t" className="h2">
            Notre méthode
          </h2>
          <div className="rule"></div>
          <p style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', lineHeight: 1.45 }}>
            De la conception à l’évaluation, chaque parcours est documenté, mesuré et amélioré.
          </p>
        </div>
        <div className="frame rv">
          <p className="frame-t">Direction médicale et éthique indépendante</p>
          <div style={{ position: 'relative' }}>
            <div className="track" aria-hidden="true">
              <div className="track-fill" style={{ width: '25%' }}></div>
            </div>
            <ol className="schema">
              {ETAPES.map((etape, i) => (
                <li key={etape.titre} className={cx({ on: i === 0 })} data-step>
                  <span className="step-c">{i + 1}</span>
                  <h3>{etape.titre}</h3>
                  <p>{etape.texte}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="frame-foot">
            <p className="cycle-note">
              <Icon name="cycle" size={32} width={1.6} stroke="var(--blue)" trace />
              Chaque cycle d’évaluation alimente la conception des parcours suivants.
            </p>
            <More href={ROUTES.methode}>Découvrir notre méthode</More>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--line)' }} aria-labelledby="rec-t">
        <div className="wrap rec">
          <div className="rv" style={{ flex: '1 1 400px', minWidth: 0 }}>
            <h2 id="rec-t" className="h2">
              Contribution à la recherche
            </h2>
            <div className="rule"></div>
            <p style={{ marginBottom: 32, fontSize: 19, lineHeight: 1.7 }}>
              TeleDok n’est pas seulement une structure opérationnelle : chaque opération, par ses retours d’expérience et ses données
              agrégées, contribue à la connaissance scientifique, pour apporter sa pierre à l’édifice d’une santé globale.
            </p>
            <ul className="formes">
              <li>Rapports épidémiologiques</li>
              <li>Publications scientifiques</li>
              <li>Thèses</li>
            </ul>
            <More href={ROUTES.recherche}>Consulter l’ensemble des travaux</More>
          </div>
          <ul className="pubs rv" style={{ flex: '1 1 520px', minWidth: 0 }}>
            {publications.map((pub) => (
              <Pub key={pub.id} pub={pub} meta />
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap orient" style={{ paddingBottom: 'clamp(72px, 9vw, 128px)' }} aria-label="Orientation">
        <div className="orient-b orient-b--blue on-blue rv">
          <Icon name="stethoscope" size={48} width={1.5} stroke="#fff" trace />
          <h2>Vous êtes médecin ?</h2>
          <p>Exercer la télémédecine sans renoncer à la qualité du soin ni à votre indépendance.</p>
          <Link className="btn btn-white" href={ROUTES.medecins}>
            Rejoindre TeleDok
          </Link>
        </div>
        <div className="orient-b rv">
          <Icon name="organisation" size={48} width={1.5} stroke="var(--blue)" trace />
          <h2>Vous êtes une organisation ?</h2>
          <p>Déployer des parcours de téléconsultation rigoureux et évalués, au service de vos publics.</p>
          <Link className="btn btn-secondary" href={ROUTES.partenaires}>
            Devenir partenaire
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
