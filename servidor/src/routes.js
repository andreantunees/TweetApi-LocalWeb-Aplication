'use strict';

module.exports = function(app) {
  let controllers = require('./controllers');

  app.route('/most_relevants').get(controllers.mostRelevants);
  app.route('/most_mentions').get(controllers.mostMentions);
} 