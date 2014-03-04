var settings = require('../settings');

casper.test.begin('The recmobile-cycle header', function(test) {
  test.comment('-- using domain: ' + settings.recmobileCycleDomain);

  casper.start(settings.recmobileCycleDomain, function() {
    test.assertExists('#mobHdr .logo', 'The logo exists');
    test.assertExists('#mobHdr .navicon', 'The settings cog exists');
  });

  casper.run(function() {
    test.done();
  });
});
