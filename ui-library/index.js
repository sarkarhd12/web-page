const snabbdom = require('snabbdom');
const { h } = snabbdom;

function createTemplate(state, updateState) {
  return h('div', [
    h('h1', state),
    h('button', { on: { click: () => updateState(state + 1) } }, 'Add')
  ]);
}

function render(container, templateFn) {
  let vnode = null;

  function update(newState) {
    vnode = patch(vnode, templateFn(newState));
  }

  function mount() {
    vnode = patch(container, templateFn());
    console.log('Component mounted');
  }

  const patch = snabbdom.init([]);
  mount();

  return { update };
}

module.exports = { createTemplate, render };
