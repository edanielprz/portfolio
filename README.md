# Daniel - Data Analyst Portfolio

A minimalist, responsive portfolio website built with [Astro](https://astro.build).

## 🚀 Key Features

*   **Fast & Static**: Built with Astro for optimal performance.
*   **Responsive**: Split-screen layout on desktop, stacked on mobile.
*   **Content Collections**: Manage Projects and Blog posts via Markdown.
*   **No Backend**: Contact form works via Formspree, content is static.
*   **Automation**: Scripts to quickly scaffold new posts and projects.

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/edanielprz/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start development server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to view changes.

## 📝 Managing Content

### Adding a New Blog Post
Run the following command to create a new markdown file in `src/content/blog`:
```bash
npm run new:post "My New Post Title"
```

### Adding a New Project
Run the following command to create a new markdown file in `src/content/projects`:
```bash
npm run new:project "Project Name"
```

## 📦 Building for Production

To create a production build (output to `/dist`):
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 🚀 Deployment (GitHub Pages)

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

1.  Push your changes to the `main` branch.
2.  Go to your Repository **Settings** > **Pages**.
3.  Ensure **Source** is set to "GitHub Actions".
4.  The workflow defined in `.github/workflows/deploy.yml` will handle the build and deploy.

## 🎨 Customization

*   **Global Styles**: Edit `src/styles/global.css` to change variables (colors, fonts).
*   **Sidebar**: Edit `src/components/Sidebar.astro` to update profile info and links.
*   **Layout**: `src/layouts/MainLayout.astro` controls the main structure.

## 📄 License

MIT
