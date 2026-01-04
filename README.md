# Psychologist App

React + Firebase psychologist booking app.

Psychologists Services is a modern web application that allows users to view psychologist profiles, add them to favourites, sort them, and request appointments with psychologists. The project was developed using React, Firebase Authentication, Firebase Realtime Database, and CSS Modules in accordance with the technical specifications provided.

Home Page: -Contains the company slogan, hero area, and ‘Get started’ CTA button. -Directs the user to the ‘Psychologists’ page. -Supports 3 different colour themes (Orange, Blue, Green).

Psychologists Page: -Psychologist data is dynamically retrieved from Firebase Realtime Database. -The following information is displayed on the cards: avatar_url, name, experience, rating, price_per_hour, specialisation, licence, initial_consultation, about -Sorting options (A–Z, Z–A, price, and popularity) are supported. -The first 3 cards are displayed; additional cards can be loaded with ‘Load more’. - ‘Read more’ → extra information and customer reviews open. - ‘Make an appointment’ → a modal containing a form opens.

Favourites Page: - All psychologists added to the user's favourites are displayed. - The card design is identical to the Psychologists page. - Favourites are persistent via localStorage.

Favourites Button Behaviour: -A warning is displayed if an unauthorised user clicks. -Logged-in users can add/remove favourites. -Favourite status is preserved even if the page is refreshed.

Firebase Authentication: -Email + Password: Register Login Current user state Logout -Field validation is performed using React-hook-form + yup.

Appointment Form: -Contains a React-hook-form + yup validated form. -Fields: name, email, phone, comment. -Opens as a modal and closes upon success.

Technologies: -React (Vite) -React Router -CSS Modules -Firebase Authentication -Firebase Realtime Database -React Hook Form -Yup -LocalStorage -Modern responsive CSS

Translated with DeepL.com (free version)

## Features

- Authentication
- Sorting
- Favorites
- Appointments
- Responsive design

## Tech

- React
- Firebase
- React Router
- React Hook Form
- Yup

## Deploy

Vercel

# Developer
Özgen Güler -  https://www.linkedin.com/in/%C3%B6zgen-g%C3%BCler/
