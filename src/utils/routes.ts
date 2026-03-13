export type NavItem = {
  label: string
  to: string
}

export const primaryNav: NavItem[] = [
  { label: `Home`, to: `/` },
  { label: `About`, to: `/about` },
  { label: `Brands`, to: `/brands` },
  { label: `Products`, to: `/products` },
  { label: `Blog`, to: `/blog` },
  { label: `Programs`, to: `/programs` },
  { label: `Media`, to: `/media` },
  { label: `Collaborate`, to: `/collaborate` },
  { label: `Contact`, to: `/contact` },
]

export const footerLinks: NavItem[] = [
  { label: `About`, to: `/about` },
  { label: `Brands`, to: `/brands` },
  { label: `Products`, to: `/products` },
  { label: `Blog`, to: `/blog` },
  { label: `Programs`, to: `/programs` },
  { label: `Media`, to: `/media` },
  { label: `Contact`, to: `/contact` },
]
