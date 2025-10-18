
## 📘 React Blog Site

A minimalistic blog web app built with React, where users can view a list of blog entries (referred to as "books") fetched from a mock API. Each entry displays a title and author, and can be navigated to for further details. The app also includes functionality for creating a new book and handles invalid routes gracefully.

---

### 🚀 Features

 ✅ Home page listing all blog entries
 ✅ Clickable previews that route to detailed pages
 ✅ Error handling for failed API calls
 ✅ Loading state indicators
 ✅ A form to create a new book/blog
 ✅ 404 Page Not Found handling
 ✅ Responsive and clean design

---
### 🛠️ Technologies Used

 React (useState, useEffect, Custom Hooks)
 React Router
 CSS (custom styles + Google Fonts)
 Mock API via `mockapi.io`

---

### 🧠 How It Works

 On load, `Home.js` uses a custom hook `useFetch` to retrieve data from the mock API.
 Each blog entry is passed as props to the `Booklist` component and rendered.
 Clicking a blog title uses `react-router-dom`'s `Link` to navigate to a detailed view (not shown in this code but expected).
 A `Create` route allows users to post a new blog (assuming `Create.js` exists).
 Any undefined route triggers the `NotFound.js` component.

---

### ✅ Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/react-blog-site.git
cd react-blog-site
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm start
```

4. Ensure internet connection for fonts and mock API.

---


## 🔍 Project Review & UX Suggestions

