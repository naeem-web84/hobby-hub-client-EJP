import { Fade, Slide, Zoom } from "react-awesome-reveal";

const HowItWorks = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How HobbyHub Works
          </h2>
        </Fade>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Slide direction="left" triggerOnce>
            <div className="p-6 bg-blue-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">1. Browse Groups</h3>
              <p className="text-gray-600">
                Explore a wide range of hobby groups by interest or location.
              </p>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce>
            <div className="p-6 bg-purple-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">2. Join a Community</h3>
              <p className="text-gray-600">
                Click to join a group that fits your vibe and passion.
              </p>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce>
            <div className="p-6 bg-pink-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">3. Attend & Enjoy</h3>
              <p className="text-gray-600">
                Participate in fun events and meet new people who share your interests.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
