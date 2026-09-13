# 🚀 DevStack

DevStack is an organized and perfect technology stack selection web application where users can explore different technologies and build their own development stack by selecting technologies from different categories.

## 📖 About The Project

DevStack allows developers to explore various technologies, view their details, and create a personalized technology stack. This stack one developer can learning different technologies for his own choice or personallaty matter. 


## 🛠️ Technologies Used

- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔔 React Toastify
- ⚡ Vite
- 🧩 React Icons
- 📄 JSON Data

## ✨ Features

### 1. 🔍 Explore Technologies
Users can explore different technologies with information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Badge

### 2. 🧱 Build Your Own Stack
Users can select technologies and create their own development stack.

- Select technologies easily
- One technology per category
- Selecting another technology from the same category replaces the previous one
- Duplicate technologies cannot be added

### 3. 🗑️ Manage Your Stack
Users can easily manage their selected technologies.

- Remove individual technologies
- Remove all selected technologies
- Success and warning toast notifications
- Selected technologies are displayed in the **My Stack** section

## 📱 Responsive Design

DevStack is fully responsive and works smoothly on:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Desktops

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.tsx
│   ├── Banner.tsx
│   ├── Footer.tsx
│   └── technologies/
│       ├── Technologies.tsx
│       ├── ExploreTechnology.tsx
│       ├── TechnologyCard.tsx
│       └── StackTechnology.tsx
├── types/
│   └── TechType.ts
├── App.tsx
└── main.tsx

public/
└── technologyData.json




# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

**Answer:**  
 Basically jsx is html like code inside js and this jsx syntax helps to easily write react code component

---

## 2. What is the difference between props and state?

**Answer:**  
 props are pass and store data like unidirectional (parent component to child component) and state is used to update and modify any component inside the react. 

---

## 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**  
`useState` is a React Hook used to create and update state. In this project, I used it in `App.tsx, TechnologyCard.tsx` and many other file to to store the selected technologies modify or update something to its own obostha.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:**  
`useEffect is handle side effect and fatch data after component render, in the projent i did not use useeffet hook to load the json data rather than i used fatch() to get the fake data or json data and after that i used use() hook to read the promise`

## 5. Why does every item in a .map() list need a unique key prop?

**Answer:**  
unique key props is basically we use in when array map method is call and we all know under the hood react need to a unique props to to make each list of element is uniuqe in the virtual dom.

## 6. What is conditional rendering? Show one place you used it.

**Answer:**  
condition rendering is like readering a ui or other element or something in depent on my own logic or condition. 
I use it in my stacktechnology file for when i click expore the it rendiering a collection of array elemtnt instead of before array.length 0 er text.

## 7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** 
we all know react data flow method is unidrectional so we pass via on props inside compontnt and other sibling and child component is receive the props. we know react is one way data flow kore just parent to child component er moddeh, parent component fanction akare ekta props pathay r child compoent sei props gulo receive kore pore sei function ta call kore sathe data pass kore parent er moddhe like (lifting state up) method....