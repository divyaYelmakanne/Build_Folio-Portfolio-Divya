const HobbiesSection = () => {
  const hobbies = [
    { icon: "🛠️", text: "I enjoy building things that solve real-world problems" },
    { icon: "⚙️", text: "I once built a mini project just for the thrill of debugging it" },
    { icon: "🧩", text: "I love working on AI-based tools and automation" },
    { icon: "🔥", text: "Always learning something new!" },
    { icon: "🎧", text: "I love listening and enjoying the music" },
    { icon: "🚗", text: "Travelling" },
    { icon: "🌈", text: "Fun & Adventurous" },
    { icon: "🎵", text: "I enjoy rides with good music" }
  ];

  return (
    <section id="hobbies" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            🎯 Hobbies & Interests
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="card-gradient rounded-2xl p-8 md:p-12 card-shadow border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-smooth group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mr-4 group-hover:animate-bounce">
                  {hobby.icon}
                </div>
                <p className="text-lg text-muted-foreground group-hover:text-foreground transition-smooth">
                  {hobby.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;