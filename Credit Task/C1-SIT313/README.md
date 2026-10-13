# SIT313 Task P4 - DEV@Deakin Login & Registration Page

This project is the multi-page React application for **SIT313 Secure Frontend Applications - Task P4 (Login and Registration Page)**, building directly upon Tasks P1 and P3.

---

## 🌟 New Features in Task P4

1. **React Router v6 Multi-Page Navigation**:
   - `/` - **Home Page** (Hero Banner with hover effect, Author Profile, Row-view Portfolio with exact green serif heading & light blue box, Gallery, Featured Articles, and Featured Tutorials).
   - `/login` - **Login Page** matching the wireframe with `Sign up` redirection link.
   - `/signup` - **Registration Page** (`Create a DEV@Deakin Account`) with name, email, password, and confirm password fields.

2. **Firebase Firestore Integration**:
   - Stores user records in the Firestore `users` collection.
   - Queries users by email during authentication.

3. **Bcrypt Password Encryption**:
   - Passwords are **never** stored in plain-text.
   - Utilizes `bcryptjs` with salt rounds to securely hash passwords before storing in Firestore.
   - Validates user login via `bcrypt.compare`.

4. **Security Best Practices**:
   - API keys and configuration settings are securely managed via `.env`.
   - `.env` is explicitly ignored in `.gitignore`.
   - Includes persistent client-side fallback storage for immediate testing.

5. **Shared Navigation Bar & Footer**:
   - The navigation bar and footer appear identically across all pages.
   - `DEV@Deakin` logo in the navigation bar links back to `/`.
   - `Login` button in the navigation bar links to `/login` and dynamically updates to a user profile badge with `Logout` when signed in.

---

## 📁 Project Architecture

```
src/
├── App.jsx                       # Router & Shared Layout Container
├── App.css                       # Responsive Styling & Wireframe Design
├── firebase.js                   # Firestore & Bcrypt Auth Services
├── data.js                       # Articles, Tutorials & Portfolio Datasets
├── pages/
│   ├── HomePage.jsx              # Main Landing Page Content
│   ├── LoginPage.jsx             # Login Form (Wireframe Match)
│   └── SignUpPage.jsx            # Account Registration (Wireframe Match)
└── components/
    ├── Header.jsx                # Shared Navigation Bar (DEV@Deakin -> Home)
    ├── Banner.jsx                # Banner with "Hey, I'm <Name>" Hover Bar
    ├── AuthorProfile.jsx         # Profile Image & Bio
    ├── Portfolio.jsx             # "Here's what I have done so far" (Row View)
    ├── ProjectCard.jsx           # Row View Card (Photo on left, text on right)
    ├── Gallery.jsx               # Responsive Photo Gallery
    ├── FeaturedArticles.jsx      # Maps articles using .map()
    ├── ArticleCard.jsx           # Individual Article Card
    ├── FeaturedTutorials.jsx     # Maps tutorials using .map()
    ├── TutorialCard.jsx          # Individual Tutorial Card
    ├── Newsletter.jsx            # Daily Insider Newsletter Form
    └── Footer.jsx                # Shared 3-Column Footer
```

---

## 🚀 Running the Project

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables (Optional)**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   *(If left empty, the application will use the persistent fallback mode, allowing you to register, hash passwords with bcrypt, and login immediately without cloud friction).*

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open **http://localhost:5173** in your browser.

4. **Test Production Build**:
   ```bash
   npm run build
   ```

---

## 📝 GitLab Submission Instructions (Task P4)

1. Create a new repository on your **GitLab** account titled: **`Task P4`**.
2. **CRITICAL**: Set Visibility Level to **Internal**.
3. Push your code (ensuring `node_modules` and `.env` are NOT committed):
   ```bash
   git init
   git add .
   git commit -m "Complete SIT313 Task P4 Login and Registration migration"
   git branch -M main
   git remote add origin <YOUR_GITLAB_TASK_P4_REPO_URL>
   git push -u origin main
   ```
4. Record a **2–4 minute Panopto walkthrough video** demonstrating:
   - Navigation between Home, Login, and Sign-up pages.
   - User registration with validation and bcrypt password encryption.
   - User login verifying credentials and redirecting to the Home page.
   - Firestore database / code structure showing `.env` security.
5. Create your short report with platform screenshots, GitLab repository link, and Panopto video link, then submit to **OnTrack**.
