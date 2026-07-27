import type { Flavor } from '@/lib/flavors'

type Props = {
  icon: Flavor['icon']
  className?: string
}

/**
 * Elegant single-stroke line-art icons for each flavor.
 * Drawn to feel like fine ink illustration rather than cartoon clip-art.
 */
export function FlavorIcon({ icon, className }: Props) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 48 48',
    className,
    'aria-hidden': true,
  }

  switch (icon) {
    case 'vanilla':
      return (
        <svg {...common}>
          <path d="M19 20a5 5 0 0 1 10 0" />
          <path d="M17.5 20h13l-5.2 18a1.3 1.3 0 0 1-2.6 0Z" />
          <path d="M20 26h8M20.8 32h6.4" />
          <path d="M24 11.5v2.5M19.5 13l1.4 2M28.5 13l-1.4 2" />
        </svg>
      )
    case 'chocolate':
      return (
        <svg {...common}>
          <path d="M16 25h16l-1.8 9.5a3 3 0 0 1-3 2.5h-6.4a3 3 0 0 1-3-2.5Z" />
          <path d="M16 25a8 8 0 0 1 16 0" />
          <path d="M19.5 21.5c1.4 1.2 3.6 1.2 5 0c1.4-1.2 3.6-1.2 5 0" />
          <path d="M24 14.5v2.5" />
          <circle cx="24" cy="13" r="1.4" />
        </svg>
      )
    case 'strawberry':
      return (
        <svg {...common}>
          <path d="M17 24h14l-3.2 9a4 4 0 0 1-7.6 0Z" />
          <path d="M24 33v6" />
          <path d="M19.5 39h9" />
          <path d="M17 24a7 7 0 0 1 14 0" />
          <path d="M27 19.5l1.6-3.6" />
          <circle cx="29" cy="14.8" r="1.6" />
        </svg>
      )
    case 'neapolitan':
      return (
        <svg {...common}>
          <path d="M18.5 24h11l-5 14a0.7 0.7 0 0 1-1 0Z" />
          <path d="M20 27.5h8M21.5 32h5" />
          <path d="M18.5 24a5.5 5.5 0 0 1 11 0" />
          <path d="M17.5 19a6.5 6.5 0 0 1 13 0" />
          <path d="M16.5 14.5a7.5 7.5 0 0 1 15 0" />
        </svg>
      )
    case 'chocolate-chip':
      return (
        <svg {...common}>
          <path d="M19 26h10l-4.4 12a0.7 0.7 0 0 1-1.2 0Z" />
          <path d="M20.5 29.5h7" />
          <path d="M19 26a5 5 0 0 1 10 0" />
          <path d="M24 15a8 8 0 0 1 5 3" />
          <circle cx="21.5" cy="21.5" r="0.9" />
          <circle cx="26" cy="20" r="0.9" />
          <circle cx="24" cy="24" r="0.9" />
        </svg>
      )
    case 'butter-pecan':
      return (
        <svg {...common}>
          <path d="M16 26h16l-1.8 9a3 3 0 0 1-3 2.4h-6.4a3 3 0 0 1-3-2.4Z" />
          <path d="M16 26a8 8 0 0 1 16 0" />
          <path d="M23 18c2 0.6 3.4 2 4 4c-2-0.4-3.4-1.8-4-4Z" />
          <path d="M25 22c-0.4-1.6 0.2-3.2 1.6-4.4" />
        </svg>
      )
    case 'rocky-road':
      return (
        <svg {...common}>
          <path d="M19 26h10l-4.4 12a0.7 0.7 0 0 1-1.2 0Z" />
          <path d="M20.5 29.5h7" />
          <path d="M18.5 26c0.5-1.6 2-1.8 3-3c1.2 1.4 2 1.2 3 0c1.1 1.4 2 1.2 3 0c1 1.2 2.2 1.4 2.9 3" />
          <path d="M19 24.5c1-1.4 2.4-1.2 3.2 0c0.9-1.6 2.5-1.6 3.4 0c0.8-1.3 2.2-1.4 3.2-0.2" />
        </svg>
      )
    case 'mint-chocolate-chip':
      return (
        <svg {...common}>
          <path d="M17 24h14l-3.2 9a4 4 0 0 1-7.6 0Z" />
          <path d="M24 33v6" />
          <path d="M19.5 39h9" />
          <path d="M17 24a7 7 0 0 1 14 0" />
          <circle cx="21" cy="21.5" r="0.9" />
          <circle cx="26.5" cy="20.5" r="0.9" />
          <circle cx="24" cy="23" r="0.9" />
        </svg>
      )
    case 'cookie-dough':
      return (
        <svg {...common}>
          <path d="M16 25h16l-1.8 9.5a3 3 0 0 1-3 2.5h-6.4a3 3 0 0 1-3-2.5Z" />
          <path d="M16 25a8 8 0 0 1 16 0" />
          <circle cx="20.5" cy="20.5" r="1.3" />
          <circle cx="26" cy="19.5" r="1.3" />
          <circle cx="23.5" cy="22.5" r="1.3" />
        </svg>
      )
    case 'salted-caramel':
      return (
        <svg {...common}>
          <path d="M19 27h10l-4.4 11a0.7 0.7 0 0 1-1.2 0Z" />
          <path d="M19 27a5 5 0 0 1 10 0" />
          <path d="M20 24c1.4-1 2.6-1 4 0c1.4 1 2.6 1 4 0" />
          <path d="M22 30c0.6 1.4 3.4 1.4 4 0" />
          <path d="M21 20.5l0.4 1.2M27 20l0.4 1.2M24 18.5l0.3 1.1" />
        </svg>
      )
    case 'double-fudge':
      return (
        <svg {...common}>
          <path d="M16 27h16l-1.8 8.5a3 3 0 0 1-3 2.5h-6.4a3 3 0 0 1-3-2.5Z" />
          <path d="M16 27a8 8 0 0 1 16 0" />
          <path d="M18 22a6 6 0 0 1 12 0" />
          <path d="M20.5 23.5c1.2 1 5.8 1 7 0" />
          <path d="M21 18.5c1 0.9 5 0.9 6 0" />
        </svg>
      )
    case 'cookies-and-cream':
      return (
        <svg {...common}>
          <path d="M17 24h14l-3.2 9a4 4 0 0 1-7.6 0Z" />
          <path d="M24 33v6" />
          <path d="M19.5 39h9" />
          <path d="M17 24a7 7 0 0 1 14 0" />
          <path d="M20 21.5l1.4-0.8 0.6 1.3-1.3 0.6Z" />
          <path d="M26 20l1.4 0.5-0.4 1.4-1.4-0.5Z" />
          <path d="M23 23l1.3 0.4-0.3 1.3-1.3-0.4Z" />
        </svg>
      )
    case 'pistachio':
      return (
        <svg {...common}>
          <path d="M19 26h10l-4.4 12a0.7 0.7 0 0 1-1.2 0Z" />
          <path d="M20.5 29.5h7" />
          <path d="M19 26a5 5 0 0 1 10 0" />
          <path d="M22 20.5c1.4-1.1 2.6-1.1 4 0" />
          <path d="M23.2 22.5a1.6 1.6 0 0 1 1.6-1.6a1.6 1.6 0 0 1 1.6 1.6Z" />
        </svg>
      )
    case 'mango':
      return (
        <svg {...common}>
          <path d="M17 24h14l-3.2 9a4 4 0 0 1-7.6 0Z" />
          <path d="M24 33v6" />
          <path d="M19.5 39h9" />
          <path d="M17 24a7 7 0 0 1 14 0" />
          <path d="M25 18c2.4-0.4 4.2 1 4.8 3.2c-2.4 0.4-4.2-1-4.8-3.2Z" />
          <path d="M26 20.6c-0.2-0.9 0.2-1.8 1-2.4" />
        </svg>
      )
    case 'matcha':
      return (
        <svg {...common}>
          <path d="M15 26h18l-2 8.5a3.5 3.5 0 0 1-3.4 2.7h-6.2a3.5 3.5 0 0 1-3.4-2.7Z" />
          <path d="M15 26a9 9 0 0 1 18 0" />
          <path d="M20 22v-4M23 21.5v-4M26 21.5v-4M28.5 22.5v-3.5" />
          <path d="M19.5 18h9" />
        </svg>
      )
    case 'lavender-honey':
      return (
        <svg {...common}>
          <path d="M19 27h10l-4.4 11a0.7 0.7 0 0 1-1.2 0Z" />
          <path d="M19 27a5 5 0 0 1 10 0" />
          <path d="M24 22v-8" />
          <path d="M24 15c-1.3-0.3-2-1.2-2-2.4c1.3 0.1 2 1 2 2.4Z" />
          <path d="M24 15c1.3-0.3 2-1.2 2-2.4c-1.3 0.1-2 1-2 2.4Z" />
          <path d="M24 18c-1.2-0.3-1.8-1.1-1.8-2.2M24 18c1.2-0.3 1.8-1.1 1.8-2.2" />
        </svg>
      )
    case 'hazelnut':
      return (
        <svg {...common}>
          <path d="M16 26h16l-1.8 9a3 3 0 0 1-3 2.4h-6.4a3 3 0 0 1-3-2.4Z" />
          <path d="M16 26a8 8 0 0 1 16 0" />
          <path d="M22 20.5a2.5 2.5 0 0 1 5 0c0 1.6-1.1 2.5-2.5 2.5S22 22.1 22 20.5Z" />
          <path d="M22.4 19.5h4.2" />
        </svg>
      )
    case 'kulfi':
      return (
        <svg {...common}>
          <path d="M20 16a4 4 0 0 1 8 0v14a4 4 0 0 1-8 0Z" />
          <path d="M24 34v5" />
          <path d="M22.5 18.5c1 0.8 2 0.8 3 0M22 24c1.3 1 2.7 1 4 0M22.5 29c1 0.8 2 0.8 3 0" />
        </svg>
      )
    case 'ube':
      return (
        <svg {...common}>
          <path d="M19 27h10l-4.4 11a0.7 0.7 0 0 1-1.2 0Z" />
          <path d="M19 27a5 5 0 0 1 10 0" />
          <path d="M20 23c1.4 1 2.6 1 4 0c1.4-1 2.6-1 4 0" />
          <path d="M21 20.5c1 0.8 2 0.8 3 0c1 0.8 2 0.8 3 0" />
          <path d="M24 15l0.7 1.6 1.7 0.2-1.2 1.2 0.3 1.7-1.5-0.9-1.5 0.9 0.3-1.7-1.2-1.2 1.7-0.2Z" />
        </svg>
      )
    case 'coffee':
      return (
        <svg {...common}>
          <path d="M17 26h14l-3.2 9a4 4 0 0 1-7.6 0Z" />
          <path d="M24 35v4" />
          <path d="M19.5 39h9" />
          <path d="M17 26a4 4 0 0 1 7 0a4 4 0 0 1 7 0" />
          <path d="M21 21c-1-1.2-1-2.4 0-3.6M24 20.5c-1-1.2-1-2.4 0-3.6M27 21c-1-1.2-1-2.4 0-3.6" />
        </svg>
      )
    case 'cinnamon':
      return (
        <svg {...common}>
          <path d="M16 26h16l-1.8 9a3 3 0 0 1-3 2.4h-6.4a3 3 0 0 1-3-2.4Z" />
          <path d="M16 26a8 8 0 0 1 16 0" />
          <path d="M20 22l6-4.5" />
          <path d="M20 22c-0.5-0.8-0.2-1.7 0.7-2.3M22.5 20.2c-0.5-0.8-0.2-1.7 0.7-2.3M25 18.4c-0.5-0.8-0.2-1.7 0.7-2.3" />
        </svg>
      )
    case 'coconut':
      return (
        <svg {...common}>
          <path d="M14 25a10 10 0 0 0 20 0Z" />
          <path d="M14 25a10 10 0 0 1 20 0" />
          <path d="M17 25a7 7 0 0 1 14 0" />
          <circle cx="20" cy="21.5" r="0.8" />
          <circle cx="24" cy="20.5" r="0.8" />
          <circle cx="28" cy="21.5" r="0.8" />
        </svg>
      )
    case 'raspberry-swirl':
      return (
        <svg {...common}>
          <path d="M19 27h10l-4.4 11a0.7 0.7 0 0 1-1.2 0Z" />
          <path d="M19 27a5 5 0 0 1 10 0" />
          <path d="M20.5 24c1.2 1 5.8 1 7 0" />
          <path d="M21.5 21c1 0.9 4 0.9 5 0" />
          <path d="M22.5 18.5c0.9 0.7 2.6 0.7 3.5 0" />
          <circle cx="28.5" cy="19" r="1.4" />
        </svg>
      )
    case 'caramel-apple':
      return (
        <svg {...common}>
          <path d="M24 20a7 7 0 1 1-0.01 0Z" />
          <path d="M24 20v-5" />
          <path d="M24 16c1.6-0.4 3-1.6 3.4-3.4c-1.8 0.2-3 1.4-3.4 3.4Z" />
          <path d="M18 26c0.8 1.4 2.4 1.4 3.2 0c0.8 1.4 2.4 1.4 3.2 0c0.8 1.4 2.4 1.4 3.2 0" />
        </svg>
      )
    default:
      return null
  }
}
