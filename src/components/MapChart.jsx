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
            svg.append ('image')
                .attr('xlink:href', backgroundImage)
                .attr('width', width*2)
                .attr('height', height*2)
                .attr('object-fit', 'none');

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
                .bandwidth(200)(processedData);
                

            const color = d3.scaleSequential(d3.interpolateViridis)
                .domain([0, d3.max(densityData, d => d.value)]);
                

            svg.selectAll('path')
                .data(densityData)
                .enter().append('path')
                .attr('d', d3.geoPath())
                .attr('fill', d => `${color(d.value)}`)
                .attr('fill-opacity', 0.1);

            svg.selectAll('circle')
                .data(processedData)
                .enter().append('circle')
                .attr('cx', d => d.x)
                .attr('cy', d => d.y)
                .attr('r', 12)
                .attr('fill', 'gray')
                .on('mouseover', function (event, d) {
                    d3.select(this).attr('r', 15);
                    svg.append('text')
                        .attr('id', 'tooltip')
                        .attr('x', d.x + 15)
                        .attr('y', d.y - 15)
                        .attr('fill', 'white')
                        .text(`${d.strength}% Humidity`);
                })
                .on('mouseout', function () {
                    d3.select(this).attr('r', 12);
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
                backgroundSize: 'cover'
            }}
        >
        </div>
    );
}
