# dependency-checker

Adds a simple dependency check based on defaults for a bower_components and node_modules. Relies on 
[ember-cli-dependency-checker](https://github.com/quaertym/ember-cli-dependency-checker) and can be used
as a library or executable. 

## Using as a library

```
require('dependency-checker').check();
```

## Using as an executable

```
./node_modules/dependency-checker/.bin/dependency-check
```
