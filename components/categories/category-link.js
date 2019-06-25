import Link from 'next/link'
export default ({ value }) => (
  <Link href={`/products?category=${encodeURIComponent(value)}`}>
    <a onClick={() => this.props.onClick} className="is-size-7 has-text-dark">
      {value}
    </a>
  </Link>
)
