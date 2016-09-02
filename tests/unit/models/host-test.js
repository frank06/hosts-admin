import { moduleForModel, test } from 'ember-qunit';

moduleForModel('host', 'Unit | Model | host', {
  // Specify the other units that are required for this test.
  needs: ['model:workspace']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
