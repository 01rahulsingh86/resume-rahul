import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-secondary font-mono mb-4">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Rahul Singh</h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-2">
              Engineering Leader - QA
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 mb-2">
              Technical Program Manager
            </h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-6">
              Upcoming Product Leader
            </h4>
            <p className="text-gray-400 max-w-2xl mb-8 text-lg">
              Strategic and results-driven Engineering Leader with 16+ years of experience in QA leadership, 
              technical program management, and cross-functional collaboration across Big Tech, eCommerce, 
              and FinTech. Known for driving quality initiatives and innovative solutions with an eye 
              toward product leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:bg-opacity-10 transition-all"
                >
                  Get In Touch
                </Button>
              </a>
              <a href="/rahul-singh-resume.pdf" download>
                <Button 
                  className="bg-secondary text-primary hover:bg-opacity-90 transition-all"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary">
              <img 
                src="/profile.jpg" 
                alt="Rahul Singh" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
