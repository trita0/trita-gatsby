import * as React from "react"
import { Link } from "gatsby"

type ButtonVariant = "primary" | "secondary" | "ghost"

type ButtonBaseProps = {
  variant?: ButtonVariant
  className?: string
  children: React.ReactNode
}

type ButtonAsButtonProps = ButtonBaseProps & {
  to?: never
  href?: never
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsLinkProps = ButtonBaseProps & {
  to: string
  href?: never
  replace?: boolean
  state?: unknown
  partiallyActive?: boolean
}

type ButtonAsAnchorProps = ButtonBaseProps & {
  href: string
  to?: never
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"]
  rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>["rel"]
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsAnchorProps

function classesForVariant(variant: ButtonVariant) {
  switch (variant) {
    case "secondary":
      return "bg-white text-ink-950 ring-1 ring-inset ring-ink-950/[0.08] hover:bg-sand-50"
    case "ghost":
      return "text-ink-950/70 hover:bg-ink-950/[0.05] shadow-none hover:shadow-none"
    case "primary":
    default:
      return "bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-500 text-ink-950 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-600"
  }
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props as ButtonProps
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-ui text-sm font-semibold no-underline shadow-soft transition-all duration-200 active:scale-[0.98] active:opacity-90 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-marigold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 lg:hover:-translate-y-0.5 lg:hover:shadow-lift"
  const cls = `${base} ${classesForVariant(variant)} ${className ?? ""}`

  if ("to" in props && typeof props.to === "string") {
    const { to, replace, state, partiallyActive } = rest as ButtonAsLinkProps
    return (
      <Link to={to} replace={replace} state={state} partiallyActive={partiallyActive} className={cls}>
        {children}
      </Link>
    )
  }

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel } = rest as ButtonAsAnchorProps
    return (
      <a href={href} className={cls} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...(rest as ButtonAsButtonProps)}>
      {children}
    </button>
  )
}