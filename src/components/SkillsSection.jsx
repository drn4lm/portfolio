import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Java", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 85, category: "Programming Languages" },
  { name: "Python", level: 95, category: "Programming Languages" },
  { name: "C", level: 90, category: "Programming Languages" },
  { name: "ARMv8", level: 80, category: "Programming Languages" },
  { name: "HTML/CSS", level: 85, category: "Programming Languages" },

  // Tools & Technologies
  { name: "Git/GitHub", level: 95, category: "Tools & Technologies" },
  { name: "Docker", level: 75, category: "Tools & Technologies" },
  { name: "Postman", level: 85, category: "Tools & Technologies" },
  { name: "JUnit", level: 95, category: "Tools & Technologies" },
  { name: "React", level: 90, category: "Tools & Technologies" },
  { name: "JavaFX", level: 80, category: "Tools & Technologies" },
  { name: "Tailwind CSS", level: 90, category: "Tools & Technologies" },
  { name: "Node.js", level: 85, category: "Tools & Technologies" },
  { name: "Express", level: 80, category: "Tools & Technologies" },
  { name: "MongoDB", level: 80, category: "Tools & Technologies" },
  { name: "SQLite", level: 80, category: "Tools & Technologies" },
  { name: "WebSocket", level: 65, category: "Tools & Technologies" },
];

const categories = ["Programming Languages", "Tools & Technologies"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "cosmic-button px-5 py-2 rounded-full transition-colors duration-300 hover:cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};