import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.store.push({
      data: [{
        id: 1,
        type: 'host',
        attributes: {
          name: 'Host 1'
        },
        relationships: {
          workspaces: {
            data: [
              { id: 1, type: "workspace" }
            ]
          }
        }
      }, {
        id: 2,
        type: 'host',
        attributes: {
          name: 'Host 2'
        }
      }],
      included: [
        { id: 1, type: "workspace", attributes: { name: "Workspace 1" } }
      ]
    })
  }

});
