export default function Footer() {
    return (
        <footer>
            <p className="text-sm text-center text-gray-500 mt-4">
                &copy; {new Date().getFullYear()} eCatlin. All rights reserved.
            </p>
            <ul className="flex">
                <li><a href="https://www.youtube.com/@pcatlin"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com/in/paul-catlin-62a7983b6/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/pcatlin"><i className="fa-brands fa-github"></i></a></li>
            </ul>
        </footer>
    )
}