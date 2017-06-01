const {FuseBox, SassPlugin, CSSPlugin, UglifyJSPlugin, TypeScriptHelpers,CSSResourcePlugin,JSONPlugin,WebIndexPlugin} = require("fuse-box");
const fuse = FuseBox.init(
    {
        homeDir: `src/`,
        output: `dist/$name.js`,
        log:true,
        cache:false,
        plugins: [
            WebIndexPlugin(),
            TypeScriptHelpers(),
        ]
    }
);


// setup development sever
fuse.dev(
    {
        port: 4444
    }
);
// bundle application
fuse.bundle('vendor')
    .instructions(' ~ index.ts')
    .hmr();

// bundle application
fuse.bundle('app')
    .sourceMaps(true)
    .instructions(' !> [index.ts]')
    .watch()
    .hmr();

// run the factory
fuse.run();