function Footer({ home }) {
    return (
        <footer className="footerContainer">
            <div className="menuContainer">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/Team">Team</a></li>
                <li><a href="/Contact">Contact</a></li>
            </div>
            <p>Ⓒ 2022 SIKE WEARS | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;