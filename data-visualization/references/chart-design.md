# Chart design

## Match the chart to the question

| Question | Starting choice | Check before using it |
| --- | --- | --- |
| Compare categories | Bar or dot plot | Sort by value unless categories have a meaningful order. |
| Change over time | Line chart | Preserve time spacing and show gaps for missing observations. |
| Distribution | Histogram, box plot, or empirical cumulative distribution | Document bin choices; a box plot hides modality and sample size. |
| Relationship | Scatter plot | Handle overplotting and distinguish association from causation. |
| Composition | Stacked bar or 100% stacked bar | Use a common total; interior segments lack aligned baselines. |
| Simple share of a total | Bar or a pie with a few distinct slices | Use bars when precise comparison matters; pie values must be nonnegative parts of one total. |
| Hierarchy | Tree for structure; treemap for magnitude | Confirm parent-child relationships and the meaning of size. |
| Connections | Network or adjacency matrix | Dense networks may be clearer as a matrix. |
| Flow | Sankey | Verify direction, units, and conservation or explain imbalances. |
| Geography | Choropleth or proportional symbols | Use comparable rates for choropleths and consider symbols for counts. |

Use small multiples when overlapping series or category counts make comparisons difficult.
Use aggregation, density, sampling, or filtering when individual marks no longer reveal the relevant structure.
Disclose the transformation and preserve important extrema or rare groups when the question depends on them.
Choose bins and sample sizes from the question and data, not a universal point-count cutoff.

## Scales and perception

For quantitative judgments, aligned position is generally more accurate than length, angle, or area.
This is guidance for comparison tasks, not a universal ranking of every visual channel.
Hue distinguishes categories; it does not provide a natural numerical order.

Use linear scales for additive differences and log scales for multiplicative comparisons when values are positive.
Label log scales clearly and handle zero or negative values explicitly rather than silently dropping them.
Keep scales consistent across directly comparable panels, or clearly mark independent domains.
Use separate aligned charts for series with different units when a dual axis could suggest a spurious relationship.
Reserve 3D for questions that require a third spatial dimension.

Distinguish observed values, estimates, and forecasts.
Label uncertainty intervals with their meaning and confidence or probability level.
Avoid smoothing that invents apparent extrema or conceals gaps.

## Color

| Meaning | Palette | Decision rule |
| --- | --- | --- |
| Ordered magnitude | Sequential, such as viridis or cividis | Use a clear lightness progression. |
| Deviation around a reference | Diverging | Set the midpoint to a meaningful value, such as zero or a target. |
| Category identity | Qualitative | Use distinct hues and stable mappings across views. |

Choose palettes for the displayed background and number of categories.
Consult [ColorBrewer](https://colorbrewer2.org/) for palettes filtered by color-vision and print constraints.
Treat perceptually uniform palettes as an approximation, not a guarantee of equal perceived differences in every context.
Use an ordered palette instead of a rainbow scale for magnitude.
When categories become hard to distinguish, use direct labels, grouping, filtering, or small multiples instead of adding more colors.
Test color-vision simulations alongside the redundant encodings and contrast checks in the main workflow.

## Composition and annotations

Choose chart dimensions from label density, available space, and the comparisons readers need to make.
A fixed aspect ratio does not guarantee accurate slope perception or 45-degree banking.
Use equal unit scaling when geometric angles or distances matter in a scatter plot.
Choose a map projection for the geographic task and disclose relevant distortion.

Align dashboard panels and keep related filters near the views they affect.
Give the primary comparison the most space; use restrained gridlines and decoration.
Prefer readable horizontal category labels when names are long.
Place annotations near the evidence they explain without covering marks.
Label reference lines with the benchmark and its source, and limit callouts to the findings needed for the question.

## Further reference

- [Cleveland and McGill, Graphical Perception, 1984](https://doi.org/10.1080/01621459.1984.10478080) provides experimental foundations for quantitative encoding choices.
- [From Data to Viz](https://www.data-to-viz.com/) offers chart-selection examples and caveats.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) defines accessibility requirements, including contrast, keyboard operation, and use of color.
