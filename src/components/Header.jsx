function Header () {
    return (
        <>
           <header className="header">
		<a href="#" className="header-logo">
			nique.
		</a>

		<div className="header-content">
			<h1 className="header-title">
				The pure taste of
				<span>Thailand</span>
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
			</p>
		</div>

		<nav className="header-nav nav">
			<a href="#menu" className="nav-link primary">View menu</a>
		</nav>
	</header>
        </>
    )
}

export default Header;