# FitLog

FitLog is a modern workout library and daily workout planning application built with **Next.js**. Users can browse workouts, view workout details, add workouts to today's plan, save workouts for later, and manage their daily workout routine.

## 🚀 Live Project

**Live Demo:** https://fit-log-workout.vercel.app/
## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* Context API
* LocalStorage

## ✨ Key Features

### 🏋️ Workout Library

* Browse available workouts
* View workout category and equipment
* See duration, calories, and rating
* Responsive workout cards
* Click any workout to view details

### 📋 Workout Details

Each workout has a dedicated details page containing:

* Workout name
* Description
* Category
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories burned
* Rating
* Workout instructions

### 📝 Today's Plan

Users can create their daily workout plan.

* Add workouts to today's plan
* Maximum 5 workouts can be added
* View planned workouts
* Mark workouts as done
* Remove workouts
* View workout details

### ❤️ Saved Workouts

Users can save workouts for later.

* Save favorite workouts
* View saved workouts
* Remove saved workouts
* Manage saved workouts from My Plan

### 🔄 Sorting

Workouts can be sorted by:

* Duration
* Calories
* Rating

### 🔔 Toast Notifications

Toast notifications provide feedback when users:

* Add a workout
* Save a workout
* Remove a workout
* Mark a workout as done
* Try to add more than 5 workouts

### 💾 LocalStorage Persistence

Workout plans and saved workouts are stored in **LocalStorage**, so the data remains available even after refreshing the browser.

### 📱 Responsive Design

FitLog is responsive and works across:

* Mobile
* Tablet
* Desktop

### ⚡ Additional Features

* Loading state while data is being fetched
* Custom 404 page
* Responsive navigation
* REST API integration
* Context API state management

## 🔗 API

### All Workouts

`https://api.abcz.workers.dev/api/fitlog`

### Workout Details

`https://api.abcz.workers.dev/api/fitlog/:id`

## 📂 Project Structure

The project uses the **Next.js App Router** with reusable React components.

Context API is used to manage workout plans and saved workouts.

The application fetches workout information from a REST API and stores user selections in LocalStorage.

## 🎯 Project Purpose

This project was built as part of the **Programming Hero FitLog Assignment**.

The main goal was to build a responsive workout library and workout planning application using modern web development technologies.

## 👨‍💻 Developer

**Hridoy Ahmed**

Aspiring Web Developer
CST Student — Bogura Polytechnic Institute

---

### 📌 Assignment Highlights

* Responsive UI
* Workout library
* Workout details page
* Today's workout plan
* Saved workouts
* Sorting
* Mark as Done
* Remove workout
* LocalStorage persistence
* Loading state
* Custom 404 page
* Toast notifications
* Maximum 5 workouts in today's plan
