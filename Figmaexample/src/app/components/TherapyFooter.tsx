export function TherapyFooter() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">
              Dr. med. Sarah Weber
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fachärztin für Psychiatrie und Psychotherapie
              <br />
              Tiefenpsychologisch fundierte Psychotherapie
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Maximilianstraße 12</li>
              <li>80539 München</li>
              <li>Tel: +49 89 123 456 78</li>
              <li>praxis@dr-weber.de</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Sprechzeiten</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Montag – Freitag</li>
              <li>Nach Vereinbarung</li>
              <li>Telefonsprechstunde:</li>
              <li>Mo–Fr: 9:00–12:00 Uhr</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Dr. med. Sarah Weber. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="hover:text-teal-400 transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition-colors"
            >
              Schweigepflicht
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Hinweis:</strong> Die Informationen
            auf dieser Website dienen ausschließlich zu Informationszwecken und
            ersetzen keine professionelle Beratung oder Behandlung. In
            akuten Notfällen wenden Sie sich bitte an den ärztlichen
            Bereitschaftsdienst (116 117) oder den Notruf (112).
          </p>
        </div>
      </div>
    </footer>
  );
}
