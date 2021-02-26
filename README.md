Fully working example with Material-UI Theme, React-Router, Redux with Redux-Persist.

A boolean value is stored as isLogged in state and is used to display either log in or out button in the top nav bar.  The state is stored in the localStorage of the current browser.  It will be rehydrate the state in localStorage to update the redux state whenever the browser is refreshed.  A PersistGate is also used that keeps the UI from updating until the entire state has been rehydrated and saved to the redux state to prevent multiple re-renders.
