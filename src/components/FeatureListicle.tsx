"use client";

import { useState, useEffect, useRef } from "react";
import type { JSX } from "react";
const features: {
  name: string;
  description: JSX.Element;
  svg: JSX.Element;
}[] = [
  {
    name: "Map",
    description: (
      <>
        <ul className="space-y-1">
          {[
            "Look at live updates of your humidity data in real time.",
            "Visualize your data on an interactive map.",
            "Analyze insights to enhance sustainability and efficiency.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 24 hours
          </li>
        </ul>
      </>
    ),
    svg: (
        <svg fill="currentColor" className="w-8 h-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511 511">
  <g>
    <path d="M343.5,292h-176c-21.78,0-39.5,17.72-39.5,39.5v96c0,21.78,17.72,39.5,39.5,39.5h176c21.78,0,39.5-17.72,39.5-39.5v-96
      C383,309.72,365.28,292,343.5,292z M368,427.5c0,13.509-10.991,24.5-24.5,24.5h-176c-13.509,0-24.5-10.991-24.5-24.5v-96
      c0-13.509,10.991-24.5,24.5-24.5h176c13.509,0,24.5,10.991,24.5,24.5V427.5z"/>
    <path d="M220.803,334.197c-2.929-2.929-7.678-2.929-10.606,0l-40,40c-2.929,2.929-2.929,7.678,0,10.606l40,40
      c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.678,0-10.606L186.106,379.5l34.697-34.697
      C223.732,341.875,223.732,337.125,220.803,334.197z"/>
    <path d="M300.803,334.197c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606l34.697,34.697l-34.697,34.697
      c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l40-40
      c2.929-2.929,2.929-7.678,0-10.606L300.803,334.197z"/>
    <path d="M255.5,388c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3c0,1.97,0.8,3.91,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2
      c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3c0-1.98-0.8-3.91-2.2-5.3C259.41,388.8,257.47,388,255.5,388z"/>
    <path d="M279.5,388c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3c0,1.97,0.8,3.91,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2
      c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3c0-1.97-0.8-3.91-2.2-5.3C283.41,388.8,281.47,388,279.5,388z"/>
    <path d="M231.5,388c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3c0,1.97,0.8,3.91,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2
      c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3c0-1.97-0.8-3.91-2.2-5.3C235.41,388.8,233.48,388,231.5,388z"/>
    <path d="M493.609,207.138c-9.949-13.301-23.718-23.639-39.172-29.504c-2.354-26.829-14.217-51.7-33.736-70.504
      C399.864,87.055,372.447,76,343.5,76c-9.62,0-19.168,1.238-28.447,3.684C289.97,56.639,257.631,44,223.5,44
      c-27.572,0-54.102,8.246-76.719,23.846c-20.784,14.335-37.015,33.94-47.164,56.907C43.39,130.734,0,178.501,0,235.5
      c0,28.288,10.609,55.263,29.874,75.957c19.163,20.585,45.109,33.092,73.059,35.218c4.13,0.312,7.733-2.779,8.047-6.91
      c0.314-4.13-2.779-7.733-6.91-8.047c-24.179-1.839-46.63-12.665-63.217-30.482C24.181,283.328,15,259.982,15,235.5
      c0-50.68,39.642-92.925,90.248-96.176c2.882-0.185,5.402-2.008,6.479-4.688c8.871-22.075,23.938-40.9,43.571-54.443
      C175.399,66.329,198.983,59,223.5,59c31.649,0,61.569,12.227,84.248,34.427c1.962,1.921,4.818,2.614,7.444,1.812
      C324.369,92.426,333.894,91,343.5,91c51.814,0,94.107,40.591,96.284,92.409c0.133,3.166,2.242,5.906,5.267,6.847
      C475.525,199.729,496,227.556,496,259.5c0,18.1-6.707,35.429-18.885,48.797c-12.099,13.281-28.562,21.568-46.356,23.335
      c-0.587,0.059-1.153,0.184-1.69,0.367h-21.571c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H431.5c1.15,0,2.24-0.259,3.214-0.722
      c20.538-2.631,39.452-12.47,53.49-27.879C502.904,302.262,511,281.345,511,259.5C511,240.455,504.986,222.349,493.609,207.138z"/>
    <path d="M62.985,181.923c-3.08-2.77-7.822-2.52-10.592,0.559C39.243,197.099,32,215.927,32,235.5
      c0,15.741,4.665,31.01,13.49,44.154c1.447,2.156,3.818,3.32,6.233,3.32c1.438,0,2.891-0.413,4.174-1.274
      c3.439-2.309,4.355-6.968,2.046-10.407C50.784,260.63,47,248.252,47,235.5c0-15.862,5.875-31.127,16.544-42.985
      C66.314,189.436,66.064,184.693,62.985,181.923z"/>
    <path d="M275.105,107.646c1.328,0.959,2.864,1.42,4.385,1.42c2.327,0,4.62-1.079,6.086-3.109c2.425-3.358,1.669-8.046-1.688-10.472
      C266.24,82.738,245.357,76,223.5,76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5C242.184,91,260.029,96.756,275.105,107.646z"/>
    <path d="M102.677,156.609c-6.03,0.667-11.979,2.028-17.68,4.046c-3.905,1.382-5.95,5.668-4.568,9.573c1.089,3.078,3.982,5,7.07,5
      c0.83,0,1.675-0.139,2.502-0.432c4.617-1.634,9.436-2.737,14.324-3.277c4.117-0.456,7.085-4.162,6.63-8.279
      C110.501,159.122,106.802,156.158,102.677,156.609z"/>
    <path d="M357.848,124.593c0.557,0.126,1.114,0.186,1.662,0.186c3.427,0,6.521-2.364,7.309-5.847c0.914-4.04-1.621-8.056-5.661-8.97
      C355.401,108.66,349.46,108,343.5,108c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5C348.349,123,353.176,123.536,357.848,124.593z
      "/>
    <path d="M427.793,217.456c1.168,0.662,2.438,0.977,3.691,0.977c2.613,0,5.151-1.368,6.532-3.803
      c2.042-3.603,0.777-8.18-2.827-10.223c-7.401-4.195-12.034-11.778-12.391-20.284c-0.958-22.817-11.629-44.116-29.277-58.436
      c-3.216-2.61-7.94-2.119-10.549,1.098c-2.61,3.216-2.119,7.939,1.098,10.549c14.31,11.612,22.963,28.895,23.742,47.418
      C408.388,198.464,415.857,210.69,427.793,217.456z"/>
  </g>
  </svg>
    ),
  },
  {
    name: "Data",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Efficiently organize, store, and access your data",
            "Ensure data accuracy, security, and availability",
            "Enable informed decision-making with reliable data",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 2 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    name: "AI",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Leverage artificial intelligence to unlock valuable insights",
            "Automate processes for increased efficiency",
            "Drive innovation within your organization",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 3 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg fill="currentColor" className="w-8 h-8" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="currentColor"><circle cx="34.52" cy="11.43" r="5.82"/><circle cx="53.63" cy="31.6" r="5.82"/><circle cx="34.52" cy="50.57" r="5.82"/><circle cx="15.16" cy="42.03" r="5.82"/><circle cx="15.16" cy="19.27" r="5.82"/><circle cx="34.51" cy="29.27" r="4.7"/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"/><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"/><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"/><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"/><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"/></svg>
    ),
  },

];

const FeaturesListicle = () => {
  const featuresEndRef = useRef<null>(null);
  const [featureSelected, setFeatureSelected] = useState<string>(
    features[0].name
  );
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features text-left">
      <div className="max-w-3xl mx-auto font-cute">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <p className="text-accent text-left text-gray-400 font-medium text-sm font-mono mb-3">
            const <span className="text-green-200">launch_time</span> = &quot;Today&quot;;
          </p>
          <h2 className="font-semibold text-left text-[#cfcfcf] text-3xl lg:text-5xl tracking-tight mb-8">
            Supercharge your garden instantly, make more $
          </h2>
          <div className="text-gray-400 text-left leading-relaxed mb-8 lg:text-lg">
            Unlock powerful insights, automate workflows, and make data-driven decisions in no time. Focus on growing your farm, not managing <br className="lg:hidden" /> <br className="lg:hidden" / >soil issues. Our platform gives you the tools you need to scale, innovate, and drive success—FAST.
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="!max-w-6xl mx-auto">
          <div className="grid max-w-3xl md:justify-start relative ml-0 grid-cols-4 md:flex  gap-4 md:gap-12 max-md:px-8  mb-8">
          {features.map((feature) => (
              <span
                key={feature.name}
                onClick={() => {
                  if (!hasClicked) setHasClicked(true);
                  setFeatureSelected(feature.name);
                }}
                className={`flex flex-col text-gray-400 items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
              >
                <span
                  className={`duration-100 ${
                    featureSelected === feature.name
                      ? "text-gray-200"
                      : "text-gray-400 group-hover:text-base-content/50"
                  }`}
                >
                  {feature.svg}
                </span>
                <span
                  className={`font-semibold text-sm ${
                    featureSelected === feature.name
                      ? "text-primary"
                      : "text-base-content/50"
                  }`}
                >
                  {feature.name}
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#0f0f0f] w-full">
          <div className="max-w-3xl font-cute mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
          <div className="text-gray-400 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity" key={featureSelected}>
            <h3 className="font-semibold text-base-content text-lg">
              {features.find((f) => f.name === featureSelected)?.name}
            </h3>

            {features.find((f) => f.name === featureSelected)?.description}
          </div>
          </div>
        </div>
      </div>
      <p className="opacity-0" ref={featuresEndRef}></p>

    </section>
  );
};

export default FeaturesListicle;