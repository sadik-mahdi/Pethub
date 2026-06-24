
export default function PetCareTips() {
  const tips = [
    {
      category: "Nutrition",
      title: "Hydration is Essential",
      body: "Cats have a low thirst drive naturally. Consider incorporating wet food into their diet or installing a water fountain to encourage regular drinking.",
    },
    {
      category: "Environment",
      title: "Provide Vertical Territories",
      body: "Cats feel safest when they have elevated viewpoints. Add cat trees, window perches, or wall shelves so they can scan their surroundings securely.",
    },
    {
      category: "Behavior",
      title: "Interactive Play Sessions",
      body: "Spend 10-15 minutes twice a day using wand toys. This mimics their natural hunting cycle, burning off excess energy and reducing stress-induced scratching.",
    },
    {
      category: "Health",
      title: "Litter Box Management",
      body: "The golden rule is to keep N+1 litter boxes (e.g., 2 boxes for 1 cat) in quiet, easily accessible spaces. Scoop them daily to ensure perfect hygiene.",
    },
  ];

  return (
    <section className="w-full bg-[#121214] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-900 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              Expert Advice
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-50 mt-1">
              Essential Pet Care Tips
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Whether you are a seasoned owner or a first-time adopter, maintaining these baseline healthy habits keeps your feline companion thriving.
          </p>
        </div>

        {/* Tips Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="text-amber-500 font-mono text-sm bg-zinc-900 border border-zinc-800 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                0{index + 1}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-medium tracking-wide bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md uppercase">
                  {tip.category}
                </span>
                <h3 className="text-base font-semibold text-zinc-100 pt-1">
                  {tip.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {tip.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}