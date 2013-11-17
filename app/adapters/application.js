/*
var FixtureAdapter = DS.FixtureAdapter.extend();
export default FixtureAdapter;
*/

/*
var ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'browl'
});

export default ApplicationAdapter;
*/
var ApplicationAdapter = DS.DjangoRESTAdapter.extend({
  host: 'http://localhost:7000'
});

export default ApplicationAdapter;
