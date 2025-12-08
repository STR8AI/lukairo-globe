# Lukairo Globe

An interactive 3D globe visualization built with THREE.js, featuring a rotating Earth with realistic textures, atmospheric glow, and a starfield background.

## Project Files

This project consists of the following files:

### Core Files

- **index.html** - Main HTML entry point for the globe visualization
- **globe.js** - JavaScript file containing the THREE.js globe logic and animation
- **styles.css** - Stylesheet for page layout and container styling
- **cloudflareworkers** - Cloudflare Worker template/boilerplate code (separate from globe functionality)

## Features

- **3D Earth Globe** - Realistic Earth visualization with blue marble texture and topology bump mapping
- **Atmospheric Glow** - Subtle blue atmosphere effect around the globe
- **Starfield Background** - 8000 stars creating depth and space ambiance
- **Smooth Rotation** - Continuous auto-rotation animation
- **Responsive Design** - Automatically adapts to window size changes

## Assets

The globe uses high-quality Earth textures from CDN:
- **Earth Blue Marble Texture** - Base color map from three-globe library
- **Earth Topology Bump Map** - Elevation data for realistic surface detail

These textures are loaded from `cdn.jsdelivr.net` for optimal performance and availability.

## Technologies Used

- **THREE.js r152** - 3D graphics library loaded from CDN
- **WebGL** - Hardware-accelerated 3D rendering
- **Vanilla JavaScript** - No framework dependencies

## Setup and Usage

1. Open `index.html` in a modern web browser that supports WebGL
2. The globe will automatically load and begin rotating
3. No build step or dependencies installation required

## Browser Requirements

- Modern browser with WebGL support (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection (for loading THREE.js and textures from CDN)

## File Descriptions

### globe.js
Contains the complete THREE.js implementation including:
- Scene, camera, and renderer setup
- Lighting configuration (ambient and directional lights)
- Starfield particle system generation
- Earth sphere geometry with texture mapping
- Atmosphere sphere with transparent glow effect
- Animation loop with delta time calculation
- Responsive resize handling

### styles.css
Provides minimal styling for:
- Full viewport coverage
- Black background
- Container positioning
- Overflow control

### index.html
Simple HTML structure with:
- External stylesheet link
- Globe container div
- THREE.js library script
- Globe logic script

## License

Please refer to the repository license file for usage terms.
