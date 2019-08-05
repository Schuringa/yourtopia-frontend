import Link from 'next/link'
export default ({ value, isParent }) => (
  <Link
    href={{
      pathname: '/products',
      query: { category: value }
    }}
  >
    <a
      className={`${
        isParent ? ' is-size-6 has-text-dark' : 'is-size-7 has-text-dark'
      }`}
    >
      {value}
    </a>
  </Link>
)
