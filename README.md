# :clipboard: Stage 3b — Todo List App with Theme Switcher

Welcome to **Frontend Wizards Stage 3b**! :tada:  
In this project, you will build a **sophisticated Todo List application** with **real-time backend integration**, **light/dark theme support**, and a **pixel-perfect implementation** of the provided Figma design.

---

## :point_right: Figma Design
- [Todo App Figma](https://www.figma.com/design/NRbd5hcrQcAa1LBbctUhf9/todo-app?node-id=0-1&p=f&m=dev)  
Use this as your **source of truth** for the UI and UX.

---

## :books: Recommended Study Material

- **React Native Docs:** [Getting Started](https://reactnative.dev/docs/getting-started)  
- **Convex for React Native:** [Docs](https://docs.convex.dev/quickstart/react-native)  
- **State Management:** [React Native State](https://reactnative.dev/docs/state)  
- **Navigation:** [React Navigation](https://reactnavigation.org/)  
- **Styled Components & Theming:** [Docs](https://styled-components.com/docs/basics#react-native)  
- **Expo Docs:** [Docs](https://docs.expo.dev/)  
- **Expo Router:** [Introduction](https://docs.expo.dev/router/introduction/)  
- **Create First App with Expo:** [Tutorial](https://docs.expo.dev/tutorial/create-your-first-app/)

---

## :memo: Project Overview

### Requirements
- Build with **React Native** (Expo recommended)  
- Pixel-perfect implementation of the **Figma design**  
- Support **light/dark themes** with smooth transitions  
- Persist theme preference across app restarts  

### Core Features

#### :art: Theme Switcher
- Light and dark themes  
- Smooth transition animations  
- Theme affects **all UI elements**: backgrounds, text, buttons, etc.  
- Persist user preference across app restarts  

#### :white_check_mark: Todo CRUD Operations (Convex)
- **Create:** Add todos with title, description, and due date  
- **Read:** Fetch and display todos in **real-time**  
- **Update:** Edit todos or toggle complete/incomplete  
- **Delete:** Remove todos (swipe-to-delete or buttons)  

#### :iphone: UI/UX Features
- Search and filter todos  
- Empty states & loading indicators  
- Drag-and-sort functionality  

---

## :white_check_mark: Acceptance Criteria
- Pixel-perfect implementation matching Figma  
- Smooth theme switching with persistent preferences  
- Full CRUD functionality with **real-time updates** via Convex  
- Proper error handling for network & validation  
- Responsive on all device sizes  
- Clean, modular, and documented code  
- Accessibility compliance (contrast, screen reader support)  

---

## :rocket: Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/todo-theme-app.git
cd todo-theme-app
```
2. Install Dependencies
``` bash
Copy code
npm install
# or
yarn install
```
3. Environment Variables
Create a .env file in the root directory:

ini
Copy code
NEXT_PUBLIC_CONVEX_URL=your_convex_project_url
4. Run the App (Development)
``` bash
Copy code
npx expo start
# or
yarn expo start
```
Open on your device or simulator via Expo Go.

:hammer_and_wrench: Convex Setup
Sign up at Convex

Create a new project

Configure your Convex backend in the .env file

Ensure your queries and mutations are set up for:

Create, read, update, delete todos

Real-time subscription for updates

:page_facing_up: Submission
Submit:
APK file of the app

Demo video with voice-over showing all requirements

GitHub repository with full source code

README.md including setup instructions, environment configuration, and Convex setup steps

Checklist:
CRUD operations fully functional

Theme switcher works correctly

Real-time updates functional

Clean, modular, documented code

README contains all instructions for setup and running

:sparkles: Author
Frontend Wizards Stage 3b Student Project