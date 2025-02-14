import React from 'react';

interface PricingPlan {
  title: string;
  description: string;
  features: string[];
  basePrice: number;
  pricePerUnit: number;
}

const PricingSection: React.FC = () => {

  const pricingPlans: PricingPlan[] = [
    {
      title: 'Small Garden',
      description: 'Best place to start',
      features: [
        'AI Export',
        'Crowded Map',
        'Analytics',
        'Map History',
        '24/7 Support',
      ],
      basePrice: 8,
      pricePerUnit: 1,
    },
    {
      title: 'Large Enterprise',
      description: 'More return and better opportunities',
      features: [
        'AI Export',
        'Crowded Map',
        'Analytics',
        'Map History',
        '24/7 Support',
      ],
      basePrice: 12,
      pricePerUnit: 2,
    },
  ];


  return (
    <section className="bg-[#0f0f0f] font-cute overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-gray-400 mb-8">Pricing</p>
          <h2 className="font-bold text-4xl lg:text-5xl text-[#cfcfcf] tracking-tight">Everything you need, and more</h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative w-full max-w-lg">
              {index === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                </div>
              )}
              {index === 1 && <div className="absolute -inset-[1px] rounded-[9px] bg-[#212121] z-10"></div>}
              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-[#212121] p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold text-[#cdd3d1]">{plan.title}</p>
                    <p className=" mt-2 text-gray-400">{plan.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {index === 1 && (
                    <div className="flex flex-col justify-end mb-[4px]">
                      <p className="text-sm text-gray-400 font-semibold">from</p>
                    </div>
                  )}
                  <p className="text-5xl tracking-tight font-extrabold text-[#cdd3d1]">
                    ${plan.basePrice}
                  </p>

                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-gray-400 uppercase font-semibold">per Node</p>
                  </div>
                </div>
                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#cdd3d1"
                        className="w-[18px] h-[18px] opacity-80 shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className='text-gray-400'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                
                  <p className="flex items-center text-gray-400 justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    Monthly plan. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default PricingSection;