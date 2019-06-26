import Link from 'next/link'
export default ({ value, isParent }) => (
  <Link href={`/products?category=${encodeURIComponent(value)}`}>
    <a
      onClick={() => this.props.onClick}
      className={`${
        isParent ? ' is-size-6 has-text-dark' : 'is-size-7 has-text-dark'
      }`}
    >
      {value}
    </a>
  </Link>
)
