const content = document.getElementById('content');

function showContent(route) {

    switch (route) {
        case '/':
            content.innerHTML = '<h1>Home Page</h1><p>Welcome to the Home Page!</p>';
            break;
        case '/page':
            content.innerHTML = '<h1>About Page</h1><p>Learn more about us here.</p>';
            break;
        default:
            content.innerHTML = '<h1>Not Found</h1><p>The page you requested was not found.</p>';
            break;
    }
}


function handleLinkClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    const href = event.target.getAttribute("href");
    showContent(href);
}

const links = document.querySelectorAll("ul li a");
links.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
});