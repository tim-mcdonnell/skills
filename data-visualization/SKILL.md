---
name: data-visualization
description: "Design, implement, or review data visualizations. Use for chart selection and encoding, dashboard composition, graph layouts, or chart accessibility and rendering performance."
---

# Data visualization

Turn a reader's question into a visualization whose encodings, data transformations, and interactions can be verified.
This skill revises guidance from NTCoding's data-visualization skill.[^source]

## 1. Establish the question and data

Identify the audience, the comparison or decision they need to make, and the delivery format.
Inspect the available data and existing visualization code before choosing a chart or library.
For a review, apply the steps below to the existing artifact and fix or report specific failures.

Record the relevant facts in a short working note:

- The question the chart must answer and the intended viewing size or device.
- The source, observation unit, field types, units, time zone, and coverage period.
- Missing values, duplicates, outliers, and any aggregation, filtering, or normalization.
- Expected data volume and update frequency, including the largest realistic case.

Distinguish missing observations from zero values.
Keep denominators explicit for rates and percentages, and distinguish totals from averages.
If information is missing, state an assumption or ask only when the answer changes the interpretation.
Use clearly labeled synthetic data only when the task permits it.

This step is complete when each plotted quantity has a defined meaning and a traceable source or labeled assumption.

## 2. Choose the encodings

Use [chart design](references/chart-design.md) to select the chart, scales, palette, and annotations.
Prefer aligned position or length when readers need precise quantitative comparisons.
Use hue for category identity and ordered lightness for magnitude.
Keep bar baselines at zero; choose line and scatter domains to fit the analytical question and label them clearly.
Encode bubble values by area, not radius.

Write down which field controls each axis, mark, size, and color.
Explain aggregation and uncertainty where they affect the conclusion.
This step is complete when the chosen encoding answers the question without implying unsupported comparisons.

## 3. Compose and implement

Place the primary comparison first and group related views.
Use consistent category mappings and comparable scales across panels that invite direct comparison.
Directly label series where space permits, label units, and include the source and coverage period.
Use a takeaway title only when the data supports that takeaway.

For interactive charts, graph layouts, library selection, or performance work, read [implementation](references/implementation.md).
Use an established layout library when it fits the graph's constraints.
Choose rendering technology from measured behavior on representative data, including labels and interactions.
For static output, select an export format and resolution that preserve legibility at the intended size.

This step is complete when the artifact renders with representative data at its intended dimensions and each visible claim agrees with the data.

## 4. Make the information accessible

Pair color with labels, shapes, line styles, or patterns wherever it carries meaning.
Target WCAG AA for web output: normal text needs 4.5:1 contrast and large text needs 3:1.
Essential graphical objects and control indicators need 3:1 against adjacent colors, subject to the applicable WCAG exceptions.
Check the actual palette against the actual background.

Provide a concise text summary and an accessible way to inspect the underlying values, such as a table or a linked data file with meaningful headers.
For large datasets, an accessible filtered table can accompany a full download.
Give a static SVG an accessible name and description with unique IDs.
SVG support for ARIA alone does not make a chart accessible, and Canvas or WebGL needs a separate semantic representation.

For interactive output, make controls keyboard operable with visible focus.
Expose tooltip information on focus or selection as well as hover, and support touch.
Use a documented navigation pattern for dense data instead of thousands of tab stops.
Keep essential context visible outside tooltips, preserve focus after updates, and respect reduced-motion preferences.
Announce meaningful state changes without announcing every animation frame.

This step is complete when the chart's question can be answered without color discrimination or pointer hover, and interactive tasks work with the keyboard.

## 5. Verify the artifact

Inspect the rendered chart or exported file, not only the code or chart specification.
Perform the checks that apply to the delivery format:

- Trace plotted values, totals, percentages, and at least one transformed value back to the source.
- Check empty, single-value, missing, negative, and extreme-value cases where the data permits them.
- Inspect label collisions, clipping, tick density, legend placement, and contrast at intended sizes, including narrow layouts for responsive output.
- Exercise filtering, selection, zoom, reset, keyboard access, and focus behavior where implemented.
- Confirm that filters and scale changes remain visible and that summaries and tables track the displayed data.
- Measure initial rendering and interaction with the largest realistic dataset if performance is part of the task.
- Inspect export output for missing fonts, labels, annotations, and source information.

Fix failures and repeat the affected checks.
Finish with the artifact or changes, the reason for the chart choice, verification performed, and any unverified behavior or data limitations.
If rendering or assistive-technology checks are unavailable, say which checks remain instead of claiming they passed.

[^source]: Based on the user-provided draft of [NTCoding's data-visualization skill](https://github.com/NTCoding/claude-skillz/blob/main/data-visualization/SKILL.md), rewritten with corrected technical guidance and an explicit verification workflow.
