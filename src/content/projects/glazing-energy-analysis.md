---
title: "Parametric Evaluation of Glazing Systems for Building Energy Performance"
shortTitle: "Glazing Systems & Building Energy Analysis"
year: 2026
status: Completed
type: Academic Project
summary: "A DesignBuilder–EnergyPlus study comparing four window glazing configurations and their effects on building cooling electricity and solar heat gain."
tags: ["Building Energy", "DesignBuilder", "EnergyPlus", "Glazing", "Energy Efficiency"]
image: "https://raw.githubusercontent.com/nf-niloy/glazing-energy-analysis/main/figures/building-model.png"
github: "https://github.com/nf-niloy/glazing-energy-analysis"
report: "https://github.com/nf-niloy/glazing-energy-analysis/blob/main/report/glazing-systems-energy-performance.pdf"
featured: false
---

## Overview

This completed undergraduate academic project investigates how different exterior-window glazing systems affect a residential building's simulated energy performance. The analysis was carried out using **DesignBuilder and EnergyPlus** and compares four glazing options under the same modeled building and operating conditions.

The objective was to evaluate both **whole-building cooling electricity** and **solar heat gain through windows**, rather than treating a reduction in solar gain as an equivalent reduction in cooling demand.

## Simulation approach

The same residential building model was used in all four simulations. The building geometry, envelope, weather input, operating schedules, HVAC settings and window placement were held constant; only the **exterior glazing configuration** was changed.

The four cases were:

1. **Single clear:** 6 mm single glazing (baseline).
2. **Double clear:** 6 mm / 13 mm air gap / 6 mm clear glazing.
3. **Double Low-E:** Low-emissivity double glazing with a 13 mm air gap.
4. **Triple clear:** Triple clear glazing with a 6 mm air gap.

For the comparison, the model used a **30% exterior window-to-wall ratio**, **24°C cooling setpoint**, **28°C cooling setback**, and a packaged DX cooling system with a seasonal **COP of 2.5**. These inputs and other assumptions are documented in the project report.

## Key results

- **Single clear (baseline):** 40,683.24 kWh annual cooling electricity; 125,295.25 kWh annual window solar gain.
- **Double clear:** 40,699.96 kWh annual cooling electricity (**0.04% more** than baseline); 91,722.95 kWh solar gain (**26.79% less**).
- **Double Low-E:** **39,396.43 kWh** annual cooling electricity (**3.16% saving**); **81,416.54 kWh** solar gain (**35.02% reduction**).
- **Triple clear:** 40,258.15 kWh annual cooling electricity (**1.04% saving**); 87,650.23 kWh solar gain (**30.05% reduction**).

*Values are outputs of the studied building simulation, not measured energy consumption.*

The **double Low-E** case performed best among the four options for this model. However, the **double clear** case reduced solar gains substantially while showing a slight *increase* in cooling electricity. This illustrates why whole-building performance cannot be inferred directly from glazing solar-gain reduction alone.

## Results visualization

![Annual simulated cooling electricity by glazing configuration](https://raw.githubusercontent.com/nf-niloy/glazing-energy-analysis/main/figures/analysis/annual-cooling-electricity.png)

*Annual simulated cooling electricity across the four glazing configurations.*

![Window solar-gain reduction compared with cooling-electricity saving](https://raw.githubusercontent.com/nf-niloy/glazing-energy-analysis/main/figures/analysis/solar-reduction-vs-energy-saving.png)

*Solar-gain reduction and cooling-energy savings are related but not interchangeable.*

## Scope and limitations

The findings apply to the **specified residential building, weather, glazing templates and model assumptions**. This was a simulation study, not a field measurement or an independently validated whole-building energy model. A full thermal-comfort analysis, economic payback assessment and sensitivity study were outside the project scope.

The GitHub repository provides the DesignBuilder model files (`.dsb`), exported simulation data, original figures and the complete academic report. The repository notes that an independent exact reproduction has not been verified without the original standalone weather file and software-version information.

## Project resources

- **[GitHub repository — models, figures and data](https://github.com/nf-niloy/glazing-energy-analysis)**
- **[Complete project report (PDF)](https://github.com/nf-niloy/glazing-energy-analysis/blob/main/report/glazing-systems-energy-performance.pdf)**

**Academic project · Completed in 2026 · Department of Energy Science and Engineering, KUET.**
