const TimeTrackingCard = () => {
    return (
      <div className="relative bg-[#2e1a05] text-neutral-content rounded-lg p-8 md:p-16 max-w-lg mx-auto text-center text-lg">
        <div className="leading-relaxed space-y-4 md:space-y-6">
          <div className="text-gray-400 space-y-1">
            <p><span className="text-red-400 font-medium">4 hrs</span> to set up emails</p>
            <p>+ <span className="text-red-400 font-medium">6 hrs</span> designing a landing page</p>
            <p>+ <span className="text-red-400 font-medium">4 hrs</span> to handle Stripe webhooks</p>
            <p>+ <span className="text-red-400 font-medium">2 hrs</span> for SEO tags</p>
            <p>+ <span className="text-red-400 font-medium">1 hr</span> applying for Google OAuth</p>
            <p>+ <span className="text-red-400 font-medium">3 hrs</span> for DNS records</p>
            <p>+ <span className="text-red-400 font-medium">2 hrs</span> for protected API routes</p>
            <p>+ <span className="text-red-400 font-medium">∞ hrs</span> overthinking...</p>
          </div>
          <div className="text-xl font-semibold flex flex-col md:flex-row items-center justify-center gap-3">
            <p className="text-gray-400">= <span className="text-red-400 font-medium">22+ hours</span> of headaches</p>
            <svg className="w-8 h-8 fill-neutral-content shrink-0" viewBox="0 0 154 150">
              {/* SVG paths go here */}
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default TimeTrackingCard;
  