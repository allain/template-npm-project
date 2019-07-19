export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        exports: "named"
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        exports: "named"
      }
    ]
  },
  {
    input: "src/bin.js",
    output: {
      file: "dist/bin.js",
      format: "cjs",
      exports: "named"
    }
  }
]
