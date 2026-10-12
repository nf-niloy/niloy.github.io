---
title: "Parametric Evaluation of Glazing Systems for Building Energy Performance"
shortTitle: "Glazing Systems & Building Energy Analysis"
year: 2026
status: Completed
type: Academic Project
summary: "Compared four glazing systems in DesignBuilder and EnergyPlus to assess cooling electricity use and window solar heat gain."
tags: ["Building Energy", "DesignBuilder", "EnergyPlus", "Glazing", "Energy Efficiency"]
image: "https://raw.githubusercontent.com/nf-niloy/glazing-energy-analysis/main/figures/building-model.png"
github: "https://github.com/nf-niloy/glazing-energy-analysis"
report: "https://github.com/nf-niloy/glazing-energy-analysis/blob/main/report/glazing-systems-energy-performance.pdf"
featured: false
---

## Overview

I compared four exterior-window glazing systems using the same residential building model in **DesignBuilder and EnergyPlus**. The focus was on how window solar heat gain changes relate to actual whole-building cooling electricity use.

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

For this model, **double Low-E** gave the lowest annual cooling electricity use. Double clear glazing reduced solar gain but slightly increased cooling electricity—a reminder that the two measures are not interchangeable.

## Results visualization

![Annual simulated cooling electricity by glazing configuration](https://raw.githubusercontent.com/nf-niloy/glazing-energy-analysis/main/figures/analysis/annual-cooling-electricity.png)

*Annual simulated cooling electricity across the four glazing configurations.*

![Window solar-gain reduction compared with cooling-electricity saving](https://raw.githubusercontent.com/nf-niloy/glazing-energy-analysis/main/figures/analysis/solar-reduction-vs-energy-saving.png)

*Solar-gain reduction and cooling-energy savings are related but not interchangeable.*

## Scope and limitations

These are **simulation results**, not field measurements. They apply to the modeled building, weather data and operating assumptions; comfort, payback and sensitivity analyses were outside the scope.

The GitHub repository contains the `.dsb` models, exported data, figures and report. Exact independent reproduction has not been verified without the original standalone weather file and software-version details.

