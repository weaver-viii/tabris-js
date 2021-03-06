import Widget from '../Widget';

export default Widget.extend({
  _name: 'ToggleButton',
  _type: 'tabris.ToggleButton',
  _events: {
    select: {
      alias: 'change:selection',
      trigger(event) {
        this._triggerChangeEvent('selection', event.selection);
        this.trigger('select', this, event.selection, {});
      }
    }
  },
  _properties: {
    text: {type: 'string', default: ''},
    image: {type: 'image', default: null},
    selection: {type: 'boolean', nocache: true},
    alignment: {type: ['choice', ['left', 'right', 'center']], default: 'center'}
  }
});
