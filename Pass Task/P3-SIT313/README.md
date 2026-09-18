# SIT313 Task P3 - DEV@Deakin React Home Page

This project is the React migration of the DEV@Deakin platform for **SIT313 Secure Frontend Applications - Task P3 (Home Page)**.

## Project Features & Architecture

Built with **React 18** and **Vite**, adhering strictly to the parent->children component architecture:

```
src/
├── App.jsx                       # Main App Container
├── App.css                       # Responsive CSS Styling
├── data.js                       # Articles & Tutorials Mock Dataset
└── components/
    ├── Header.jsx                # Navigation Bar & Search Input
    ├── Banner.jsx                # Banner with "Hey, I'm <Name>" Hover Overlay
    ├── AuthorProfile.jsx         # Profile Image, Bio, Divider & Subheading
    ├── FeaturedArticles.jsx      # Maps over articles dataset using .map()
    ├── ArticleCard.jsx           # Individual Article Card component
    ├── FeaturedTutorials.jsx     # Maps over tutorials dataset using .map()
    ├── TutorialCard.jsx          # Individual Tutorial Card component
    ├── Newsletter.jsx            # "SIGN UP FOR OUR DAILY INSIDER" Form
    └── Footer.jsx                # 3-Column Footer & Copyright Bar
```

---

## Task Requirements Checklist

- [x] **React Parent -> Children Architecture**: Modular components (`Header`, `Banner`, `AuthorProfile`, `FeaturedArticles`, `FeaturedTutorials`, `Newsletter`, `Footer`, `ArticleCard`, `TutorialCard`).
- [x] **Array `.map()` Function**: Articles and Tutorials are stored as array objects and rendered dynamically using JavaScript's `.map()` function.
- [x] **Media & Icons**: Enhanced with images and icons from `lucide-react`.
- [x] **Hover Interactive Banner**: Hovering over the hero banner reveals the horizontal bar saying `"Hey, I'm Manender"`.
- [x] **Daily Insider Newsletter**: Includes subscription input box and button.
- [x] **.gitignore Verification**: `node_modules/` is excluded to avoid repository bloat.

---

## Setup & Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open browser at `http://localhost:5173`.

3. **Production Build**:
   ```bash
   npm run build
   ```

---

## GitLab Submission Instructions

1. Log into your **GitLab** account.
2. Create a new repository titled **`Task P3`**.
3. **CRITICAL**: Set the Visibility Level to **Internal**.
4. Run the following commands in terminal inside `task-p3` directory:
   ```bash
   git init
   git add .
   git commit -m "Complete SIT313-P3 DEV@Deakin React Home Page migration"
   git branch -M main
   git remote add origin <YOUR_GITLAB_REPO_URL>
   git push -u origin main
   ```
5. Record a **2-4 minute video** walking through the code and uploaded to **Panopto**.
6. Create your short report with screenshots, repository link, and Panopto video link.
