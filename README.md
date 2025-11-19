# Portfolio Website

A personal portfolio website showcasing information about Sumant Bhoot - a programming enthusiast exploring DSA, competitive programming, and web development.

## Live Demo

🌐 **Visit the portfolio:**  
**https://sumantbhoot.github.io/portfolio/**

## Features

- **Dynamic Typed Text Animation**: Engaging welcome message with typing animation effect
- **Responsive Design**: Mobile-friendly layout using Bootstrap 5
- **Multiple Sections**:
  - About Me - Introduction and programming interests
  - More About Me - Hobbies including Bhangra, Rubik's cubes, and more
  - All About Me - Personal favorites and interests
- **Lazy Loading Images**: Optimized image loading for better performance
- **Smooth Animations**: Elements animate into view as you scroll
- **Contact Button**: Easy way to get in touch

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling and animations
- **JavaScript**: Interactive features and animations
- **Bootstrap 5.3.3**: Responsive framework
- **Typed.js**: Typing animation library
- **Font Awesome**: Icon library

## Project Structure

```
portfolio/
├── index.html          # Main homepage
├── index.js            # Main JavaScript file
├── assets/             # Images, videos, and other media files
│   ├── profile1_.webp
│   ├── profile2_.webp
│   ├── profile3.webp
│   └── ...
├── css/                # Stylesheets
│   ├── index.css
│   ├── about_me.css
│   ├── more_about_me.css
│   └── all_about_me.css
├── html/               # Additional HTML pages
│   ├── about_me.html
│   ├── more_about_me.html
│   └── all_about_me.html
└── js/                 # JavaScript modules
    ├── defer-img-load.js
    ├── in-view.js
    ├── about_me.js
    ├── more_about_me.js
    └── all_about_me.js
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SumantBhoot/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server:

**Option 1: Direct file opening**
```bash
# Simply open the file in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Option 2: Using Python's built-in server**
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000 in your browser
```

**Option 3: Using Node.js http-server**
```bash
npx http-server -p 8000
```

## Usage

- Navigate through different sections using the buttons on the homepage
- Click "Contact Me" to get in touch
- Explore the three main sections:
  - **About Me**: Learn about programming journey and interests
  - **More About Me**: Discover hobbies and activities
  - **All About Me**: Explore personal favorites

## Features in Detail

### Lazy Loading
Images are loaded on-demand as they come into view, improving initial page load time.

### Scroll Animations
Page elements smoothly animate into view as you scroll down the page.

### Responsive Layout
The website adapts seamlessly to different screen sizes - from mobile phones to desktop displays.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, feel free to open an issue or submit a pull request.

## License

© 2025 Sumant Bhoot. All rights reserved.

## Contact

For any inquiries or collaboration opportunities, use the "Contact Me" button on the website.

---

Built with ❤️ and clean code
