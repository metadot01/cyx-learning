# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## Adapt Learning Course: AI for Creatives

This repository includes an Adapt Learning-compatible course in the `/course` directory.

### About the Course

**AI for Creatives** is a comprehensive course designed to teach creative professionals how to leverage AI tools in their workflows. The course covers:

- Understanding Creative AI and the augmentation mindset
- Image, text, audio, and video generation with AI
- Advanced techniques including GANs, style transfer, and fine-tuning
- Ethics, copyright, and business strategy for AI

### Course Structure

The `/course` folder contains Adapt Learning JSON content files:

| File | Description |
|------|-------------|
| `course.json` | Main course configuration and global settings |
| `contentObjects.json` | Menu and page definitions (modules, lessons) |
| `articles.json` | Article containers within pages |
| `blocks.json` | Block containers within articles |
| `components.json` | Interactive components (text, narratives, MCQs) |
| `menus.json` | Menu configuration |

### How to Use with Adapt Framework

This course content is designed to work with the official [Adapt Learning Framework](https://github.com/adaptlearning/adapt_framework). The framework itself is **not included** in this repository and should be cloned separately.

#### Setup Steps

1. **Clone the Adapt Framework** (in a separate directory):
   ```bash
   git clone https://github.com/adaptlearning/adapt_framework.git
   cd adapt_framework
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install required plugins** (the course uses these components):
   ```bash
   adapt install adapt-contrib-text
   adapt install adapt-contrib-narrative
   adapt install adapt-contrib-mcq
   adapt install adapt-contrib-pageLevelProgress
   ```

4. **Copy the course content**:
   ```bash
   # From the adapt_framework directory
   cp -r /path/to/this-repo/course/* src/course/
   ```

5. **Build and run**:
   ```bash
   # Build the course
   grunt build
   
   # Or run development server
   grunt server
   ```

6. **View the course**: Open `http://localhost:9001` in your browser.

### Course Content Overview (Module 1)

**Module 1: Introduction to Creative AI**
- Lesson 1.1: What is Creative AI?
  - Text component explaining Creative AI and the augmentation mindset
  - Narrative component exploring the creative spectrum (human-made, AI-assisted, AI-generated)
  - MCQ knowledge check to test understanding

### Extending the Course

To add more modules and lessons:

1. Add new content objects in `contentObjects.json` with appropriate `_parentId` references
2. Create corresponding articles in `articles.json`
3. Add blocks in `blocks.json`
4. Define components in `components.json`

Ensure all `_id` values are unique and `_parentId` values correctly reference parent elements.

### Resources

- [Adapt Learning Documentation](https://github.com/adaptlearning/adapt_framework/wiki)
- [Adapt Component Library](https://github.com/adaptlearning?q=adapt-contrib)
- [Adapt Authoring Tool](https://github.com/adaptlearning/adapt_authoring) (optional GUI for content creation)
