
export default function Extraone() {
  const benefits = [
    {
      icon: "❤️",
      title: "Save a Precious Life",
      description:
        "Over a million shelter animals are euthanized each year. By adopting, you give a deserving cat a second chance at a loving home.",
    },
    {
      icon: "🐾",
      title: "Already House-Trained",
      description:
        "Many rescue cats are surrendered by previous owners, meaning they are often already litter-box trained and socialized.",
    },
    {
      icon: "🩺",
      title: "Vetted & Vaccinated",
      description:
        "Shelter pets receive thorough health checks, vaccinations, and are typically spayed or neutered before going home.",
    },
    {
      icon: "✨",
      title: "Fight Puppy/Kitten Mills",
      description:
        "Adopting directly reduces the financial demand on commercial breeding operations known for poor animal welfare.",
    },
  ];

  return (
    <section className="w-full bg-[#18181b] border-y border-zinc-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Why Adopt From <span className="text-amber-500">Cat Hub</span>?
          </h2>
          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            Choosing to rescue is not just about bringing a pet home it is a
            life-changing decision that transforms a shelter animals entire
            universe.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700/80 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-zinc-800/60 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-amber-500/10 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
