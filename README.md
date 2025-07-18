# Flowbit Microfrontend Platform (In Progress)

## ✅ Current Progress (as of July 2025)

This project is a multi-tenant microfrontend-based platform built using React, Module Federation, and Docker, designed to demonstrate tenant-aware navigation, authentication, and n8n workflow integration.

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
