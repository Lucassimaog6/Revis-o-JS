import { Link } from "react-router-dom"

export default function Layout({ children }) {
    return (
        <main className="bg-slate-600 min-h-screen grid grid-rows-[auto_1fr]">
            <header>
                <nav className="w-full flex justify-center p-4">
                    <Link to="/">Início</Link>
                </nav>
            </header>
            <div className="flex items-center justify-center">
                {children}
            </div>
        </main>
    );
}