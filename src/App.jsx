import { useTheme } from './useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 md:p-10 transition-colors duration-500">
        <div className="app-shell relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/80 text-slate-900 dark:text-blue-50 shadow-2xl transition-colors duration-500">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-400/10 dark:from-blue-500/5 via-transparent to-blue-400/5 dark:to-blue-500/5" />

          <header className="relative border-b border-slate-200 dark:border-slate-700 p-6 md:p-10 transition-colors duration-500">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-blue-300">
              React + Tailwind + Context API  
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-6xl">
              Theme Switcher
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600 dark:text-blue-200">
              Sirf HTML class add/remove karo - light ya dark. Tailwind dark: prefix se styling auto ho jaati hai.
            </p>

            <div className="mt-6 inline-flex rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-100/50 dark:bg-slate-800/50 p-1 transition-colors duration-500">
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  theme === 'light'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-blue-200 dark:text-blue-200'
                }`}
              >
                ☀️ Light
              </button>
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  theme === 'dark'
                    ? 'dark:bg-slate-900 bg-white text-blue-50 shadow-md'
                    : 'text-slate-700'
                }`}
              >
                🌙 Dark
              </button>
            </div>
          </header>

          <section className="relative grid gap-4 p-6 md:grid-cols-3 md:p-10">
            <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-5 transition-colors duration-500">
              <h2 className="text-lg font-bold">Simple Class Toggle</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-blue-200">
                HTML element par sirf `dark` class add/remove hota hai. Baki sab Tailwind ke `dark:` prefix se handle hota hai.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-5 transition-colors duration-500">
              <h2 className="text-lg font-bold">Context API Store</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-blue-200">
                Theme state Context se manage ho rahi hai. `useTheme()` hook use kar ke kisi bhi component se access kar sakte ho.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 p-5 transition-colors duration-500">
              <h2 className="text-lg font-bold">Current Theme</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-blue-200">
                Active Theme: <strong>{theme === 'light' ? '☀️ Light' : '🌙 Dark'}</strong>
              </p>
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
