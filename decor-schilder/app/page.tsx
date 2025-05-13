import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Paint background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">DECOR EN SCHILDER MEESTER</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Professionele schilder- en decoratiediensten voor uw woon- en werkruimtes
          </p>
        </div>
      </section>

      {/* Over Mij Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">OVER MIJ</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Als een team dat gespecialiseerd is in decoratieve binnenverf, pleisterwerk en industriële verf, voegen we
              esthetiek en duurzaamheid toe aan uw woon- en werkruimtes. Met hoogwaardige materialen en professioneel
              vakmanschap streven we ernaar om in elk project de beste resultaten te leveren.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Voor uw interieurs bieden wij decoratieve verf- en pleistertoepassingen voor een moderne en stijlvolle
              uitstraling, terwijl wij met industriële verf duurzame en langdurige oplossingen leveren voor uw
              bedrijfspanden. Wij stellen klanttevredenheid voorop en zorgen ervoor dat uw projecten op tijd en volgens
              de hoogste normen worden afgerond.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bent u op zoek naar een betrouwbare partner voor verf- en afwerkingswerkzaamheden? Neem dan contact met
              ons op. Wij staan klaar om uw ruimtes te vernieuwen en te beschermen!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ONZE DIENSTEN</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Decoratieve schilderwerken"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Decoratieve Schilderwerken</h3>
                <p className="text-gray-600">
                  Stijlvolle afwerkingen voor uw interieur met hoogwaardige decoratieve verftechnieken.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Pleisterwerk" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pleisterwerk</h3>
                <p className="text-gray-600">
                  Professionele pleistertoepassingen voor een perfecte basis en strakke afwerking.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Industriële Verf"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Industriële Verf</h3>
                <p className="text-gray-600">Duurzame verfoplossingen voor bedrijfspanden en industriële ruimtes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">NEEM CONTACT OP</h2>
          <p className="text-lg text-gray-700 mb-8">
            Klaar om uw ruimte te transformeren? Neem vandaag nog contact met ons op voor een vrijblijvende offerte.
          </p>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Opnemen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">DECOR EN SCHILDER MEESTER</h2>
          <p className="mb-6">Professionele schilder- en decoratiediensten</p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-gray-300">
              Email
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Telefoon
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Instagram
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            © {new Date().getFullYear()} DECOR EN SCHILDER MEESTER. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </main>
  )
}
