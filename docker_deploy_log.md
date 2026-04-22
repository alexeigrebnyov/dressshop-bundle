Step 19/33 : RUN pnpm build
---> Running in 231075a02aab

> @ build /app
> next build

node:internal/modules/cjs/loader:1210
throw err;
^

Error: Cannot find module '/app/node_modules/next/dist/bin/next'
at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
at Module._load (node:internal/modules/cjs/loader:1038:27)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
at node:internal/main/run_main_module:28:49 {
code: 'MODULE_NOT_FOUND',
requireStack: []
}

Node.js v20.20.2
?ELIFECYCLE? Command failed with exit code 1.
Error response from daemon: The command '/bin/sh -c pnpm build' returned a non-zero code: 1
Failed to deploy '<unknown> Dockerfile: Dockerfile': Can't retrieve image ID from build stream
