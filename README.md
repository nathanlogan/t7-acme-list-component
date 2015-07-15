# List Component

Takes a JavaScript array of strings and outputs them as an unumbered list.

It will populate all selected lists (e.g. all containers with the class ".list").

## Package Permissions

Want to be able to modify this npm module?  You need to be a contributor.  You can see a list of current contributors with this command:

`npm owner ls <package name>`

Ask any one of them to add you with this command:

`npm owner add <user> <package name>`

More details here: https://docs.npmjs.com/cli/owner

## How to Update this Component

1. Make your changes.
2. `cd` to this component's directory.
3. Bump your version (according to "semver" rules of MAJOR.MINOR.PATCH, or API.BACKWARDS_COMPATIBLE.BUG_FIXES).  You can do that with this code:
`npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]`
4. Commit & Push your changes.
5. Run `npm publish .` (you will need to a be a contributor - see "Package Permissions" above if you aren't).
6. Celebrate.