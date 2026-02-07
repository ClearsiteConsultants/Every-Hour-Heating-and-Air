import { useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "H.V.A.C Install",
    description:
      "Professional installs for reliable comfort and long-term performance.",
    image: "/HVAC INstall.png"
  },
  {
    title: "H.V.A.C Service",
    description: "Diagnostics and repairs to restore airflow, efficiency, and safety.",
    image: "/IMG3333.webp"
  },
  {
    title: "Air Duct Cleaning",
    description: "Improve indoor air quality and system performance with a full clean.",
    image: "/IMG_8767.JPG"
  },
  {
    title: "Carpet Cleaning",
    description: "Fresh, clean carpets that look great and feel comfortable.",
    image: "/IMG2222.jpg"
  }
];

const bookingServices = [
  "H.V.A.C Install",
  "H.V.A.C Service",
  "Air Duct Cleaning",
  "Carpet Cleaning"
];

const bookingLinks: Record<string, string> = {
  "H.V.A.C Install": "https://app.cal.com/brad-bosshardt-hhlktw/h.v.a.c-install",
  "H.V.A.C Service": "https://app.cal.com/brad-bosshardt-hhlktw/15min",
  "Air Duct Cleaning": "https://app.cal.com/brad-bosshardt-hhlktw/30min",
  "Carpet Cleaning": "https://app.cal.com/brad-bosshardt-hhlktw/carpet-cleaning",
};

const pricing = [
  {
    label: "Carpet Cleaning",
    title: "Deep Clean",
    price: "$35",
    items: ["Per room", "Freshens & lifts stains", "Great for high-traffic areas"]
  },
  {
    label: "Air Duct Cleaning",
    title: "Whole Home Special",
    price: "$350",
    items: [
      "Complete system clean",
      "Improves indoor air quality",
      "Whole house special"
    ],
    highlight: true
  },
  {
    label: "Dryer Vent Cleaning",
    title: "Safety Service",
    price: "$125",
    items: ["Per visit", "Reduces fire risk", "Boosts dryer efficiency"]
  },
  {
    label: "Service Calls",
    title: "HVAC Diagnostics",
    price: "$75",
    items: ["Per service call", "Expert troubleshooting", "Clear recommendations"]
  },
  {
    label: "Cleaning Membership",
    title: "Priority Plan",
    price: "Starting at $25/mo",
    items: ["Priority scheduling", "Maintenance reminders", "Consistent cleanings"]
  }
];

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(bookingServices[0]);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleConfirmBooking = () => {
    const bookingUrl =
      bookingLinks[selectedService] ??
      "https://app.cal.com/developers-clear-site-ktxqn0/30min";
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-[min(1200px,92vw)] items-center justify-between py-4">
          <div className="flex flex-col gap-1 font-bold">
            <span>Every Hour Heating and Air</span>
            <span className="text-sm font-medium text-slate-500">
              Keeping your home comfortable
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#services" className="hover:text-brand-600">
              Services
            </a>
            <a href="#pricing" className="hover:text-brand-600">
              Pricing
            </a>
            <a href="#contact" className="hover:text-brand-600">
              Contact
            </a>
          </nav>
          <Button
            type="button"
            className="bg-rose-500 text-white shadow-glow hover:bg-rose-600"
            onClick={handleOpenBooking}
          >
            Book Now
          </Button>
        </div>
      </header>

      <main>
        <section className="py-24">
          <div className="mx-auto grid min-h-[680px] w-[min(1200px,92vw)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="mx-auto flex h-[440px] w-[440px] items-center justify-center rounded-3xl bg-slate-50 p-6 shadow-sm sm:h-[500px] sm:w-[500px] md:h-[560px] md:w-[560px]">
              <img
                src="/IMG6666.png"
                alt="Every Hour Heating and Air banner"
                className="h-full w-full rounded-full object-contain shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">
                Reliable HVAC, duct, and carpet cleaning—on your schedule.
              </h1>
              <p className="mt-4 text-slate-600">
                Serving homes with expert H.V.A.C installs, H.V.A.C service, air
                duct cleaning, and carpet cleaning. Fast response, honest pricing,
                and quality work you can trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  type="button"
                  className="bg-rose-500 text-white hover:bg-rose-600"
                  onClick={handleOpenBooking}
                >
                  Book Now
                </Button>
                <Button asChild className="bg-brand-600 text-white hover:bg-brand-700">
                  <a href="tel:8016878730">Call 801-687-8730</a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
                <span>25+ Years Experience</span>
                <span>Local &amp; Trusted</span>
                <span>Residential &amp; Commercial</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto w-[min(1200px,92vw)]">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
              <p className="mt-3 text-slate-600">
                Focused solutions that keep your home efficient, safe, and clean.
              </p>
            </div>
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-soft"
                >
                  <div className="mx-auto w-full max-w-[220px]">
                    <div className="aspect-square w-full rounded-2xl border border-slate-200 bg-white p-2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full rounded-xl object-cover shadow-sm"
                      />
                    </div>
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto w-[min(1200px,92vw)]">
            <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-800 p-8 text-white shadow-soft md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">24/7 HVAC Service and Support</h2>
                <p className="mt-4 text-brand-100">
                  Fast response when you need it most. Call or book online and we’ll
                  take care of the rest.
                </p>
                <p className="mt-4 text-brand-100">
                  We deliver dependable heating, cooling, and ductwork solutions
                  with a focus on safety and long-term performance.
                </p>
                <p className="mt-4 text-brand-100">
                  Local, responsive, and committed to quality work every time.
                </p>
              </div>
              <div>
                <img
                  src="/IMG_9539_9114.JPG"
                  alt="Technician by truck"
                  className="h-[260px] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16">
          <div className="mx-auto w-[min(1200px,92vw)]">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Pricing</h2>
              <p className="mt-3 text-slate-600">
                Clear, simple pricing for the services you need most.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {pricing.map((item) => (
                <div
                  key={item.label}
                  className={`w-[240px] rounded-2xl border bg-white p-6 text-center shadow-soft ${
                    item.highlight
                      ? "border-brand-600 bg-gradient-to-b from-white to-brand-50"
                      : "border-slate-200"
                  }`}
                >
                  {item.highlight && (
                    <span className="mb-2 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                      Most Popular
                    </span>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-3xl font-bold text-brand-600">
                    {item.price}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                    {item.items.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto w-[min(1200px,92vw)]">
            <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-soft">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="mt-3 text-slate-300">
                We’re ready to help. Reach out today.
              </p>
              <p className="mt-6 text-sm">
                Phone: <a href="tel:8016878730">801-687-8730</a>
                <br />
                Email:{" "}
                <a href="mailto:everyhourheatingandair@gmail.com">
                  everyhourheatingandair@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500">
        © 2026 Every Hour Heating and Air. All rights reserved.
      </footer>

      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">
              What service would you like to schedule?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Select a service to continue to booking.
            </p>
            <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Service
              <select
                value={selectedService}
                onChange={(event) => setSelectedService(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
              >
                {bookingServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={handleCloseBooking}>
                Cancel
              </Button>
              <Button type="button" onClick={handleConfirmBooking}>
                Continue to Booking
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
