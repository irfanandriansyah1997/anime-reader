# Anime App

# Dashboard Page.

I created the dashboard page, which includes a title, search bar, and a list of anime with a load more button on it. When you click on the anime poster, it will take you to the details page.

# Details Page

The detail page contains various facts about the anime. When you click on a link with a chevron icon, it takes you back to the Home page.


# Additional Features:

- Unit Test
  I wrote the unit test using jest and @testing-library, and then mocked the API response with fetch mock.
- Clean Code Architecture.
  I implemented the term to enable separate logic from the UI and to make it easier for developers to create the unit tests. 
- Service Worker
  I utilized the service worker to enable cache API response because the Jikan API has a limitation to access the API maximum of three fetch APIs per second.