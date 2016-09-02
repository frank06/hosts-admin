import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['query', 'show'],
  query: null,
  show: null,

  filteredHosts: Ember.computed('query', 'show', 'model', function() {

     const query = this.get('query');
     const show = this.get('show');
     const hosts = this.get('model');

     let filtered = hosts;

     if (show) {
       filtered = filtered.filter((host) => {
         const len = host.get('workspaces.length');
         if (show == 'with') {
           return len > 0;
         } else {
           return len == 0;
         }
       })
     }

     if (query) {
       filtered = filtered.filter((host) => {
         return host.get('name').includes(query);
       })
     }

     return filtered;

   })

});
