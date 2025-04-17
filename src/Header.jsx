// import for Link

function Links({ cartItemsCount }) {
  return (
    <ul>
      {/* Links */}
      <li>
        <Link to="Link to the cart">
          <span>Cart</span>
          <div className="cart-icon">{cartItemsCount}</div>
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ cartItemsCount }) {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links cartItemsCount={cartItemsCount} />
      </nav>
    </header>
  );
}
