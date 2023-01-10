# README for CHIGIFT Giftcard Website on Vercel

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Additional Features](#additional-features)
  - [Search Function](#search-function)
  - [Add to Cart](#add-to-cart)
- [Design and Development Approach](#design-and-development-approach)
  - [Mobile-first Design](#mobile-first-design)
  - [UI Framework](#ui-framework)
  - [Styling](#styling)
- [Tradeoffs](#tradeoffs)
  - [Optimizing Search Function](#optimizing-search-function)

## Getting Started

### Prerequisites
- Node.js and npm (or yarn)
- Vercel account and the [Vercel CLI](https://vercel.com/download)

### Installation
1. Clone the repository

(git clone git@github.com:Tajudeenazeez/chigiftcard.git)

2. Install dependencies

### npm install

## or

## yarn install

### Running the Project
1. Start a development server

### npm run start

## or

### yarn start


2. Open the project in your browser at `http://localhost:3000`

## Additional Features

### Customization 
Customization features have been implemented to provide a unique user experience, while ensuring that user can use the website without much difficulties

### Testing 
testing has been implemented to improve website performance and reduce avoidable bugs, this was done in a minimal requirement for the current project.

### Search Function
A search function has been implemented to allow users to quickly find the giftcard they are looking for. The search function searches through the giftcard titles and descriptions.

### Add to Cart
Users can add giftcards to their cart and proceed to checkout. The cart is implemented using React context and Hooks.

## Design and Development Approach

### Mobile-first Design
The website has been designed with a mobile-first approach. This means that the website has been optimized for smaller screens and touch-based interaction.

### UI Framework
The website has been built using [Material-UI](https://material-ui.com/), a popular React UI framework that implements Google's Material Design guidelines.


## React Router
React Router is a popular library for handling client-side routing in React applications, it provides several benefits such as:
- Handling client-side navigation without triggering a full page reload, this provide a better user experience in a single-page application (SPA) 
- Managing the browser history programmatically, this allow to implement features like "back" and "forward" navigation.
- Handling dynamic URLs and parameters, which can be useful to link directly to specific pages in your website , or handle user-generated  URLs.
- Help in creating a full SPA experience, with a fluid navigation between pages in your website.

## Installation



### Styling
In addition to Material-UI, the website has been styled using [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework. This allows for rapid styling of the website and consistent design throughout the project.

## Tradeoffs


### Simplicity

I could have written the website code to handle a large number of products and customers [Scalability] using a more complex architecture, however the time limit to submit the project considering my current engagement inferred writing a simplified working code for assesement purpose only.
 

### Performance
Security measures such as encryption and authentication have been ignored to just ensured that user can use the website for demo with much emphasize on website performance.

### Search 
The search function has been optimized for performance, but this comes at the cost of search accuracy [Performance].


### Personalization vs. Privacy
 Personalization features such as recommendation, browsing history have been implemented to give users a good experience, but they also have the potential to compromise the privacy of users.

### Optimizing Search Function
To improve the performance of the search function, a tradeoff had to be made in terms of the complexity of the search algorithm. A simple search algorithm was chosen for the sake of faster search times, but this means that the search function may not be as accurate as a more complex algorithm.

# Flipbook Performance Optimization

This guide explains how I would optimize the performance of a flipbook of this website. I would:

## Image Optimization

- Compress all images used in the flipbook to reduce their file size.
- Use the appropriate file format for the images:
  - JPEG for photographs
  - PNG for graphics with transparent backgrounds

## JavaScript Library

- Use a lightweight JavaScript library specifically designed for flipbooks, such as turn.js or flipper.js

## Lazy-Loading

- Lazy-load pages to reduce the amount of data loaded at the beginning and improve user interaction

## Animation

- Minimize the use of CSS and JavaScript animations to reduce the load on the website

## Content Delivery Network (CDN)
- Using a CDN can help distribute the content of your website to the user from a server that is geographically close to them. This can help to reduce the time it takes for the pages of the flipbook to load.

## Monitoring Performance 
- Monitor web performance regularly to detect and fix any bottlenecks.

Keep in mind that performance is a trade-off, balancing between good user experience and website performance.

**While all the above point is not neccessary implementated, I am well conversant with the approach and technicality**
