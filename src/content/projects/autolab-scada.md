---
title: "AutoLab SCADA — Laboratory Automation & Monitoring Workspace"
shortTitle: "AutoLab SCADA — Laboratory Automation"
year: 2026
status: Completed
type: Software & Automation Project
summary: "A completed laboratory automation web platform with a public interactive simulator, a private Python–Arduino control workspace, live temperature monitoring, timed recipes and experiment history."
tags: ["SCADA", "Arduino", "Python", "FastAPI", "Process Automation", "Web App"]
imageLight: "/images/autolab-scada-welcome-light.png"
imageDark: "/images/autolab-scada-welcome-dark.png"
github: "https://github.com/nf-niloy/autolab-scada"
demo: "https://nf-niloy.github.io/autolab-scada/"
featured: false
---

## Overview

AutoLab SCADA is a completed laboratory automation and monitoring platform that combines an interactive web interface with a Python gateway and an Arduino-based controller. It was designed to make simple laboratory processes easier to observe, operate and document using timed sequences, temperature monitoring and experiment records.

The **public web app** provides a fully functional browser simulator so anyone can explore the interface without hardware. A separate, authorized **private control workflow** connects the frontend to the local FastAPI/PySerial gateway and compatible Arduino firmware for sensor telemetry and relay commands. These are intentionally distinct operating modes.

## Features

- **Real-time dashboard:** Temperature channels, status indicators, process trends and event activity.
- **Manual actuator control:** Motor and fan output commands with software interlocks and stop controls.
- **Programmable recipes:** Multi-step timing, output selections, repeat cycles and run management.
- **Experiment history:** Saved process runs, events, timing records and CSV/JSON exports.
- **Independent public simulation:** Try the entire browser workflow with clearly labeled synthetic signals.
- **Private hardware workflow:** Arduino Uno communication over USB using a locally hosted Python FastAPI/PySerial gateway and SQLite historian.
- **Responsive UI:** Light/dark modes, desktop and mobile layouts, and concise process monitoring views.

## Interface preview

The following images show the actual AutoLab SCADA web interface. The dashboard preview is in **demo mode**, so the displayed readings are simulated, not experimental measurements.

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

The GitHub Pages site hosts the frontend; it does not itself host the Python backend or supply access to physical hardware. Actual hardware operation depends on a connected and authorized local bridge. It is an educational prototype, not a certified industrial safety controller.

## Explore the project

- **[Try the interactive web app](https://nf-niloy.github.io/autolab-scada/)** — enter the public demo without additional hardware.
- **[View source code and documentation](https://github.com/nf-niloy/autolab-scada)** — frontend, backend, controller and implementation notes.

**Project status:** Completed, 2026.
