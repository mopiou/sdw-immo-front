(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/footer.tpl.html",
    "<div class=\"pure-g\">\n" +
    "  <div class=\"pure-u-1 text-center\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/header.tpl.html",
    "<div class=\"pure-menu pure-menu-open pure-menu-horizontal\">\n" +
    "  <ul>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.home\">{{ 'home' | uppercase }}</a>\n" +
    "    </li>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a>Acheter</a>\n" +
    "    </li>														\n" +
    "    													<!-- Gérer achat / location directement ici -->\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a>Louer</a>\n" +
    "    </li>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.loginCrtl\">{{ 'login' | uppercase }}</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/getting-started/getting-started.tpl.html",
    "<div class=\"pure-g island3\">\n" +
    "  <div class=\"content pure-u-1\">\n" +
    "    <p class=\"island-panel\">\n" +
    "      <strong>Note that this is only a getting started guide, for more detailed information about the build system, the available tasks, the configuration of the build or anything else, please refer to the <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\">documentation</a> on the GitHub project.</strong>\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>What and Why</h3>\n" +
    "    <p>\n" +
    "      <code>angular-kickstart</code> is an opinionated kickstart for single page application development with AngularJS. It makes your development and testing easy, keeps the structure of the project consistent and allows you to create a fully optimized\n" +
    "      production release withe ease. After having developed a lot of AngularJS projects I decided to collect here what I've learnt.\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>Getting started</h3>\n" +
    "    <p>\n" +
    "      Install\n" +
    "      <strong><a href=\"https://github.com/joyent/node/wiki/installation\" target=\"_blank\">node.js</a></strong>. Then\n" +
    "      <strong>sass, gulp and bower</strong> if you haven't yet.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gem install sass\n" +
    "    $ npm -g install gulp bower\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      After that, install\n" +
    "      <code>angular-kickstart</code> - download the <a href=\"https://github.com/vesparny/angular-kickstart/releases/latest\">latest</a> release (or clone the master branch if want to run the development version). Unzip the project and cd into it, then\n" +
    "      install bower and npm dependencies, and run the application in development mode.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ npm install\n" +
    "    $ bower install\n" +
    "    $ gulp serve\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      You are now ready to go, your applcation is available at <code>http://127.0.0.1:3000</code>.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      You are now ready to start coding, every file you add, edit or delete into the\n" +
    "      <code>/client</code> folder, will be handled by the build system and the browser will reload.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      When you are ready to build a production release there is a task for that.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gulp serve:dist\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project in the\n" +
    "      <code>/build/dist</code> folder.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Other tasks are available:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    #for developing running unit test on every file change.\n" +
    "    $ gulp serve:tdd\n" +
    "\n" +
    "    #for running e2e test. (you application should be running on http://127.0.0.1:3000)\n" +
    "    $ gulp test:e2e\n" +
    "\n" +
    "    #for running unit tests one time then exit.\n" +
    "    $ gulp test:unit\n" +
    "    </code>\n" +
    "</pre>\n" +
    "    <p class=\"text-center\">\n" +
    "      <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\" class=\"pure-button button-xlarge pure-button-primary\">\n" +
    "        Full documentation on GitHub\n" +
    "      </a>\n" +
    "    </p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/home/home.tpl.html",
    "<div class=\"pure-g\">\n" +
    "\n" +
    "<div ng-app=\"app\">\n" +
    "  <div ng-controller=\"CarouselDemoCtrl\" id=\"slides_control\">\n" +
    "    <div>\n" +
    "      <carousel interval=\"myInterval\">\n" +
    "        <slide ng-repeat=\"slide in slides\" active=\"slide.active\">\n" +
    "          <img ng-src=\"{{slide.image}}\">\n" +
    "          <div class=\"carousel-caption\">\n" +
    "            <h4>Slide {{$index+1}}</h4>\n" +
    "          </div>\n" +
    "        </slide>\n" +
    "      </carousel>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>  \n" +
    "<script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.min.js\"></script> \n" +
    "  \n" +
    "<div class=\"pure-g island\">\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Sass + SMACSS</h4>\n" +
    "    <p><a href=\"http://sass-lang.com/\" target=\"_blank\">Sass</a> is the most mature, stable, and powerful professional grade CSS extension language. The project is structured following the <a href=\"http://smacss.com/\" target=\"_blank\">SMACSS</a> architecture.\n" +
    "      Write your CSS in a modular and scalable way, the build system will compile your <code>.scss</code> files into a single css files. It should be easy to integrate less, stylus or any other preprocessor if you prefer. <a href=\"http://purecss.io/\" target=\"_blank\">Pure</a> is the default CSS framework, by you can easily plug your own.</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Modular Structure</h4>\n" +
    "    <p>angular-kickstart comes with a\n" +
    "      <code>by-feature</code> files organization, keeping your code organized, especially if you are working on a large code-base. If you don't like it, just use your preferred structure, and the build system will still work. The code is written following <a href=\"https://github.com/toddmotto/angularjs-styleguide\" target=\"_blank\">best practices</a> that make you able to write consistent code. <a href ui-sref=\"root.getting-started\">Read more...</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Keep Your Code Reusable</h4>\n" +
    "    <p>Every general purpose directive, service or filter, should be placed into the  <code>common</code> directory, in this way you can copy and paste the directory into another project, require the module you need, and you are ready to go with your new project.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"pure-g\">\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Unit testing</h4>\n" +
    "    <p>The build system comes with a special task for running tests by using <a href=\"http://karma-runner.github.io/\" target=\"_blank\">Karma Test Runner</a>.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>e2e testing</h4>\n" +
    "    <p>end-to-end testing support is provided by the build system. Tests can be executed using <a href=\"http://angular.github.io/protractor/\" target=\"_blank\">protractor</a>.</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <h4>Build for production with ease</h4>\n" +
    "    <p>Easily optimize css js and images files for production.</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/login/login.tpl.html",
    "<div ng-controller=\"ExampleController\">\n" +
    "  <form novalidate class=\"simple-form\">\n" +
    "    Mail : <input type=\"text\" ng-model=\"user.name\" /><br />\n" +
    "    Mot de passe : <input type=\"email\" ng-model=\"user.email\" /><br />\n" +
    "    <input type=\"submit\" ng-click=\"update(user)\" value=\"Save\" />\n" +
    "  </form>\n" +
    "</div>");
}]);
})();
