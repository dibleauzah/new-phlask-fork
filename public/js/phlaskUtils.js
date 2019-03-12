var phlaskUtils = {
    generateLegend: function(map, tapTypeMapping) {
        legendElements = {};
        for (tapType in tapTypeMapping) {
            var legend_div = document.createElement('div');
            legend_div.setAttribute('data-filter', tapTypeMapping[tapType].filterKey)

            var legend_div_image = document.createElement('img');
            legend_div_image.setAttribute('src', tapTypeMapping[tapType].image);
            legend_div_image.setAttribute('data-filter', tapTypeMapping[tapType].filterKey)
            legend_div.appendChild(legend_div_image);

            var legend_div_tooltip = document.createElement('span');
            legend_div_tooltip.innerText = tapTypeMapping[tapType].name;
            legend_div_tooltip.setAttribute('title', tapTypeMapping[tapType].description);
            legend_div_tooltip.setAttribute('data-filter', tapTypeMapping[tapType].filterKey)
            legend_div.appendChild(legend_div_tooltip);

            legend_div.addEventListener('click', accessFilter, false);

            legendElements[tapType] = legend_div;
        }
        return legendElements;
    }
}