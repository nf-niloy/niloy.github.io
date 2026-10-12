---
title: "AutoLab SCADA — Laboratory Automation & Monitoring Workspace"
shortTitle: "AutoLab SCADA — Laboratory Automation"
year: 2026
status: Completed
type: Software & Automation Project
summary: "An Arduino-connected monitoring and control platform with live temperature readings, programmable recipes, experiment logs and a public browser demo."
tags: ["SCADA", "Arduino", "Python", "FastAPI", "Process Automation", "Web App"]
imageLight: "/images/autolab-scada-welcome-light.png"
imageDark: "/images/autolab-scada-welcome-dark.png"
github: "https://github.com/nf-niloy/autolab-scada"
demo: "https://nf-niloy.github.io/autolab-scada/"
featured: false
---

## Overview

AutoLab SCADA connects a browser dashboard to an Arduino through a local Python gateway. It brings temperature readings, actuator controls, timed recipes and run records into one interface.

The **public demo** runs entirely in the browser with simulated data. The **private control mode** uses a separately authorized FastAPI/PySerial connection to the Arduino for hardware telemetry and commands.

## Features

- **Monitoring:** Temperature channels, trend charts and event logs.
- **Control:** Manual motor/fan commands with interlocks and stop controls.
- **Recipes:** Timed sequences with configurable steps and repeat cycles.
- **Records:** Run history, timing logs and CSV/JSON exports.
- **Hardware connection:** Arduino over USB via a local Python gateway, with SQLite history.

## Interface preview

Screenshots of the web interface in demo mode. The readings shown are simulated, not measured.

![AutoLab SCADA overview showing simulated temperature channels, output controls and live charts](/images/autolab-scada-dashboard.png)

![AutoLab SCADA recipe editor showing configurable timed automation steps](/images/autolab-scada-recipes.png)

## Architecture

```text
Public GitHub Pages website
   └── Browser simulator → local demo recipes and history

Private operator workflow (separately authorized)
   └── Browser UI → FastAPI + PySerial → Arduino Uno
                                  ├── DS18B20 / MLX90614
                                  ├── Motor and fan relays
                                  └── Local SQLite historian
```

GitHub Pages hosts the frontend only. Hardware control requires the separate, authorized Python gateway and connected Arduino. This is an educational prototype, not a certified safety system.

