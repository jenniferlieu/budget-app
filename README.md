# 💸 Envylope Budgeting
## Overview
Envylope Budgeting is a personal budgeting app built around the **envelope budgeting method—a system where every dollar is given a specific job**. Instead of just tracking expenses, Envylope helps users **intentionally allocate funds into digital “envelopes” that represent spending categories** (e.g., Rent, Groceries, Fun).

By **focusing on proactive budgeting** rather than reactive tracking, Envylope **empowers users to make confident, informed financial decisions**—no more wondering where the money went.

This app is designed as a **full-stack web app** with a **React frontend**, **Node.js backend**, **PostgreSQL database**.

## Setup and Run

## Development Plan
This project is being developed as part of the Chingu Solo Project Submission, with the goal of showcasing full-stack skills.

**Timeline:** April 13, 2025 – April 27, 2025

**Project Board:** [Miro](https://miro.com/app/board/uXjVIBFzsXQ=/?share_link_id=462500071440)

**Tech Stack:** 
- Frontend: React
- Backend: Node.js, Express, Prisma
- Database: PostgreSQL
- Deployment: Vercel (frontend), Render (backend + database)

## Requirements
Chingu requirements for tier 3 web developer:

* Must include distinct files which separate the FE and BE application logic in a way the follows the Separation of Responsibility Principle (SRP).
* If the app accesses a database it must be accessed only from the BE logic. Applications that access databases from FE logic will not be accepted.
* The BE logic must implement an app-specific API that is only implemented in the BE. The FE must access the BE API to deliver services to the end user.
* Applications that use technology like Firebase only for authentication are not acceptable. Apps which couple this form of authentication with application specific API are acceptable.
* The FE logic must include logic developed by the Chingu that operates on the data to transform it, change it, or present it to the end user
* It must implement a front-end application that accesses a back-end server that implements an API of your own design, optionally using a database such as a NoSQL DBMS like MongoDB or a SQL DBMS like PostgreSQL.
* Your backend must include CRUD (if using a database) or POST/READ/UPDATE/DELETE (for APIs).

## Epics + User Stories
- [ ] Account Management
  - [ ] As a user, I want to create multiple accounts (e.g., checking, savings) so I can track their individual balances and see a total balance across all accounts.
- [ ] Envelope Management
  - [ ] As a user, I want to create envelopes with monthly goals so I can plan my spending.
  - [ ] As a user, I want to automatically fund my envelopes every time I have income so I can give every dollar a purpose.
  - [ ] As a user, I want to manually adjust envelope balances so I can better manage my money.
  - [ ] As a user, I want to view a list of my envelopes with current balances so I can monitor how my money is allocated and make informed spending decisions.
- [ ] Transactions
  - [ ] As a user, I want to create transactions with type (income or expense), amount, date, description, and associations to accounts and/or envelopes so I can track my finances accurately.
  - [ ] As a user, I want to view a list of my transactions by month so I can better manage my transactions.