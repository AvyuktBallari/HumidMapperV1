import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import backgroundImage from '../../assets/map.jpg'; // Adjust the path as necessary

export default function Map() {
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
                .attr('width', width)
                .attr('height', height);

            // Generate random data points with varying strengths
            const data: [number, number, number][] = d3.range(30).map(() => [
                Math.random() * width,
                Math.random() * height,
                Math.random() * 50 // Strength of each node
            ] as [number, number, number]);

            // Create density data with strength affecting the spread
            const densityData = d3.contourDensity<[number, number, number]>()
                .x(d => d[0])
                .y(d => d[1])
                .weight(d => d[2]) // Use strength as weight
                .size([width, height])
                .bandwidth(20)(data);

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
                .data(data)
                .enter().append('circle')
                .attr('cx', d => d[0])
                .attr('cy', d => d[1])
                .attr('r', 8)
                .attr('fill', 'gray')
                .on('mouseover', function(this: SVGCircleElement, d) {
                    d3.select(this).attr('r', 10);
                    const [x, y, strength] = d;
                    svg.append('text')
                        .attr('id', 'tooltip')
                        .attr('x', x + 10)
                        .attr('y', y - 10)
                        .attr('fill', 'white')
                        .text(`Humidity: ${strength.toFixed(2)}%`);
                })
                .on('mouseout', function(this: SVGCircleElement) {
                    d3.select(this).attr('r', 8);
                    svg.select('#tooltip').remove();
                });
        };
    }, []);

    return (
        <div className='object-cover' ref={mapRef} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative' }}>
        </div>
    );
}