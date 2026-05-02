function App() {
  return (
    <main className="min-h-screen p-4 md:p-10">
      <input
        id="theme-light"
        name="theme"
        type="radio"
        className="theme-input"
        defaultChecked
      />
      <input id="theme-dark" name="theme" type="radio" className="theme-input" />

      <div className="app-shell relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] shadow-2xl shadow-black/15 transition-colors duration-500">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_5%_-10%,var(--glow),transparent)]" />

        <header className="relative border-b border-[var(--line)] p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            React + Tailwind
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-6xl">
            CSS Only Theme Switcher
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] md:text-base">
            Is design me theme toggle ke liye koi JavaScript logic use nahi hua.
            Sirf HTML + CSS selectors se light/dark switch ho raha hai.
          </p>

          <div className="mt-6 inline-flex rounded-xl border border-[var(--line)] bg-black/5 p-1">
            <label
              htmlFor="theme-light"
              className="theme-chip cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-all"
            >
              Light
            </label>
            <label
              htmlFor="theme-dark"
              className="theme-chip cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-all"
            >
              Dark
            </label>
          </div>
        </header>

        <section className="relative grid gap-4 p-6 md:grid-cols-3 md:p-10">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <h2 className="text-lg font-bold">No JS State</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              `useState` ya event handler ki zarurat nahi. Radio inputs + sibling
              selectors hi kaafi hain.
            </p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <h2 className="text-lg font-bold">Tailwind UI</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Layout, spacing, typography aur cards Tailwind utilities se banaye gaye
              hain.
            </p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <h2 className="text-lg font-bold">Smooth Theme Shift</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
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
