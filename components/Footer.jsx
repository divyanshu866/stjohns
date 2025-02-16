import React from "react";

function Footer() {
  return (
    /* Footer */
    <footer className="bg-[#724632] relative overflow-hidden z-10 border-t-4 border-[#764024]">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#764024]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5f5f4]/5 rounded-full blur-3xl -z-10"></div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f5f5f4] mb-4 pb-2 border-b-2 border-[#764024]">
            Contact Us
          </h3>
          <address className="not-italic space-y-2">
            <p className="text-[#f5f5f4]/90 hover:text-[#f5f5f4] transition-colors">
              123 Education Boulevard
            </p>
            <p className="text-[#f5f5f4]/90 hover:text-[#f5f5f4] transition-colors">
              Tech City, TC 12345
            </p>
            <a
              href="mailto:info@techuniversity.edu"
              className="block text-[#f5f5f4]/90 hover:text-[#f5f5f4] transition-colors"
            >
              info@techuniversity.edu
            </a>
            <p className="mt-4 text-[#f5f5f4]/90">Tel: (555) 123-4567</p>
          </address>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f5f5f4] mb-4 pb-2 border-b-2 border-[#764024]">
            Quick Links
          </h3>
          <nav className="space-y-2">
            {["Admissions", "Programs", "Faculty", "Events"].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-[#f5f5f4]/90 hover:text-[#f5f5f4] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f5f5f4] mb-4 pb-2 border-b-2 border-[#764024]">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="p-2 bg-[#764024]/20 rounded-full hover:bg-[#764024]/40 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#f5f5f4]" aria-hidden="true">
                    {/* Social media SVG icons */}
                  </svg>
                </a>
              )
            )}
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#f5f5f4] mb-4 pb-2 border-b-2 border-[#764024]">
            Newsletter
          </h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#f5f5f4]/10 border border-[#764024] text-[#f5f5f4] placeholder-[#f5f5f4]/60 focus:outline-none focus:ring-2 focus:ring-[#764024]"
            />
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#764024] to-[#422416] text-[#f5f5f4] rounded-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#764024]/30">
        <div className="container mx-auto px-4 py-6 text-center text-[#f5f5f4]/70">
          <p>
            &copy; {new Date().getFullYear()} Tech University. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
