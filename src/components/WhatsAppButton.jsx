import { firm } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      href={firm.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1fba57] flex items-center justify-center shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.1-.7.1-.7.9-.9 1.1-.4.2-.7.1a8.4 8.4 0 01-2.5-1.5 9.3 9.3 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.2-.4a.5.5 0 000-.5c-.1-.1-.7-1.6-.9-2.2s-.4-.5-.7-.5h-.6a1.1 1.1 0 00-.8.4A3.4 3.4 0 006 9c0 1.4 1 2.8 1.2 3s2 3 4.7 4.1a15.9 15.9 0 001.6.6 3.8 3.8 0 001.7.1c.5-.1 1.7-.7 1.9-1.4s.3-1.2.2-1.4-.3-.3-.6-.4z" />
        <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.1 8.1 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z" />
      </svg>
    </a>
  )
}
