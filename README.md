# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

There were some minor differences in the Figma file that I decided not to make in my code. For example, there were different margins:
- between listings
- between the heart icon and the top/right edge of thumbnail
- between listing container and left side of window

Sometimes there differences were only 1-3px, sometimes 20px+. I decided to pick the amount that looked best for each situation and stay consistent. Normally I would ask the designer about these issues.

## Accessibility Issues

When running accessibility checks with axe dev tools, it does flag a "serious" issue with the lack of sufficient color contrast, but that's based on the design, so it would be another issue to bring up with the designer.

## Dependencies

- Added `jest-fetch-mock` to test the API fetching logic in PropertyListings

## Future Considerations

If given more time to work on this, I would probably focus on the following:
- expand testing; the current tests are mostly focused on the "happy path", so more testing around possible error conditions would help
- expand error handling; there's not much error handling in the code or the UI for errors from the API, or `localStorage`
- further separation of logic and presentation; I typically create "container" components that serve as wrappers with all the business logic so that the presentational components remain pure. The application is small enough now that it's not really necessary.
- CSS library - LESS/SaSS, etc. for better organization of the styles, assuming they grow in length and complexity
- CI config for tests and linting