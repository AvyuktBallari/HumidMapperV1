import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import backgroundImage from '../assets/map.jpg'; // Adjust the path as necessary

export default function Map({inputData}) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        const img = new Image();
        img.src = backgroundImage;
        img.onload = () => {
            const width = img.width;
            const height = img.height;

            if (mapRef.current) {
                mapRef.current.style.width = `${width}px`;
                mapRef.current.style.height = `${height}px`;
            }

            const svg = d3.select(mapRef.current)
                .append('svg')
                .attr('width', '100%')
                .attr('height', 'auto')
                .attr('viewBox', `0 0 ${width} ${height}`);

            // Generate random data points with varying strengths
            const processedData = inputData.map((d) => ({
                x: d.x,
                y: d.y,
                strength: d.busy,
            }));
            console.log(processedData);
            // Create density data with strength affecting the spread
            const densityData = d3.contourDensity<[number, number, number]>()
                .x(d => d.x)
                .y(d => d.y)
                .weight(d => d.strength) // Use strength as weight
                .size([width, height])
                .bandwidth(40 )(processedData);

            // Create color scale
            const color = d3.scaleSequential(d3.interpolateViridis)
                .domain([0, d3.max(densityData, d => d.value) as number]);

            // Append density contours
            svg.selectAll('path')
                .data(densityData)
                .enter().append('path')
                .attr('d', d3.geoPath())
                .attr('fill', d => `${color(d.value)}80`); // Adding opacity

            // Append circles for each data point
            svg.selectAll('circle')
                .data(processedData)
                .enter().append('circle')
                .attr('cx', d => d.x)
                .attr('cy', d => d.y)
                .attr('r', 8)
                .attr('fill', 'gray')
                .on('mouseover', function(this: SVGCircleElement, d) {
                    d3.select(this).attr('r', 10);
                    console.log(d);
                    svg.append('text')
                        .attr('id', 'tooltip')
                        .attr('x', d.x + 10)
                        .attr('y', d.y - 10)
                        .attr('fill', 'white')
                        .text(`Humidity: ${d.strength.toFixed(2)}%`);
                })
                .on('mouseout', function(this: SVGCircleElement) {
                    d3.select(this).attr('r', 8);
                    svg.select('#tooltip').remove();
                });
        };
    }, []);

    return (
        <div
        className='object-cover'
        ref={mapRef}
        style={{
          position: 'relative',
          overflow: 'visible',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover'
        }}
      >
      </div>
    );
}