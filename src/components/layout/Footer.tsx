import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 text-xs text-[var(--muted-foreground)]">
        <span className="font-medium">WSDL Web</span>
        <a
          href="https://github.com/wsdl-web/wsdl-web"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--foreground)]"
        >
          <Github className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </footer>
  )
}
