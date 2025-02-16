import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import backgroundImage from '../assets/map.jpg';

export default function MapChart({ inputData }) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current || !inputData || inputData.length === 0) return;

        d3.select(mapRef.current).selectAll('*').remove();

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

            const processedData = inputData.map((d) => ({
                x: d.x,
                y: d.y,
                strength: d.busy,
            }));

            const densityData = d3.contourDensity()
                .x(d => d.x)
                .y(d => d.y)
                .weight(d => d.strength)
                .size([width, height])
                .bandwidth(40)(processedData);

            const color = d3.scaleSequential(d3.interpolateViridis)
                .domain([0, d3.max(densityData, d => d.value)]);

            svg.selectAll('path')
                .data(densityData)
                .enter().append('path')
                .attr('d', d3.geoPath())
                .attr('fill', d => `${color(d.value)}80`);

            svg.selectAll('circle')
                .data(processedData)
                .enter().append('circle')
                .attr('cx', d => d.x)
                .attr('cy', d => d.y)
                .attr('r', 8)
                .attr('fill', 'gray')
                .on('mouseover', function (event, d) {
                    d3.select(this).attr('r', 10);
                    svg.append('text')
                        .attr('id', 'tooltip')
                        .attr('x', d.x + 10)
                        .attr('y', d.y - 10)
                        .attr('fill', 'white')
                        .text(`Humidity: ${d.strength.toFixed(2)}%`);
                })
                .on('mouseout', function () {
                    d3.select(this).attr('r', 8);
                    svg.select('#tooltip').remove();
                });
        };
    }, [inputData]);

    return (
        <div
            className="object-cover"
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
