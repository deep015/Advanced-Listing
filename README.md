# Professional Todo Dashboard



## Project Overview
The **Professional Todo Dashboard** is a modern, responsive web application designed to help users **organize, track, and manage tasks efficiently**.  
Users can create **todos**, assign them to **lists** and **workspaces**, and get an overview of their productivity with interactive dashboard cards.  

This app is ideal for anyone looking for a **clean, professional, and fully responsive task management tool**.

---

## Features
- ✅ Create, edit, and delete todos.  
- ✅ Assign todos to **lists** and **workspaces** with emojis.  
- ✅ Inline editing for quick task updates.  
- ✅ Dropdown actions for **edit/delete** options.  
- ✅ Dashboard summary showing **total todos, active lists, and workspaces**.  
- ✅ Fully responsive design for desktop, tablet, and mobile.  
- ✅ Professional UI with **TailwindCSS styling, shadows, and hover/focus effects**.  

---

## Screenshots / Demo

![Dashboard Screenshot](./assets/dashboard.png)  
*Dashboard with todos, lists, and workspace overview.*

![Add Todo Modal](./assets/modal.png)  
*Modal for creating new lists or workspaces.*

![Responsive View](./assets/mobile-view.png)  
*Mobile view showing responsive layout.*

---

## Tech Stack
- **Frontend:** React.js + TypeScript  
- **Styling:** TailwindCSS  
- **State Management:** Zustand  
- **Icons:** React Icons (FaPlus, MdMoreVert, FaTimes)  
- **Optional Backend:** Node.js + Express + MongoDB  

---

## Component & State Flow

```mermaid
graph TD
    A[App.tsx] --> B[Header]
    A --> C[Sidebar]
    A --> D[Mainarea]
    A --> E[DashboardSummary]
    A --> F[Content]
    A --> G[Todos List]
    A --> H[Modal]
    D -->|Add Todo| G
    D -->|Select List / Workspace| C
    G -->|Edit / Update / Delete| useStore
    H -->|Save Modal| useStore
    useStore --> G
    useStore --> C
    useStore --> D
    useStore --> E
