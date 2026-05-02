function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-emerald-50 p-4 md:p-10">
      <input
        id="theme-light"
        name="theme"
        type="radio"
        className="theme-input"
        defaultChecked
      />
      <input id="theme-dark" name="theme" type="radio" className="theme-input" />

      <div className="app-shell relative mx-auto max-w-5xl overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-400/5" />

        <header className="relative border-b border-slate-200 p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            React + Tailwind
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-6xl text-slate-900">
            Theme Switcher
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Is design me theme toggle ke liye koi JavaScript logic use nahi hua.
            Sirf HTML + CSS selectors se light/dark switch ho raha hai.
          </p>

          <div className="mt-6 inline-flex rounded-xl border border-slate-200 bg-slate-100/50 p-1">
            <label
              htmlFor="theme-light"
              className="theme-chip text-slate-700 hover:text-slate-900"
            >
              ☀️ Light
            </label>
            <label
              htmlFor="theme-dark"
              className="theme-chip text-slate-700 hover:text-slate-900"
            >
              🌙 Dark
            </label>
          </div>
        </header>

        <section className="relative grid gap-4 p-6 md:grid-cols-3 md:p-10">
          <article className="card text-slate-900">
            <h2 className="text-lg font-bold">No JS State</h2>
            <p className="mt-2 text-sm text-slate-600">
              `useState` ya event handler ki zarurat nahi. Radio inputs + sibling
              selectors hi kaafi hain.
            </p>
          </article>

          <article className="card text-slate-900">
            <h2 className="text-lg font-bold">Tailwind UI</h2>
            <p className="mt-2 text-sm text-slate-600">
              Layout, spacing, typography aur cards Tailwind utilities se banaye gaye
              hain.
            </p>
          </article>

          <article className="card text-slate-900">
            <h2 className="text-lg font-bold">Smooth Theme Shift</h2>
            <p className="mt-2 text-sm text-slate-600">
              CSS variables + transitions se clean visual change milta hai, bina
              framework overhead ke.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
