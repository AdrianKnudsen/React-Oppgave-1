export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search"></input>
          <button className="search-btn">Search</button>
        </div>
      </header>
    </div>
  );
}
