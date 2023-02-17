import { Link } from "react-router-dom"

export default function Layout({ children }) {
    return (
        <main className="bg-slate-600 min-h-screen grid grid-rows-[auto_1fr]">
            <header className="bg-slate-700">
                <nav className="w-full flex justify-center p-4">
                    <Link to="/">Início</Link>
                </nav>
            </header>
            <div className="flex items-center justify-center">
                {children}
            </div>
            <footer className="footer footer-center p-4 bg-slate-700 text-base-content">
                <div className="text-center">
                    <p>Site feito por <a className="link" href="https://lucassimao.me">Lucas simao</a> usando <a className="link" href="https://pt-br.reactjs.org/">React</a>                      e <a className="link" href="https://daisyui.com/components/footer/">DaysiUI</a></p>
                </div>
            </footer>
        </main>
    );
}