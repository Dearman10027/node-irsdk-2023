# node-irsdk-2024

Unofficial [iRacing](http://www.iracing.com/) SDK implementation for NodeJS - now with TypeScript support!

## ABOUT

This repo is a fork of [node-irsdk-2023](https://github.com/hmiefert/node-irsdk-2023) to add TypeScript support.

## prerequesites
For compiling this package you need `node-gyp@^9.0.0`.
```
npm install -g node-gyp
```
You also need a current version of `Python3` and `Microsoft Visual Studio Build Tools` installed.
More information regarding the topic can be found [here](https://nodejs.org/dist/latest-v18.x/docs/api/n-api.html#building).
I haven't tried this myself (as I already had msbuild installed), but according to the documentation, you could easily run:
```
npm install -g windows-build-tools
```


## installing
```
npm install --save https://github.com/gus-sim-shack/node-irsdk-2023
```

## starter projects
- [NodeJS starter project](https://github.com/hmiefert/irtelemetry)
- [ElectronJS starter project](https://github.com/hmiefert/electron-irtelemetry)

## using with electron
When using this package with electron, you might run into an error stating that the installed package was compiled against a different version of NodeJS, therefore the NODE_MODULE versions differ and you're expected to recompile the package.
To achieve this you need a package called electron-rebuild and run the rebuild command manually:
```
npm install --save-dev electron-rebuild
.\node_modules\.bin\electron-rebuild.cmd
```

## further information
* [forum thread](https://forums.iracing.com/discussion/34241/does-node-irsdk-still-work)
* [original documentation](https://apihlaja.github.io/node-irsdk)
* [original forum thread](http://members.iracing.com/jforum/posts/list/3329583.page)

Other iRSDK implementations
* [Official C/C++ SDK](https://forums.iracing.com/discussion/62/iracing-sdk)
* [iRacingSdkWrapper (C#)](https://github.com/NickThissen/iRacingSdkWrapper)
* [pyirsdk (python3)](https://github.com/kutu/pyirsdk/)
* [iRacingSDK.Net](https://github.com/vipoo/iRacingSDK.Net)
