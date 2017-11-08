echo instalar node-gyp de manera global
cd addon-src
node-gyp configure
node-gyp build
mkdir node_modules
cp build/Release/addon.node ../node_modules
