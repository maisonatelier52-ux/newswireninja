// app/about/page.js
import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600 text-white px-4 py-2 text-sm font-bold rounded-full mb-6">
            ABOUT US
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            NEWSWIRENINJA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharp. Fearless. Unfiltered.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg prose-blue max-w-none mb-16">
          <p>
            Welcome to <strong>NEWSWIRENINJA</strong> — your independent source of news that cuts through the noise.
          </p>
          <p>
            Launched in 2024, we exist because too many stories are filtered, softened, or simply ignored. 
            Our mission is simple: deliver the truth — fast, clear, and without corporate spin.
          </p>
          <p>
            Whether it's breaking business news, political developments, technology revolutions, 
            global conflicts, or the stories no one else wants to touch — we report it first and we report it straight.
          </p>
        </div>

        {/* What We Stand For */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              title: "Independence",
              desc: "No billionaire owners. No political affiliations. Our only loyalty is to the facts and our readers."
            },
            {
              title: "Speed with Accuracy",
              desc: "We move fast — but never at the cost of verification. Every story is checked before it goes live."
            },
            {
              title: "Transparency",
              desc: "We show our sources. We correct mistakes openly. We believe readers deserve to know how we know what we know."
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team & Writers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Writers</h2>
          <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            NEWSWIRENINJA is powered by a network of experienced journalists, analysts, and subject-matter experts 
            who are obsessed with getting the story right.
          </p>
          <div className="text-center">
            <Link
              href="/authors"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Meet Our Writers →
            </Link>
          </div>
        </div>

        {/* Final Statement */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Why NEWSWIRENINJA?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Because the world is complicated. Because truth still matters. 
            Because someone needs to say it like it is — no matter who it offends.
          </p>
          <p className="mt-8 text-xl font-semibold text-blue-700">
            We are NEWSWIRENINJA.<br />
            And we don't blink.
          </p>
        </div>
      </div>
    </main>
  );
}