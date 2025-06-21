# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for DIONIC, a service providing peer counselling, education, and accessibility services for individuals with vision loss. The site is built using vanilla HTML, CSS, and JavaScript with no build process or framework dependencies.

## File Structure

- `index.html` - Main HTML file containing the complete website structure
- `styles.css` - All CSS styling including responsive design and theme support
- `script.js` - JavaScript for theme toggle, form handling, and client-side validation
- `images/` - Contains all visual assets including logos, service icons, and background images
- `notes.txt` - Development notes and reference links

## Key Features

- **Dual Theme Support**: Light and dark themes with automatic browser preference detection
- **Responsive Design**: Mobile-first approach with detailed breakpoints from 320px to 901px+
- **Accessibility Focus**: Designed for screen reader compatibility (JAWS testing mentioned in notes)
- **Form Integration**: Contact form with Formspree integration and client-side validation
- **Smooth Navigation**: Sticky header with smooth scroll navigation to sections

## Development Commands

This is a static website with no build process. Simply open `index.html` in a browser or serve using any static file server:

```bash
# Using Python's built-in server
python -m http.server 8000

# Using Node.js http-server (if installed globally)
http-server

# Or simply open index.html directly in browser
```

## Theme System Architecture

The site uses CSS custom properties with two theme variants:
- Light theme: Warm beige/cream color palette
- Dark theme: Dark green/brown earth tones
- Theme persistence via localStorage
- Dynamic logo swapping based on theme
- Automatic browser preference detection

## Form Handling

Contact form submits to Formspree endpoint with:
- Client-side validation for required fields
- Dynamic submit button state management
- Real-time validation feedback
- Success/error state handling

## Important Notes

- The site is designed with accessibility as a priority - maintain screen reader compatibility
- All images should have appropriate alt text
- Form validation should remain functional across theme changes
- Responsive breakpoints are extensively customized - test thoroughly when modifying CSS