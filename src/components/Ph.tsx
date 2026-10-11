import type { CSSProperties, ReactNode } from 'react'
import { cx } from '@/lib/cx'

type Props = {
  tag: string
  text?: string | null
  ratio?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

/** Emplacement réservé à une photographie ou une vidéo réelle, à fournir par TeleDok. */
export function Ph({ tag, text, ratio, className, style, children }: Props) {
  return (
    <div className={cx('ph', className)} style={{ ...(ratio ? { aspectRatio: ratio } : null), ...style }}>
      {children}
      <span className="ph-tag">{tag}</span>
      {text && <span className="ph-txt">{text}</span>}
    </div>
  )
}
