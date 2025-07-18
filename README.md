# Flowbit Microfrontend Platform (In Progress)

## ✅ Current Progress (as of July 2025)

This project is a multi-tenant microfrontend-based platform built using React, Module Federation, and Docker, designed to demonstrate tenant-aware navigation, authentication, and n8n workflow integration.

## 🚀 Quick-Start Instructions

Only the frontends are functional at this stage. Backend/API + n8n integration i.s WIP
## 1. Clone the repo
    git clone https://github.com/yourusername/flowbit-mfe-starter.git
    cd flowbit-mfe-starter

## 2. Install and run each microfrontend

### Terminal 1 - React Shell (port 3000)
    cd react-shell
    npm install
    npm start

### Terminal 2 - Support App (port 3001)
    cd support-app
    npm install
    npm start

### Terminal 3 - Dashboard App (port 3002)
    cd dashboard-app
    npm install
    npm start

### Navigate to http://localhost:3000 to access the shell.
### Use the sidebar to navigate to the Support or Dashboard screens.

## 🧱 Architecture Diagram

                        +-----------------------------+
                        |         React Shell         |
                        |      http://localhost:3000  |
                        |-----------------------------|
                        | Sidebar: /me/screens API    |
                        |                             |
                        |  Loads microfrontends:      |
                        |    -> Support App           |
                        |    -> Dashboard App         |
                        +-------------+---------------+
                                      |
           ------------------------------------------------------------
           |                                                            |
    +------------------------+                          +------------------------+
    |  SupportTicketsApp     |                          |  DashboardApp          |
    |  http://localhost:3001 |                          |  http://localhost:3002 |
    |  (via ModuleFederation)|                          |  (via ModuleFederation)|
    +------------------------+                          +------------------------+

Planned additions: API, MongoDB, n8n container, Ngrok tunnel, full Auth flow


### ✅ Completed:
- [x] **React Shell** with routing and sidebar navigation
- [x] **SupportTickets Microfrontend** dynamically loaded using Webpack Module Federation
- [x] **Dashboard Microfrontend** scaffolded and loading
- [x] **Auth setup** in progress (login page added, logic pending)
- [x] **API backend with Express** is initialized (MongoDB structure under construction)
- [x] **Use-case registry** with tenant → screen mapping
- [x] Basic tenant switching via mocked screens API

---

## 🚧 Planned (Work in Progress)

### ⏳ To be completed in 4–6 days:
- 🔐 Implement JWT login (email/password) with `jsonwebtoken` and `bcrypt`
- 🛡️ Middleware for role-based route protection (`/admin/*`)
- 🧾 Full MongoDB models and controllers (users, tenants, tickets)
- 🔄 Integration with n8n via Docker Compose
- 🔁 Secure webhook handling from n8n with secret verification
- 🧪 Add Jest unit tests for tenant isolation

---

## 🏗 Folder Structure

```bash
flowbit-mfe-starter/
├── api/                # Backend API (in progress)
├── react-shell/        # Main app shell
├── support-app/        # SupportTickets microfrontend
├── dashboard-app/      # Dashboard microfrontend
├── use-case-registry/  # registry.json maps tenant to screens
└── README.md
```

## 🧪 Known Limitations

#### 🔒 Auth system is incomplete (JWT login pending)

#### 📄 Screens are hardcoded (no DB persistence yet)

#### 🔌 No integration with n8n workflows yet

#### 🐳 No Docker Compose setup yet (to be added)

#### 🧪 No test coverage or CI/CD workflow added

#### 💡 WebSocket / polling for UI updates is planned but not implemented


## 📅 Estimated Timeline

#### Total required: ~4–6 days more

#### You'll be able to login, view screens per tenant, create tickets, and process workflows end-to-end using n8n + webhooks
