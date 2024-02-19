const { createTemplate, render } = require('../ui-library/index');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  let state = 0;

  const { update } = render(container, () => createTemplate(state, update));


  function updateState(newState) {
    state = newState;
    console.log('State changed:', state);
  }
});
