# Visualization implementation

## Library selection

Inspect installed dependencies and existing chart conventions first.
Prefer a maintained library that supports the required encodings, accessibility, export, and interaction behavior.
Check current documentation and the installed version before relying on an API or renderer capability.

| Need | Candidates | Selection consideration |
| --- | --- | --- |
| Standard declarative charts | Observable Plot, Vega-Lite | Grammar and defaults should fit the analytical question. |
| React chart components | Recharts, Victory | Check keyboard behavior and responsive sizing in the actual components. |
| Dashboard charts | ECharts, Chart.js | Confirm the required chart types, renderer, and export support. |
| Scientific interactive charts | Plotly | Check bundle size and the behavior of the required trace types. |
| Custom marks and interactions | D3 | Own the rendering, semantics, and interaction design. |
| Static scientific or publication output | Matplotlib, seaborn, ggplot2 | Inspect the final export at its intended dimensions. |

Use D3 modules for scales, shapes, or layouts without taking over DOM nodes owned by a UI framework.
Keep data transformations separate from rendering so totals, domains, and normalization can be checked directly.

## Graph and spatial layouts

Check established implementations before writing a custom layout.
Document the unmet requirement if a custom algorithm is necessary.

| Structure or operation | Candidates | Check |
| --- | --- | --- |
| Directed layered graph | @dagrejs/dagre, elkjs | Node dimensions, edge routing, cycles, and compound-node requirements. |
| Force-directed network | d3-force, Cytoscape.js layouts | Stability, overlap, convergence time, and whether distance has analytical meaning. |
| Tree, treemap, circle packing | d3-hierarchy | Parent structure, nonnegative size values, and label space. |
| Flow or chord diagram | d3-sankey, d3-chord | Input constraints and the meaning of edge width. |
| Large interactive network | Sigma.js with a compatible graph/layout tool | Rendering and layout are separate responsibilities. |
| Large spatial dataset | deck.gl | Layer support, coordinate system, and picking requirements. |
| Spatial lookup | d3-quadtree, rbush | Match point or bounding-box queries to the index. |

D3 force simulation uses velocity Verlet integration with configurable forces; it is not an implementation of Fruchterman-Reingold.
Layered layout engines combine ranking, ordering, and positioning; crossing counting is distinct from crossing minimization.
Allow label dimensions and edge labels to influence layout instead of repairing overlap after rendering.
Preserve stable node identities and positions across updates where possible so readers can track changes.

## Rendering and performance

Count visible marks, DOM nodes, path complexity, labels, and update frequency separately.
A single SVG path can contain many observations, while a single data item may create several DOM nodes.
Use these tradeoffs to choose an initial renderer, then profile representative workloads on target devices.

| Renderer | Strengths | Costs to verify |
| --- | --- | --- |
| SVG | Vector export, DOM events, CSS, semantic elements | DOM updates, complex paths, and label layout can dominate. |
| Canvas | Batched drawing with few DOM nodes | Hit testing, high-DPI sizing, redraw cost, and separate accessibility content. |
| WebGL | GPU throughput for large or frequently updated scenes | Data transfer, text, picking, context loss, and separate accessibility content. |

There is no universal element count at which SVG must become Canvas or Canvas must become WebGL.
Measure load time and interaction latency before adding complexity.
Reduce visual clutter even when the renderer can draw every point.

- Use aggregation or level of detail when marks are smaller than the available pixels.
- Cull off-screen geometry when traversal and drawing cost justify it.
- Move expensive layout or data processing to a worker when profiling shows it blocks interaction.
- Use a spatial index when repeated hit-testing scans are a bottleneck.
- Schedule continuous visual updates with requestAnimationFrame and throttle costly work; debounce work that should wait until input settles.
- Cache stable computations and stop simulations or animation loops when the view is inactive.
- Release event listeners, workers, and graphics resources when the view is removed.

## Interaction

For exploratory views, start with an overview and expose zoom, filtering, and details as the task needs them.
For a single static finding, direct labels and annotations may be sufficient.
Keep filter state and the active subset visible, and provide a way to reset exploration.
Distinguish selection from filtering so readers know whether unselected data still contributes to totals.
When linking views, propagate stable data identities and keep selection styling distinct from category encodings.
Use transitions only when they help track a change, and keep the final state understandable without animation.

## Implementation references

- [D3 force documentation](https://d3js.org/d3-force) explains the simulation and available forces.
- [D3 hierarchy documentation](https://d3js.org/d3-hierarchy) describes hierarchical layouts and their input structures.
- [ELK.js](https://github.com/kieler/elkjs) documents layout configuration and worker support.
- [Shneiderman, The Eyes Have It, 1996](https://doi.org/10.1109/VL.1996.545307) describes the overview, zoom/filter, and details-on-demand approach.
