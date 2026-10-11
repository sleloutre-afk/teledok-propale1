import type { PublicationView } from '@/lib/content'
import { Icon } from './Icon'

type Props = {
  pub: PublicationView
  /** Affiche la ligne « Type · Année » au-dessus du titre. */
  meta?: boolean
}

/** Une publication en ligne, avec son lien de téléchargement (accueil, page Médecins). */
export function Pub({ pub, meta = false }: Props) {
  return (
    <li className="pub">
      <div>
        {meta && (
          <p className="pub-meta">
            {pub.type ?? '[Type]'} · {pub.date ? new Date(pub.date).getUTCFullYear() : '[Année]'}
          </p>
        )}
        <p className="pub-t">{pub.title}</p>
      </div>
      {pub.pdf ? (
        <a className="pdf" href={pub.pdf} download aria-label={`Télécharger le PDF : ${pub.title}`}>
          <Icon name="telecharger" size={18} width={1.6} />
          PDF
        </a>
      ) : (
        <span className="pdf pdf--todo">
          <span className="todo">[PDF à fournir]</span>
        </span>
      )}
    </li>
  )
}
