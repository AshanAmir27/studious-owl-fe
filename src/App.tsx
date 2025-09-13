import './index.css';
import { Link } from 'react-router-dom';

// Separate reusable components for cleaner code
const NavBar = () => (
  <header className="container mx-auto px-6 py-6 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#313037] to-[#2F2E33] flex items-center justify-center shadow-xl transform -rotate-6">
        <span className="font-bold">S</span>
      </div>
      <span className="font-semibold text-lg tracking-wide">Studious Owl</span>
    </div>

    <nav className="hidden md:flex items-center gap-6">
      {['Home', 'Features', 'Pricing', 'Contact'].map(link => (
        <a key={link} className="nav-link cursor-pointer hover:text-[#E75C60] transition-colors">{link}</a>
      ))}
    </nav>

    <div className="hidden md:flex gap-3">
      <button className="btn-outline">Sign in</button>
       <Link to="/get-started" className="btn-primary">
    Get Started
  </Link>
    </div>

    {/* mobile menu button */}
    <div className="md:hidden">
      <button className="p-2 rounded-md border border-[#313037]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C7C7C9" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* LEFT: Text content */}
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 hero-title">
        Manage schools with
        <span className="ml-3 px-2 py-1 rounded-md bg-[#E75C60] text-[#111116]">
          confidence
        </span>
      </h1>

      <p className="text-[#C7C7C9] opacity-90 max-w-xl mb-8">
        All-in-one school management system — attendance, gradebook, parent communication, 
        fees & analytics — built to save time and keep things simple.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="btn-primary btn-cta">Start free trial</button>
        <button className="btn-ghost">Watch demo</button>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-[#C7C7C9] opacity-90 max-w-md">
        {[
          { value: '120+', label: 'Schools onboarded' },
          { value: '20k+', label: 'Students managed' },
          { value: '99.9%', label: 'Uptime' }
        ].map((stat) => (
          <div key={stat.value} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: Mockup phone */}
    <div className="relative">
      <div className="mockup-phone animate-floating">
        <div className="screen p-6">
          {['Attendance', 'Gradebook', 'Fees'].map((item) => (
            <div key={item} className="mb-3">
              <h3 className="font-semibold text-sm mb-2">{item}</h3>
              <div className="h-2 rounded-full bg-[#2F2E33]" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-10 top-8 hidden lg:block">
        <div className="glass-card shadow-2xl p-6">
          <div className="text-xs opacity-80 mb-2">Next class</div>
          <div className="font-semibold">Mathematics</div>
          <div className="text-sm opacity-80 mt-3">
            Starts at 10:00 AM • Room A1
          </div>
        </div>
      </div>
    </div>
  </section>
);



const Features = () => (
  <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {icon: '📊', title: 'Powerful analytics', text: 'Visualize attendance, performance and fees in one dashboard.'},
      {icon: '🔔', title: 'Smart notifications', text: 'Automatic alerts for parents, staff and admins.'},
      {icon: '🔒', title: 'Secure & reliable', text: 'Role-based access and encrypted data storage.'}
    ].map(feature => (
      <div key={feature.title} className="feature-card hover:scale-105 transition-transform">
        <div className="feature-ico text-3xl">{feature.icon}</div>
        <h4 className="font-semibold mb-2">{feature.title}</h4>
        <p className="text-sm opacity-80">{feature.text}</p>
      </div>
    ))}
  </section>
);

const CallToAction = () => (
  <section className="mt-16 p-6 rounded-xl bg-gradient-to-r from-[#2F2E33] to-[#313037] shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
    <div>
      <div className="text-sm opacity-80">Ready to transform your school?</div>
      <div className="font-semibold text-lg">Start your free trial — no credit card required</div>
    </div>
    <div className="flex gap-3">
      <button className="btn-outline">Talk to sales</button>
      <button className="btn-primary">Start free trial</button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-16 border-t border-[#2F2E33] pt-8 pb-12 text-sm opacity-80">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>© {new Date().getFullYear()} Studious Owl. All rights reserved.</div>
      <div className="flex gap-4">
        {['Privacy', 'Terms'].map(link => (
          <a key={link} className="nav-link cursor-pointer hover:text-[#E75C60] transition-colors">{link}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#111116] text-[#C7C7C9] antialiased">
      <NavBar />
      <main className="container mx-auto px-6">
        <Hero />
        <Features />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}