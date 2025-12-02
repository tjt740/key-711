const stats = [
  { value: "2M+", label: "Active Users" },
  { value: "50+", label: "Premium Services" },
  { value: "5+", label: "Years Trusted" },
  { value: "$15M+", label: "Saved by Users" },
];

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl glass-strong p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
              <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
