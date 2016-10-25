import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{
      name: 'Sparkachu',
      level: 3
    }, {
      name: 'Charember',
      level: 29
    }, {
      name: 'Rhauk',
      level: 5
    }, {
      name: 'Poddle',
      level: 9
    }]
  }
});
